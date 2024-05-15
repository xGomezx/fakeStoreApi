// CardProduct.jsx
import React, { useState } from 'react';
import { ProductModal } from '../ProductModal/ProductModal';

export const CardProduct = ({ id, title, price, category, description, image }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const product = { id, title, price, category, description, image }; // Crear objeto producto

  const abrirModal = () => {
    setModalVisible(true);
    // Deshabilitar el scroll del body
    document.body.classList.add('overflow-hidden');
  };

  const cerrarModal = () => {
    setModalVisible(false);
    // Habilitar el scroll del body cuando se cierra la ventana modal
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <>
      <div className='w-80 h-80 flex flex-col items-center mt-6 mb-12 p-2 relative'>

        <div className='w-full h-40 flex justify-center mb-8'>
          <img className='w-auto h-full ' src={image} alt="" />
        </div>

        <div className='h-20'>
          <h3 className='leading-5 text-sm font-semibold max-h-16 h-16 text-center mb-3'>{title}</h3>
        </div>

        <div className='21 h-32'>
          <p className=''>${price}</p>
        </div>
        <div className='h-8'>
          <button className='border-2 border-zinc-600 pr-16 pl-16 pt-2 pb-2 hover:bg-zinc-300 duration-200' onClick={abrirModal}>Agregar</button>
        </div>

        {modalVisible &&
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" onClick={cerrarModal}></div>
            <ProductModal product={product} onClose={cerrarModal} />
          </div>
        }
      </div>
    </>
  );
};
