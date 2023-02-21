import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import Time from "../microcomponents/time/Time";
import { getComments } from "../../api/commentsApi"
import CodeBlock from "../microcomponents/codeblock/CodeBlock";
import Loader from "../microcomponents/loader/Loader";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddComment from "./addcomment/AddComment";
import DeleteComment from "./deletecomment/DeleteComment";

function Comments({ question }) {

  const { currentUser } = useContext(AuthContext);
  const [liked, setLiked] = useState()
  const comments = useQuery({
    queryKey: ["comments", question._id],
    queryFn: () => getComments(question._id)
  })

  if (comments.isLoading || comments.isFetching) return <div className="loading"><Loader /></div>

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
            <p>{comment.comment}</p>
            {comment.userCode
              ?
              <CodeBlock>
                {comment.userCode}
              </CodeBlock>
              :
              ""
            }
            <div className="items">
              <div className="item">

                {liked ? <ThumbUpIcon className="icons" /> : <ThumbUpOutlinedIcon className="icons" />}

                <label>{comment.like?.length}</label>
              </div>
              <div className="item">

                {currentUser?.role && currentUser.role == "admin"
                  ?
                  <div className="item delete-question-btn">
                    <DeleteComment commentId={comment._id} questionId={question._id} />
                  </div>
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


// {"json":["5f7b9f7fc247f446d8bce4fb","5f7d01771bf93842c8453740","5f7c93a5bc986c1dc4cdd669","5fe85eb02ef02c0017888725","5fb6f987baf53032d0eebdc4","5fb5b675be22af3a589989b1"]}

//{"json":{"_id":"5fe398f59a8a890017a78de6","comment":"yessssssssss","user_name":"bobo5","user_id":"5fe3972a9a8a890017a78de3","question_id":"5fe2591a79a6bd001738ce87","createdAt":"2020-12-23T19:22:29.896Z","updatedAt":"2021-01-03T20:19:30.842Z","__v":56,"like":["5f7b9f7fc247f446d8bce4fb","5f7d01771bf93842c8453740","5f7c93a5bc986c1dc4cdd669","5fe85eb02ef02c0017888725","5fb6f987baf53032d0eebdc4","5fb5b675be22af3a589989b1"]}}