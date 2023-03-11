import "./navBar.scss"
import { Link } from "react-router-dom"
import { useCallback, useContext, useMemo, useState } from 'react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuMobilePosition = useMemo(() => {
    return {
      width: mobileMenuOpen ? "150px" : "0px",
      padding: mobileMenuOpen ? "20px" : "0px",
    }
  }, [mobileMenuOpen])
  const statusMobilePosition = useMemo(() => {
    return {
      display: mobileMenuOpen ? "flex" : "none"
    }
  }, [mobileMenuOpen])

  const toggleMenuMobile = () => {
    setMobileMenuOpen(prev => !prev)
  }
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const MobileSearchPosition = useMemo(() => {
    return {
      height: mobileSearchOpen ? "30px" : "0px",
      border: mobileSearchOpen ? "1px solid black" : "none"
    }
  }, [mobileSearchOpen])
  const buttonSearchPosition = useMemo(() => {
    return {
      display: mobileSearchOpen ? "block" : "none"
    }
  }, [mobileSearchOpen])

  const toggleSearchMobile = () => {
    setMobileSearchOpen(prev => !prev)
  }

  const [sv, setSv] = useState()

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
        <SearchOutlinedIcon onClick={() => toggleSearchMobile()} className="search-button" />
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
      <SearchMobile
        toggleSearchMobile={toggleSearchMobile}
        MobileSearchPosition={MobileSearchPosition}
        buttonSearchPosition={buttonSearchPosition}
      />
      <div className="mobile-menu-trigger" onClick={() => toggleMenuMobile()}><MenuOutlinedIcon /></div>
      <MobileMenu
        statusMobilePosition={statusMobilePosition}
        toggleMenuMobile={toggleMenuMobile}
        menuMobilePosition={menuMobilePosition}
      />
    </div>
  )
}

export default NavBar