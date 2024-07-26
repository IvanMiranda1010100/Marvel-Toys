import { Link } from 'react-router-dom';
import { NavigationMenuDemo } from './NavegationRutes/NavegationMenu'
import {SearchInput} from '/src/Pages/Dashboard/Search/Search'

export const HeaderPage = () => {
  return (
    <div>
      <header
       className="flex items-center justify-center bg-black min-h-10">
        <span className="mr-1">Bienvenidos a</span> <span className="font-bold">Marvel Toys</span>
      </header>
      
      <nav
        className="bg-[#181A1B] flex flex-1 min-h-14 items-center font-semibold w-full px-5">
          <header className="flex gap-x-3">
            <span>
              <Link to='/sign-up/'>
                Crear Cuenta
              </Link>
            </span>
            <span> | </span>
            <span>
              <Link to='/sign-in/'>
                Iniciar Sesión
              </Link>
            </span>
          </header>
          <aside className="flex ml-auto">
            <span>
            <Link to='/dashboard/contacto'>
                Contacto
              </Link>
              </span>
          </aside>
      </nav>
      
      <section
       className="">
        <main className=" z-[45] gap-x-3 bg-[#1D1F20] w-full h-28 grid items-center grid-cols-3 px-2">
          <picture className='relative left-4'>
           <img className="size-20" src="../public/logo.png" alt="Logo de Marvel Toys" />
          </picture>
            <div className='flex justify-center'>
             <NavigationMenuDemo/>
            </div>
            <div className='flex flex-1'>
              <SearchInput/>
            </div>
        </main>
      </section>
      
    </div>
  );
}
