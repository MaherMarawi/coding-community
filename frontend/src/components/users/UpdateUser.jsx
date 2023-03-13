import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { setRole } from "../../api/usersApi"
import Loader from '../microcomponents/loader/Loader'

const UpdateUser = ({ user }) => {

    const [userRole, setUserRole] = useState({ role: user.role })

    const updateUserMutation = useMutation({
        mutationFn: id => setRole(id, userRole),
        onSuccess: data => {
            user = data
            console.log(data)
        }
    })
    useEffect(() => {
        setUserRole({ role: user.role })
        console.log(user.username, userRole.role)
    }, []);

    const handleClick = () => {
        if (userRole.role == "admin") setUserRole({ role: "no role" })
        else setUserRole({ role: "admin" })
        console.log(userRole.role)
        // updateUserMutation.mutate(user._id)
    }
    return (
        <>
            <button
                className='update-btn'
                disabled={updateUserMutation.isLoading}
                onClick={() => handleClick()}
                style={user.role == "admin" ? { backgroundColor: "#008000" } : null}
            >{updateUserMutation.isLoading
                ?
                <Loader />
                :
                user.role
                }
            </button>
        </>
    )
}

export default UpdateUser