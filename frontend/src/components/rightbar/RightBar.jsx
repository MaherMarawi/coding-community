import "./rightBar.scss"
import image from "../../assets/7.png"
import RatedQuestions from "./ratedquestions/RatedQuestions"
import { useQuery } from "@tanstack/react-query"
import { getQuestions } from "../../api/questionsApi"
import SolvedQuestions from "./solvedquestions/SolvedQuestions"
import ActiveUsers from "./activeusers/ActiveUsers"
import { useState, useEffect, useContext } from "react"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MobileMenu from "../navbar/MobileMenu"
// import { DarkModeContext } from "../../context/darkModeContext"

const RightBar = () => {

  const [menuMobilePosition, setMenuMobilePosition] = useState(-280)
  const toggleMenuMobile = () => {
    setMenuMobilePosition(menuMobilePosition === -280 ? 40 : -280)
  }

  // const questions = useQuery({
  //   queryKey: ["questions"],
  //   queryFn: () => getQuestions(),
  //   staleTime: 3 * (60 * 1000), // 10 mins 
  //   cacheTime: 5 * (60 * 1000), // 15 mins
  //   onSuccess: data => {
  //     const rq = data.sort(
  //       (q1, q2) => (q1.rate?.length < q2.rate?.length) ? 1
  //         : (q1.rate?.length > q2.rate?.length) ? -1
  //           : 0)
  //     setRatedQuestions(rq)
  //     const sq = data.filter(q => q.comment_id)
  //     setSolvedQuestions(sq)
  //   }
  // })

  return (
    <>
      <div className="mobile-menu" onClick={toggleMenuMobile}><MenuOutlinedIcon /></div>
      <MobileMenu
        toggleMenuMobile={toggleMenuMobile}
        menuMobilePosition={menuMobilePosition}
      />
      <div className="rightbar">
        <div className="container">
          <RatedQuestions  />
          <SolvedQuestions  />
          {/* <ActiveUsers /> */}
        </div>
      </div>
    </>
  )
}

export default RightBar