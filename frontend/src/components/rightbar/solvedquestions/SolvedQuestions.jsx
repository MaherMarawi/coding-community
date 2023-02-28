import Loader from "../../microcomponents/loader/Loader"
import Time from "../../microcomponents/time/Time"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const SolvedQuestions = ({ questions, isLoading }) => {
  const[ solvedQuestions, setSolvedQuestions ] = useState()
  useEffect(() => {
    if(questions?.length > 0) {
      const sq = questions.filter(q => q.comment_id)
      setSolvedQuestions(sq)
    }
  }, [questions]);
  if (isLoading) return (
    <div className="item">
      <Loader />
    </div>
  )
  return (
    <div className="item">
      <span className="title">Recent solved questions</span>
      {solvedQuestions?.length > 0 ? <>
        <div className="question">
          <div className="questionInfo">
            <p><span>{solvedQuestions[0]?.title}</span> has been solved</p>
          </div>
          <span className="time-solved"><Time time={solvedQuestions[0] && solvedQuestions[0]?.updatedAt} /></span>
        </div><div className="question">
          <div className="questionInfo">
            <p><span>{solvedQuestions[1] && solvedQuestions[1]?.title}</span> has been solved</p>
          </div>
          <span className="time-solved"><Time time={solvedQuestions[1] && solvedQuestions[1]?.updatedAt} /></span>
        </div>
        <div className="question">
          <div className="questionInfo">
            <p><span>{solvedQuestions[2] && solvedQuestions[2]?.title}</span> has been solved</p>
          </div>
          <span className="time-solved"><Time time={solvedQuestions[2] && solvedQuestions[2]?.updatedAt} /></span>
        </div>
        <div className="question">
          <div className="questionInfo">
            <span>
              <Link to="/custom" state={{ questions: solvedQuestions }} >
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