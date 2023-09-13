import "./mainheader.css";
import FRUITLOGO from "../../Assets/PngItem_1381056 1.png";
import IMDBLOGO from "../../Assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import WATCHTRAILERLOGO from "../../Assets/Button.png";
const MainHeader = () => {
 return (
  <div className="mainheader">
   <div className="mainheader_div">
    <div className="title_div">
     <h1 className="title">
      John Wick 3 :
      <br />
      Parabellum
     </h1>
    </div>
    <div className="imdb_div">
     <div className="imdbiimg_div">
      <img src={IMDBLOGO} alt="imdblogo" />
      <span className="rating">86.0 / 100</span>
     </div>
     <div className="imdbiimg_divtwo">
      <img src={FRUITLOGO} alt="fruitlogo" />
      <span>97%</span>
     </div>
    </div>
    <div>
     <p className="movie_text">
      John Wick is on the run after killing a
      member of the international assassins'
      guild, and with a $14 million price tag on
      his head, he is the target of hit men and
      women everywhere.
     </p>
    </div>
    <div>
     <img
      src={WATCHTRAILERLOGO}
      alt="watchtrailerlogo"
     />
    </div>
   </div>
  </div>
 );
};
export default MainHeader;
