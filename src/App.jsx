
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from "./pages/Home/Home"
import Video from "./pages/Video/Video"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId/:videoId ' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
