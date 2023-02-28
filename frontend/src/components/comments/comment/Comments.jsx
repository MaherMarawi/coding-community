import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import Time from "../../microcomponents/time/Time";
import { getComments } from "../../../api/commentsApi"
import CodeBlock from "../../microcomponents/codeblock/CodeBlock";
import Loader from "../../microcomponents/loader/Loader";
import AddComment from "../addcomment/AddComment";
import DeleteComment from "../deletecomment/DeleteComment";
import RateComment from "../ratecomment/RateComment";
import SolveComment from "../solvecomment/SolveComment";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function Comments({ question, setCommentOpen }) {

  const { currentUser } = useContext(AuthContext);

  const comments = useQuery({
    queryKey: ["comments", question._id],
    
    queryFn: () => getComments(question._id)
  })

  if (comments.isLoading) return <div className="loading"><Loader /></div>

  return (
    <div className="comments">
      <AddComment question={question} />
      {comments && comments.data?.map((comment) => (
        <div className="comment" key={comment._id}>
          <div className="info">
            <span>{comment.user_name ? comment.user_name : "unknown"}</span>
            <label><Time time={comment.createdAt} /></label>
          </div>
          <div className="content">
            <p>{comment.comment} {question.comment_id ? <TaskAltIcon sx={{ color: "green", width: "15px" }} /> : ""}</p>
            {comment?.userCode && <CodeBlock>{comment.userCode}</CodeBlock>}
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
  );
}

export default Comments