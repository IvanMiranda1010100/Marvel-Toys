import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '@lib/data.ts';
import { CardProduct } from '@Components/LowUse/CardProducts';


export const ProductsResults = ()=>{
  
  const { searchProduct } = useParams();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return(
    <>
    <div className='px-6 py-4'>
      <h2 className='lg:text-3xl sm:text-2xl text-lg'>Resultados de búsqueda para "{searchProduct}"</h2>
      <div className='containe grid justify-center items-center md:grid-cols-3 px-6 py-4'>
        {filteredProducts.length ? (
          filteredProducts.map((product,index) => (
            <CardProduct
            key={index}
            image={product.image}
            Description={product.Description}
            name={product.name}
            price={product.price}
            cents={product.cents}/>
          ))
        ) : (
          <div className='lg:text-2xl sm:text-xl text-lg'>No se encontraron productos</div>
        )}
      </div>
    </div>

    <style jsx>{`
        @media (max-width: 500px) {
          .containe {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        @media (min-width: 501px) and (max-width: 768px) {
          .containe {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  )
}