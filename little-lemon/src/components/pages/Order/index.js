
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { meals } from '../Menu/data'; // Import 'meals' from the shared data file

// import './index.css'; // CSS file for Order component

// const Order = () => {
//   const { id } = useParams();

//   // Assuming you have a meals array
//   const selectedItem = meals.find((meal) => meal.id === parseInt(id, 10));

//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (e) => {
//     const newQuantity = parseInt(e.target.value, 10);
//     setQuantity(newQuantity);
//   };

//   const calculateTotalAmount = () => {
//     return (selectedItem.price * quantity).toFixed(2);
//   };

//   return (
//     <div className='order-container'>
//       {selectedItem ? (
//         <>
//           <h2>Order Details</h2>
//           <img src={selectedItem.image} alt={selectedItem.name} />
//           <h3>{selectedItem.name}</h3>
//           <p>Description: {selectedItem.description}</p>
//           <p>Price: ${selectedItem.price.toFixed(2)}</p>

//           {/* Form for quantity, total amount, and payment methods */}
//           <div className='order-form'>
//             <label htmlFor='quantity'>Quantity:</label>
//             <input
//               type='number'
//               id='quantity'
//               min='1'
//               value={quantity}
//               onChange={handleQuantityChange}
//             />
//             <p>Total Amount: ${calculateTotalAmount()}</p>

//             <label htmlFor='paymentMethod'>Payment Method:</label>
//             <select id='paymentMethod'>
//               <option value='mpesa'>M-Pesa</option>
//               <option value='visa'>Visa</option>
//             </select>
//           </div>
//         </>
//       ) : (
//         <p>No item found for the specified ID.</p>
//       )}
//     </div>
//   );
// };

// export default Order;
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { meals } from '../Menu/data'; // Import 'meals' from the shared data file
import './index.css'; // CSS file for Order component
import pages from '../../../utils/pages';

const Order = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const selectedItem = meals.find((meal) => meal.id === parseInt(id, 10));

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const calculateTotalAmount = () => {
    return (selectedItem.price * quantity).toFixed(2);
  };

  const handleSendOrder = () => {
    // Perform any order submission logic here

    // Navigate to the order success page
    navigate(pages.get('orderStatus').path);
  };

  return (
    <div className='order-container'>
      {selectedItem ? (
        <>
          <h2>Order Details</h2>
          <img src={selectedItem.image} alt={selectedItem.name} />
          <h3>{selectedItem.name}</h3>
          <p>Description: {selectedItem.description}</p>
          <p>Price: ${selectedItem.price.toFixed(2)}</p>

          {/* Form for quantity, total amount, and payment methods */}
          <div className='order-form'>
            <label htmlFor='quantity'>Quantity:</label>
            <input
              type='number'
              id='quantity'
              min='1'
              value={quantity}
              onChange={handleQuantityChange}
            />
            <p>Total Amount: ${calculateTotalAmount()}</p>

            <label htmlFor='paymentMethod'>Payment Method:</label>
            <select id='paymentMethod'>
              <option value='mpesa'>M-Pesa</option>
              <option value='visa'>Visa</option>
            </select>
          </div>

          {/* Send Order button */}
          <button onClick={handleSendOrder}>Make Order</button>
        </>
      ) : (
        <p>No item found for the specified ID.</p>
      )}
    </div>
  );
};

export default Order;

