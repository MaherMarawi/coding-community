import "./post.scss"
import { useContext, useState } from "react"
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Comments from "../comments/Comments"
import CodeBlock from "../microcomponents/codeblock/CodeBlock";
import Time from "../microcomponents/time/Time"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteQuestion from "./DeleteQuestion";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlinedOutlinedIcon from '@mui/icons-material/StarOutlined';
import moment from 'moment';
import { AuthContext } from "../../context/authContext";
function Post({ post }) {
  const { currentUser } = useContext(AuthContext)
  const [commentOpen, setCommentOpen] = useState()
  const [liked, setLiked] = useState()
  const handleClick = (id) => {
    if (commentOpen == id) setCommentOpen("")
    else setCommentOpen(id)
  }
  return (
    <div className="post">
      <div className="container">
        <div className="title">
          <span>{post.user_name ? post.user_name : "unknown"}</span>
          <label>
            <Time time={post.createdAt} />
          </label>
        </div>
        <span>{post.title}</span>
        <div className="question">
          <div className="content">
            <p>{post.description}</p>
            {post.userCode
              ?
              <CodeBlock >
                {post.userCode}
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
                {post.rate?.length}
              </div>
              <div className="item" onClick={() => handleClick(post._id)}>
                <TextsmsOutlinedIcon className="icons" />
                {post.comments_count}
              </div>
            </div>
            {currentUser?.role && currentUser.role == "admin" 
            ? 
            <div className="item delete-question-btn">
              <DeleteQuestion id={post._id} />
            </div>
            : 
            ""  
            }
            
          </div>
          {commentOpen == post._id ? <Comments question={post} /> : ""}
        </div>
      </div>
    </div>
  )
}

export default Post