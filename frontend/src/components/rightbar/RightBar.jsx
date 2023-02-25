import "./rightBar.scss"
import image from "../../assets/7.png"
import { Link } from "react-router-dom"
import RatedQuestions from "./ratedquestions/RatedQuestions"
import { useQuery } from "@tanstack/react-query"
import { getQuestions } from "../../api/questionsApi"
import SolvedQuestions from "./solvedquestions/SolvedQuestions"
import ActiveUsers from "./activeusers/ActiveUsers"

const RightBar = () => {

  const questions = useQuery({
    queryKey: ["questions"],
    staleTime: 10 * (60 * 1000), // 10 mins 
    cacheTime: 15 * (60 * 1000), // 15 mins
    queryFn: () => getQuestions(),
  })
  return (
    <div className="rightbar">
      <div className="container">
        <RatedQuestions questions={questions.data} />
        <SolvedQuestions />
        <ActiveUsers />
      </div>
    </div>
  )
}

export default RightBar