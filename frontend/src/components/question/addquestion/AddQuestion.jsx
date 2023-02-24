import { useContext, useState } from "react";
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
    const [newQuestion, setNewQuestion] = useState({
        title: "",
        description: "",
        userCode: ""
    })
    const addQuestionMutation = useMutation({
        mutationFn: question => addQuestion(question),
        onSuccess: (data) => {
            queryClient.setQueryData(["questions"], prevData => [data, ...prevData])
            setNewQuestion(({
                title: "",
                description: "",
                userCode: ""
            }))
        }
    })
    const handleChange = (e) => {
        setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        const domiQuestion = newQuestion
        if (currentUser) {
            domiQuestion.user_id = currentUser.id
            domiQuestion.user_name = currentUser.username
        }
        setNewQuestion(domiQuestion)
        addQuestionMutation.mutate(newQuestion)
    }

    return (
        <div className="add-question">
            <div className="container">
                <div className="title-button">
                    <input value={newQuestion?.title} onChange={handleChange} name="title" placeholder="Title" />
                    <div onClick={() => handleClick()} disabled={addQuestionMutation.isLoading} >{addQuestionMutation.isLoading ? <Loader /> : <Tooltip describeChild title="Does not add if it already exists.">
                        <Button>Add</Button>
                    </Tooltip>}</div>
                </div>
                <div className="desc-code">
                    <input value={newQuestion?.description} onChange={handleChange} name="description" placeholder="Description" />
                    <textarea value={newQuestion?.userCode} type="textarea" className="textarea" onChange={handleChange} name="userCode" placeholder="Code" />
                </div>
            </div>
        </div>
    )
}

export default AddQuestion