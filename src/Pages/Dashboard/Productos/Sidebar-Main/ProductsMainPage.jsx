import { useState, useEffect } from 'react';
import { CardProduct } from '@Components/LowUse/CardProducts';
import { products } from '@lib/data';
import { SelectOptionComponent } from '@Components/LowUse/SelectOptions';
import {SidebarCategories2Mobile} from './Categories/SidebarCategoryMobile'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const ProductsMain = () => {
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const shuffled = shuffleArray([...products]);
    setOriginalProducts(shuffled);
    setSortedProducts(shuffled); // Inicialmente mostrar los productos mezclados sin ordenar
  }, []);

  useEffect(() => {
    if (sortOrder === null) {
      // Si no hay orden seleccionado, muestra los productos en el orden original
      setSortedProducts(originalProducts);
    } else {
      const sorted = [...originalProducts].sort((a, b) => {
        const priceA = parsePrice(a.price, a.cents);
        const priceB = parsePrice(b.price, b.cents);

        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
      });
      setSortedProducts(sorted);
    }
  }, [sortOrder, originalProducts]);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const parsePrice = (priceString, cents) => {
    const price = parseFloat(priceString.replace(/[^\d,-]/g, '').replace(',', '.'));
    return price + (cents / 100);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleProductClick = (productId) => {
    navigate(`/dashboard/Productos/${productId}`);
  };

  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 6);
  };

  return (
    <>
      <main className="sm:px-6 px-3 py-4">
      <div className='flex gap-x-2 justify-center'>
          <div>
            <SelectOptionComponent onSortChange={handleSortChange}/>
          </div>
          <div>
            <SidebarCategories2Mobile/>
          </div>
        </div>
        <h2 className='lg:text-3xl mt-3 sm:text-2xl text-lg'>Productos</h2>
        <div className="containe grid justify-center items-center md:grid-cols-3">
          {sortedProducts.slice(0, visibleProducts).map((product, index) => (
             <Link to={`/dashboard/Productos/${product.id}`} key={index}>
             <CardProduct
               image={product.image}
               Description={product.Description}
               name={product.name}
               price={product.price}
               cents={product.cents}
             />
           </Link>
          ))}
        </div>
        {visibleProducts < sortedProducts.length && (
          <div className="flex justify-center">
            <button
              onClick={showMoreProducts}
              className="text-white font-medium rounded-sm text-[12px] px-5 py-2.5 text-center bg-black hover:bg-opacity-60"
            >
              VER MÁS
            </button>
          </div>
        )}
      </main>

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
  );
};
