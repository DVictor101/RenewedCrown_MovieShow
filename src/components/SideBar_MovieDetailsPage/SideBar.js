import "./sidebar.css";
import TVLOGO from "../../Assets/tv.png";
import HOMEICON from "../../Assets/Home.png";
import MOVIEICON from "../../Assets/Movie Projector.png";
import TVSHOW from "../../Assets/TV Show.png";
import CALENDER from "../../Assets/Calendar.png";
import LOGOUT from "../../Assets/Logout.png";

const SideBar = () => {
 return (
  <div className="companylogo_cont">
   <div className="logo_cont">
    <img
     src={TVLOGO}
     className="logo"
     alt="tv logo"
    />
    <h2 className="companyName">MovieBox</h2>
   </div>
   <div className="logos_cont">
    <div className="indiv_logo_cont">
     <div className="alignment_correction">
      <img src={HOMEICON} alt="homelogo" />
      <span className="companyName">Home</span>
     </div>
    </div>
    <div className="indiv_logo_cont movies_cont">
     <div className="alignment_correction">
      <img src={MOVIEICON} alt="movielogo" />
      <span className="companyName currentmovie">
       Movies
      </span>
     </div>
    </div>
    <div className="indiv_logo_cont">
     <div className="alignment_correction">
      <img src={TVSHOW} alt="tvshowlogo" />
      <span className="companyName">
       TV Series
      </span>
     </div>
    </div>
    <div className="indiv_logo_cont">
     <div className="alignment_correction">
      <img src={CALENDER} alt="calenderlogo" />
      <span className="companyName">
       Upcoming
      </span>
     </div>
    </div>
   </div>
   <div>
    <div className="playmovie">
     <div className="playtext_cont">
      <span className="playmovietext">
       Play movie quizes and earn free tickets
       <br />
       <span className="othertext">
        50k people are playing now
       </span>
      </span>
     </div>
     <div className="startplaying_cont">
      <span className="startplaying">
       Start playing
      </span>
     </div>
    </div>{" "}
    <div className="indiv_logo_cont logout_cont">
     <div className="alignment_correction">
      <img src={LOGOUT} alt="logoutlogo" />
      <span className="companyName">Log Out</span>
     </div>
    </div>
   </div>
  </div>
 );
};
export default SideBar;
