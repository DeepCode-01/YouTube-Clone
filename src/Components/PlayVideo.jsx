import React from "react";
import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Channel for art and craft</h3>
      <div className="play-video-info">
        <p>265k views &bull; 3 days ago</p>
        <div className="">
          <span>
            <img src={like} alt="" />
            154
          </span>
          <span>
            <img src={dislike} alt="" />
            54
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PlayVideo;
