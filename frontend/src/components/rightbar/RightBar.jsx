import "./rightBar.scss"
import image from "../../assets/7.png"
import { Link } from "react-router-dom"

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
            <span className="title">Most rated questions</span>
          <div className="question">
            <div className="questionInfo">
              {/* <img src={image} /> */}
              <span>jsx syntax</span>
            </div>
            <div className="result">
              <span className="not-solved">not solved</span>
              {/* <button>follow</button>
              <button>dismis</button> */}
            </div>
          </div>
          <div className="question">
            <div className="questionInfo">
              {/* <img src={image} /> */}
              <span>textarea resize</span>
            </div>
            <div className="result">
              <span className="solved">solved</span>
              {/* <button>follow</button>
              <button>dismis</button> */}
            </div>
          </div>
        </div>
        <div className="item">
          <span>Recent solved questions</span>
          <div className="question">
            <div className="questionInfo">
              <img src={image} />
              <p><span>nodejs</span> has been solved</p>
            </div>
            <span className="time-solved">1 min ago</span>
          </div><div className="question">
            <div className="questionInfo">
              <img src={image} />
              <p><span>react</span> has been solved</p>
            </div>
            <span className="time-solved">1 min ago</span>
          </div><div className="question">
            <div className="questionInfo">
              <img src={image} />
              <p><span>java</span> has been solved</p>
            </div>
            <span className="time-solved">1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Active users</span>
          <div className="question">
            <div className="questionInfo">
              <img src={image} />
              <span>Jhon Doe</span>
            </div>
          </div><div className="question">
            <div className="questionInfo">
              <img src={image} />
              <span>Jhon Doe</span>
            </div>
          </div><div className="question">
            <div className="questionInfo">
              <img src={image} />
              <span>Jhon Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar