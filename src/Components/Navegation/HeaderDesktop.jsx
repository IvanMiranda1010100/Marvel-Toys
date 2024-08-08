import { NavigationMenuDemo } from "./NavegationRutes/NavegationMenu";
import { SearchInput } from "/src/Pages/Dashboard/Search/Search";
import { Link } from "react-router-dom";
import { useCartStore } from "@store/buyStore.js";

export const HeaderPc = () => {
  const { items } = useCartStore((state) => ({
    items: state.items,
  }));

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <section className="">
        <main className=" z-[45] gap-x-3 bg-[#1D1F20] w-full h-28 grid items-center contenedor px-2">
          <picture className="relative left-4">
            <img
              className="size-20"
              src="/logo.png"
              alt="Logo de Marvel Toys"
            />
          </picture>
          <div className="flex flex-1 gap-x-5 justify-center ml-auto">
            <div className="flex justify-end">
              <NavigationMenuDemo />
            </div>
            <div className="flex flex-1 items-center gap-x-3">
              <SearchInput />
              <button className="">
                <Link to="/dashboard/Productos/Carrito">
                  <li className="flex flex-1">
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                        <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                      </svg>
                      <span
                        style={{
                          position: "absolute",
                          top: "65%",
                          right: "50%",
                          transform: "translate(50%, -50%)",
                          fontSize: "12px",
                          color: "white",
                          fontWeight: "normal",
                        }}
                      >
                        {cartItemCount}
                      </span>
                    </div>
                  </li>
                </Link>
              </button>
            </div>
          </div>
        </main>
      </section>

      <style>
        {`
        .contenedor{
          grid-template-columns: 500px 1fr;
        }

        @media(min-width:801px) and (max-width:1100px){
          .contenedor{
          grid-template-columns: 300px 1fr;
        }
      }

        @media(max-width:800px){
          .contenedor{
          grid-template-columns: 200px 1fr;
        }
        }

        @media(max-width:799px){
          .contenedor{
          grid-template-columns: auto 1fr;
        }
      }
        `}
      </style>
    </>
  );
};
