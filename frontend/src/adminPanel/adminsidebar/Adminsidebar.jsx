// src/components/Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./adminsidebar.css"; 

const AdminSidebar = () => {
    const location = useLocation(); 

    return (
        <div className="sidebar">
            
            <ul className="sidebar-menu">
                <li className={location.pathname === "/admin/dashboard" ? "active" : ""}>
                    <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li className={location.pathname === "/admin/listproduct" || location.pathname === "/admin/add-product" || location.pathname === "/admin/edit-product" || location.pathname.includes("/admin/edit-product/") ? "active" : ""}>
                    <Link to="/admin/listproduct">Products Management</Link>
                </li>

                <li className={location.pathname === "/admin/adminorder" ? "active" : ""}>
                    <Link to="/admin/adminorder">Order Management</Link>
                </li>
                <li className={location.pathname === "/admin/settings" ? "active" : ""}>
                    <Link to="/admin/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
