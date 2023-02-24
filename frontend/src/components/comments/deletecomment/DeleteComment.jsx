import { deleteComment } from "../../../api/commentsApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Loader from "../../microcomponents/loader/Loader"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useContext } from "react";
import { DarkModeContext } from "../../../context/darkModeContext";

const DeleteComment = ({ commentId, questionId }) => {
    const queryClient = useQueryClient()
    const { darkMode } = useContext(DarkModeContext)
    const deleteCommentMutation = useMutation({
        mutationFn: id => deleteComment(id),
        onSuccess: data => {
            queryClient.setQueryData(['comments', questionId], old => old.filter((t) => t._id !== commentId))
        }
    })
    const handleClick = (id) => {
        deleteCommentMutation.mutate(id)
    }
  return (
    <Tooltip title="Delete"  >
      <IconButton >
        {deleteCommentMutation.isLoading 
        ?
         <Loader /> 
         : 
        <DeleteIcon style={darkMode ? {color: "white", width: "17px"} : {color: "black", width: "17px"}} onClick={() => handleClick(commentId)} />
        }
      </IconButton>
    </Tooltip>
  )
}

export default DeleteComment


