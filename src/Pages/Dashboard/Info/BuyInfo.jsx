import { HeaderDashboard } from "@Components/Navegation/HeaderDashboard";
import { FooterPage } from "@Components/LowUse/Footer";

export const BuyInfoPage = () => {
  return (
    <>
      <HeaderDashboard />
      <section className=" bg-[#1D1F20] py-7 px-9">
        <main className="">
          <h2 className="font-bold text-4xl mb-3">Cómo comprar</h2>
          <section>
            <ul className="grid gap-y-2">
              <li>1.Elegí el producto que quieras comprar haciendo clic sohre la imagen del producto.</li>
              <hr className="mt-1 mb-1"/>
              <li>2.Haz clic en el botón de "Añadir" o "Agregar al carrito". Esto agregará el producto a tu carrito. Podes seguir comprando o agregando otros productos.</li>
              <hr className="mt-1 mb-1"/>
              <li>3.Recuerda tener una cuenta creada o iniciar sesión para seguir con la compra.</li>
              <hr className="mt-1 mb-1"/>
              <li>4.El Icono de un bolso te llevara a tu carrito donde podrás comprar tus productos.</li>
              <hr className="mt-1 mb-1"/>
              <li>5.Coloca el envío que deseas y un cupón si se te otorgo alguno y aprete el botón Continuar y te aparecerá el botón de Paypal en donde vas a poder pagar el producto.</li>
              <hr className="mt-1 mb-1"/>
              <li>6.También puedes comprar en el carrito por producto,solo con apretar comprar ahora al lado del producto deseado y el botón de paypal podrás abonar,esto tambien puedes hacerlo en las paginas de un producto en especifico en el que entro.</li>
              <hr className="mt-1 mb-1"/>
              <li>7.Después de confirmar la compra recibirás un correo de nuestra parte, ese no será un comprobante de pago. Una vez acreditado el pago, haremos el envío correspondiente de los productos que hayas comprado o te enviaremos un mail con nuestros datos de contacto para proseguir con el envío o retiro de tu compra.</li>
            </ul>
              <p className="text-xl mt-5 font-semibold">Si tenes dudas o consultas antes de realizar la compra, <span className='text-green-600'>contactate via Whatsapp 11 6871 2714 (Ivan) para una rápida atención</span> , así podremos ayudarte en todo lo que necesites.</p>
          </section>
        </main>
      </section>
      <FooterPage />
    </>
  );
};
