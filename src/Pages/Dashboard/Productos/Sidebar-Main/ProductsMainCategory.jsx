import { useState, useEffect } from 'react';
import { CardProduct } from '@Components/LowUse/CardProducts';
import { useParams } from 'react-router-dom';
import { products } from '@lib/data';
import { BreadcrumbComponent } from "@Components/LowUse/BreadCrumbs.jsx"; 
import { SelectOptionComponent } from "@Components/LowUse/SelectOptions.jsx"; 
import {SidebarCategories2Mobile} from './Categories/SidebarCategoryMobile'
import { useNavigate } from 'react-router-dom';


export const ProductsCategory = () => {
  const { categoryName } = useParams();
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [prevCategory, setPrevCategory] = useState(categoryName);
  const navigate = useNavigate();

  useEffect(() => {
    // Filtrar productos según la categoría
    const filtered = products.filter(product => product.CategoryId === categoryName);
    setFilteredProducts(filtered);
    
    // Restablecer el orden al cambiar de categoría
    if (categoryName !== prevCategory) {
      setSortOrder(null);
      setPrevCategory(categoryName);
    }

    setVisibleProducts(12); // Opcional: Restablecer el número de productos visibles
  }, [categoryName, prevCategory]);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      if (sortOrder === null) {
        // Si no hay orden seleccionado, mostrar los productos en el orden original
        setSortedProducts(filteredProducts);
      } else {
        // Ordenar productos si se ha seleccionado un criterio
        const sorted = [...filteredProducts].sort((a, b) => {
          const priceA = parsePrice(a.price, a.cents);
          const priceB = parsePrice(b.price, b.cents);

          return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
        });
        setSortedProducts(sorted);
      }
    }
  }, [filteredProducts, sortOrder]);

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
    setVisibleProducts(prevVisible => prevVisible + 6);
  };

  return (
    <>
      <main className='sm:px-6 px-3 py-4'>
        <div className='flex gap-x-2 justify-center'>
          <div>
            <SelectOptionComponent onSortChange={handleSortChange}/>
          </div>
          <div>
            <SidebarCategories2Mobile/>
          </div>
        </div>
        <h2 className='lg:text-3xl mt-3 sm:text-2xl text-lg'>{categoryName}</h2>
        <BreadcrumbComponent>{categoryName}</BreadcrumbComponent>
        <div className='containe grid justify-center items-center sm:grid-cols-3'>
          {sortedProducts.slice(0, visibleProducts).map((product, index) => (
            <CardProduct
            onClick={() => handleProductClick(product.id)}
              key={index}
              image={product.image}
              Description={product.Description}
              name={product.name}
              price={product.price}
              cents={product.cents}
            />
          ))}
        </div>
        {visibleProducts < sortedProducts.length && (
          <div className='flex justify-center'>
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
