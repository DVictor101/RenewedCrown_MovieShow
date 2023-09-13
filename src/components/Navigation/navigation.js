import "./navigation.css";
import TVLOGO from "../../Assets/tv.png";
import MovieSearch from "../MovieSearch/movieSearch";

const Navigation = () => {
 return (
  <div className="nav">
   <div className="companytitle_cont">
    <img
     src={TVLOGO}
     className="logo"
     alt="tv logo"
    />

    <h2 className="companyName">MovieBox</h2>
   </div>
   <div className="moviesearch_container">
    <MovieSearch />
   </div>
   <div className="signin_cont">
    <span className="signin">Sign in</span>
    <div className="menu_cont">
     <div className="menu"></div>
     <div className="menu"></div>
    </div>
   </div>
  </div>
 );
};
export default Navigation;
