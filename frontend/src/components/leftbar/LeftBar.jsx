import "./leftBar.scss"
import image from "../../assets/7.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const LeftBar = () => {


  const {currentUser, logout} = useContext(AuthContext)


  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            {/* <img src={currentUser.profilePic && currentUser.profilePic} /> */}
            <span>{currentUser?.name}</span>
          </div>
          <div className="item">
            <img src={image} />
            <span>Jhon Doe</span>
          </div>
          <div className="item">
            <img src={image} />
            <span>Jhon Doe</span>
          </div>
          <div className="item">
            <button onClick={() => logout()}>logout</button>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <img src={image} />
            <span>Jhon Doe</span>
          </div>
          <div className="item">
            <img src={image} />
            <span>Jhon Doe</span>
          </div>
          <div className="item">
            <img src={image} />
            <span>Jhon Doe</span>
          </div><div className="item">
            <img src={image} />
            <span>Jhon Doe</span>
          </div>
          <div className="item">
            <img src={image} />
            <span>Jhon Doe</span>
          </div><div className="item">
            <img src={image} />
            <span>Jhon Doe</span>
          </div>
          <div className="item">
            <img src={image} />
            <span>Jhon Doe</span>
          </div><div className="item">
            <img src={image} />
            <span>Jhon Doe</span>
          </div>
          <div className="item">
            <img src={image} />
            <span>Jhon Doe</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar