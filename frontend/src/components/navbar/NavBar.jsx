import "./navBar.scss"
import { Link } from "react-router-dom"
import { useContext, useEffect } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import logo from "../../assets/7.png"
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdBadOutlinedIcon from '@mui/icons-material/FmdBadOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { AuthContext } from "../../context/authContext";
import { useQueryClient } from "@tanstack/react-query";
import Loader from "../microcomponents/loader/Loader";

const NavBar = () => {
  const queryClient = useQueryClient()
  const { darkMode, toggle } = useContext(DarkModeContext)

  const { currentUser, logoutMutation } = useContext(AuthContext)
  // const loadQuestions = queryClient.getQueryState(["questions"]).status

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
    </div>
  )
}

export default NavBar