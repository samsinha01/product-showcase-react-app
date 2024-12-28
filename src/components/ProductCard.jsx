import { useState } from 'react';
import ProductData from './ProductData.jsx';

const ProductCard = () => {
  // State to track which card's description is open
  const [openCardId, setOpenCardId] = useState(null);

  // Function to handle toggling the description of a card
  const toggleDescription = (id) => {
    // If the clicked card is already open, close it; otherwise, open it
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <>
      {ProductData.products.map((item) => {
        return (
          <section
            key={item.id}
            className="main-card d-flex flex-column border"
          >
            <div className="card-image">
              <figure>
                <img src={item.images[0]} alt="" className="w-100 h-100" />
              </figure>
            </div>
            <div className="card-body p-2 bg-success">
              <div className="d-flex justify-content-between gap-3 align-items-center">
                <h4 className="fs-5">{item.brand}</h4>
                <p>{item.category}</p>
              </div>
              <div className="d-flex justify-content-between gap-3 align-items-center">
                <p className="fw-bold">${item.price}</p>
                <button
                  className="alert alert-warning py-1 text-dark my-2"
                  onClick={() => toggleDescription(item.id)}
                >
                  Read More
                </button>
              </div>
              {/* Show the description only if this card is open */}
              <p>{openCardId === item.id ? item.description : ""}</p>
              <button className="alert alert-danger py-1 d-block p-2 w-100 text-dark my-2 bg-danger text-white">
                Buy
              </button>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ProductCard;
