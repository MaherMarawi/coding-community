import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../../microcomponents/loader/Loader"
import { SetQueryQuestions } from "../../microcomponents/setqueryquestions/SetQueryQuestions"
import LinearLoader from "../../microcomponents/linearloader/LinearLoader"

const RatedQuestions = () => {
    const questions = SetQueryQuestions()

    let content = questions?.data?.sort(
            (q1, q2) => (q1.rate?.length < q2.rate?.length) ? 1
                : (q1.rate?.length > q2.rate?.length) ? -1
                    : 0)
                    .slice(0,2)
                    .map(q => {
                        return (
                            <div className="rated-question" key={q._id}>
                                <div className="questionInfo">
                                    <span>{q?.title}</span>
                                </div>
                                <div className="result">
                                    <span className="rate">{q?.rate.length}</span>
                                </div>
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
            <span className="title">Most rated</span>
            {questions?.data?.length > 0 ?
                <>
                    {content}
                    <div className="rated-question">
                        <div className="questionInfo">
                            <span className="link">
                                <Link to="/custom/ratedQuestions" >
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

export default RatedQuestions