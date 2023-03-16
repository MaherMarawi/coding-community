import "./leftBar.scss"
import image from "../../assets/7.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom"
import { NavigatorContext } from "../../context/navContext"

const LeftBar = () => {


  const { currentUser, logout } = useContext(AuthContext)
  const { activeTab, handleActiveTab } = useContext(NavigatorContext)

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          {/* <div className="user">
            <span>{currentUser?.name}</span>
          </div> */}
          <div className={activeTab == "/" ? "active" : "item"} onClick={handleActiveTab}>
            <Link to="/" >
              <span name="/">Questions</span>
            </Link>
          </div>
          <div className={activeTab == "/richEditor" ? "active" : "item"} onClick={handleActiveTab}>
            <Link to="/richEditor" >
              <span name="/richEditor">Rich Editor Questions</span>
            </Link>
          </div>
          <div className={activeTab == "/contact" ? "active" : "item"} onClick={handleActiveTab}>
            <Link to="/contact" >
              <span name="/contact">Contact</span>
            </Link>
          </div>
          <div className={activeTab == "/about" ? "active" : "item"} onClick={handleActiveTab}>
            <Link to="/about" >
              <span name="/about">About</span>
            </Link>
          </div>
          {currentUser && currentUser.role == "admin" ?
            <>
              <div className={activeTab == "/users" ? "active" : "item"} onClick={handleActiveTab}>
                <Link to="/users" >
                  <span name="/users">Users</span>
                </Link>
              </div>
            </>
            :
            <></>}
        </div>
        <hr />
      </div>
    </div>
  )
}

export default LeftBar