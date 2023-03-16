import Loader from "../../microcomponents/loader/Loader"
import Time from "../../microcomponents/time/Time"
import { Link } from "react-router-dom"
import { useState, useEffect, useMemo } from "react"
import { SetQueryQuestions } from "../../microcomponents/setqueryquestions/SetQueryQuestions"
import LinearLoader from "../../microcomponents/linearloader/LinearLoader"
const SolvedQuestions = () => {

  const questions = SetQueryQuestions()

  let content = questions?.data?.filter(ques => ques.comment_id).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .slice(0, 3)
      .map(q => {
        return (
          <div className="solved-question" key={q._id}>
            <div className="questionInfo">
              <p><span>{q && q?.title}</span></p>
            </div>
            <span className="time-solved"><span> has been solved</span><Time time={q && q?.updatedAt} /></span>
          </div>
        )
      })


  if (questions?.isLoading) return (
    <div className="item">
      <Loader />
    </div>
  )
  if (questions?.isError) return (
    <div className="item">
        <h3>something went wrong</h3>
    </div>
)
  return (
    <div className="item">
      <span className="title">Recent solved</span>
      {questions?.data?.length > 0 ?
        <>
          {content}
          {/* <div className="solved-question">
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
        </div> */}
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