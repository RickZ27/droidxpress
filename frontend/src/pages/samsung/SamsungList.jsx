import { useState, useEffect } from "react";
import axios from "axios";
import { Heart } from "lucide-react";

import FilterBar from "../../components/filter/Filterbar";
import "../landingpage/landingpage.css";

const Phonelist = () => {
  const [sortOrder, setSortOrder] = useState(""); 
  const [Phonelist, setPhonelist] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/mobilelist/Samsung")
      .then((response) => {
        setPhonelist(response.data);
        setFilteredProducts(response.data); 
      })
      .catch((error) => console.error(error));
  }, []);

  // Sorting function
  const sortedphones = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price; 
    } else if (sortOrder === "desc") {
      return b.price - a.price; 
    }
    return 0;
  });

  return (
    <>
      <div className="Phonelist-container" style={{ display: "flex" }}>
        <FilterBar setFilteredProducts={setFilteredProducts} Phonelist={Phonelist} />
        <div style={{ marginLeft: "25px", width: "100%" }}>
          <div className="featured-container">
            <div className="featured-heading">
              <h2>Featured Phones</h2>
              {/* Sort By Price Filter */}
              <div className="filter-item">
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="">Sort By :</option>
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </select>
              </div>
            </div>

            <div className="feature-content">
              {sortedphones.map((product) => (
                <div className="product-card" key={product.id}>
                  <img
                    src={product.images?.length > 0 ? product.images[0] : PhoneImage}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">
                      {product.name}
                      <span className="product-model"> | Model {product.modelseries}</span>
                      <span className="product-processor"> | {product.processor} Processor</span>
                      <span className="product-ram"> | {product.ram} RAM</span>
                      <span className="product-storage"> | {product.storage} Storage</span>
                    </h3>
                    <p className="product-price">Rs {product.price}</p>
                    <div className="wishlist">
                      <Heart className="wishlist-icon" />
                      <span>Add to wishlist</span>
                    </div>
                  </div>
                  <div className="addtocart-btn">
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phonelist;