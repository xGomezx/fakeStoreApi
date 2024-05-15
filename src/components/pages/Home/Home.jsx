import React, { useContext, useEffect, useState } from 'react';
import { Logo } from '../../Logo/Logo';
import { Nav } from '../../Nav/Nav';
import { Main } from '../../Main/Main';
import { FirstImage } from '../../FirstImage/FirstImage';
import { Products } from '../../Products/Products';
import { CardProduct } from '../../CardProduct/CardProduct';
import { Header } from '../../Header/Header';
import { shopContext } from '../../Context/Context';

export const Home = () => {

 const productsContext = useContext(shopContext)

  return (
    <>
      <Header>
        <Logo />
        <Nav />
      </Header>
      <Main>
        <FirstImage>{/* Contenido opcional */}</FirstImage>
        <Products>
          {productsContext.products.map((product) => (
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
