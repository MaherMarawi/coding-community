import "./addComment.scss"
import { addComment } from "../../../api/commentsApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useContext, useState, useEffect, useRef } from "react"
import { AuthContext } from "../../../context/authContext";
import Loader from "../../microcomponents/loader/Loader";

const AddComment = ({ question }) => {

    const queryClient = useQueryClient()
    const { currentUser } = useContext(AuthContext)
    const commentRef = useRef()
    const userCodeRef = useRef()

    const addCommentMutation = useMutation({
        mutationFn: (comment) => addComment(comment.question_id, comment),
        onSuccess: data => {
            queryClient.setQueryData(["comments", question._id], old => [data, ...old])
            question.comments_count = question.comments_count + 1;
            commentRef.current.value = ""
            userCodeRef.current.value = ""
        }
    })
    const handleClick = () => {
        let domiComment = {}
        if (currentUser) domiComment = {...domiComment, user_name : currentUser.username, user_id : currentUser.id } 
        domiComment = {...domiComment, question_id : question._id, comment : commentRef.current.value, userCode : userCodeRef.current.value }
        if(domiComment.comment !== "") addCommentMutation.mutate(domiComment)
        else alert("please write a comment")
    }
    return (
        <div className="write">
            <div className="comment-button">
                <input type="text" ref={commentRef} placeholder="Write a comment" />
                <button disabled={addCommentMutation.isLoading} onClick={() => handleClick(question)}>{addCommentMutation.isLoading ? <Loader /> : "POST"}</button>
            </div>
            <textarea ref={userCodeRef} type="textarea" placeholder="Code" />
        </div>
    )
}

export default AddComment