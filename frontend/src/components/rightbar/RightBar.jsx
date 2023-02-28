import "./rightBar.scss"
import image from "../../assets/7.png"
import RatedQuestions from "./ratedquestions/RatedQuestions"
import { useQuery } from "@tanstack/react-query"
import { getQuestions } from "../../api/questionsApi"
import SolvedQuestions from "./solvedquestions/SolvedQuestions"
import ActiveUsers from "./activeusers/ActiveUsers"
import { useState, useEffect } from "react"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MobileMenu from "../navbar/MobileMenu"
const RightBar = () => {

  const [ratedQuestions, setRatedQuestions] = useState()
  const [solvedQuestions, setSolvedQuestions] = useState()
  const [menuMobilePosition, setMenuMobilePosition] = useState(-180)
  const toggleMenuMobile = () => {
    setMenuMobilePosition(menuMobilePosition === -300 ? 40 : -300)
  }
  const questions = useQuery({
    queryKey: ["questions"],
    staleTime: 10 * (60 * 1000), // 10 mins 
    cacheTime: 15 * (60 * 1000), // 15 mins
    queryFn: () => getQuestions(),
    onSuccess: data => {
      const rq = data.sort(
        (q1, q2) => (q1.rate?.length < q2.rate?.length) ? 1
          : (q1.rate?.length > q2.rate?.length) ? -1
            : 0)
      setRatedQuestions(rq)
      const sq = data.filter(q => q.comment_id)
      setSolvedQuestions(sq)
    }
  })
  useEffect(() => {
  }, [questions.data]);
  return (
    <>
      <div className="mobile-menu" onClick={toggleMenuMobile}><MenuOutlinedIcon /></div>
      <MobileMenu
        toggleMenuMobile={toggleMenuMobile}
        menuMobilePosition={menuMobilePosition}
        ratedQuestions={ratedQuestions}
        solvedQuestions={solvedQuestions}
      />
      <div className="rightbar">
        <div className="container">
          <RatedQuestions questions={ratedQuestions} isLoading={questions.isLoading} />
          <SolvedQuestions questions={solvedQuestions} isLoading={questions.isLoading} />
          {/* <ActiveUsers /> */}
        </div>
      </div>
    </>
  )
}

export default RightBar