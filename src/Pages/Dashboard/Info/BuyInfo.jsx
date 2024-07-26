import { HeaderDashboard } from "@Components/Navegation/HeaderDashboard";
import { FooterPage } from "@Components/LowUse/Footer";

export const BuyInfoPage = () => {
  return (
    <>
      <HeaderDashboard />
      <section className="h-80 bg-[#1D1F20] py-7 px-9">
        <main className="grid grid-rows-2">
          <h2 className="font-bold text-4xl mb-1">Cómo comprar</h2>
          <nav class="flex my-3" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <a
                  href="/dashboard"
                  class="inline-flex items-center text-sm font-medium  text-gray-400 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class="ms-1 text-sm font-medium md:ms-2 text-gray-400">
                    Cómo Comprar
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <section>
            <ul className="grid gap-y-2">
              <li>1.Este es el paso 1</li>
              <li>2.Este es el paso 2</li>
              <li>3.Este es el paso 3</li>
              <li>4.Este es el paso 4</li>
            </ul>
          </section>
        </main>
      </section>
      <FooterPage />
    </>
  );
};
