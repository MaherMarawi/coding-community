import Loader from "../../microcomponents/loader/Loader"
import Time from "../../microcomponents/time/Time"
import { Link } from "react-router-dom"

const SolvedQuestions = ({ questions, isLoading }) => {
  if (isLoading) return (
    <div className="item">
      <Loader />
    </div>
  )
  return (
    <div className="item">
      <span>Recent solved questions</span>
      {questions?.length > 0 ? <>
        <div className="question">
          <div className="questionInfo">
            <p><span>{questions[0]?.title}</span> has been solved</p>
          </div>
          <span className="time-solved"><Time>{questions[0]?.createdAt}</Time></span>
        </div><div className="question">
          <div className="questionInfo">
            <p><span>{questions[1] && questions[1]?.title}</span> has been solved</p>
          </div>
          <span className="time-solved"><Time>{questions[1] && questions[1]?.createdAt}</Time></span>
        </div>
        <div className="question">
          <div className="questionInfo">
            <p><span>{questions[2] && questions[2]?.title}</span> has been solved</p>
          </div>
          <span className="time-solved"><Time>{questions[2] && questions[2]?.createdAt}</Time></span>
        </div>
        <div className="question">
          <div className="questionInfo">
            <span>
              <Link to="/custom" state={{ questions: questions }} >
                see more
              </Link>
            </span>
          </div>
        </div>
      </>
        :
        <div className="question">
          <div className="questionInfo">
            no data
          </div>
        </div>
      }
    </div>
  )
}

export default SolvedQuestions