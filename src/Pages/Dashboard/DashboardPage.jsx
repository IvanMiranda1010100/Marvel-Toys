import {HeaderDashboard} from '@Components/Navegation/HeaderDashboard'
import {FooterPage } from '@Components/LowUse/Footer'
import { Products } from './Productos/TotalProductsLogin';
import { Carrousel } from '../../Components/OneUse/Carrusel';


export const DashboardBody = () => {
  return (
    <>
      <main className="w-full min-h-screen ">
      <HeaderDashboard/>
      <div className='bg-black text-center pb-2 '>
        <Carrousel/> 
        <h2 className=' mt-3 mb-2 text-sm sm:text-lg lg:text-2xl font-bold'>PRODUCTOS</h2>
        <main className='flex flex-1 flex-wrap gap-2 justify-center items-center pb-3'>
          <a href="/dashboard/Productos/category/Figuras"><button className='truncate text-center text-sm lg:text-[17px] lg:px-3 lg:py-2 px-1.5 py-2 border border-solid border-white'>FIGURAS</button></a>
          <a href="/dashboard/Productos/category/Videojuegos"><button className='truncate text-center text-sm lg:text-[17px] lg:px-3 lg:py-2 px-1.5 py-2 border border-solid border-white'>VIDEOJUEGOS</button></a>
          <a href="/dashboard/Productos/category/Comics"><button className='truncate text-center text-sm lg:text-[17px] lg:px-3 lg:py-2 px-1.5 py-2 border border-solid border-white'>COMICS</button></a>
          <a href="/dashboard/Productos/category/Funko Pops"><button className='truncate text-center text-sm lg:text-[17px] lg:px-3 lg:py-2 px-1.5 py-2 border border-solid border-white'>FUNKO POPS</button></a>
          <a href="/dashboard/Productos/category/Remeras"><button className='truncate text-center text-sm lg:text-[17px] lg:px-3 lg:py-2 px-1.5 py-2 border border-solid border-white'>REMERAS</button></a>
          <a href="/dashboard/Productos/category/Disfraces"><button className='truncate text-center text-sm lg:text-[17px] lg:px-3 lg:py-2 px-1.5 py-2 border border-solid border-white'>DISFRACES</button></a>
          <a href="/dashboard/Productos/category/Mochilas"><button className='truncate text-center text-sm lg:text-[17px] lg:px-3 lg:py-2 px-1.5 py-2 border border-solid border-white'>MOCHILAS</button></a>
          <a href="/dashboard/Productos/category/Consolas"><button className='truncate text-center text-sm lg:text-[17px] lg:px-3 lg:py-2 px-1.5 py-2 border border-solid border-white'>CONSOLAS</button></a>
          <a href="/dashboard/Productos/category/Gorras"><button className='truncate text-center text-sm lg:text-[17px] lg:px-3 lg:py-2 px-1.5 py-2 border border-solid border-white'>GORRAS</button></a>
          <a href="/dashboard/Productos/category/Camperas"><button className='truncate text-center text-sm lg:text-[17px] lg:px-3 lg:py-2 px-1.5 py-2 border border-solid border-white'>CAMPERAS</button></a>
          
        </main>
      </div>
      <main className='text-center mb-5'>
        <Products/>
        <a href="/dashboard/Productos" className="text-white focus:ring-4 focus:outline-none  font-medium rounded-sm text-[12px] px-5 py-2.5 text-center bg-black hover:bg-gray-800 focus:ring-blue-800">VER MÁS</a>
      </main>
      <FooterPage/>
    </main>
    </>
  );
};
