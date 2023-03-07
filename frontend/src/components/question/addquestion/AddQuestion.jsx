import { useContext, useState, useRef, useEffect } from "react";
import "./addQuestion.scss"
import { AuthContext } from "../../../context/authContext"
import { addQuestion } from "../../../api/questionsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Loader from "../../microcomponents/loader/Loader";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const AddQuestion = () => {

    const queryClient = useQueryClient()
    const { currentUser } = useContext(AuthContext)
    const titleRef = useRef()
    const descriptionRef = useRef()
    const userCodeRef = useRef()
    const addQuestionMutation = useMutation({
        mutationFn: question => addQuestion(question),
        onSuccess: (data) => {
            queryClient.setQueryData(["questions"], prevData => [data, ...prevData])
            titleRef.current.value = ""
            descriptionRef.current.value = ""
            userCodeRef.current.value = ""
        },
        onError: err => {
            console.log(err)
        }
    })
    const handleClick = () => {
        let domiQuestion = {}
        if (currentUser) domiQuestion = { ... domiQuestion, user_id: currentUser.id, user_name: currentUser.username}
        domiQuestion = {... domiQuestion, title: titleRef.current.value, description : descriptionRef.current.value, userCode : userCodeRef.current.value }
        if(domiQuestion.title && domiQuestion.description) addQuestionMutation.mutate(domiQuestion)
        else alert("please write a title and description")
        
    }
    return (
        <div className="add-question">
            <div className="container">
                <div className="title-button">
                    <input ref={titleRef} placeholder="Title" />
                    <div onClick={() => handleClick()} disabled={addQuestionMutation.isLoading} >{addQuestionMutation.isLoading ? <Loader /> : <Tooltip describeChild title="Does not add if it already exists.">
                        <Button>Add</Button>
                    </Tooltip>}</div>
                </div>
                <div className="desc-code">
                    <textarea ref={descriptionRef} className="textarea-code" placeholder="Description" />
                    <textarea ref={userCodeRef} datatype="wmd" type="textarea" className="textarea-code" placeholder="Code" />
                </div>
            </div>
        </div>
    )
}

export default AddQuestion