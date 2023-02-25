import "./navBar.scss"
import { Link } from "react-router-dom"
import { useContext, useState } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { AuthContext } from "../../context/authContext";
import Loader from "../microcomponents/loader/Loader";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MobileMenu from "./MobileMenu";

const NavBar = () => {

  const { darkMode, toggle } = useContext(DarkModeContext)
  const { currentUser, logoutMutation } = useContext(AuthContext)
  const [menuMobilePosition, setMenuMobilePosition] = useState(-300)

  const toggleMenuMobile = () => {
    setMenuMobilePosition(menuMobilePosition === -300 ? 40 : -300)
  }
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>coding community</span>
        </Link>
        {
          darkMode
            ?
            <div className="darkMode"><WbSunnyOutlinedIcon onClick={toggle} /></div>
            :
            <div className="darkMode"><DarkModeOutlinedIcon onClick={toggle} /></div>
        }
        <div className="search">
          <SearchOutlinedIcon />
          <input placeholder="Search..."></input>
        </div>
      </div>
      <div className="right">
        <div className="user">
          {currentUser?.username ? "" : <button className="login-button"><Link to="/auth/login">login</Link></button>}
          {currentUser &&
            <div>
              {currentUser?.role == "admin" ? <div className="admin-sign">admin</div> : ""}
              <button disabled={logoutMutation.isLoading} onClick={() => logoutMutation.mutate()}>{logoutMutation.isLoading ? <Loader /> : "logout"}</button>
            </div>}
          <span>{currentUser?.username}</span>
        </div>
      </div>
      <div className="mobile-menu" onClick={toggleMenuMobile}><MenuOutlinedIcon /></div>
      <MobileMenu toggleMenuMobile={toggleMenuMobile} menuMobilePosition={menuMobilePosition} />
    </div>
  )
}

export default NavBar