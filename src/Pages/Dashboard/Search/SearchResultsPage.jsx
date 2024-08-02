import { FooterPage } from "@Components/LowUse/Footer";
import { HeaderDashboard } from "@Components/Navegation/HeaderDashboard";
import { SidebarC } from '../Productos/Sidebar-Main/Sidebar';
import { ProductsResults } from './ProductsMainResults';

export const SearchResultPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <HeaderDashboard />
          <SidebarC>
            <ProductsResults />
          </SidebarC>
      </div>
      <FooterPage />
    </>
  );
};
