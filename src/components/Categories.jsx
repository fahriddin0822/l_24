import React, { useEffect, useState } from "react";
import { request } from "@/api";

const Categories = ({ setProductsByCategory }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    request.get("/product-category/get").then((res) => setCategories(res.data));
  }, []);

  const handleCategoryClick = (categoryId) => {
    setProducts(categories.filter((product) => product.categoryId==categoryId));
  };

  const categoryItems = categories?.map((category) => (
    <div
      key={category.id}
      onClick={() => handleCategoryClick(category.id)}
      className="px-2 mx-2 cursor-pointer border bg-white rounded-sm hover:bg-slate-300"
    >
      <p>{category.name}</p>
    </div>
  ));

  return (
    <div className="bg-blue-400 h-12 px-2 flex flex-row items-center gap-8 sticky top-0 z-100">
      <div className="category flex gap-1">{categoryItems}</div>
    </div>
  );
};

export default Categories;
