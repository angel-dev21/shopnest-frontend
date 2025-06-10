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
        <div className="flex-1"> {/* Imagen del producto */}
          <Image
            src={`/images/${id}.png`}
            alt={id as string}
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1"> {/* Información del producto */}
          <div>
            <p>Topitop hombre</p>
            <span>
              <Image src="/images/heart.png" alt="" width={20} height={20} />
            </span>
          </div>
          <h1>Polo Cuello Camisa Hombre Robert Verde Frost</h1>
          <p>Código: 3108692</p>
          <div className="flex justify-between"> {/* Precio */}
            <h2>200.000</h2>
            <p>200.000</p>
            <p>-50%</p>
          </div>
          <div> {/* Tallas */}
            <p>Talla</p>
            <div>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
          <div className="flex justify-between"> {/* Botones de cantidad y agregar al carrito */}
            <div>
              <button onClick={() => setQuantity(quantity - 1)}>-</button>
              <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <div>
              <button>Agregar al carrito</button>
            </div>
          </div>
          <div> {/* Descripción */}
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
