import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../../context/darkModeContext"
import Loader from "../../microcomponents/loader/Loader"

const RatedQuestions = ({ questions, isLoading }) => {

    const [ ratedQuestions, setRatedQuestions ] = useState()

    useEffect(() => {
        if(questions?.length > 0) {
            const rq = questions.sort(
                (q1, q2) => (q1.rate?.length < q2.rate?.length) ? 1
                  : (q1.rate?.length > q2.rate?.length) ? -1
                    : 0)
            setRatedQuestions(rq)
        }
    }, [questions]);

    if (isLoading) return (
        <div className="item">
            <Loader />
        </div>
    )

    return (
        <div className="item">
            <span className="title">Most rated</span>
            {ratedQuestions?.length > 0 ?
                <>
                    <div className="question">
                        <div className="questionInfo">
                            <span>{ratedQuestions[0]?.title}</span>
                        </div>
                        <div className="result">
                            <span className="rate">{ratedQuestions[0]?.rate.length}</span>
                        </div>
                    </div>
                    <div className="question">
                        <div className="questionInfo">
                            <span>{ratedQuestions[1]?.title}</span>
                        </div>
                        <div className="result">
                            <span className="rate">{ratedQuestions[1]?.rate.length}</span>
                        </div>
                    </div>
                    <div className="question">
                        <div className="questionInfo">
                            <span>
                                <Link to="/custom" state={{ questions: ratedQuestions }} >
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

export default RatedQuestions