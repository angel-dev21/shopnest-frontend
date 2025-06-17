"use client";

import { useEffect, useState } from "react";
import { ProductResponseDto } from "@/types/ProductResponseDto";
import axios from "axios";
import ProductCard from "@/components/ProductCardComponent/ProductCardComponent";

const ProductsPage = () => {
  const [pList, setPList] = useState<ProductResponseDto[]>([]);
  const [productPage, setProductPage] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products", {
        params: {
          page: productPage,
          size: 3,
        },
      })
      .then((response) => setPList((pList) => pList.concat(response.data)))
      .catch((error) => console.log(error));
  }, [productPage]);

  const catalog = () =>
    pList.map((product, id) => (
      <div key={id}>
        <ProductCard {...product} />
      </div>
    ));

  const moreProducts = () => {
    setProductPage(productPage + 1);
  };

  return (
    <div>
      <div className="p-2 grid grid-cols-3">{catalog()}</div>
      <div className="flex justify-center items-center">
        <button
          className="bg-red-500 text-white text-sm font-semibold py-2 px-10 mb-5"
          onClick={moreProducts}
        >
          VER MÁS PRODUCTOS
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
