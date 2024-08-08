import { ProductsMain } from "./ProductsMainPage";
import {SidebarCategories2} from './Categories/SidebarCategory'

export const SidebarC = ({children}) => {
  return (
    <> 
    <div className='flex'>
      <aside 
        id="separator-sidebar"
        className="sticky top-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        {" "}
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#242424]">
          <ul className="pt-4 mt-4 space-y-2 font-medium">
            <li>
            <SidebarCategories2/>
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-grow p-4">
        {children}
      </main>
      </div>

      <style>
         {
            `@media(max-width:900px){
            aside{
               display:none;
            }
            main{
               display:flex;
               justify-content:center;
               align-items:center;
               flex-direction:column;
            }
            }`
         }
      </style>
    </>
  );
};
