import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "@lib/data";
import { HeaderDashboard } from "@Components/Navegation/HeaderDashboard";
import { FooterPage } from "@Components/LowUse/Footer";
import { Carrousel } from "@Components/OneUse/CarrouselProducts";
import { PayPalButtonComponent } from "./PaypalButton";

export const ProductWeb = () => {
  const { productName } = useParams();
  const product = products.find((product) => product.name === productName);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const [quantity, setQuantity] = useState(1);
  const [botonPaypal, setBotonPayPal] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10) || 1);
  };

  const handleButtonPayPal = () => {
    setBotonPayPal(!botonPaypal);
  };

  const productPrice = parseFloat(product.price.replace('$', '').replace(',', ''));
  const pricePerUnit = productPrice + (product.cents ? parseFloat(product.cents) / 100 : 0);
  const totalPrice = (pricePerUnit * quantity).toFixed(2);

  return (
    <>
      <HeaderDashboard />
      <main className="py-4 px-20 flex sm:flex-row flex-col justify-center sm:gap-x-2 gap-y-3">
        <Carrousel productName={product.name} />
        <div className="flex flex-col px-2 lg:w-[900px] md:w-[460px]">
          <h2 className="titulo lg:text-4xl sm:text-2xl text-2xl mb-3">
            {product.name}
          </h2>
          <h4 className="lg:text-2xl sm:text-xl text-2xl font-semibold flex gap-x-1">
            <span className="lg:text-[27px] text-xl font-medium text-white">
              {product.price}
            </span>
            {product.cents !== undefined && (
              <span className="lg:text-lg text-sm text-white text-opacity-60 m-0 mb-1 mr-1">
                {product.cents}
              </span>
            )}
          </h4>
          <p className="description lg:text-xl text-lg mb-4">
            {product.Description}
          </p>
          <div>
            <h4 className="font-semibold lg:text-[16px] sm:text-sm mb-1.5">
              Cantidad
            </h4>
            <div className="flex items-center mb-4 gap-x-1">
              <button
                className="px-4 py-1 rounded-md bg-[#212425] border border-gray-700 lg:text-2xl sm:text-xl text-lg font-light text-white text-opacity-60"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="number"
                className="w-12 px-2 py-1 rounded-md border bg-black text-white border-gray-700 text-center"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
              <button
                className="px-4 py-1 rounded-md bg-[#212425] border border-gray-700 lg:text-2xl sm:text-xl text-lg font-light text-white text-opacity-60"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="button flex flex-col justify-center gap-y-4">
            <button onClick={handleButtonPayPal} className="transition-transform duration-300 transform hover:scale-110 lg:text-xl sm:text-lg text-sm bg-gradient-to-r from-green-400 to-green-500 text-black font-bold border border-green-600 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 md:py-3 md:px-4 py-3 px-2 rounded-md sm:w-[300px] w-[250px]">
              Comprar ahora
            </button>
            {botonPaypal && (

              <button className="rounded-md sm:w-[300px] w-[250px]">
                <PayPalButtonComponent
                productName={product.name}
                totalPrice={totalPrice}
                quantity={quantity}
              />
              </button>
              
            )}
            <button className="transition-transform duration-300 transform hover:scale-110 lg:text-xl sm:text-lg text-sm bg-gray-600 text-black text-opacity-70 font-bold border border-gray-700 hover:bg-gray-500 md:py-3 md:px-4 py-3 px-2 rounded-md sm:w-[300px] w-[250px]">
              Agregar al carrito
            </button>
          </div>
        </div>
      </main>
      <FooterPage />
      <style>
        {`
          @media(max-width:420px){
          .titulo{
          font-size:17px;
          }
          .description{
            font-size:14px;
          }
            
          .button{
            display:flex;
            justify-content:center;
            flex-direction:column;
          }

          }
          @media(min-width:421px)(max-width:500px){
          .titulo{
          font-size:20px;
          }
          }
          
          /* Ocultar controles de incremento y decremento en navegadores WebKit (Chrome, Safari) */
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Ocultar controles en navegadores basados en Firefox */
          input[type=number] {
            -moz-appearance: textfield;
          }
        `}
      </style>
    </>
  );
};
