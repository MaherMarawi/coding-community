import AddQuestion from "../../components/addquestion/AddQuestion"
import Posts from "../../components/posts/Posts"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <AddQuestion />
      <Posts />
    </div>
  )
}

export default Home