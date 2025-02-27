import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heart } from "lucide-react";

import "./landingpage.css";



const Landingpage = () => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [featuredLaptops, setFeaturedLaptops] = useState([]);
  const [featuredGamingLaptops, setFeaturedGamingLaptops] = useState([]);
  const [featuredGadgets, setFeaturedGadgets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/')
      .then(response => setFeaturedLaptops(response.data))
      .catch(error => console.error(error));

    // axios.get('http://localhost:5000/api/products/category/Samsung')
    //   .then(response => setFeaturedGamingLaptops(response.data))
    //   .catch(error => console.error(error));

    // axios.get('http://localhost:5000/api/products/category/Oppo')
    //   .then(response => setFeaturedGadgets(response.data))
    //   .catch(error => console.error(error));
  }, []);

 


  const handleAddToWishlist = async (productId) => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      alert("Please log in to add items to your wishlist.");
      navigate("/userlogin");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/cartlist/add",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        alert("Product added to cartlist!");
      } else {
        alert(response.data.message); // Show the message from the backend
      }
    } catch (error) {
      alert("Product is already in your list");
    }
  };
  return (
    <>
      

      <div className="featured-container">
        <div className="featured-heading">
          <h2>Our Latest Sales</h2>
          
        </div>

        <div className="feature-content">
          {featuredLaptops.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.images?.length > 0 ? product.images[0] : laptopImage}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info"
                onClick={() => navigate(`/laptopdetail/${product.id}`)}
              >
                <h3 className="product-title">{product.name}
                  <span className="product-model"> | Model {product.modelseries}</span>
                  <span className="product-processor"> | {product.processor} Processor</span>
                  <span className="product-ram"> | {product.ram} RAM</span>
                  <span className="product-storage"> | {product.storage} Storage</span>
                </h3>
                <p className="product-price">Rs {product.price}</p>
              </div>
              <div className="addtocart-btn">
                <button onClick={() => handleAddToWishlist(product.id)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      
    </>
  );
};

export default Landingpage;