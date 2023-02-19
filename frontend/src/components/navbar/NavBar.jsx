import "./navBar.scss"
import { Link } from "react-router-dom"
import { useContext } from 'react';
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

const NavBar = () => {

  const { darkMode, toggle } = useContext(DarkModeContext)

  const { currentUser } = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>coding community</span>
        </Link>
        <ForumOutlinedIcon />
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
        <Person2OutlinedIcon />
        <EmailOutlinedIcon />
        <FmdBadOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePic && currentUser.profilePic} />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar