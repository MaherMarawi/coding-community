import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../../microcomponents/loader/Loader"
import { SetQueryQuestions } from "../../microcomponents/setqueryquestions/SetQueryQuestions"
import LinearLoader from "../../microcomponents/linearloader/LinearLoader"

const RatedQuestions = () => {
    const questions = SetQueryQuestions()
    const [ratedQuestions, setRatedQuestions] = useState()

    useEffect(() => {
        console.log("render")
        if (questions?.data?.length > 0) {
            const rq = questions.data.sort(
                (q1, q2) => (q1.rate?.length < q2.rate?.length) ? 1
                    : (q1.rate?.length > q2.rate?.length) ? -1
                        : 0)
            setRatedQuestions(rq)
        }
    }, [questions.data]);

    if (questions?.isLoading) return (
        <div className="item">
            <Loader />
        </div>
    )

    return (
        <div className="item">
            <span className="title">Most rated</span>
            {ratedQuestions?.length > 0 ?
                <>
                    <div className="rated-question">
                        <div className="questionInfo">
                            <span>{ratedQuestions[0]?.title}</span>
                        </div>
                        <div className="result">
                            <span className="rate">{ratedQuestions[0]?.rate.length}</span>
                        </div>
                    </div>
                    <div className="rated-question">
                        <div className="questionInfo">
                            <span>{ratedQuestions[1]?.title}</span>
                        </div>
                        <div className="result">
                            <span className="rate">{ratedQuestions[1]?.rate.length}</span>
                        </div>
                    </div>
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