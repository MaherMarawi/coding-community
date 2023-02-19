import { deleteComment } from "../../../api/commentsApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Loader from "../../microcomponents/loader/Loader"

const DeleteComment = ({ commentId, questionId }) => {
    const queryClient = useQueryClient()
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
    <button onClick={() => handleClick(commentId)} disabled={deleteCommentMutation.isLoading}>{deleteCommentMutation.isLoading ? <Loader /> : "Delete"}</button>
  )
}

export default DeleteComment


