import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom"
import Loader from "../microcomponents/loader/Loader"

const MobileMenu = ({ menuMobilePosition, toggleMenuMobile }) => {

    const { currentUser, logoutMutation } = useContext(AuthContext)

  return (
    <div className="navbar-items-mobile" style={{ top: menuMobilePosition }}>
        <a onClick={toggleMenuMobile} href='#About' >Contact</a>
        <a onClick={toggleMenuMobile} href='#Experience'>About</a>
        <a onClick={toggleMenuMobile} href='#Projects'>Most rated questions</a>
        <a onClick={toggleMenuMobile} href='#Education'>Recent solved questions</a>
        <a onClick={toggleMenuMobile} href='#Contact'>Active users</a>
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
  )
}

export default MobileMenu