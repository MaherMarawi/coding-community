import React from 'react'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteUser } from "../../api/usersApi"
import Loader from '../microcomponents/loader/Loader'

const DeleteUser = ({id}) => {
    const queryClient = useQueryClient()

    const deleteUserMutation = useMutation({
        mutationFn: id => deleteUser(id),
        onSuccess: data => {
            queryClient.setQueryData(["users"], old => old.filter(u => u._id !== id))
        }
    })
    const handleClick = () => {
        deleteUserMutation.mutate(id)
    }

    return (
        <button className='delete-btn' onClick={() => handleClick()}>{deleteUserMutation.isLoading ? <Loader /> : "Remove"}</button>
    )
}

export default DeleteUser