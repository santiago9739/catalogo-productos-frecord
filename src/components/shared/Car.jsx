import React from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
import Product from "./Product";

const Card = (props) => {
  const { showOrder, setShowOrder } = props;
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"
        }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Hola, asi va tu pedido.</h1>
        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Producto</h5>
            <h5>N°</h5>
            <h5>Precio</h5>
          </div>
          {/* Products */}
          <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-y-auto">
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product description */}
                <div className="col-span-4 flex items-center gap-3">
                <img src="chillona.png" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Valvula Chillona</h5>
                    <p className="text-xs text-gray-500">$25.000 COP</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span className="text-sm">$50.000 COP</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5"></form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Submit payment */}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400 text-xl">Total</span>
            <span>$50.000</span>
          </div>
          <div>
            <button className="bg-[#90d6f8] text-[#1F1D2B] w-full py-2 px-4 rounded-lg">
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
