import React, { useState,useEffect } from "react";
import { useCartStore } from "@store/buyStore.js";
import { PayPalButtonComponent } from "../Product/PaypalButton.jsx";
import {ShippingOptions} from "./Envios.jsx";
import {CuponDiscontPrice} from "./DiscountPrice.jsx";

export const CarritoMain = () => {
  const [botonPaypal, setBotonPaypal] = useState(false);
  const [botonPaypalUnity, setBotonPaypalUnity] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false); // Estado para rastrear si el descuento ya se aplicó

  const { items, removeItem } = useCartStore((state) => ({
    items: state.items,
    removeItem: state.removeItem,
  }));

  const [showAlert, setShowAlert] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);
  const [quantityToRemove, setQuantityToRemove] = useState(1);

  const handleRemove = (productName, quantity) => {
    setProductToRemove({ name: productName, quantity });
    setQuantityToRemove(1);
    setShowAlert(true);
  };

  const confirmRemove = () => {
    const item = items.find((i) => i.product.name === productToRemove.name);
    if (item) {
      removeItem(item.product.name, quantityToRemove);
    }
    setShowAlert(false);
    setProductToRemove(null);
    setQuantityToRemove(1);
  };

  const cancelRemove = () => {
    setShowAlert(false);
    setProductToRemove(null);
    setQuantityToRemove(1);
  };

  const totalPrice = items
    .reduce((total, item) => {
      const productPrice = parseFloat(
        item.product.price.replace("$", "").replace(",", "")
      );
      const pricePerUnit =
        productPrice +
        (item.product.cents ? parseFloat(item.product.cents) / 100 : 0);
      return total + pricePerUnit * item.quantity;
    }, 0)
    .toFixed(2);

  const handleShippingSelect = (option) => {
    setSelectedShipping(option);
  };

  const handleDiscountApplied = (price, discountValue) => {
    if (!discountApplied) {
      setDiscountedPrice(price - discountValue);
      setDiscount(discountValue);
      setDiscountApplied(true); // Marcar descuento como aplicado
    }
  };

  const finalPrice = (
    parseFloat(discountedPrice) +
    (selectedShipping ? selectedShipping.cost : 0)
  ).toFixed(2);

  useEffect(() => {
    // Resetear descuento cuando los productos cambian
    setDiscountApplied(false);
    setDiscountedPrice(totalPrice);
  }, [items, totalPrice]);


  return (
    <div className="container text-white">
      <div className="products">
        {items.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          items.map((item) => {
            // Calcula el precio total del producto específico
            const productPrice = parseFloat(
              item.product.price.replace("$", "").replace(",", "")
            );
            const totalPrice = (productPrice * item.quantity).toFixed(2);

            return (
              <div
                key={item.product.name}
                className="item bg-black bg-opacity-30"
              >
                <img
                  src={item.product.image}
                  alt="Product Image"
                  className="product-image"
                />
                <div className="product-details">
                  <h2 className="product-title font-semibold">
                    {item.product.name}
                  </h2>
                  <div className="product-price">
                    <span className="product-price-discount">
                      $
                      {(
                        parseFloat(
                          item.product.price.replace("$", "").replace(",", "")
                        ) * item.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                  <div className="product-price">
                    <span>Cantidad : {item.quantity}</span>
                  </div>
                  <div className="product-actions">
                    <button
                      className="bg-red-700 sm:h-[39px] hover:bg-red-500 text-red-200 border-[none] py-2 px-4 rounded-md pointer text-sm"
                      onClick={() => handleRemove(item.product.name)}
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={() =>
                        setBotonPaypalUnity(
                          botonPaypalUnity === item.product.name
                            ? null
                            : item.product.name
                        )
                      }
                      className={`sm:h-[39px] text-white border-[none] py-2 px-4 rounded-md pointer text-sm ${
                        botonPaypalUnity === item.product.name
                          ? "bg-red-700 hover:bg-red-600"
                          : "bg-green-700 hover:bg-green-600"
                      }`}
                    >
                      {botonPaypalUnity === item.product.name
                        ? "Cancelar"
                        : "Comprar ahora"}
                    </button>
                    {botonPaypalUnity === item.product.name && (
                      <button className="m-0 p-0">
                        <PayPalButtonComponent
                          productName={item.product.name}
                          totalPrice={totalPrice}
                          quantity={item.quantity}
                          height={39}
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="summary sticky top-0 bg-black bg-opacity-30">
        <h2 className="font-bold mb-1 text-center text-xl">Resumen de compra</h2>
        <hr className="mb-2" />
        <div className="summary-item px-3">
          <span className="summary-item-title">Total</span>
          <span className="summary-item-value">${finalPrice}</span>
        </div>
        <hr className='mb-2' />
        <ShippingOptions onShippingSelect={handleShippingSelect} />
        <hr className='mb-4 mt-3' />
        <CuponDiscontPrice totalPrice={parseFloat(finalPrice)} onDiscountApplied={handleDiscountApplied}/>
        <div className="flex button-mobile-container items-start sm:flex-row gap-x-3 gap-y-3">
          <button
            onClick={() => setBotonPaypal(!botonPaypal)}
            className={` button-mobile summary-button ${
              botonPaypal
                ? "bg-red-700 hover:bg-red-600 "
                : "bg-green-700 hover:bg-green-600"
            } `}
          >
            {botonPaypal ? "Cancelar compra" : "Continuar compra"}
          </button>
          {botonPaypal && (
            <button className="m-0 p-0 button-mobile">
              <PayPalButtonComponent
                productName={productToRemove?.name}
                totalPrice={finalPrice}
                quantity={productToRemove?.quantity || 1}
                height={48}
              />
            </button>
          )}
        </div>
      </div>

      {showAlert && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-gray-800 text-white rounded-lg shadow-lg z-50">
          <p className="text-lg mb-4">
            {items.find((item) => item.product.name === productToRemove.name)
              ?.quantity > 1
              ? `¿Estás seguro de que deseas eliminar ${quantityToRemove} unidades de este producto?`
              : "¿Estás seguro de que deseas eliminar este producto?"}
          </p>
          {items.find((item) => item.product.name === productToRemove.name)
            ?.quantity > 1 && (
            <div className="flex items-center mb-4 gap-x-1">
              <button
                className="px-4 py-1 rounded-md bg-[#212425] border border-gray-700 lg:text-2xl sm:text-xl text-lg font-light text-white text-opacity-60"
                onClick={() =>
                  setQuantityToRemove(Math.max(1, quantityToRemove - 1))
                }
                disabled={quantityToRemove <= 1}
              >
                -
              </button>
              <input
                type="number"
                className="w-12 px-2 py-1 rounded-md border bg-black text-white border-gray-700 text-center"
                value={quantityToRemove}
                onChange={(e) => setQuantityToRemove(Number(e.target.value))}
                min="1"
              />
              <button
                className="px-4 py-1 rounded-md bg-[#212425] border border-gray-700 lg:text-2xl sm:text-xl text-lg font-light text-white text-opacity-60"
                onClick={() =>
                  setQuantityToRemove((prevQuantity) =>
                    Math.min(
                      prevQuantity + 1,
                      items.find(
                        (item) => item.product.name === productToRemove.name
                      )?.quantity || 1
                    )
                  )
                }
              >
                +
              </button>
            </div>
          )}
          <div className="flex justify-end gap-4">
            <button
              onClick={confirmRemove}
              className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Eliminar
            </button>
            <button
              onClick={cancelRemove}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
          }
          

          .products {
            display: flex;
            flex-direction: column;
            gap: 20px;
            order: 1;
          }

          .summary {
            order: 2;
          }

          @media (min-width: 768px) {
            .container {
              flex-direction: row;
            }

            .products {
              flex: 2;
            }

            .summary {
              flex: 1;
              align-self: flex-start;
            }
          }

          @media (max-width: 650px) {
            .item {
              flex-direction: column;
              text-align: center;
              align-items:center;
            }

            .product-image {
              width: 100%;
              max-width: 150px;
              height: auto;
            }

            .product-details {
              padding: 10px;
            }

            .product-actions {
              flex-direction: column;
              gap: 5px;
            }

            .summary {
              width: 100%;
            }
          }

          .item {
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            display: flex;
            gap: 15px;
          }

          .product-image {
            width: 150px;
            height: auto;
            display: block;
          }

          .product-details {
            flex: 1;
          }

          .product-title {
            font-size: 16px;
            margin-bottom: 10px;
          }

          .product-price {
            font-size: 16px;
            margin-bottom: 10px;
          }

          .product-price-discount {
            color: white;
            font-weight: normal;
            margin-right: 10px;
          }

          .product-actions {
            display: flex;
            gap: 10px;
            margin-top: 10px;
          }

          .product-action-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          }

          .product-action-button:hover {
            background-color: #0056b3;
          }

          .product-status {
            display: flex;
            align-items: center;
            margin-top: 10px;
          }

          .product-status-icon {
            background-color: #dc3545;
            color: #fff;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            margin-right: 5px;
          }

          .product-status-text {
            color: #dc3545;
            font-size: 14px;
          }

          .summary {
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          .summary-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
          }

          .summary-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }

          .summary-item-title {
            font-size: 14px;
            font-weight: bold;
          }

          .summary-item-value {
            font-size: 14px;
          }

          .summary-item-link {
            color: #007bff;
            text-decoration: none;
          }

          .summary-item-link:hover {
            text-decoration: underline;
          }

          

          .summary-button {
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }

          @media (max-width:650px){

          .button-mobile-container{
          display:grid;
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
    </div>
  );
};
