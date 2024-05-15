import React, { useEffect, useState } from 'react';
import { Logo } from '../../Logo/Logo';
import { Nav } from '../../Nav/Nav';
import { Main } from '../../Main/Main';
import { FirstImage } from '../../FirstImage/FirstImage';
import { Products } from '../../Products/Products';
import { CardProduct } from '../../CardProduct/CardProduct';
import { ProductModal } from '../../ProductModal/ProductModal';
import { Header } from '../../Header/Header';

export const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Header>
        <Logo />
        <Nav />
      </Header>
      <Main>
        <FirstImage>{/* Contenido opcional */}</FirstImage>
        <Products>
          {products.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
              category={product.category}
            />
          ))}
        </Products>
      </Main>
    </>
  );
};
