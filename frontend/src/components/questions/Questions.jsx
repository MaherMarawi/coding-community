import "./questions.scss"
import Question from "../question/question/Question"
import { getQuestions } from "../../api/questionsApi";
import { useQuery } from "@tanstack/react-query";
import Loader from "../microcomponents/loader/Loader";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import AddQuestion from "../question/addquestion/AddQuestion";

export default function Questions() {

  const questions = useQuery({
    queryKey: ["questions"],
    staleTime: 10 * (60 * 1000), // 10 mins 
    cacheTime: 15 * (60 * 1000), // 15 mins
    queryFn: () => getQuestions(),
  })
  
  if (questions.isLoading)
    return <Box className="linear-loader">
      <LinearProgress />
    </Box>
  return (
    <div className="questions">
      {/* <span>{questions.data.length}</span> */}
      <AddQuestion />
      {questions && questions.data?.map(question => (
        <Question question={question} key={question._id} />
      ))}
    </div>
  )
}
