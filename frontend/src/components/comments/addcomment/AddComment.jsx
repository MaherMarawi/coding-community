import "./addComment.scss"
import { addComment } from "../../../api/commentsApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useContext, useState } from "react"
import { AuthContext } from "../../../context/authContext";
import Loader from "../../microcomponents/loader/Loader";

const AddComment = ({ question }) => {

    const queryClient = useQueryClient()

    const { currentUser } = useContext(AuthContext)
    
    // some code
    const [newComment, setNewComment] = useState("")
    const addCommentMutation = useMutation({
        mutationFn: (comment) => addComment(comment.question_id, comment),
        onSuccess: data => {
            queryClient.setQueryData(["comments", question._id], old => [data, ...old])
            setNewComment("")
        }
    })
    const handleChange = (e) => {
        setNewComment({ ...newComment, [e.target.name]: e.target.value })
    }
    const handleClick = (question) => {
        const domiComment = newComment
        if (currentUser) domiComment.user_name = currentUser._id
        domiComment.question_id = question._id
        setNewComment(domiComment)
        addCommentMutation.mutate(newComment)
    }
    return (
        <div className="write">
            <div className="comment-button">
                <input type="text" value={newComment?.comment} onChange={handleChange} name="comment" placeholder="Write a comment" />
                <button disabled={addCommentMutation.isLoading} onClick={() => handleClick(question)}>{addCommentMutation.isLoading ? <Loader /> : "Add"}</button>
            </div>
            <textarea value={newComment?.userCode} type="textarea" onChange={handleChange} name="userCode" placeholder="Code" />
        </div>
    )
}

export default AddComment