"use client";
//import { ExampleComponent } from "@/components/exampleComponent";
// import { useCountry, useGetCountriesByCode } from "@/services/queries";
import Image from "next/image";
// import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const CountryPage = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  /*
  // Fetching del país principal
  const { data, isLoading, error } = useCountry(name as string);

  const country =
    data && Array.isArray(data) && data.length > 0 ? data[0] : null;

  // Fetching de los países vecinos
  const { data: borderData, isLoading: bordersLoading } = useGetCountriesByCode(
    country?.borders || []
  );

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
  return (
    <main>
      <div className="flex justify-center items-center w-full ">
        <div className="flex-1">
          {" "}
          {/* Imagen del producto */}
          <Image
            src={`/images/${id}.png`}
            alt={id as string}
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1">
          {" "}
          {/* Información del producto */}
          <div className="flex justify-between">
            <p className="text-[13px]">Topitop hombre</p>
            <span>
              <Image src="/images/heart.png" alt="" width={20} height={20} />
            </span>
          </div>
          <h1 className="text-[20px] font-bold">
            Polo Cuello Camisa Hombre Robert Verde Frost
          </h1>
          <p className="text-[13px]">Código: 3108692</p>
          <div className="flex justify-between">
            {" "}
            {/* Precio */}
            <h2 className="text-[22px] font-bold">S/ 49.95</h2>
            <div className="flex gap-2">
              <p className="line-through">S/ 200.00</p>
              <p className="text-[13px] text-red-500">-50%</p>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-4">
            {/* Tallas */}
            <p className="text-[11px]">Talla</p>
            <div className="flex gap-2">
              <button className="w-[32px] h-[32px] rounded-full bg-black text-white text-[13px] hover:bg-gray-800 px-2 cursor-pointer">XS</button>
              <button className="w-[32px] h-[32px] rounded-full bg-black text-white text-[13px] hover:bg-gray-800 px-2 cursor-pointer">S</button>
              <button className="w-[32px] h-[32px] rounded-full bg-black text-white text-[13px] hover:bg-gray-800 px-2 cursor-pointer">M</button>
              <button className="w-[32px] h-[32px] rounded-full bg-black text-white text-[13px] hover:bg-gray-800 px-2 cursor-pointer">L</button>
              <button className="w-[32px] h-[32px] rounded-full bg-black text-white text-[13px] hover:bg-gray-800 px-2 cursor-pointer">XL</button>
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
          <div>
            {" "}
            {/* Descripción */}
            <div className="flex justify-between">
              <p>Descripción</p>
              <span>
                <Image src="" alt="" width={20} height={20} />
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quidem.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryPage;
