import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css"; 
import logo from "../../assets/blacklogo.png"; 
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import search from "../../assets/search.png"; 

const Navbar = ({ onUserLogin }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const location = useLocation(); 
  const navigate = useNavigate(); 

  // Check if user is logged in when the component loads
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // Set the user name if present in localStorage
    }
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };
 

    window.addEventListener("storage", handleStorageChange);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
    setUser(null);

    // Trigger storage event to update other components
    window.dispatchEvent(new Event("storage"));

    navigate("/userlogin");
  };
 

  return (
    <header>
      {/* First Row */}
      <div className="top-bar">
        <Link to="/" className="logo">
          <img src={logo} alt="DroidXpress Logo" className="logo-img" />
        </Link>

        <div className="search-bar">
          <input type="text" placeholder="Explore your Smartphone..." />
          <button>
          <img src={search} alt="search btn" className="search-btn" />
          </button>
        </div>


        <div className="user-links">
          <Link to="/wishlist">
          My Wishlist
          </Link>
          <Link to="/cart">
          My Cart
          </Link>
          <Link to="/userdashboard-accountinfo">
          My Account
          </Link>
          {user ? (
            
            // If user is logged in, show username & logout button
            <div className="user-dropdown">
              
              
              <span className="username">Welcome</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            // If user is not logged in, show login link
            <Link to="/userlogin">
              <FaUser /> Login
            </Link>
          )}
        </div>
      </div>

      {/* Second Row */}
      <nav className="navbar">
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/applelist" className={location.pathname === "/applelist" ? "active" : ""}>
              Apple
            </Link>
          </li>
          <li>
            <Link to="/samsunglist" className={location.pathname === "/samsunglist" ? "active" : ""}>
              Samsung
            </Link>
          </li>
          <li>
            <Link to="/vivo" className={location.pathname === "/vivo" ? "active" : ""}>
              Vivo
            </Link>
          </li>
          <li>
            <Link to="/oppo" className={location.pathname === "/oppo" ? "active" : ""}>
              Oppo
            </Link>
          </li>
          <li>
            <Link to="/mi" className={location.pathname === "/mi" ? "active" : ""}>
              MI
            </Link>
          </li>
          <li>
            <Link to="/oneplus" className={location.pathname === "/oneplus" ? "active" : ""}>
              Oneplus
            </Link>
          </li>
          <li>
            <Link to="/gadgets" className={location.pathname === "/gadgets" ? "active" : ""}>
              Gadgets
            </Link>
          </li>

          
          
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
    </header>
  );
};
    
export default Navbar;
