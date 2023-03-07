import "./rightBar.scss"
import RatedQuestions from "./ratedquestions/RatedQuestions"
import SolvedQuestions from "./solvedquestions/SolvedQuestions"
import ActiveUsers from "./activeusers/ActiveUsers"
import { useState, useContext } from "react"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MobileMenu from "../navbar/MobileMenu"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"


const RightBar = () => {

  const { currentUser, logout } = useContext(AuthContext)
  const [menuMobilePosition, setMenuMobilePosition] = useState(-280)
  const toggleMenuMobile = () => {
    setMenuMobilePosition(menuMobilePosition === -280 ? 40 : -280)
  }

  return (
    <>
      <div className="mobile-menu" onClick={toggleMenuMobile}><MenuOutlinedIcon /></div>
      <MobileMenu
        toggleMenuMobile={toggleMenuMobile}
        menuMobilePosition={menuMobilePosition}
      />
      <div className="rightbar">
        <div className="container">
          <RatedQuestions />
          <SolvedQuestions />
          {/* <ActiveUsers /> */}
          <div className="item tab-item"><Link to="/about"><span>about</span></Link></div>
          <div className="item tab-item"><Link to="/contact"><span>contact</span></Link></div>
          {currentUser && currentUser.role == "admin" ?
            <><div className="item tab-item"><Link to="/users"><span>users</span></Link></div></>
            :
            <></>
          }
        </div>
      </div>
    </>
  )
}

export default RightBar