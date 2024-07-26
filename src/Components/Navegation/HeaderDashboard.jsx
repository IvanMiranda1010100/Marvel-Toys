import { Link } from "react-router-dom";
import { NavigationMenuDemo } from "./NavegationRutes/NavegationMenu";
import { SignOutButton } from "@clerk/clerk-react";
import { SearchInput } from "/src/Pages/Dashboard/Search/Search";

export const HeaderDashboard = () => {
  return (
    <div>
      <header className="flex items-center justify-center bg-black min-h-10">
        <span className="mr-1">Bienvenidos a</span>{" "}
        <span className="font-bold">Marvel Toys</span>
      </header>

      <nav className="bg-[#181A1B] flex flex-1 min-h-14 items-center font-semibold w-full px-5">
        <header className="flex gap-x-3">
          <span>
            <Link to="/sign-up/">Mi Cuenta</Link>
          </span>
          <span> | </span>
          <span>
            <SignOutButton>Cerrar Sesión</SignOutButton>
          </span>
        </header>
        <aside className="flex ml-auto">
          <span>
            <Link to="/dashboard/contacto">Contacto</Link>
          </span>
        </aside>
      </nav>

      <section className="">
        <main className=" z-[45] gap-x-3 bg-[#1D1F20] w-full h-28 grid items-center grid-cols-3 px-2">
          <picture className="relative left-4">
            <img
              className="size-20"
              src="/public/logo.png"
              alt="Logo de Marvel Toys"
            />
          </picture>
          <div className="flex justify-end">
            <NavigationMenuDemo />
          </div>
          <div className="flex justify-center flex-1">
            <SearchInput />
            <button>
              <Link to="#">
                <li className="flex flex-1">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                  <span className="bg-black text-white p-1 rounded-full">
                    3
                  </span>
                </li>
              </Link>
            </button>
          </div>
        </main>
      </section>
    </div>
  );
};
