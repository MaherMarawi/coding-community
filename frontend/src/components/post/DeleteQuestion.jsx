import { deleteQuestion } from "../../api/questionsApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Loader from "../microcomponents/loader/Loader"

const DeleteQuestion = ({id}) => {
    const queryClient = useQueryClient()
    const deleteQuestionMutation = useMutation({
        mutationFn: id => deleteQuestion(id),
        onSuccess: data => {
            queryClient.setQueryData(['questions'], old => old.filter((t) => t._id !== data._id))
        }
    })
    const handleClick = (id) => {
        deleteQuestionMutation.mutate(id)
    }
  return (
    <button onClick={() => handleClick(id)} disabled={deleteQuestionMutation.isLoading}>{deleteQuestionMutation.isLoading ? <Loader /> : "Delete"}</button>
  )
}

export default DeleteQuestion


