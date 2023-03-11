import { deleteQuestion } from "../../../../../api/richEditorQuestionsApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Loader from "../../../../microcomponents/loader/Loader";
import { useContext } from "react";
import { DarkModeContext } from "../../../../../context/darkModeContext";

const DeleteQuestion = ({ id }) => {
  
  const queryClient = useQueryClient()
  const { darkMode } = useContext(DarkModeContext)
  const deleteQuestionMutation = useMutation({
    mutationFn: id => deleteQuestion(id),
    onSuccess: data => {
      queryClient.setQueriesData(['richEditorQuestions'], old => old.filter((t) => t._id !== data._id))
    }
  })
  const handleClick = (id) => {
    deleteQuestionMutation.mutate(id)
  }
  return (
    <Tooltip title="Delete">
      <IconButton  >
        {deleteQuestionMutation.isLoading 
        ?
         <Loader /> 
         : 
        <DeleteIcon style={darkMode ? {color: "white"} : {color: "black"}} onClick={() => handleClick(id)} />
        }
      </IconButton>
    </Tooltip>
  )
}
export default DeleteQuestion


