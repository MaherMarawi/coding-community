import "./addComment.scss"
import { addComment } from "../../../../../api/richEditorCommentsApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useContext, useState, useEffect, useRef } from "react"
import { AuthContext } from "../../../../../context/authContext";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CustomToolbarAdd } from "../../../minicomponents/toolbaraddquestions/CustomToolbarAdd";
import { CustomToolbar } from "../../../minicomponents/toolbar/CustomToolbar";
import { modules } from "../../../minicomponents/toolbaraddquestions/modules";
import Loader from "../../../../microcomponents/loader/Loader";

const AddComment = ({ question }) => {

    const queryClient = useQueryClient()
    const { currentUser } = useContext(AuthContext)
    const textRef = useRef()

    const addCommentMutation = useMutation({
        mutationFn: (comment) => addComment(comment.question_id, comment),
        onSuccess: data => {
            queryClient.setQueryData(["comments", question._id], old => [data, ...old])
            question.comments_count = question.comments_count + 1;
            textRef.current.value = ""
        }
    })
    const handleClick = () => {
        let domiComment = {}
        if (currentUser) domiComment = { ...domiComment, user_name: currentUser.username, user_id: currentUser.id }
        domiComment = { ...domiComment, question_id: question._id, text: textRef.current.value }
        if (domiComment.text !== "") addCommentMutation.mutate(domiComment)
        else alert("please write a comment")
    }
    return (
        <div className="new-comment">
            <div className="editor-container">
                <div className="text">
                    {/* <CustomToolbarAdd
                        handleClick={handleClick}
                        loading={addCommentMutation.isLoading}
                    /> */}
                    <ReactQuill
                        defaultValue=""
                        modules={modules}
                        className="text-input"
                        ref={textRef}
                        theme="snow"
                    />
                </div>
                <button
                    className="add-btn"
                    disabled={addCommentMutation.isLoading}
                    onClick={() => handleClick()}>
                    {addCommentMutation.isLoading ? <Loader /> : "POST"}
                </button>
            </div>
        </div>
    )
}

export default AddComment

AddComment.modules = {
    toolbar: {
        container: '#toolbar-add'
    },
};