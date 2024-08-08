import React, { useState } from "react";
import { useCartStore } from "@store/buyStore.js";

export const CarritoMain = () => {
  const { items, removeItem } = useCartStore((state) => ({
    items: state.items,
    removeItem: state.removeItem,
  }));

  const [showAlert, setShowAlert] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);
  const [quantityToRemove, setQuantityToRemove] = useState(1);

  const handleRemove = (productName, quantity) => {
    setProductToRemove({ name: productName, quantity });
    setQuantityToRemove(1); // Reiniciar la cantidad a 1 cuando se muestra la alerta
    setShowAlert(true);
  };

  const confirmRemove = () => {
    const item = items.find((i) => i.product.name === productToRemove.name);
    if (item) {
      removeItem(item.product.name, quantityToRemove);
    }
    setShowAlert(false);
    setProductToRemove(null);
    setQuantityToRemove(1); // Reiniciar la cantidad a 1 después de eliminar
  };
  const cancelRemove = () => {
    setShowAlert(false);
    setProductToRemove(null);
    setQuantityToRemove(1); // Reiniciar la cantidad a 1 después de cancelar
  };

  const totalPrice = items.reduce((total, item) => {
    const productPrice = parseFloat(item.product.price.replace('$', '').replace(',', ''));
    const pricePerUnit = productPrice + (item.product.cents ? parseFloat(item.product.cents) / 100 : 0);
    return total + pricePerUnit * item.quantity;
  }, 0).toFixed(2);

  return (
    <>
      <div className="container text-white">
        <div className="products">
          {items.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            items.map((item) => (
              <div key={item.product.name} className="item bg-black bg-opacity-30">
                <img src={item.product.image} alt="Product Image" className="product-image" />
                <div className="product-details">
                  <h2 className="product-title font-semibold">{item.product.name}</h2>
                  <div className="product-price">
                    <span className="product-price-discount">
                      {item.product.price}
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="">
                      Cantidad : {item.quantity}
                    </span>
                  </div>
                  <div className="product-actions">
                    <button
                      className="bg-red-700 hover:bg-red-500 text-red-200 border-[none] py-2 px-4 rounded-md pointer text-sm"
                      onClick={() => handleRemove(item.product.name)}
                    >
                      Eliminar
                    </button>
                    <button className="bg-green-700 hover:bg-green-600 text-white border-[none] py-2 px-4 rounded-md pointer text-sm">
                      Comprar ahora
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="summary sticky top-0 bg-black bg-opacity-30">
          <h2 className="summary-title">Resumen de compra</h2>
          <div className="summary-item">
            <span className="summary-item-title">Total</span>
            <span className="summary-item-value">${totalPrice}</span>
          </div>
          <div className="summary-item">
            <span className="summary-item-title">¿Cuál es el costo de envío?</span>
            <a href="#" className="summary-item-link">Ver opciones</a>
          </div>
          <div className="summary-item">
            <span className="summary-item-title">Ingresar código de cupón</span>
            <input type="text" className="coupon-input bg-black bg-opacity-40" />
          </div>
          <button className="summary-button bg-green-700 hover:bg-green-600">
            Continuar compra
          </button>
        </div>
      </div>

       {showAlert && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-gray-800 text-white rounded-lg shadow-lg z-50">
          <p className="text-lg mb-4">
            {items.find(item => item.product.name === productToRemove.name)?.quantity > 1 
              ? `¿Estás seguro de que deseas eliminar ${quantityToRemove} unidades de este producto?` 
              : '¿Estás seguro de que deseas eliminar este producto?'}
          </p>
          {items.find(item => item.product.name === productToRemove.name)?.quantity > 1 && (
            <div className="flex items-center mb-4 gap-x-1">
            <button
          className="px-4 py-1 rounded-md bg-[#212425] border border-gray-700 lg:text-2xl sm:text-xl text-lg font-light text-white text-opacity-60"
          onClick={() => setQuantityToRemove(Math.max(1, quantityToRemove - 1))}
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
          onClick={() => setQuantityToRemove(prevQuantity => Math.min(
            prevQuantity + 1, 
            items.find(item => item.product.name === productToRemove.name)?.quantity || 1
          ))}
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

          @media (max-width: 450px) {
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

          .coupon-input {
            width: 100%;
            padding: 8px;
            border-radius: 6px;
            margin-top: 5px;
            font-size: 14px;
          }

          .summary-button {
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
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
