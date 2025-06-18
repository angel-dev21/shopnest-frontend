"use client";

import { useEffect, useState } from "react";
import { ProductResponseDto } from "@/types/ProductResponseDto";
import ProductCard from "@/components/ProductCardComponent/ProductCardComponent";
import { useProducts } from "@/services/queries";

const ProductsPage = () => {
  const [pList, setPList] = useState<ProductResponseDto[]>([]);
  const [productPage, setProductPage] = useState(0);
  const { data, isLoading, error } = useProducts(productPage);

  /*useEffect(() => {
    axios
      .get("http://localhost:8080/api/products", {
        params: {
          page: productPage,
          size: 3,
        },
      })
      .then((response) => setPList((pList) => pList.concat(response.data)))
      .catch((error) => console.log(error));
  }, [productPage]);*/

  useEffect(() => {
    if (data && data.length > 0) {
      setPList((pList) => pList.concat(data));
    }
  }, [data]);

  const catalog = () =>
    pList.map((product, id) => (
      <div key={id}>
        <ProductCard {...product} />
      </div>
    ));

  const moreProducts = () => {
    setProductPage(productPage + 1);
  };

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error</div>;

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
