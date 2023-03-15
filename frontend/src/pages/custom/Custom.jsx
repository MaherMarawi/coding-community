import "./custom.scss";
import { useLocation, useParams } from "react-router-dom";
import Question from "../../components/question/question/Question"
import { useEffect, useState, useContext } from "react";
import { SetQueryQuestions } from "../../components/microcomponents/setqueryquestions/SetQueryQuestions";
import LinearLoader from "../../components/microcomponents/linearloader/LinearLoader";
import { SearchContext } from "../../context/searchContext";

const Custom = () => {

  const questions = SetQueryQuestions()
  const { value, handleSubmit } = useContext(SearchContext)
  const { key } = useParams();

  let content
  switch (key) {
    case "ratedQuestions":
      content = questions?.data?.sort(
        (q1, q2) => (q1.rate?.length < q2.rate?.length) ? 1
          : (q1.rate?.length > q2.rate?.length) ? -1
            : 0)
        .slice(0, 2)
        .map(q => {
          return (
            <Question question={q} key={q._id} />
          )
        })
      break;
    case "solvedQuestions":
      content = questions?.data?.filter(ques => ques.comment_id).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        .slice(0, 3)
        .map(q => {
          return (
            <Question question={q} key={q._id} />
          )
        })
      break;
    case "search":
      content = questions?.data?.filter(ques => (ques.title.toLowerCase().includes(value.toLowerCase()) || (ques.description.toLowerCase().includes(value.toLowerCase()))
      || (ques.userCode.toLowerCase().includes(value.toLowerCase())))).map(q => {
        return (
          <Question question={q} key={q._id} />
        )
      })
      break;
  }


  return (
    <div className="custom">
      {(questions?.isLoading) ? <LinearLoader />
        :
        <>
          <div className="questions">
            {content}
          </div>
        </>
      }
    </div>
  );
};


export default Custom

