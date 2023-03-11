import "./leftBar.scss"
import image from "../../assets/7.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom"

const LeftBar = () => {


  const { currentUser, logout } = useContext(AuthContext)


  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <span>{currentUser?.name}</span>
          </div>
          <div className="item">
            <Link to="/" >
              <span>Questions</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/richEditor" >
              <span>Rich Editor Questions</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/contact" >
              <span>Contact</span>
            </Link>
          </div>
          <div className="item">
            <Link to="/about" >
              <span>About</span>
            </Link>
          </div>
          {currentUser && currentUser.role == "admin" ?
            <>
              <div className="item">
                <Link to="/users" >
                  <span>Users</span>
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