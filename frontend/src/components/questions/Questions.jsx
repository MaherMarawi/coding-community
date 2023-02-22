import "./questions.scss"
import Question from "../question/question/Question"
import { getQuestions } from "../../api/questionsApi";
import { useQuery } from "@tanstack/react-query";
import Loader from "../microcomponents/loader/Loader";

export default function Questions() {

const questions = useQuery({
  queryKey: ["questions"],
  staleTime: 10 * (60 * 1000), // 10 mins 
  cacheTime: 15 * (60 * 1000), // 15 mins
  queryFn: () => getQuestions(),
})
// if(questions.isFetching || questions.isLoading) return <div className="posts"> <div className="loading"><Loader /></div></div>
  return (
    <div className="questions">
      { (questions.isFetching || questions.isLoading) ? <div className="posts"> <div className="loading"><Loader /></div></div> : ""}
      {questions && questions.data?.map(question => (
        <Question question={question} key={question._id}/>
      ))}
    </div>
  )
}
