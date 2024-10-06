import HomeImg from "../assets/home.png";
import gameIcon from "../assets/game_icon.png";
import autoMobiles from "../assets/automobiles.png";
import entertainment from "../assets/entertainment.png";
import Tech from "../assets/tech.png";
import Music from "../assets/music.png";
import Blog from "../assets/blogs.png";
import News from "../assets/news.png";
import simon from "../assets/simon.png";
import Tom from "../assets/tom.png";
import Megan from "../assets/megan.png";
import Cameron from "../assets/cameron.png";
import Jack from "../assets/jack.png";
import Sports from "../assets/sports.png";

const SideBar = () => {
  return (
    <div className="sidebar bg-[#fff] width-[15%] h-[10vh] fixed top-0 pl-[2%] pt-20">
      <div className="sortcut-links">
        <div className="side-links flex items-center mb-3 w-fit flex-wrap cursor-pointer">
          <img className="w-5 mr-5" src={HomeImg} alt="" />
          <p>Home</p>
        </div>

        <div className="side-links flex items-center mb-3 w-fit flex-wrap cursor-pointer">
          <img className="w-5 mr-5"  src={gameIcon} alt="" />
          <p>Gaming</p>
        </div>

        <div className="side-links flex items-center mb-3 w-fit flex-wrap cursor-pointer">
          <img  className="w-5 mr-5" src={autoMobiles} alt="" />
          <p>Automobile</p>
        </div>

        <div className="side-links flex items-center mb-3 w-fit flex-wrap cursor-pointer">
          <img className="w-5 mr-5" src={entertainment} alt="" />
          <p>entertainment</p>
        </div>

        <div className="side-links flex items-center mb-3 w-fit flex-wrap cursor-pointer">
          <img  className="w-5 mr-5" src={Tech} alt="" />
          <p>Technology</p>
        </div>

        <div className="side-links flex items-center mb-3 w-fit flex-wrap cursor-pointer">
          <img  className="w-5 mr-5" src={Music} alt="" />
          <p>Music</p>
        </div>

        <div className="side-links flex items-center mb-3 w-fit flex-wrap cursor-pointer">
          <img  className="w-5 mr-5" src={Blog} alt="" />
          <p>Blog</p>
        </div>

        <div className="side-links flex items-center mb-3 w-fit flex-wrap cursor-pointer">
          <img className="w-5 mr-5"  src={News} alt="" />
          <p>News</p>
        </div>

        <div className="side-links flex items-center mb-3 w-fit flex-wrap cursor-pointer">
          <img  className="w-5 mr-5" src={Sports} alt="" />
          <p>Sports</p>
        </div>
        <hr className="border-0 h-[1px] bg-[#ccc] w-[85%]" />
      </div>
      <div className="subscribed-list">
        <h3 className="text-sm py-[10px] px-0 text-[#5a5a5a]">Subscribed</h3>
        <div className="side-link flex items-center mb-3 w-fit flex-wrap cursor-pointer">
            <img className="w-6 rounded-full mr-5" src={Jack} alt="" /><p className="text-base">PewDewPie</p>
        </div>

        <div className="side-link flex items-center mb-3 w-fit flex-wrap cursor-pointer">
            <img className="w-6 rounded-full mr-5" src={simon} alt="" /><p>MrBeast</p>
        </div>

        <div className="side-link flex items-center mb-3 w-fit flex-wrap cursor-pointer">
            <img className="w-6 rounded-full mr-5"src={Tom} alt="" /><p>Justin Bieber</p>
        </div>

        <div className="side-link flex items-center mb-3 w-fit flex-wrap cursor-pointer">
            <img className="w-6 rounded-full mr-5" src={Megan} alt="" /><p>5 Minute Craft</p>
        </div>

        <div className="side-link flex items-center mb-3 w-fit flex-wrap cursor-pointer">
            <img className="w-6 rounded-full mr-5" src={Cameron} alt="" /><p>Nas Dail</p>
        </div>

      </div>
    </div>
  );
};

export default SideBar;
