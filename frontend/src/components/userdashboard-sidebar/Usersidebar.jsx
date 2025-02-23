import { useNavigate, useLocation } from "react-router-dom";
import "./usersidebar.css"; 

const UserSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  return (
    <aside className="usersidebar">
      <ul>
        <li
          onClick={() => navigate("/userdashboard-accountinfo")}
          className={location.pathname === "/userdashboard-accountinfo" ? "active" : ""}
        >
          Account Dashboard
        </li>
        <li
          onClick={() => navigate("/orders")}
          className={location.pathname === "/orders" ? "active" : ""}
        >
          My Orders
        </li>
        <li
          onClick={() => navigate("/wishlist")}
          className={location.pathname === "/wishlist" ? "active" : ""}
        >
          My Wishlist
        </li>
        <li
          onClick={() => navigate("/edituser-info")}
          className={location.pathname === "/edituser-info" ? "active" : ""}
        >
          Edit Information
        </li>
      </ul>
    </aside>
  );
};

export default UserSidebar;