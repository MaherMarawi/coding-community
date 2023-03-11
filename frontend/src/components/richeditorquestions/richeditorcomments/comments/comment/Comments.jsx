import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../../../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import Time from "../../../../microcomponents/time/Time";
import { getComments } from "../../../../../api/richEditorCommentsApi"
import Loader from "../../../../microcomponents/loader/Loader";
import AddComment from "../addcomment/AddComment";
import DeleteComment from "../deletecomment/DeleteComment";
import RateComment from "../ratecomment/RateComment";
import SolveComment from "../solvecomment/SolveComment";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { modules } from "../../../../microcomponents/texteditor/modules";
import ReactQuill from 'react-quill';
import AddQuestion from "../../../richeditorquestions/question/addquestion/AddQuestion";
import { CustomToolbar } from "../../../minicomponents/toolbar/CustomToolbar";

function Comments({ question, setCommentOpen }) {

  const { currentUser } = useContext(AuthContext);

  const comments = useQuery({
    queryKey: ["comments", question._id],

    queryFn: () => getComments(question._id)
  })

  if (comments.isLoading) return <div className="loading"><Loader /></div>

  return (
    <>
      <AddComment question={question} />
      <div className="rich-comments">
        {comments && comments.data?.map((comment) => (
          <div className="comment" key={comment._id}>


            <div className="info">
              {/* <span>{comment.user_name ? comment.user_name : "unknown"}</span> */}
              {/* <label><Time time={comment.createdAt} /></label> */}
            </div>


            <div className="content">
              <p> {(question.comment_id && question.comment_id == comment._id) ? <TaskAltIcon sx={{ color: "green", width: "15px" }} /> : ""}</p>
              <CustomToolbar
                user_name={comment.user_name ? comment.user_name : "unknown"}
                solved={question.comment_id ? <TaskAltIcon sx={{ color: "green", width: "15px" }} /> : ""}
                date={comment.createdAt}
              />
              <ReactQuill
                theme="snow"
                readOnly={true}
                modules={Comments.modules}
                value={comment?.text && comment?.text} >
              </ReactQuill>


              <div className="items">
                <div className="item">


                  <RateComment comment={comment} />
                  <SolveComment setCommentOpen={setCommentOpen} question={question} id={comment._id} />
                </div>
                <div className="item">
                  {(currentUser?.role && currentUser.role == "admin") || (currentUser?.id && currentUser?.id == comment.user_id)
                    ?
                    <DeleteComment commentId={comment._id} questionId={question._id} />
                    :
                    ""
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Comments


Comments.modules = {
  toolbar: {
    container: '#toolbar'
  },
};