import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateQuestion } from "../../../api/questionsApi"
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import "./solvecomment.scss"
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";

const SolveComment = ({ question, id, setCommentOpen }) => {

  const queryClient = useQueryClient()
  const { currentUser } = useContext(AuthContext)
  const [color, setColor] = useState()

  const solveCommentMutation = useMutation({
    mutationFn: question => updateQuestion(question._id, question),
    onSuccess: data => {
      question = data
      setColor("")
      setCommentOpen(question._id)
    }
  })

  const handleClick = () => {
    setColor("green")
    question.comment_id = id
    setCommentOpen("")
    solveCommentMutation.mutate(question)
  }

  if (question.comment_id == id) return <TaskAltIcon sx={{ color: "green", width: "15px" }} />
  return (
    <>
      {question.comment_id ? "" :
        <>
          {currentUser?.id && currentUser.id == question.user_id ?
            <TaskAltIcon className="solve" sx={color ? { color } : ""} onClick={() => handleClick()} />
            :
            ""
          }
        </>
      }
    </>
  )
}

export default SolveComment