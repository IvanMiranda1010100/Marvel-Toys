import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from "@store/buyStore.js";

export const CardProduct = ({ image, Description, price, cents, name, id }) => {
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10) || 1);
  };

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    const product = { image, Description, price, cents, name, id,quantity };
    addItem(product, quantity);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000); // Ocultar alerta después de 3 segundos
  };

  const productPrice = parseFloat(price.replace('$', '').replace(',', ''));
  const pricePerUnit = productPrice + (cents ? parseFloat(cents) / 100 : 0);
  const totalPrice = (pricePerUnit * quantity).toFixed(2);

  return (
    <>
      <Link to={`/dashboard/Productos/${name}`}>
        <div className="m-4 max-w-sm lg:h-[500px] bg-gray-800 border border-gray-600 rounded-lg shadow">
          <a className="flex justify-center" href="#">
            <img
              className="p-6 rounded-t-lg object-cover h-[300px]"
              src={image}
              alt={Description}
            />
          </a>
          <div className="px-4 pb-5">
            <a href="#">
              <h5 className="pb-1 text-sm lg:text-xl font-semibold tracking-tight text-white text-opacity-80 ">
                {name}
              </h5>
            </a>
            <div onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
            >
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
            <div className="flex items-center justify-between">
              <aside className="flex gap-x-1">
                <span className="lg:text-[27px] text-xl font-medium text-white ">
                  {price ? price : "-"}
                </span>
                {cents !== undefined && (
                  <span className="lg:text-lg text-sm text-white m-0 mb-2 mr-3">
                    {cents}
                  </span>
                )}
              </aside>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleAddToCart();
                }}
                className="text-white boton font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700"
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      </Link>

      {showSuccess && (
        <div className="fixed z-[999] transition-all top-4 right-4 p-4 bg-green-600 text-white rounded-lg shadow-lg">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" className="w-6 h-6 mr-2">
              <path fill-rule="evenodd" fill="#fff" d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z" clip-rule="evenodd"></path>
            </svg>
            <span>¡Producto agregado!</span>
            <button onClick={() => setShowSuccess(false)} className="ml-4 text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20">
                <path fill="#fff" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx>
        {`
          .success {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            width: 320px;
            padding: 12px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: start;
            background: #84D65A;
            border-radius: 8px;
            box-shadow: 0px 0px 5px -3px #111;
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
          }

          .success__icon {
            width: 20px;
            height: 20px;
            transform: translateY(-2px);
            margin-right: 8px;
          }

          .success__icon path {
            fill: #393A37;
          }

          .success__title {
            font-weight: 500;
            font-size: 14px;
            color: #393A37;
          }

          .success__close {
            width: 20px;
            height: 20px;
            cursor: pointer;
            margin-left: auto;
          }

          .success__close path {
            fill: #393A37;
          }

          @media (min-width: 768px) and (max-width: 820px) {
            .boton {
              padding-left: 10px;
              padding-right: 10px;
              font-size: 12px;
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
