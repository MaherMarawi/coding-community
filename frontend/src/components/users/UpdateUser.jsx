
import { useMutation } from "@tanstack/react-query"
import { setRole } from "../../api/usersApi"
import Loader from '../microcomponents/loader/Loader'

const UpdateUser = ({ user }) => {


    const updateUserMutation = useMutation({
        mutationFn: user => setRole(user._id, {role: user.role})
    })

    const handleClick = () => {
        if (user.role === "admin") user.role = "no role"
        else user.role = "admin"
        console.log(user.role)
        updateUserMutation.mutate(user)
    }
    return (
        <>
            <button
                className='update-btn'
                disabled={updateUserMutation.isLoading}
                onClick={() => handleClick()}
                style={user.role === "admin" ? { backgroundColor: "#008000" } : null}
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