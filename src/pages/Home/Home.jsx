import Feed from "../../Components/Feed"
import SideBar from "../../Components/SideBar"

const Home = ({ sidebar }) => {
  return (
    <>
      <SideBar sidebar={sidebar} />
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home
