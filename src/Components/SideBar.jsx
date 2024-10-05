import React from 'react'
import HomeImg from "../assets/home.png"
import gameIcon from "../assets/game_icon.png"
import autoMobiles from "../assets/automobiles.png"
import entertainment from "../assets/entertainment.png"
import Tech from "../assets/tech.png"
import Music from "../assets/music.png"
import Blog from "../assets/blogs.png"
import News from "../assets/news.png"
import simon from "../assets/simon.png"
import Tom from "../assets/tom.png"
import Megan from "../assets/megan.png"
import Cameron from "../assets/cameron.png"
import Sports from "../assets/sports.png"



const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sortcut-links">
        <div className="side-links">
            <img src={HomeImg} alt="" /><p>Home</p>
        </div>

        <div className="side-links">
            <img src={gameIcon} alt="" /><p>Gaming</p>
        </div>

        <div className="side-links">
            <img src={autoMobiles} alt="" /><p>Automobile</p>
        </div>

        <div className="side-links">
            <img src={entertainment} alt="" /><p>Home</p>
        </div>

        <div className="side-links">
            <img src={Tech} alt="" /><p>Home</p>
        </div>

        <div className="side-links">
            <img src={Music} alt="" /><p>Home</p>
        </div>

        <div className="side-links">
            <img src={Blog} alt="" /><p>Home</p>
        </div>

        <div className="side-links">
            <img src={News} alt="" /><p>Home</p>
        </div>

        <div className="side-links">
            <img src={HomeImg} alt="" /><p>Home</p>
        </div>

        <div className="side-links">
            <img src={HomeImg} alt="" /><p>Home</p>
        </div>

        <div className="side-links">
            <img src={HomeImg} alt="" /><p>Home</p>
        </div>

        <div className="side-links">
            <img src={HomeImg} alt="" /><p>Home</p>
        </div>

        <div className="side-links">
            <img src={HomeImg} alt="" /><p>Home</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
