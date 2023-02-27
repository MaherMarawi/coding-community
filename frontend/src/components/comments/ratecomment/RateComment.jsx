import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../context/authContext"
import { updateComment } from "../../../api/commentsApi"
import { useMutation } from "@tanstack/react-query"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Loader from "../../microcomponents/loader/Loader"
const RateComment = ({ comment }) => {

    const { currentUser } = useContext(AuthContext)
    const [rated, setRated] = useState()

    useEffect(() => {
        if (currentUser && comment) setRated(comment.rate.some((r) => r == currentUser.id))
    }, [currentUser]);

    const rateCommentMutation = useMutation({
        mutationFn: comment => updateComment(comment._id, comment)
    })

    const handleClick = () => {
        if (rated == false) {
            comment.rate.push(currentUser.id)
            setRated(true)
        }
        if (rated == true) {
            comment.rate.splice(comment.rate.indexOf(currentUser.id), 1)
            setRated(false)
        }
        rateCommentMutation.mutate(comment)
    }

    return (
        <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
            {rateCommentMutation.isLoading ? <Loader /> : <>
                {rated == false ? <StarBorderOutlinedIcon onClick={() => handleClick()} className="icons" /> : <StarOutlinedIcon onClick={() => handleClick()} className="icons" />}
                {comment.rate?.length}
            </>
            }
        </div>
    )
}

export default RateComment
