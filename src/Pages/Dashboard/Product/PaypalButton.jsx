import React, { useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export const PayPalButtonComponent = ({ productName, totalPrice, quantity,height }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Este useEffect se asegura de que el componente se re-renderice cuando cambie la cantidad
  }, [quantity, totalPrice]);

  return (
    <PayPalScriptProvider options={{ "client-id": "AZaKKN5FLfeRfGupu7ykhgSEM5yRUMcksyjy1IPYh24thbAlQKfQn0wxIrPQ4U-EtLMJ8OXaqbuYZiw1", currency: "USD" }}>
      <div>
        {message && (
          <div
            className={`p-4 mb-4 text-sm rounded-lg ${message.type === 'success' ? 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400' : 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400'}`}
            role="alert"
          >
            <span className="font-medium">{message.text}</span>
          </div>
        )}
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: totalPrice
                },
                description: `${productName} (x${quantity})`
              }]
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              setMessage({ type: 'success', text: `¡Su pago se realizó con éxito, ${details.payer.name.given_name}!` });
            });
          }}
          onError={(err) => {
            console.error(err);
            setMessage({ type: 'error', text: 'No se completó su pago. Intente nuevamente.' });
          }}
          style={{
            layout: 'horizontal',
            color: 'blue',
            height: height,
            tagline: false
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};
