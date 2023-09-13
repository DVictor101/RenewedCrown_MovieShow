import "./homepage.css"
import MovieList from "../../components/movieList/movieList";
import HeaderComponent from "../../components/HeaderHomeComp/Header";
import Footer from "../../components/footer/footer";

function HomePage() {
 return (
  <div className="homepage">
   <HeaderComponent />
   <MovieList />
   <Footer />
  </div>
 );
}

export default HomePage;
