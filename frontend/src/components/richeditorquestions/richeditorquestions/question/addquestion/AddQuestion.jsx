import { useContext, useState, useRef, useEffect } from "react";
import "./addQuestion.scss"
import { AuthContext } from "../../../../../context/authContext"
import { addQuestion } from "../../../../../api/richEditorQuestionsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CustomToolbarAdd } from "../../../minicomponents/toolbaraddquestions/CustomToolbarAdd";

const AddQuestion = () => {

    const queryClient = useQueryClient()
    const { currentUser } = useContext(AuthContext)
    const [render, setRender] = useState("")
    const textRef = useRef()
    const addQuestionMutation = useMutation({
        mutationFn: question => addQuestion(question),
        onSuccess: (data) => {
            queryClient.setQueryData(["richEditorQuestions"], prevData => [data, ...prevData])
            setRender(prev => "")
        },
        onError: err => {
            console.log(err)
        }
    })

    useEffect(() => { console.log("render") }, [render])
    const handleClick = () => {
        let domiQuestion = {}
        if (currentUser) domiQuestion = { ...domiQuestion, user_id: currentUser.id, user_name: currentUser.username }
        domiQuestion = { ...domiQuestion, text: textRef.current.value }
        if (domiQuestion.text) addQuestionMutation.mutate(domiQuestion)
        else alert("please write a questions")
    }
    return (
        <div className="new-question">
            <div className="container">
                <div className="text">
                    <CustomToolbarAdd
                        handleClick={handleClick}
                        loading={addQuestionMutation.isLoading}
                    />
                    <ReactQuill
                        defaultValue={render}
                        modules={AddQuestion.modules}
                        className="text-input"
                        ref={textRef} />
                </div>
            </div>
        </div>
    )
}

export default AddQuestion

AddQuestion.modules = {
    toolbar: {
        container: '#toolbar-add'
    },
};

