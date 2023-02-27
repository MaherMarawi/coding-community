import "./question.scss"
import { useContext, useState } from "react"
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Comments from "../../comments/comment/Comments"
import CodeBlock from "../../microcomponents/codeblock/CodeBlock";
import Time from "../../microcomponents/time/Time"
import DeleteQuestion from "../deletequestion/DeleteQuestion";
import { AuthContext } from "../../../context/authContext";
import RateQuestion from "../ratequestion/RateQuestion";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function Question({ question }) {
  const { currentUser } = useContext(AuthContext)
  const [commentOpen, setCommentOpen] = useState()
  const handleClick = (id) => {
    if (commentOpen == id) setCommentOpen("")
    else setCommentOpen(id)
  }
  return (
    <div className="question">
      <div className="container">
        <div className="title">
          <span>{question.user_name ? question.user_name : "unknown"}</span>
          <label>
            <Time time={question.createdAt} />
          </label>
        </div>
        <span>{question.title}{question.comment_id ? <TaskAltIcon sx={{ color: "green", width: "15px" }} /> : ""}</span>
        <div className="question">
          <div className="content">
            <p>{question.description}</p>
            {question?.userCode && <CodeBlock >{question.userCode}</CodeBlock>}
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
          {commentOpen === question._id ? <Comments question={question} /> : ""}
        </div>
      </div>
    </div>
  )
}

export default Question