import { useQuery } from "@tanstack/react-query"
import User from "./User"
import { getUsers } from "../../api/usersApi"
import "./users.scss"

const Users = () => {


    const users = useQuery({
        queryKey: ["users"],
        queryFn: () => getUsers()
    })



    return (
        <div className="users">
            {users && users.data?.map(user => (
                <User user={user} key={user._id} />
            ))}
        </div>
    )
}

export default Users