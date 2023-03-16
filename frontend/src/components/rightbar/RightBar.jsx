import "./rightBar.scss"
import RatedQuestions from "./ratedquestions/RatedQuestions"
import SolvedQuestions from "./solvedquestions/SolvedQuestions"
import ActiveUsers from "./activeusers/ActiveUsers"
import { useState, useContext } from "react"

import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import { NavigatorContext } from "../../context/navContext"


const RightBar = () => {

  const { currentUser, logout } = useContext(AuthContext)
  const { activeTab, handleActiveTab } = useContext(NavigatorContext)
  

  return (
    <>
      
      <div className="rightbar">
        <div className="container">
          <RatedQuestions />
          <SolvedQuestions />
          {/* <ActiveUsers /> */}
          <div onClick={handleActiveTab} className={activeTab == "/" ? "item tab-active" : "item tab-item"}><Link to="/"><span name="/" > Questions</span></Link></div>
          <div onClick={handleActiveTab} className={activeTab == "/richEditor" ? "item tab-active" : "item tab-item"}><Link to="/richEditor"><span name="/richEditor" > Rich Editor Questions</span></Link></div>
          <div onClick={handleActiveTab} className={activeTab == "/about" ? "item tab-active" : "item tab-item"}><Link to="/about"><span name="/about" > About</span></Link></div>
          <div onClick={handleActiveTab} className={activeTab == "/contact" ? "item tab-active" : "item tab-item"}><Link to="/contact"><span name="/contact" > Contact</span></Link></div>
          {currentUser && currentUser.role == "admin" ?
            <><div onClick={handleActiveTab} className={activeTab == "/users" ? "item tab-active" : "item tab-item"}><Link to="/users"><span name="/users" > Users</span></Link></div></>
            :
            <></>
          }
        </div>
      </div>
    </>
  )
}

export default RightBar