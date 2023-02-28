import { useContext } from "react"
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
  ratedQuestions,
  solvedQuestions,
  isLoading
}) => {

  const { darkMode, toggle } = useContext(DarkModeContext)
  const { currentUser, logoutMutation } = useContext(AuthContext)

  return (
    <div className="navbar-items-mobile" style={{ top: menuMobilePosition }}>
      <Link to="/about">
        <a onClick={toggleMenuMobile}>About</a>
      </Link>
      <Link to="/contact">
        <a onClick={toggleMenuMobile} >Contact</a>
      </Link>
      {
        isLoading ? <Loader /> : <>
      <Link to="/custom" state={{ questions: ratedQuestions }}>
        <a onClick={toggleMenuMobile}  >Most rated questions</a>
      </Link>
      <Link to="/custom" state={{ questions: solvedQuestions }}>
        <a onClick={toggleMenuMobile}  >Recent solved questions</a>
      </Link>
        </>
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