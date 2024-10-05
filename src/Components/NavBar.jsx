import menu_con from "../assets/menu.png";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png"
import uploadIcon from "../assets/upload.png";
import moreIcon from "../assets/more.png"
import notifictionIcon from "../assets/notification.png"
import profileIcon from "../assets/user_profile.jpg"

const NavBar = () => {
  return (
    <nav className=" flex-div ">
      <div className="nav-left flex-div">
        <img className="" src={menu_con} alt="" />
        <img className="" src={logo} alt="" />
      </div>
      <div className="nav-middel flex-div">
        <input className="" type="text" placeholder="Search" />
        <img src={searchIcon} alt="" />
      </div>
      <div className="nav-right flex-div">
        <img src={uploadIcon}  />
        <img src={moreIcon}  />
        <img src={notifictionIcon}  />
        <img src={profileIcon} className="user-icon"  />
      </div>
    </nav>
  );
};

export default NavBar;
