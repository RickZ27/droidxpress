import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>About Us</h3>
          <p>At DroidXpress, we bring you the latest mobile phones from every brand at unbeatable prices. Shop with confidence for 100% genuine products and top customer support.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: droidxpress@gmail.com</p>
          <p>Phone: 9841447536</p>
          <p>Tel: 01-4781401</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link to="#"><FaFacebook size={24} /></Link>
            <Link to="#"><FaInstagram size={24} /></Link>
            <Link to="#"><FaTwitter size={24} /></Link>
            <Link to="#"><FaLinkedin size={24} /></Link>
          </div>
        </div>
      </div>

      <div className="line">
    </div>
    
      <div className="footer-bottom">
        <p>&copy; 2025 DroidXpress. All trademarks and brands are the property of their respective owners.</p>
      </div>
    </footer>
  );
};

export default Footer;
