import "./rateQuestion.scss"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../../context/authContext"
import { rateQuestion } from "../../../../../api/richEditorQuestionsApi"
import { useMutation } from "@tanstack/react-query"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Loader from "../../../../microcomponents/loader/Loader"
const RateQuestion = ({ question }) => {

    const { currentUser } = useContext(AuthContext)
    const [rated, setRated] = useState()

    useEffect(() => {
        if (currentUser && question) setRated(question.rate.some((r) => r == currentUser.id))
    }, [currentUser]);

    const rateQuestionMutation = useMutation({
        mutationFn: question => rateQuestion(question._id, question)
    })

    const handleClick = () => {
        if(!currentUser) alert("you have to login")
        else {
            if (rated == false) {
                question.rate.push(currentUser.id)
                setRated(true)
            }
            if (rated == true) {
                question.rate.splice(question.rate.indexOf(currentUser.id), 1)
                setRated(false)
            }
            rateQuestionMutation.mutate(question)
        }
    }

    return (
        <div className="item">
            {rateQuestionMutation.isLoading ? <Loader /> : <>
                {rated == false ? <StarBorderOutlinedIcon onClick={() => handleClick()} className="icons" /> : <StarOutlinedIcon onClick={() => handleClick()} className="icons" />}
                {question.rate?.length}
            </>
            }
        </div>
    )
}

export default RateQuestion
