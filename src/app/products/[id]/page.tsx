"use client";
import { ChevronDown, Heart } from "lucide-react";
import { useGetAvailableSizesByCode, useGetProductByCode } from "@/services/queries";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useRef, useState } from "react";
import { AvailableSize } from "@/types/availableSize";

const CountryPage = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const descriptionRef = useRef<HTMLDivElement>(null);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
    descriptionRef.current?.classList.toggle("hidden");
  };

// id = marca + nombre + codigo "xiomi-casaca-mujer-valeria-marron-3099638"
// const productId = id as string;
// const parts = productId.split('-');
// const code = parts[parts.length - 1];

  const code = typeof id === 'string' ? id.split('-').at(-1) ?? '' : '';  

  // Fetching del país principal
  const { data, isLoading, error } = useGetProductByCode(code);
  const { data: availableSizes, isLoading: availableSizesLoading, error: availableSizesError } = useGetAvailableSizesByCode(code);
  
  // const country =
  //   data && Array.isArray(data) && data.length > 0 ? data[0] : null;

  const product = data ?? null;

  if (isLoading || availableSizesLoading) return <div>Loading...</div>;

  if (error || availableSizesError) return <div>Error: {(error || availableSizesError)?.message}</div>;

  if (!product) return <div>Product not found</div>;

 /*
  // Estados de carga y errores
  //if (isLoading) return <SkeletonDetails />;

  if (error)
    return (
      <div className="text-red-500 text-center mt-4">
        Error loading country data
      </div>
    );

  const borders = borderData ?? [];
*/
  const mySizes = ["XS", "S", "M", "L", "XL"];

  return (
    <main>
      <div className="flex justify-center items-start w-full gap-[32px] ">
        <div className="flex-1">
          {/* Imagen del producto */}
          <Image
            src={product?.images[0]}
            alt={product?.productName}
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 px-[32px] pt-[40px] sticky top-0 h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Información del producto */}
          <div className="flex justify-between">
            <p className="text-[13px]">product brand: topitop hombre</p>
            <Heart className="w-6 h-6 cursor-pointer" />
          </div>
          <h1 className="text-[20px] font-bold">
            {product?.productName}
          </h1>
          <p className="text-[13px]">Código: {product?.productCode}</p>
          <div className="flex items-center gap-2">
            {/* Precio */}
            <h2 className="text-[22px] font-bold">S/ {Number(product?.productPrice * (1 - product?.discount / 100)).toFixed(2)}</h2>
            <div className="flex gap-2">
              <p className="line-through">S/ {product?.productPrice}</p>
              <p className="text-[13px] bg-black text-white text-center font-bold px-2 py-1 rounded-full">-{product?.discount}%</p>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-4">
            {/* Tallas */}
            <p className="text-[11px]">Talla</p>
            <div className="flex gap-2">
              {mySizes?.map((size: string) => (
                <button key={size} className={`w-[40px] h-[40px] border rounded-full text-[11px] ${availableSizes?.some((availableSize: AvailableSize) => availableSize.sizeLabel === size) ? "text-black border-gray-700 hover:bg-black hover:text-white cursor-pointer" : "relative text-gray-400 border-gray-300 select-none cursor-not-allowed before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-gray-400 before:rotate-45 before:top-1/2 before:left-0"}`}>
                  {size}
                </button>
              ))}
              {availableSizes?.length === 0 && <p>No hay tallas disponibles</p>}
              {availableSizesLoading && <p>Cargando tallas...</p>}
              {availableSizesError && <p>Error al cargar tallas</p>}
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 mt-4">
            {/* Botones de cantidad y agregar al carrito */}
            <div className="flex w-[150px]">
              <button onClick={() => setQuantity(quantity - 1)} className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center border border-gray-300">-</button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-[40px] text-center border border-gray-300 no-spinner"
              />
              <button onClick={() => setQuantity(quantity + 1)} className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center border border-gray-300">+</button>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-800 text-white font-bold px-4 py-2 cursor-pointer uppercase">Agregar al carrito</button>
          </div>
          <div className="mt-4">
            {/* Descripción */}
            <div className="flex justify-between cursor-pointer group" id="description" onClick={() => toggleDescription()} ref={descriptionRef}>
              <p className="text-[13px] font-bold text-red-600">Descripción</p>
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ease-in-out transform ${isDescriptionOpen ? 'rotate-180' : 'rotate-0'}`} />
            </div>
            <p className="hidden group-hover:block text-[12px]" id="descriptionContent" ref={descriptionRef}>
              Shopnest ha diseñado prendas para pasar esta temporada con moda y estilo de la marca <mark>{"MARCA"}</mark>. Renueva tu guardarropa con este {product?.productName} en el color de tu preferencia y combínalos para armar tu look perfecto.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryPage;
