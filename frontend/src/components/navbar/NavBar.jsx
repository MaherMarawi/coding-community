import "./navBar.scss"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { AuthContext } from "../../context/authContext";
import Loader from "../microcomponents/loader/Loader";
import { SearchContext } from "../../context/searchContext";
import { useNavigate } from 'react-router-dom'
import SearchMobile from "./searchmobile/SearchMobile";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MobileMenu from "../navbar/MobileMenu"
const NavBar = () => {

  const navigate = useNavigate();
  const { darkMode, toggle } = useContext(DarkModeContext)
  const { currentUser, logoutMutation } = useContext(AuthContext)
  const { value, handleSubmit, setIsOpen, isOpen } = useContext(SearchContext)
  const [menuMobilePosition, setMenuMobilePosition] = useState(-300)
  const [sv, setSv] = useState()

 
  const toggleMenuMobile = () => {
    setMenuMobilePosition(menuMobilePosition === -280 ? 40 : -280)
  }
  const handleChange = (e) => {
    setSv(e.target.value)
  }
  const handleKey = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSubmit(sv)
      navigate(`/custom/search`);
      setSv("")
    }
  }
  const onclick = () => {
    setIsOpen(isOpen == -90 ? 44 : -90)
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
          <input value={sv} onChange={handleChange} onKeyUp={handleKey} placeholder="Search..."></input>
        </div>
        <SearchOutlinedIcon onClick={() => onclick()} className="search-button" />
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
      <SearchMobile />
      <div className="mobile-menu-trigger" onClick={toggleMenuMobile}><MenuOutlinedIcon /></div>
      <MobileMenu
        toggleMenuMobile={toggleMenuMobile}
        menuMobilePosition={menuMobilePosition}
      />
    </div>
  )
}

export default NavBar