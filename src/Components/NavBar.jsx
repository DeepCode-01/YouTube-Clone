import menu_con from "../assets/menu.png";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import uploadIcon from "../assets/upload.png";
import moreIcon from "../assets/more.png";
import notifictionIcon from "../assets/notification.png";
import profileIcon from "../assets/user_profile.jpg";

const NavBar = () => {
  return (
    <nav className=" flex-div py-3 px-[2%] justify-between bg-white sticky top-0 z-10 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
      <div className="nav-left flex-div">
        <img className="w-5 mr-6" src={menu_con} alt="" />
        <img className="w-[130px]" src={logo} alt="" />
      </div>
      <div className="nav-middel flex-div">
        <div className="search-box flex-div border-[1px] border-solid border-[#ccc] mt-4 py-2 px-3 rounded-[25px]" >
          <input className="w-[400px] border-0 outline-0 bg-transparent" type="text" placeholder="Search" />
          <img className="w-4" src={searchIcon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div ">
        <img className="w-6 mr-6" src={uploadIcon} />
        <img className="w-6 mr-6" src={moreIcon} />
        <img className="w-6 mr-6" src={notifictionIcon} />
        <img className="w-9 rounded-full" src={profileIcon}  />
      </div>
    </nav>
  );
};

export default NavBar;
