import { Link } from "react-router-dom"
import Loader from "../../microcomponents/loader/Loader"

const RatedQuestions = ({ questions, isLoading }) => {
    if (isLoading) return (
        <div className="item">
            <Loader />
        </div>
    )

    return (
        <div className="item">
            <span className="title">Most rated</span>
            {questions ?
                <>
                    <div className="question">
                        <div className="questionInfo">
                            <span>{questions[0]?.title}</span>
                        </div>
                        <div className="result">
                            <span className="rate">{questions[0]?.rate.length}</span>
                        </div>
                    </div>
                    <div className="question">
                        <div className="questionInfo">
                            <span>{questions[1]?.title}</span>
                        </div>
                        <div className="result">
                            <span className="rate">{questions[1]?.rate.length}</span>
                        </div>
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

export default RatedQuestions