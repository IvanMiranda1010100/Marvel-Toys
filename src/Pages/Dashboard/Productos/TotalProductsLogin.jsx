import { useState, useEffect } from 'react';
import { CardProduct } from '@Components/LowUse/CardProducts';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: '1',
        image: '/Productos/Categories/Figuras/Carnage/2.webp',
        Description: 'Figura de Carnage',
        name: 'HOT TOYS MARVEL CARNAGE - FIGURA COLECCIONABLE',
        price: '1.511.103',
        cents: '48',
      },
      {
        id: '2',
        image: '/Productos/Categories/Figuras/Venom/2.webp',
        Description: 'Figura de Venom',
        name: 'HOT TOYS MARVEL VENOM - FIGURA COLECCIONABLE',
        price: '1.894.906',
        cents: '28',
      },
      {
        id: '3',
        image: '/Productos/Categories/Figuras/Spiderman2099/2.webp',
        Description: 'Figura de SpiderMan 2099',
        name: 'HOT TOYS SPIDER-MAN 2099 PS4 EXCLUSIVE',
        price: '745.945',
        cents: '20',
      },
      {
        id: '4',
        image: '/Productos/Categories/Figuras/SpidermanBlackSuit/1.webp',
        Description: 'Figura de SpiderManBlackSuit',
        name: 'HOT TOYS SPIDER-MAN VGM45 DELUXE',
        price: '742.203',
        cents: '',
      },
      {
        id: '5',
        image: '/Productos/Categories/Figuras/Deadpool/1.webp',
        Description: 'Figura de Deadpool',
        name: 'FIGURA COLECCIONABLE DEADPOOL, 45 CM DE ALTO',
        price: '176.000',
        cents: '',
      },
      {
        id: '6',
        image: '/Productos/Categories/Figuras/Hulk/1.webp',
        Description: 'Figura de Hulk',
        name: 'IRON STUDIOS HULK MARVEL COMICS LIMITED EDITION',
        price: '540.000',
        cents: '',
      },
      {
        id: '7',
        image: '/Productos/Categories/Figuras/Thanos/1.webp',
        Description: 'Figura de Thanos',
        name: 'IRON STUDIOS THANOS INFINITY WAR DELUXE',
        price: '850.000',
        cents: '',
      },
      {
        id: '8',
        image: '/Productos/Categories/Figuras/IceMan/1.webp',
        Description: 'Figura de IceMan',
        name: 'IRON STUDIOS X-MEN ICEMAN LIMITED EDITION',
        price: '390.000',
        cents: '',
      },
    ]);
  }, []);

  const handleProductClick = (productName) => {
    navigate(`/dashboard/Productos/${productName}`);
  };

  return (
    <>
      <div className='containe grid justify-center items-center md:grid-cols-3 lg:grid-cols-4 px-6 py-4'>
        {products.map((product) => (
          <CardProduct
          onClick={() => handleProductClick(product.Name)}
          key={product.id}
          id={product.id}
          image={product.image}
          Description={product.Description}
          name={product.name}
          price={product.price}
          cents={product.cents}
        />
        ))}
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
  );
};
