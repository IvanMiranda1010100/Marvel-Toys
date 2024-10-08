import React, {useState} from 'react'

export const NavigationMenuDemo = () => {

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <div
      id="mega-menu-icons"
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    >
      <ul className="flex items-center flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
        <li>
          <a
            href="/dashboard"
            className="md:text-sm lg:text-lg font-[600] block py-2 px-3  border-b  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700"
            aria-current="page"
          >
            INICIO
          </a>
        </li>
        <li>
          <button
            id="mega-menu-icons-dropdown-button"
            onClick={() => handleDropdownToggle('dropdown1')}
            className="md:text-sm lg:text-lg font-[600] flex items-center justify-between w-full py-2 px-3 border-b md:w-auto  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700"
          >
            PRODUCTOS
            <svg
              className="w-3.5 h-4.5 ms-3 mt-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="1"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="mega-menu-icons-dropdown"
            className={` absolute z-10 grid ${activeDropdown === 'dropdown1' ? 'block' : 'hidden'} w-auto grid-cols-2 text-sm border  rounded-lg shadow-md border-gray-700 md:grid-cols-3 bg-gray-800`}          >
            <div className="p-4 pb-0 md:pb-4 text-white">
              <ul
                className="space-y-4"
                aria-labelledby="mega-menu-icons-dropdown-button"
              >
                <li>
                  <a
                    href="/dashboard/Productos"
                    className="flex items-center text-gray-400 hover:text-blue-500 group"
                  >
                    <span className="sr-only">About us</span>
                    <svg
                      className="w-5 h-5 me-2 text-gray-500 group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    Todos los Productos
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/Productos/category/Comics"
                    className="flex items-center text-gray-400 hover:text-blue-500 group"
                  >
                    <span className="sr-only">Library</span>
                    <svg
                      className="w-5 h-5 me-2  text-gray-500 group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"    stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
                    </svg>
                    Comics
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/Productos/category/Remeras"
                    className="flex items-center text-gray-400  hover:text-blue-500 group"
                  >
                    <span className="sr-only">Resources</span>
                    <svg
                      className="w-5 h-5 me-2  text-gray-500  group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                    </svg>
                    Remeras
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/Productos/category/Videojuegos"
                    className="flex items-center text-gray-400 hover:text-blue-500 group"
                  >
                    <span className="sr-only">Pro Version</span>
                    <svg
                      className="w-5 h-5 me-2 text-gray-500  dagroup-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"    stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" /><path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" /><path d="M8 9v2" /><path d="M7 10h2" /><path d="M14 10h2" /></svg>
                    </svg>
                    VideoJuegos
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-4 pb-0  md:p b-4 text-white">
              <ul className="space-y-4">
                <li>
                  <a
                    href="/dashboard/Productos/category/Funko Pops"
                    className="flex items-center  text-gray-400 hover:text-blue-500 group"
                  >
                    <span className="sr-only">Blog</span>
                    <svg
                      className="w-5 h-5 me-2 text-gray-500 group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                     <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-lego"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 2a1 1 0 0 1 1 1v1l.2 .005a4 4 0 0 1 3.795 3.795l.005 .2v9a4 4 0 0 1 -2.845 3.83l-.155 .043v.127a1 1 0 0 1 -.883 .993l-.117 .007h-10a1 1 0 0 1 -1 -1v-.127l-.155 -.042a4 4 0 0 1 -2.84 -3.631l-.005 -.2v-9a4 4 0 0 1 4 -4v-1a1 1 0 0 1 1 -1zm-.8 12.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69 -4.286h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" /></svg>
                    </svg>
                    Funko Pops
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/Productos/category/Disfraces"
                    className="flex items-center text-gray-400  hover:text-blue-500 group"
                  >
                    <span className="sr-only">Newsletter</span>
                    <svg
                      className="w-5 h-5 me-2  text-gray-500 group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"    stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pumpkin-scary"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l1.5 1l1.5 -1l1.5 1l1.5 -1" /><path d="M10 11h.01" /><path d="M14 11h.01" /><path d="M17 6.082c2.609 .588 3.627 4.162 2.723 7.983c-.903 3.82 -2.75 6.44 -5.359 5.853a3.355 3.355 0 0 1 -.774 -.279a3.728 3.728 0 0 1 -1.59 .361c-.556 0 -1.09 -.127 -1.59 -.362a3.296 3.296 0 0 1 -.774 .28c-2.609 .588 -4.456 -2.033 -5.36 -5.853c-.903 -3.82 .115 -7.395 2.724 -7.983c1.085 -.244 1.575 .066 2.585 .787c.716 -.554 1.54 -.869 2.415 -.869c.876 0 1.699 .315 2.415 .87c1.01 -.722 1.5 -1.032 2.585 -.788z" /><path d="M12 6c0 -1.226 .693 -2.346 1.789 -2.894l.211 -.106" /></svg>
                    </svg>
                    Disfraces
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/Productos/category/Figuras"
                    className="flex items-center  text-gray-400  hover:text-blue-500 group"
                  >
                    <span className="sr-only">Playground</span>
                    <svg
                      className="w-5 h-5 me-2 text-gray-500  group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"    stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-spider"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4v2l5 5" /><path d="M2.5 9.5l1.5 1.5h6" /><path d="M4 19v-2l6 -6" /><path d="M19 4v2l-5 5" /><path d="M21.5 9.5l-1.5 1.5h-6" /><path d="M20 19v-2l-6 -6" /><path d="M12 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg>
                    </svg>
                    Figuras
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/Productos/category/Mochilas"
                    className="flex items-center  text-gray-400  hover:text-blue-500 group"
                  >
                    <span className="sr-only">License</span>
                    <svg
                      className="w-5 h-5 me-2  text-gray-500  group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                     <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"    stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-backpack"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z" /><path d="M10 6v-1a2 2 0 1 1 4 0v1" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /><path d="M11 10h2" /></svg>
                    </svg>
                    Mochilas
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-4 text-gray-900 dark:text-white">
              <ul className="space-y-4">
                <li>
                  <a
                    href="/dashboard/Productos/category/Consolas"
                    className="flex items-center  text-gray-400  hover:text-blue-500 group"
                  >
                    <span className="sr-only">Contact Us</span>
                    <svg
                      className="w-5 h-5 me-2  text-gray-500  group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"    stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-icons"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.5 6.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" /><path d="M2.5 21h8l-4 -7z" /><path d="M14 3l7 7" /><path d="M14 10l7 -7" /><path d="M14 14h7v7h-7z" /></svg>
                    </svg>
                    Consolas
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/Productos/category/Gorras"
                    className="flex items-center  text-gray-400  hover:text-blue-500 group"
                  >
                    <span className="sr-only">Support Center</span>
                    <svg
                      className="w-5 h-5 me-2  text-gray-500  group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"    stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-redhat"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 10.5l1.436 -4c.318 -.876 .728 -1.302 1.359 -1.302c.219 0 1.054 .365 1.88 .583c.825 .219 .733 -.329 .908 -.487c.176 -.158 .355 -.294 .61 -.294c.242 0 .553 .048 1.692 .448c.759 .267 1.493 .574 2.204 .922c1.175 .582 1.426 .913 1.595 1.507l.816 4.623c2.086 .898 3.5 2.357 3.5 3.682c0 1.685 -1.2 3.818 -5.957 3.818c-6.206 0 -14.043 -4.042 -14.043 -7.32c0 -1.044 1.333 -1.77 4 -2.18z" /><path d="M6 10.5c0 .969 4.39 3.5 9.5 3.5c1.314 0 3 .063 3 -1.5" /></svg>
                    </svg>
                    Gorras
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/Productos/category/Camperas"
                    className="flex items-center  text-gray-400  hover:text-blue-500 group"
                  >
                    <span className="sr-only">Terms</span>
                    <svg
                      className="w-5 h-5 me-2  text-gray-500  group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"    stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-jacket"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 3l-4 5l-4 -5" /><path d="M12 19a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-8.172a2 2 0 0 1 .586 -1.414l.828 -.828a2 2 0 0 0 .586 -1.414v-2.172a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2.172a2 2 0 0 0 .586 1.414l.828 .828a2 2 0 0 1 .586 1.414v8.172a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z" /><path d="M20 13h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" /><path d="M4 17h3a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" /><path d="M12 19v-11" /></svg>
                    </svg>
                    Camperas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <button
            id="mega-menu-icons-dropdown-button"
            onClick={() => handleDropdownToggle('dropdown2')}
            className="md:text-sm lg:text-lg font-[600] flex items-center justify-between w-full py-2 px-3 border-b md:w-auto  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700"
          >
            INFORMACION
            <svg
              className="w-3.5 h-4.5 ms-3 mt-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                
                stroke-linejoin="round"
                stroke-width="1"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="mega-menu-icons-dropdown"
            className={` absolute z-10 grid ${activeDropdown === 'dropdown2' ? 'block' : 'hidden'} w-auto grid-row-3 text-sm border grid-cols-2 md:grid-  rounded-lg shadow-md border-gray-700 bg-gray-800`}          >
            <div className="p-4 pb-0 md:pb-4 text-white">
              <ul
                className="space-y-4"
                aria-labelledby="mega-menu-icons-dropdown-button"
              >
                <li>
                  <a
                    href="/dashboard/como-comprar"
                    className="flex items-center text-gray-400 hover:text-blue-500 group"
                  >
                    <span className="sr-only">Cómo comprar</span>
                    <svg
                      className="w-5 h-5 me-2 text-gray-500 group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    Cómo Comprar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
