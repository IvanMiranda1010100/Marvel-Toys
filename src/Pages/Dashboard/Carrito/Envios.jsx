import React, { useState } from "react";

export const ShippingOptions = ({ onShippingSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const shippingOptions = [
    { id: "standard", name: "Envío estándar", cost: 10.0, details: "Entrega en 10-15 días hábiles." },
    { id: "express", name: "Envío exprés", cost: 30.0, details: "Entrega en 5-7 días hábiles." },
    { id: "overnight", name: "Envío nocturno", cost: 60.0, details: "Entrega al día siguiente." },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    onShippingSelect(option);
  };

  return (
    <div className="flex flex-col gap-y-4 p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">Opciones de envío</h3>
      {shippingOptions.map((option) => (
        <div 
          key={option.id} 
          className={`p-3 rounded-lg cursor-pointer flex items-center justify-between border 
                      ${selectedOption?.id === option.id ? 'border-blue-500 bg-blue-900' : 'border-gray-600'} 
                      hover:border-blue-400`}
          onClick={() => handleSelect(option)}
        >
          <div className="flex items-center">
            <input
              type="radio"
              id={option.id}
              name="shipping"
              value={option.id}
              checked={selectedOption?.id === option.id}
              onChange={() => handleSelect(option)}
              className="mr-3"
            />
            <label htmlFor={option.id} className="cursor-pointer text-gray-300">
              <span className="font-medium">{option.name}</span> - <span className="text-blue-400 font-bold">${option.cost.toFixed(2)}</span>
            </label>
          </div>
        </div>
      ))}
      {selectedOption && (
        <div className="mt-4 p-4 bg-green-900 border-l-4 border-green-600 rounded">
          <h4 className="text-lg font-semibold text-green-300">Detalles del envío seleccionado:</h4>
          <p className="text-md text-green-400 mt-2">{selectedOption.details}</p>
        </div>
      )}
    </div>
  );
};
