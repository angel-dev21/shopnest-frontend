import { ProductResponseDto } from "@/types/ProductResponseDto";
import Image from "next/image";

const ProductCard = ({
  productName,
  productPrice,
  images,
}: ProductResponseDto) => {
  return (
    <div className="flex flex-col justify-center p-5 bg-white ">
      <Image
        src={images[0]}
        height={500}
        width={624}
        alt={productName}
        className="w-full h-auto"
      />
      <div className="flex justify-between px-2 my-1">
        <p className="text-sm">{productName}</p>
        <p className="font-semibold">S/ {productPrice}</p>
      </div>
      <hr className="text-black/20" />
      <button className="bg-black text-white py-2 mt-2 font-semibold">
        AGREGAR AL CARRITO
      </button>
    </div>
  );
};

export default ProductCard;
