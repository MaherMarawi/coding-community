import { useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import "./ratedQuestions.scss"

const RatedQuestions = ({ questions }) => {
    let [values, setValues] = useState([])
    const mostRatedQuestions = (arr) => {
        return arr.sort(
            (q1, q2) => (q1.rate?.length < q2.rate?.length) ? 1
                : (q1.rate?.length > q2.rate?.length) ? -1
                    : 0)
    }
    useEffect(() => {
        let domi = []
        if (questions) domi = mostRatedQuestions(questions)
        setValues(domi)
    }, [values]);

    return (
        <div className="item">
            <span className="title">Most rated</span>
            <div className="question">
                <div className="questionInfo">
                    <span>{values[0]?.title}</span>
                </div>
                <div className="result">
                    <span className="rate">{values[0]?.rate.length}</span>
                </div>
            </div>
            <div className="question">
                <div className="questionInfo">
                    <span>{values[1]?.title}</span>
                </div>
                <div className="result">
                    <span className="rate">{values[1]?.rate.length}</span>
                </div>
            </div>
        </div>
    )
}

export default RatedQuestions