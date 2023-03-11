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
  toggleMenuMobile
}) => {

  const { darkMode, toggle } = useContext(DarkModeContext)
  const { currentUser, logoutMutation } = useContext(AuthContext)

  return (
    <div className="navbar-items-mobile" style={menuMobilePosition}>
      <Link to="/" onClick={toggleMenuMobile}>Questions</Link>
      <Link to="/richEditor" onClick={toggleMenuMobile}>Rich Editor Questions</Link>
      <Link to="/custom/ratedQuestions" onClick={toggleMenuMobile} >Most Rated Questions</Link>
      <Link to="/custom/solvedQuestions" onClick={toggleMenuMobile} >Recent Solved Questions</Link>
      <Link to="/about" onClick={toggleMenuMobile}>About</Link>
      <Link to="/contact" onClick={toggleMenuMobile}>Contact</Link>
      {currentUser && currentUser.role == "admin" ?
        <><Link to="/users" onClick={toggleMenuMobile} >Users</Link></>
        :
        <></>
      }
      <div className="user">
        {currentUser?.username ? "" : <button className="login-button"><Link to="/auth/login">login</Link></button>}
        {currentUser &&
          <div>
            {currentUser?.role == "admin" ? <div className="admin-sign">admin</div> : ""}
            <button disabled={logoutMutation.isLoading} onClick={() => logoutMutation.mutate()}>{logoutMutation.isLoading ? <Loader /> : "logout"}</button>
          </div>}
        <span>{currentUser?.username}</span>
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