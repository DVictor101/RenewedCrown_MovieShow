import "./header.css";
import Navigation from "../Navigation/navigation";
import MainHeader from "../MainHeader/MainHeader";
const HeaderComponent = () => {
 return (
  <div className="header">
   <Navigation />
   <MainHeader />
  </div>
 );
};
export default HeaderComponent;
