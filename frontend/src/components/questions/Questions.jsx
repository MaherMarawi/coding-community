import "./questions.scss"
import Question from "../question/question/Question"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import AddQuestion from "../question/addquestion/AddQuestion";
import { useContext, useEffect, useState } from "react"
import { SetQueryQuestions } from "../microcomponents/setqueryquestions/SetQueryQuestions";
import { SearchContext } from "../../context/searchContext";

export default function Questions() {

  const { value } = useContext(SearchContext)
  const questions = SetQueryQuestions()

  if (questions.isLoading)
    return <Box className="linear-loader">
      <LinearProgress />
    </Box>
  return (
    <div className="questions">
      <AddQuestion />
      {questions && questions.data?.map(question => (
        <Question question={question} key={question._id} />
      ))}
    </div>
  )
}
