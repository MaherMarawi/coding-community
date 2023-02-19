import { useContext, useState } from "react";
import "./addQuestion.scss"
import { AuthContext } from "../../context/authContext"
import { addQuestion } from "../../api/questionsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Loader from "../microcomponents/loader/Loader";

const AddQuestion = () => {

    const queryClient = useQueryClient()
    const [newQuestion, setNewQuestion] = useState()
    const { currentUser } = useContext(AuthContext)
    const addQuestionMutation = useMutation({
        mutationFn: question => addQuestion(question),
        onSuccess: (data) => {
            queryClient.setQueryData(["questions"], prevData => [data, ...prevData])
        }
    })
    const handleChange = (e) => {
        setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        addQuestionMutation.mutate(newQuestion)
    }

    return (
        <div className="add-question">
            <div className="container">
                <div className="title-button">
                    <input onChange={handleChange} name="title" placeholder="Title" />
                    <button onClick={() => handleClick()} disabled={addQuestionMutation.isLoading} >{addQuestionMutation.isLoading ? <Loader /> : "Ask"}</button>
                </div>
                <div className="desc-code">
                    <input onChange={handleChange} name="description" placeholder="Description" />
                    <textarea type="textarea" className="textarea" onChange={handleChange} name="userCode" placeholder="Code" />
                </div>
            </div>
        </div>
    )
}

export default AddQuestion