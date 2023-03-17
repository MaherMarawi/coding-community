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
          <div className={activeTab == "/" ? "active" : "item"} >
            <Link to="/" >
              <span name="/" onClick={handleActiveTab}>Questions</span>
            </Link>
          </div>
          <div className={activeTab == "/richEditor" ? "active" : "item"} >
            <Link to="/richEditor" >
              <span name="/richEditor" onClick={handleActiveTab}>R-E Questions</span>
            </Link>
          </div>
          <div className={activeTab == "/contact" ? "active" : "item"} >
            <Link to="/contact" >
              <span name="/contact" onClick={handleActiveTab}>Contact</span>
            </Link>
          </div>
          <div className={activeTab == "/about" ? "active" : "item"} >
            <Link to="/about" >
              <span name="/about" onClick={handleActiveTab}>About</span>
            </Link>
          </div>
          {currentUser && currentUser.role == "admin" ?
            <>
              <div className={activeTab == "/users" ? "active" : "item"} >
                <Link to="/users" >
                  <span name="/users" onClick={handleActiveTab}>Users</span>
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