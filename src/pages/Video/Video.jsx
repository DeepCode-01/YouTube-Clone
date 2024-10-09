import { useParams } from 'react-router-dom'
import PlayVideo from "../../Components/PlayVideo"


const Video = () => {
  const { categoryId, videoId } = useParams();

  return (
    <div className="play-container">
      <PlayVideo categoryId={categoryId} videoId={videoId} />
    </div>
  )
}

export default Video

