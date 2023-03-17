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
          <div className={activeTab == "/" ? "item tab-active" : "item tab-item"}><Link to="/"><span name="/"  onClick={handleActiveTab} > Questions</span></Link></div>
          <div className={activeTab == "/richEditor" ? "item tab-active" : "item tab-item"}><Link to="/richEditor"><span name="/richEditor"  onClick={handleActiveTab} > Rich Editor Questions</span></Link></div>
          <div className={activeTab == "/about" ? "item tab-active" : "item tab-item"}><Link to="/about"><span name="/about"  onClick={handleActiveTab} > About</span></Link></div>
          <div className={activeTab == "/contact" ? "item tab-active" : "item tab-item"}><Link to="/contact"><span name="/contact"  onClick={handleActiveTab} > Contact</span></Link></div>
          {currentUser && currentUser.role == "admin" ?
            <><div className={activeTab == "/users" ? "item tab-active" : "item tab-item"}><Link to="/users"><span name="/users"  onClick={handleActiveTab} > Users</span></Link></div></>
            :
            <></>
          }
        </div>
      </div>
    </>
  )
}

export default RightBar