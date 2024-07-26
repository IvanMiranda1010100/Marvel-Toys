import { CardProduct } from '@Components/LowUse/CardProducts';

export const Products = () => {
  return (
    <>
    <div
      className='containe grid justify-center items-center md:grid-cols-3 lg:grid-cols-4 px-6 py-4'
    >
      <CardProduct
        image='/public/Productos/Categories/Figuras/Carnage/2.webp'
        Description={'Figura de Carnage'}
        name={'HOT TOYS MARVEL CARNAGE - FIGURA COLECCIONABLE'}
        price={'$1.511.103'}
        cents={'48'}
      />
      <CardProduct
        image='/public/Productos/Categories/Figuras/Venom/2.webp'
        Description={'Figura de Venom'}
        name={'HOT TOYS MARVEL VENOM - FIGURA COLECCIONABLE'}
        price={'$1.894.906'}
        cents={'28'}
      />
      <CardProduct
        image='/public/Productos/Categories/Figuras/Spiderman2099/2.webp'
        Description={'Figura de SpiderMan 2099'}
        price={'$745.945'}
        cents={'20'}
        name={'HOT TOYS SPIDER-MAN 2099 PS4 EXCLUSIVE'}
      />
      <CardProduct
        image='/public/Productos/Categories/Figuras/SpidermanBlackSuit/1.webp'
        Description={'Figura de SpiderManBlackSuit'}
        price={'$742.203'}
        name={'HOT TOYS SPIDER-MAN VGM45 DELUXE'}
      />
      <CardProduct
        image='/public/Productos/Categories/Figuras/Deadpool/1.webp'
        Description={'Figura de Deadpool'}
        price={'$176.000'}
        name={'FIGURA COLECCIONABLE DEADPOOL, 45 CM DE ALTO'}
      />
      <CardProduct
        image='/public/Productos/Categories/Figuras/Hulk/1.webp'
        Description={'Figura de Hulk'}
        price={'$540.000'}
        name={'IRON STUDIOS HULK MARVEL COMICS LIMITED EDITION'}
      />
      <CardProduct
        image='/public/Productos/Categories/Figuras/Thanos/1.webp'
        Description={'Figura de Thanos'}
        price={'$850.000'}
        name={'IRON STUDIOS THANOS INFINITY WAR DELUXE'}
      />
      <CardProduct
        image='/public/Productos/Categories/Figuras/IceMan/1.webp'
        Description={'Figura de IceMan'}
        name={'IRON STUDIOS X-MEN ICEMAN LIMITED EDITION'}
        price={'$390.000'}
      />
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
