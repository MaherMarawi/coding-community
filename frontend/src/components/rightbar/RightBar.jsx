import "./rightBar.scss"
import image from "../../assets/7.png"

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>suggestions</span>
          <div className="user">
            <div className="userInfo"> 
              <img src={image} />
              <span>Jhon Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismis</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo"> 
              <img src={image} />
              <span>Jhon Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismis</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Last activity</span>
          <div className="user">
            <div className="userInfo"> 
              <img src={image} />
              <p><span>Jhon Doe</span> changed their profile image</p>
            </div>
            <span>1 min ago</span>
          </div><div className="user">
            <div className="userInfo"> 
              <img src={image} />
              <p><span>Jhon Doe</span> changed their profile image</p>
            </div>
            <span>1 min ago</span>
          </div><div className="user">
            <div className="userInfo"> 
              <img src={image} />
              <p><span>Jhon Doe</span> changed their profile image</p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userInfo"> 
              <img src={image} />
              <div className="online"></div>
              <span>Jhon Doe</span>
            </div>
          </div><div className="user">
            <div className="userInfo"> 
              <img src={image} />
              <div className="online"></div>
              <span>Jhon Doe</span>
            </div>
          </div><div className="user">
            <div className="userInfo"> 
              <img src={image} />
              <div className="online"></div>
              <span>Jhon Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar