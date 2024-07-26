import { FooterPage } from "@Components/LowUse/Footer";
import { HeaderDashboard } from "@Components/Navegation/HeaderDashboard";
import {SidebarC} from './Sidebar-Main/Sidebar'
import {ProductsCategory} from './Sidebar-Main/ProductsMainCategory'
export const CategoryPage = () => {
  

  return (
    <>
      <main className="grid-container">
        <div className="[grid-area:header]">
          <HeaderDashboard />
        </div>
        <div className="[grid-area:sidebar]">
          <SidebarC><ProductsCategory/></SidebarC>
        </div>
        <div className="[grid-area:footer]">
          <FooterPage />
        </div>
      </main>
      <style jsx>
        {`
          .grid-container {
            display: grid;
            grid-template-areas:
              "header header header"
              "sidebar sidebar sidebar"
              "footer footer footer ";
            grid-template-columns: auto 1fr 1fr;
            grid-template-rows: auto 1fr auto;
          }

          /* Add some responsiveness */
          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: 1fr;
              grid-template-rows: auto 1fr auto;
            }
          }
        `}
      </style>
    </>
  );
};

