import { Facebook, Instagram, MessageCircleQuestion, ScrollText, ShieldCheck, Signature, Twitter, User, UserSearch } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-elements">
      <div className="flex justify-between items-center w-full px-[1.375rem] md:px-[2rem] py-[1rem] border-t-4 border-red-800">
        <div className="flex flex-col gap-4 max-w-[555px] w-full pr-[3rem] border-r border-gray-200">
          <p className="text-[2rem] font-bold uppercase py-2 px-2">Shopnest</p>
          <div className="flex gap-4">
            <Link href={"/"}>
              <Facebook />
            </Link>
            <Link href={"/"}>
              <Instagram />
            </Link>
            <Link href={"/"}>
              <Twitter />
            </Link>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p className="max-w-[300px] w-full text-[.875rem]">
              Dirección Legal: Av. Santuario Nro. 1323 San Juan de Lurigancho
              15427 - Lima
            </p>
            <p className="max-w-[300px] w-full text-[.875rem]">Razón Social: Trading Fashion Line S.A.RUC: 20501057682</p>
          </div>
        </div>
        <div className="flex gap-[3rem] w-full px-[2rem] ">
          <div className="w-full flex-1">
            <p className="text-[1rem] font-bold uppercase py-4 border-b-2 border-gray-300">SERVICIO AL CLIENTE</p>
            <div className="">
              <ul className="max-w-[346px] w-full text-[.875rem]">
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <Truck color="red"/>
                  <Link href={"/"}>Seguimiento de pedido</Link>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <ScrollText color="red" />
                  <Link href={"/"}>Políticas de envío</Link>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <ScrollText color="red" />
                  <Link href={"/"}>Terminos y condiciones</Link>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <MessageCircleQuestion color="red" />
                  <Link href={"/"}>Preguntas frecuentes</Link>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <UserSearch color="red" />
                  <Link href={"/"}>Contáctanos</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex-1 ">
            <p className="text-[1rem] font-bold uppercase py-4 border-b-2 border-gray-300">NOSOTROS</p>
            <div>
              <ul className="max-w-[346px] w-full text-[.875rem]">
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <Truck color="red"/>
                  <Link href={"/"}>Nuestras tiendas</Link>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <User color="red" />
                  <Link href={"/"}>Nosotros</Link>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                 <ShieldCheck color="red" />
                  <Link href={"/"}>Política y protección de datos</Link>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <Signature color="red" />
                  <Link href={"/"}>Bases legales</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex-1">
            <p className="text-[1rem] font-bold uppercase py-4 border-b-2 border-gray-300">MARCAS</p>
            <div>
              <ul className="max-w-[346px] w-full text-[.875rem]">
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <p>Xiomi</p>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <p>Hawk</p>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <p>Shopnest Mujer</p>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <p>Shopnest Hombre</p>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <p>Shopnest Kids</p>
                </li>
                <li className="flex gap-2 w-full py-2 border-b border-gray-200">
                  <p>Basic Man</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
