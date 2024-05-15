// ProductModal.jsx
import React from 'react';

export const ProductModal = ({ product, onClose }) => {
  if (!product) {
    return null; // Otra opción podría ser mostrar un mensaje de error
  }

  return (
    <div className='w-1/2 h-2/3 bg-slate-600 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-60'>
      <span className="w-4 h-4 bg-black" onClick={onClose}>&times;</span>
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <p></p>
    </div>
  );
};
