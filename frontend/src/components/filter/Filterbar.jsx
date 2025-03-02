import { useState } from "react";
import "./filterbar.css";

const FilterComponent = ({ setFilteredProducts, laptopList }) => {
  // State to hold the price range (min and max)
  const [priceRange, setPriceRange] = useState([0, 1000000]); // Default range

  // Function to filter products based on price range
  const applyPriceFilter = () => {
    // Filter products that fall within the price range
    const filtered = laptopList.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Update the filtered products
    setFilteredProducts(filtered);
  };

  return (
    <div className="filter-container">
      <h2>Filter Products</h2>

      {/* Price Range Filter (Input Fields) */}
      <div className="filter-item">
        <label>Price Range (Rs.):</label>
        <div className="price-inputs">
          <p>Min</p>
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])
            }
            min="0"
            max="1000000"
          />
          <span> - </span>
          <p>Max</p>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value) || 0])
            }
            min="0"
            max="1000000"
          />
        </div>
        <button className="apply-filters-btn" onClick={applyPriceFilter}>
          Filter by Price
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
