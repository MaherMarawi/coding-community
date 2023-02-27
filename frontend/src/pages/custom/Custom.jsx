import "./custom.scss";
import RatedQuestions from "../../components/rightbar/ratedquestions/RatedQuestions";
import { useLocation } from "react-router-dom";
import Question from "../../components/question/question/Question"
const Custom = (props) => {
  let { state } = useLocation()
  console.log(state)
  return (
    <div className="custom">

      <div className="questions">
        {state.questions && state.questions.map(q => (
          <Question question={q} key={q._id} />
        ))}
        {/* <Question questions={state.questions} /> */}
      </div>
    </div>
  );
};

export default Custom