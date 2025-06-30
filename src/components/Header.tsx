"use client";

import Link from "next/link";
import React from "react";
import { User } from "lucide-react";

const Header = () => {
  const generateUrls = () => {
    const urls = ["Mujer", "Hombre", "Niños", "Accesorios", "Promociones"];
    return urls;
  };

  const urls = generateUrls();

  return (
    <header className="flex justify-center items-center w-full bg-elements text-color-text shadow">
      <div className="flex justify-between items-center w-full max-w-[1440px] h-[5rem] sm:h-[4.875rem] px-[1.375rem] md:px-[5rem]">
        <h1 className="text-[.875rem] sm:text-[1.25rem] font-bold sm:tracking-[.1187rem] sm:ml-1">
          TOPITOP
        </h1>
        <div>
          {/* GENERA UNA LISTA DE URLS DINÁMICAS */}
          {urls.map((url, index) => (
            <Link
              key={index}
              href={`/products/${index}`}
              className="text-[.75rem] sm:text-base mr-2"
            >
              {url}
            </Link>
          ))}
        </div>
        <button
          id="theme-toggle-btn"
          className=" flex justify-center items-center gap-3"
        >
          <span className="text-[.75rem] sm:text-base">Iniciar Sesion</span>
        </button>
        <button className="relative">
          <User />
        </button>
      </div>
    </header>
  );
};

export default Header;
