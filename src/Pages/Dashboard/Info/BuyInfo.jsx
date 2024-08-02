import { HeaderDashboard } from "@Components/Navegation/HeaderDashboard";
import { FooterPage } from "@Components/LowUse/Footer";

export const BuyInfoPage = () => {
  return (
    <>
      <HeaderDashboard />
      <section className="h-80 bg-[#1D1F20] py-7 px-9">
        <main className="grid grid-rows-2">
          <h2 className="font-bold text-4xl mb-1">Cómo comprar</h2>
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
