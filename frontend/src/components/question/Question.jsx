import "./question.scss"
import { useContext, useState } from "react"
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Comments from "../comments/Comments"
import CodeBlock from "../microcomponents/codeblock/CodeBlock";
import Time from "../microcomponents/time/Time"
import DeleteQuestion from "./deletequestion/DeleteQuestion";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlinedOutlinedIcon from '@mui/icons-material/StarOutlined';
import { AuthContext } from "../../context/authContext";

function Question({ question }) {
  const { currentUser } = useContext(AuthContext)
  const [commentOpen, setCommentOpen] = useState()
  const [liked, setLiked] = useState()
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
        <span>{question.title}</span>
        <div className="question">
          <div className="content">
            <p>{question.description}</p>
            {question.userCode
              ?
              <CodeBlock >
                {question.userCode}
              </CodeBlock>
              :
              ""
            }
          </div>
          <hr />
          <div className="info">
            <div className="items">
              <div className="item">
                {liked ? <StarOutlinedIcon className="icons" /> : <StarOutlinedOutlinedIcon className="icons" />}
                {question.rate?.length}
              </div>
              <div className="item" onClick={() => handleClick(question._id)}>
                <TextsmsOutlinedIcon className="icons" />
                {question.comments_count}
              </div>
            </div>
            {currentUser?.role && currentUser.role == "admin" 
            ? 
            <div className="item delete-question-btn">
              <DeleteQuestion id={question._id} />
            </div>
            : 
            ""  
            }
            
          </div>
          {commentOpen == question._id ? <Comments question={question} /> : ""}
        </div>
      </div>
    </div>
  )
}

export default Question