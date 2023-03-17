import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom"
import Loader from "../microcomponents/loader/Loader"
import "./navBar.scss"
import { DarkModeContext } from "../../context/darkModeContext"
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { NavigatorContext } from "../../context/navContext"

const MobileMenu = ({
  menuMobilePosition,
  toggleMenuMobile,
  statusMobilePosition
}) => {


  const { darkMode, toggle } = useContext(DarkModeContext)
  const { currentUser, logoutMutation } = useContext(AuthContext)
  const { activeTab, handleActiveTab } = useContext(NavigatorContext)

  return (
    <div className="navbar-items-mobile" style={menuMobilePosition}>
     <div className={activeTab == "/" ? "active-tab" : "normal-tab"}><Link  to="/" onClick={toggleMenuMobile}><span name="/" onClick={handleActiveTab}>Questions</span></Link></div> 
      <div className={activeTab == "/richEditor" ? "active-tab" : "normal-tab"}><Link  to="/richEditor" onClick={toggleMenuMobile}><span name="/richEditor" onClick={handleActiveTab} >Rich Editor Questions</span></Link></div>
      <div className={activeTab == "/custom/ratedQuestions" ? "active-tab" : "normal-tab"}><Link  to="/custom/ratedQuestions" onClick={toggleMenuMobile}><span name="/custom/ratedQuestions" onClick={handleActiveTab} >Most Rated Questions</span></Link></div>
      <div className={activeTab == "/custom/solvedQuestions" ? "active-tab" : "normal-tab"}><Link  to="/custom/solvedQuestions" onClick={toggleMenuMobile}><span name="/custom/solvedQuestions" onClick={handleActiveTab} >Recent Solved Questions</span></Link></div>
      <div className={activeTab == "/about" ? "active-tab" : "normal-tab"}><Link  to="/about" onClick={toggleMenuMobile}><span name="/about" onClick={handleActiveTab} >About</span></Link></div>
      <div className={activeTab == "/contact" ? "active-tab" : "normal-tab"}><Link  to="/contact" onClick={toggleMenuMobile}><span name="/contact" onClick={handleActiveTab} >Contact</span></Link></div>

      {currentUser && currentUser.role == "admin" ?
        <><div onClick={handleActiveTab} className={activeTab == "/users" ? "active-tab" : "normal-tab"}><Link  to="/users" onClick={toggleMenuMobile}><span name="/users" onClick={handleActiveTab} >Users</span></Link></div></>
        :
        <></>
      }
      <div className="user"  >
        {currentUser?.username
          ?
          <div className="user-details">
            <span>{currentUser?.username}</span>
            {currentUser?.role == "admin" ? <div className="admin-sign">admin</div> : ""}
            <button
              // style={statusMobilePosition}
              disabled={logoutMutation.isLoading}
              onClick={() => logoutMutation.mutate()}>
              {logoutMutation.isLoading
                ?
                <Loader />
                :
                "logout"
              }
            </button>
          </div>
          :
          <button className="login-button"><Link to="/auth/login">login</Link></button>
        }
      </div>
      {
        darkMode
          ?
          <div className="darkMode"><WbSunnyOutlinedIcon onClick={toggle} /></div>
          :
          <div className="darkMode"><DarkModeOutlinedIcon onClick={toggle} /></div>
      }
    </div>
  )
}

export default MobileMenu