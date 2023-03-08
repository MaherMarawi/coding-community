import "./rightBar.scss"
import RatedQuestions from "./ratedquestions/RatedQuestions"
import SolvedQuestions from "./solvedquestions/SolvedQuestions"
import ActiveUsers from "./activeusers/ActiveUsers"
import { useState, useContext } from "react"

import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"


const RightBar = () => {

  const { currentUser, logout } = useContext(AuthContext)
  const [menuMobilePosition, setMenuMobilePosition] = useState(-280)
  

  return (
    <>
      
      <div className="rightbar">
        <div className="container">
          <RatedQuestions />
          <SolvedQuestions />
          {/* <ActiveUsers /> */}
          <div className="item tab-item"><Link to="/about"><span>about</span></Link></div>
          <div className="item tab-item"><Link to="/contact"><span>contact</span></Link></div>
          {currentUser && currentUser.role == "admin" ?
            <><div className="item tab-item"><Link to="/users"><span>users</span></Link></div></>
            :
            <></>
          }
        </div>
      </div>
    </>
  )
}

export default RightBar