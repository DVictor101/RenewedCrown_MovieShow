import "./footer.css";
import FACEBOOK from "../../Assets/fa-brands_facebook-square.png";
import INSTAGRAM from "../../Assets/Vector.png";
import TWITTERLOGO from "../../Assets/Vector (1).png";
import YOUTUBELOGO from "../../Assets/Vector (2).png";

const Footer = () => {
 return (
  <div className="footer">
   <div className="footer_cont">
    <div className="footerimg">
     <img src={FACEBOOK} alt="facebooklogo" />
     <img src={INSTAGRAM} alt="instagramlogo" />
     <img src={TWITTERLOGO} alt="twitterlogo" />
     <img src={YOUTUBELOGO} alt="youtubelogo" />
    </div>
    <div className="text_cont">
     <span className="text">Conditions of Use</span>
     <span className="text">Privacy & Olicy</span>
     <span className="text">Press Room</span>
    </div>
    <div className="copuright_div text text_two">
     © 2021 MovieBox by Adriana Eka Prayudha
    </div>{" "}
   </div>
  </div>
 );
};
export default Footer;
