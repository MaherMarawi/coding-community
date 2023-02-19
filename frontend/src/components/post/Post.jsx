import "./post.scss"
import { useState } from "react"
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Comments from "../comments/Comments"
import CodeBlock from "../microcomponents/codeblock/CodeBlock";
import Time from "../microcomponents/time/Time"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteQuestion from "./DeleteQuestion";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlinedOutlinedIcon from '@mui/icons-material/StarOutlined';

function Post({ post }) {
  const [commentOpen, setCommentOpen] = useState()
  const [liked, setLiked] = useState()
  const handleClick = (id) => {
    if(commentOpen == id) setCommentOpen("")
    else setCommentOpen(id)
  }
  return (
    <div className="post">
      <div className="container">
        <span>{post.user_name ? post.user_name : "unknown"}</span>
        <div className="question">
        <div className="title">
          <span>{post.title}</span>
          <label><Time>{post.createdAt}</Time></label>
        </div>
        <div className="content">
          <p>{post.description}</p>
          {post.userCode 
          ?
          <CodeBlock>
            {post.userCode}
          </CodeBlock>
          :
          ""
          }
        </div>
        <hr />
        <div className="info">
          <div className="item">
            {liked ? <StarOutlinedIcon className="icons" /> : <StarOutlinedOutlinedIcon className="icons" />}
            {post.rate?.length}
          </div>
          <div className="item" onClick={() => handleClick(post._id)}>
            <TextsmsOutlinedIcon className="icons" />
            {post.comments_count}
          </div>
          <div className="item">
            <DeleteQuestion id={post._id} />
          </div>
        </div>
        {commentOpen == post._id ? <Comments question={post} /> : ""}
        </div>
      </div>
    </div>
  )
}

export default Post