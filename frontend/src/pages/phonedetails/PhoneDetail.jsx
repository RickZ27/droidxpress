// import { useState } from "react";
// import { ShoppingCart, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
// import "./phonedetail.css";
// import zfold from "../../media/products/zfold.png";
// import szfold from "../../media/products/szfold.jpg";
// import zfold6 from "../../media/products/zfold6.png"

// const images = [zfold, szfold, zfold6]; // List of images

// const phonedetail = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [reviews, setReviews] = useState([
//     { name: "Ellen Joe", rating: 5, comment: "Excellent performance and great value for money!" },
//     { name: "Shu Lin", rating: 4, comment: "The display is smooth, and the build quality is solid." },
//   ]);

//   const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   const handleReviewSubmit = () => {
//     if (newReview.name && newReview.comment) {
//       setReviews([...reviews, newReview]);
//       setNewReview({ name: "", rating: 5, comment: "" });
//     } else {
//       alert("Please enter your name and review comment before submitting.");
//     }
//   };

//   return (
//     <div>
//     <div className="phonedetail-container">
//       <div className="phonedetailcard">
//         <div className="phonedetailimage-slider">
//           <button className="phonedetailslider-btn left" onClick={prevImage}>
//             <ChevronLeft size={16} />
//           </button>
//           <img src={images[currentIndex]} alt="Phone" className="phonedetailproduct-image" />
//           <button className="phonedetailslider-btn right" onClick={nextImage}>
//             <ChevronRight size={16} />
//           </button>
//         </div>

//         <div className="phonedetailcard-content">
//           <h1 className="phonedetailtitle">Samsung Z Fold6</h1>
//           <p className="phonedetailprice">Rs 130,000.00</p>
//           <p className="phonedetailmodel">Model: SM-F956B</p>
//           <p className="phonedetailbrand">Brand: <span className="bold">Samsung</span></p>
//           <ul className="phonedetailspecs">
//             <li><strong>Processor:</strong> Qualcomm SM8650-AC Snapdragon 8 Gen 3 (4 nm)</li>
//             <li><strong>Display:</strong> Foldable Dynamic LTPO AMOLED 2X, 120Hz, 7.6 inches, 1856 x 2160 pixels</li>
//             <li><strong>Memory:</strong> 12GB RAM (expandable)</li>
//             <li><strong>Storage:</strong> 1TB (expandable)</li>
//             <li><strong>Operating System:</strong> Android 14, up to 7 major Android upgrades, One UI 6.1.1</li>
//           </ul>
//           <div className="phonedetailactions">
//             <p>Quantity</p>
//             <input 
//               type="number" 
//               className="quantity-input" 
//               min="1" 
//               value={quantity} 
//               onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
//             /> 
//             <button className="btn add-to-cart">
//               <ShoppingCart className="icon" size={18} /> Add to Cart
//             </button>
//             <button className="btn buy-now">
//               <CreditCard className="icon" size={18} /> Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
//       {/* Description Section */}
//       <div className="phonedetail-description">
//         <h2>Product Description</h2>
//         <p>
//         If it's working, don't touch it - that's probably what the Galaxy Z Fold6 development team had in capital letters on the whiteboard when they gathered up to set the concept for Samsung's latest big foldable. Indeed, the Fold5 was as close to being every man's phone-turns-tablet device as anything else on the market, and there wasn't much incentive for disruptive changes on the new one.
//         </p>
//       </div>

//       {/* Reviews Section */}
//       <div className="phonedetail-reviews">
//         <h2>Customer Reviews</h2>
//         {reviews.length > 0 ? (
//           reviews.map((review, index) => (
//             <div key={index} className="review">
//               <h4>{review.name}</h4>
//               <p>⭐ {review.rating} / 5</p>
//               <p>{review.comment}</p>
//             </div>
//           ))
//         ) : (
//           <p>No reviews yet. Be the first to leave a review!</p>
//         )}

//         {/* Write a Review */}
//         <div className="write-review">
//           <h3>Write a Review</h3>
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={newReview.name}
//             onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//             className="review-input"
//           />
//           <select
//             value={newReview.rating}
//             onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
//             className="review-rating"
//           >
//             <option value={5}>⭐ 5 - Excellent</option>
//             <option value={4}>⭐ 4 - Good</option>
//             <option value={3}>⭐ 3 - Average</option>
//             <option value={2}>⭐ 2 - Poor</option>
//             <option value={1}>⭐ 1 - Very Bad</option>
//           </select>
//           <textarea
//             placeholder="Write your review here..."
//             value={newReview.comment}
//             onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//             className="review-textarea"
//           ></textarea>
//           <button className="btn submit-review" onClick={handleReviewSubmit}>
//             Submit Review
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default phonedetail;

import React from 'react'

const PhoneDetail = () => {
  return (
    <div><p>Welcome to phones detail page</p></div>
  )
}

export default PhoneDetail