import "./header.css";
import Navigation from "../Navigation/navigation";
import MainHeader from "../MainHeader/MainHeader";
import PAGINATION from "../../Assets/Pagination Box.png";
const HeaderComponent = () => {
 return (
  <div className="header">
   <div className="pagi_cont">
    <img src={PAGINATION} alt="pagination" />
   </div>
   <Navigation />
   <MainHeader />
  </div>
 );
};
export default HeaderComponent;
