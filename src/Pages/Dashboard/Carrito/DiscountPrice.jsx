import React, { useState } from "react";

export const CuponDiscontPrice = ({ totalPrice, onDiscountApplied }) => {
  const [couponCode, setCouponCode] = useState("");
  const [error, setError] = useState("");

  const handleApplyCoupon = () => {
    // Define los cupones válidos y sus descuentos
    const coupons = {
      "SpiderMan": 0.50,  // 50% de descuento
      "IronMan": 0.20,  // 20% de descuento
      "StanLee": 1.00,  // 100% de descuento
      "DoctorDoom": 0.20,  // 20% de descuento
    };

    if (coupons[couponCode]) {
      const discount = coupons[couponCode];
      const discountedPrice = couponCode === "StanLee" ? 0 : totalPrice * (1 - discount);
      onDiscountApplied(discountedPrice, discount);
      setError("");
    } else {
      setError("Código de cupón inválido");
      onDiscountApplied(totalPrice, 0);
    }
  };

  return (
    <>
      <div className="summary-item items-center">
        <span className="text-sm font-semibold">Ingresar código de cupón:</span>
        <input
          type="text"
          className="coupon-input bg-black bg-opacity-40 text-white"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button
          onClick={handleApplyCoupon}
          className="apply-coupon-button bg-green-700 hover:bg-green-600 text-white"
        >
          Aplicar
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}

      <style>
        {`
          .summary-item {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
          }
          @media (min-width: 640px) {
            .summary-item {
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            }
          }
          .coupon-input {
            padding: 8px;
            border-radius: 6px;
            margin-top: 5px;
            font-size: 14px;
            width: 100%;
            max-width: 250px;
          }
          .apply-coupon-button {
            margin-top: 5px;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};
