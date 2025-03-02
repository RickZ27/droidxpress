import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminNavbar.css"; 
import logo from "../../assets/whitelogo.png";

const AdminNavbar = () => {
    const [adminName, setAdminName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        const storedAdminName = localStorage.getItem("adminName");

        if (!token) {
            navigate("/admin/login");
        }

        // Set the admin's name
        if (storedAdminName) {
            setAdminName(storedAdminName);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("adminToken"); // Remove token
        localStorage.removeItem("adminName"); // Remove admin name
        navigate("/admin/"); // Redirect to login
    };

    return (
        <nav className="admin-navbar">
            <h3 className="navbar-title">Admin Dashboard</h3>
            <div className="logo">
                <img src={logo} alt="Admin Logo" />
            </div>
            <div className="admin-info">
                {adminName ? (
                    <span className="admin-name">{`Welcome, ${adminName}`}</span>
                ) : (
                    <span className="admin-name">Welcome, Admin</span>
                )}
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default AdminNavbar;
