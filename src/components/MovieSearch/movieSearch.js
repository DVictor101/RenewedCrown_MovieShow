import "./moviesearch.css";
import SEARCHTAG from "../../Assets/Icon.png";

function MovieSearch() {
 return (
  <div className="moviesearch">
   <input
    type="text"
    className="movieinput"
    placeholder="What do you want to watch?"
   />
   <img
    className="seachimg"
    src={SEARCHTAG}
    alt="search"
   />
  </div>
 );
}

export default MovieSearch;
