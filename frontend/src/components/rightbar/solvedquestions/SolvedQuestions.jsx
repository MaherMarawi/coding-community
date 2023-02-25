

const SolvedQuestions = () => {
  return (
    <div className="item">
          <span>Recent solved questions</span>
          <div className="question">
            <div className="questionInfo">
              <p><span>nodejs</span> has been solved</p>
            </div>
            <span className="time-solved">1 min ago</span>
          </div><div className="question">
            <div className="questionInfo">
              <p><span>react</span> has been solved</p>
            </div>
            <span className="time-solved">1 min ago</span>
          </div><div className="question">
            <div className="questionInfo">
              <p><span>java</span> has been solved</p>
            </div>
            <span className="time-solved">1 min ago</span>
          </div>
        </div>
  )
}

export default SolvedQuestions