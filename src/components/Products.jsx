import React from "react";

const Products = ({ data }) => {
  const productItems = data?.map((product) => (
    <div
      key={product.id}
      className="w-80 p-3 border rounded-md hover:shadow-lg transition-shadow"
    >
      <img
        src={product.image}
        className="w-full h-60 object-cover"
        alt={product.name}
      />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.price} USD</p>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productItems || <p>No products available.</p>}
    </div>
  );
};

export default Products;
