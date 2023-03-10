import Loader from "../../microcomponents/loader/Loader"
import Time from "../../microcomponents/time/Time"
import { Link } from "react-router-dom"
import { useState, useEffect, useMemo } from "react"
import { SetQueryQuestions } from "../../microcomponents/setqueryquestions/SetQueryQuestions"
import LinearLoader from "../../microcomponents/linearloader/LinearLoader"
const SolvedQuestions = () => {

  const questions = SetQueryQuestions()

  const [solvedQuestions, setSolvedQuestions] = useState()

  useEffect(() => {
    if (questions?.data?.length > 0) {
      const sq = questions.data.filter(q => q.comment_id)
      const rsq = sq.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      })
      setSolvedQuestions(rsq)
    }
  }, [questions.data]);

  if (questions?.isLoading) return (
    <div className="item">
      <Loader />
    </div>
  )
  return (
    <div className="item">
      <span className="title">Recent solved</span>
      {solvedQuestions?.length > 0 ? <>
        <div className="solved-question">
          <div className="questionInfo">
            <p><span>{solvedQuestions[0]?.title}</span></p>
          </div>
          <span className="time-solved"><span> has been solved</span><Time time={solvedQuestions[0] && solvedQuestions[0]?.updatedAt} /></span>
        </div><div className="solved-question">
          <div className="questionInfo">
            <p><span>{solvedQuestions[1] && solvedQuestions[1]?.title}</span></p>
          </div>
          <span className="time-solved"><span> has been solved</span><Time time={solvedQuestions[1] && solvedQuestions[1]?.updatedAt} /></span>
        </div>
        <div className="solved-question">
          <div className="questionInfo">
            <p><span>{solvedQuestions[2] && solvedQuestions[2]?.title}</span></p>
          </div>
          <span className="time-solved"><span> has been solved</span><Time time={solvedQuestions[2] && solvedQuestions[2]?.updatedAt} /></span>
        </div>
        <div className="solved-question">
          <div className="questionInfo">
            <span className="link">
              <Link to="/custom/solvedQuestions" >
                see more . . .
              </Link>
            </span>
          </div>
        </div>
      </>
        :
        <div className="question">
          <div className="questionInfo">
            <Loader />
          </div>
        </div>
      }
    </div>
  )
}

export default SolvedQuestions