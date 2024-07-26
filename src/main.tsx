import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {NextUIProvider} from "@nextui-org/react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import the layouts
import RootLayout from './Layouts/Layout.jsx';
import DashboardLayout from './Layouts/UserLayout.jsx';
import NotFound from './Layouts/404.jsx';
import PageWelcome from './Pages/Page.jsx';
import {BuyInfoPage} from './Pages/Dashboard/Info/BuyInfo.jsx'
import {TotalProductsPage} from './Pages/Dashboard/Productos/TotalProductsPage.jsx'
import {ContactPage} from './Pages/Dashboard/Contact/Contact.jsx'
import {CategoryPage} from './Pages/Dashboard/Productos/CategoriesPage.jsx'
import {SearchResultPage} from './Pages/Dashboard/Search/SearchResultsPage.jsx'

// Import the components
import { DashboardBody } from './Pages/Dashboard/DashboardPage.jsx';
import Login from './Pages/auth/Login.jsx';
import Signup from './Pages/auth/SignUp.jsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <PageWelcome /> },
      { path: "/sign-in/*", element: <Login /> },
      { path: "/sign-up/*", element: <Signup /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardBody /> },
          { path: "/dashboard/como-comprar", element: <BuyInfoPage /> },
          { path: "/dashboard/contacto", element: <ContactPage /> },
          { path: "/dashboard/Productos", element: <TotalProductsPage /> },
          { path: "/dashboard/Productos/category/:categoryName", element: <CategoryPage  /> },
          { path: "/dashboard/Productos/search/:searchProduct", element: <SearchResultPage  /> },
        ]
      },
      { path: "*", element: <NotFound /> },
    ]
  }
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <NextUIProvider>
    <RouterProvider router={router}/>
    </NextUIProvider>
  </React.StrictMode>
);
