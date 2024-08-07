import { Link } from 'react-router-dom';
import {HeaderPc} from './HeaderDesktop'
import {HeaderMob} from './HeaderMobile'

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
      
      <div className='md:block hidden'>
        <HeaderPc/>
      </div>
      <div className='block md:hidden'>
        <HeaderMob/>
      </div>
      
    </div>
  );
}
