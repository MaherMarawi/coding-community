import "./rightBar.scss"
import image from "../../assets/7.png"
import { Link } from "react-router-dom"
import RatedQuestions from "./ratedquestions/RatedQuestions"
import { useQuery } from "@tanstack/react-query"
import { getQuestions } from "../../api/questionsApi"

const RightBar = () => {

  const questions = useQuery({
    queryKey: ["questions"],
    staleTime: 10 * (60 * 1000), // 10 mins 
    cacheTime: 15 * (60 * 1000), // 15 mins
    queryFn: () => getQuestions(),
  })
console.log(questions.data)
  return (
    <div className="rightbar">
      <div className="container">
          <RatedQuestions questions={questions.data} />
        <div className="item">
          <span>Recent solved questions</span>
          <div className="question">
            <div className="questionInfo">
              <p><span>nodejs</span> has been solved</p>
            </div>
            <span className="time-solved">1 min ago</span>
          </div><div className="question">
            <div className="questionInfo">
              <p><span>react</span> has been solved</p>
            </div>
            <span className="time-solved">1 min ago</span>
          </div><div className="question">
            <div className="questionInfo">
              <p><span>java</span> has been solved</p>
            </div>
            <span className="time-solved">1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Active users</span>
          <div className="question">
            <div className="questionInfo">
              <span>Jhon Doe</span>
            </div>
          </div><div className="question">
            <div className="questionInfo">
              <span>Jhon Doe</span>
            </div>
          </div><div className="question">
            <div className="questionInfo">
              <span>Jhon Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar