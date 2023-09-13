import "./moviedetailspage.css";
import MovieDetails from "../../components/movieDetails/movieDetails";
import SideBar from "../../components/SideBar_MovieDetailsPage/SideBar";
const MovieDetailsPage = () => {
 return (
  <div className="moviedetailspage">
   <SideBar />
   <MovieDetails />
  </div>
 );
};
export default MovieDetailsPage;
