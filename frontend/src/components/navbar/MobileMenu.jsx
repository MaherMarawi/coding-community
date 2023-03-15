import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom"
import Loader from "../microcomponents/loader/Loader"
import "./navBar.scss"
import { DarkModeContext } from "../../context/darkModeContext"
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const MobileMenu = ({
  menuMobilePosition,
  toggleMenuMobile,
  statusMobilePosition
}) => {


  const { darkMode, toggle } = useContext(DarkModeContext)
  const { currentUser, logoutMutation } = useContext(AuthContext)

  return (
    <div className="navbar-items-mobile" style={menuMobilePosition}>
      <Link  to="/" onClick={toggleMenuMobile}><span>Questions</span></Link>
      <Link  to="/richEditor" onClick={toggleMenuMobile}><span>Rich Editor Questions</span></Link>
      <Link  to="/custom/ratedQuestions" onClick={toggleMenuMobile}><span>Most Rated Questions</span></Link>
      <Link  to="/custom/solvedQuestions" onClick={toggleMenuMobile}><span>Recent Solved Questions</span></Link>
      <Link  to="/about" onClick={toggleMenuMobile}><span>About</span></Link>
      <Link  to="/contact" onClick={toggleMenuMobile}><span>Contact</span></Link>
      {currentUser && currentUser.role == "admin" ?
        <><Link  to="/users" onClick={toggleMenuMobile}><span>Users</span></Link></>
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