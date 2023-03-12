import "./question.scss"
import { useCallback, useContext, useState } from "react"
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Comments from "../../../richeditorcomments/comments/comment/Comments"
import DeleteQuestion from "../deletequestion/DeleteQuestion";
import { AuthContext } from "../../../../../context/authContext";
import RateQuestion from "../ratequestion/RateQuestion";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CustomToolbar } from "../../../minicomponents/toolbar/CustomToolbar";

function Question({ question }) {
  const { currentUser } = useContext(AuthContext)
  const [commentOpen, setCommentOpen] = useState()
  const handleClick = (id) => {
    if (commentOpen == id) setCommentOpen("")
    else setCommentOpen(id)
  }

  return (
    <div className="rich-editor-question">
      <div className="container">


        <div className="content">


          <div className="text">
            <CustomToolbar
              user_name={question.user_name ? question.user_name : "unknown"}
              solved={question.comment_id ? <TaskAltIcon sx={{ color: "green", width: "15px" }} /> : ""}
              date={question.createdAt}
            />
            <ReactQuill
              theme="snow"
              readOnly={true}
              modules={Question.modules}
              value={question?.text && question?.text} >
            </ReactQuill>
          </div>


          <hr />

          <div className="info">
            <div className="items">
              <RateQuestion question={question} />
              <div className="item" onClick={() => handleClick(question._id)}>
                <TextsmsOutlinedIcon className="icons" />
                {question.comments_count}
              </div>
            </div>
            {(currentUser?.role && currentUser.role == "admin") || (currentUser?.id && currentUser?.id == question.user_id)
              ?
              <DeleteQuestion id={question._id} />
              :
              ""
            }
          </div>
          {commentOpen === question._id ? <Comments setCommentOpen={setCommentOpen} question={question} /> : ""}
        </div>
      </div>
    </div>
  )
}

export default Question

Question.modules = {
  toolbar: {
    container: '#toolbar'
  },
};