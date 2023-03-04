import "./custom.scss";
import { useLocation, useParams } from "react-router-dom";
import Question from "../../components/question/question/Question"
import { useEffect, useState, useContext } from "react";
import { useGetQueryQuestions } from "../../components/microcomponents/useGetQueryQuestions";
import LinearLoader from "../../components/microcomponents/linearloader/LinearLoader";
import { SearchContext } from "../../context/searchContext";

const Custom = () => {

  const questions = useGetQueryQuestions()
  const [results, setResults] = useState()
  const { value, handleSubmit } = useContext(SearchContext)
  const { key } = useParams();

  useEffect(() => {
    if (key == "ratedQuestions") {
      const rq = questions?.data?.sort(
        (q1, q2) => (q1.rate?.length < q2.rate?.length) ? 1
          : (q1.rate?.length > q2.rate?.length) ? -1
            : 0)
      setResults(rq)
    }
    if (key == "solvedQuestions") {
      const sq = questions?.data?.filter(q => q.comment_id)
      const rsq = sq.sort(
        (q1, q2) => (q1.updatedAt < q2.updatedAt) ? 1
          : (q1.updatedAt > q2.updatedAt) ? -1
            : 0)
      setResults(rsq)
    }
    if (key == "search") {
      const seq = questions?.data?.filter(q => (q.title.toLowerCase().includes(value.toLowerCase()) || (q.description.toLowerCase().includes(value.toLowerCase()))
      || (q.userCode.toLowerCase().includes(value.toLowerCase()))
      ))
      setResults(seq)
    }
  }, [questions.data, value, key]);

  return (
    <div className="custom">
      {(questions.isLoading || results?.length == 0) ? <LinearLoader />
        :
        <>
          <div className="questions">
            {results && results.map(q => (
              <Question question={q} key={q._id} />
            ))}
          </div>
        </>
      }
    </div>
  );
};


export default Custom