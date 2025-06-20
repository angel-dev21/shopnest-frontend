import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ReturnInstructions = () => {
  return (
    <div>
        <div className='flex justify-between items-center w-full py-[90px] px-[70px] gap-[50px]'>
            <div className='flex flex-col max-w-[660px] w-full pr-[50px] border-r-[2px] border-gray-300'>
                <p className='text-[35px] font-bold'>¿Cambios o devoluciones?</p>
                <p className='text-[13px]'>En nuestra tienda online puedes comprar con total confianza, si deseas devolver o cambiar una prenda por otra talla, puedes hacerlo de manera simple y rápida.</p>
                <Link href={"/"} className='max-w-fit text-[15px] font-bold bg-black text-white py-[10px] px-[20px] mt-[30px] rounded-[2px]'>
                    VER TÉRMINOS Y CONDICIONES
                </Link>
            </div>
            <div className='flex justify-between gap-4'>
                <div>
                    <div className='flex items-end gap-2'>
                        <p className='text-red-700 text-[50px] font-semibold'>1.</p>
                        <Image src={"https://topitop.vteximg.com.br/arquivos/icon1-cam-dev.svg"} alt="" width={84} height={84} className="w-[84px] h-[84px] object-contain" />
                    </div>
                    <div className='py-[12px] text-[12px]'>
                        <p>Asegúrate que el producto que devuelvas se encuentre en perfecto estado y sin señales de uso, con sus accesorios y etiquetas.</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <p className='text-red-700 text-[50px] font-semibold'>2.</p>
                        <Image src={"https://topitop.vteximg.com.br/arquivos/icon2-cam-dev.svg"} alt="" width={84} height={84} className="w-[84px] h-[84px] object-contain" />
                    </div>
                    <div className='py-[12px] text-[12px]'>
                        <p>Lleva el producto que deseas devolver o cambiar a la tienda Topitop más cercana o a nuestra oficina de courrier autorizada.</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <p className='text-red-700 text-[50px] font-semibold'>3.</p>
                        <Image src={"https://topitop.vteximg.com.br/arquivos/icon3-cam-dev.svg"} alt="" width={84} height={84} className="w-[84px] h-[84px] object-contain" />
                    </div>
                    <div className='py-[12px] text-[12px]'>
                        <p>Te emitiremos una nota de crédito para que puedas volver a adquirir la prenda en tu talla correcta o podrás solicitar la devolución de tu dinero.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
