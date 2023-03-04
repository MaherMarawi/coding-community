import "./rightBar.scss"
import image from "../../assets/7.png"
import RatedQuestions from "./ratedquestions/RatedQuestions"
import SolvedQuestions from "./solvedquestions/SolvedQuestions"
import ActiveUsers from "./activeusers/ActiveUsers"
import { useState, useEffect, useContext } from "react"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MobileMenu from "../navbar/MobileMenu"

const RightBar = () => {

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
        </div>
      </div>
    </>
  )
}

export default RightBar