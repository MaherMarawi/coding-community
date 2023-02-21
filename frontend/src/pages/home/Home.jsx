import AddQuestion from "../../components/question/addquestion/AddQuestion"
import Questions from "../../components/questions/Questions"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <AddQuestion />
      <Questions />
    </div>
  )
}

export default Home