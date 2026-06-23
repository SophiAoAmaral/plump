import React from 'react'
import product from '../../imgs/plumb-product.png'
import { Carrousel } from '../Carrousel/carrousel';

const stats = [
  {
    value: '+72%',
    text: 'hidratação em 24h'
  },
  {
    value: '7 dias',
    text: 'até o glow visível'
  },
  {
    value: '94%',
    text: 'notaram pele mais lisa'
  }
]

export const Home = () => {
  return (
    <section>
    <section className="container py-2.5">
      <div className="flex flex-col ">
        <span className="uppercase text-peach-dark text-sm  block text-center">
          Extrait de Pêche · 10% · Hydrating + Glow
        </span>
        <h1 className=" text-5xl md:text-9xl md:w-6xl m-auto text-center py-3 font-semibold block">
          Hidratação com brilho <span className="text-peach">de verdade.</span>
        </h1>
      </div>

      <div className="flex flex-col items-center relative">
        <div>
          <img src={product} alt="" className="w-xl" />
        </div>
        <div className="absolute  top-8 -left-5 sm:top-10 sm:-left-0 md:top-20 md:left-40 text-end">
          <p className=" uppercase font-bold  text-sm md:text-base ">Sem fragrância</p>
          <p className='text-xs md:text-sm w-40 md:w-50 relative md:before:absolute before:left-15 before:top-12 before:bg-charcoal before:content-[""] before:w-35 before:h-0.5'>
            Formulação clínica, segura para pele sensível.
          </p>
        </div>
        <div className="absolute bottom-5 -left-9 sm:bottom-10 sm:-left-3 md:bottom-25 md:left-40 text-end">
          <p className=" uppercase font-bold  md:text-2xl ">2%</p>
          <p className=" text-xs md:text-sm w-40  md:w-50">
            Ácido hialurônico para preencher e suavizar
          </p>
        </div>

        <div className="absolute bottom-5 -right-8 sm:bottom-10 sm:-right-3 md:bottom-25 md:right-40">
          <p className="uppercase font-bold text-sm md:text-base">30ml</p>
          <p className=' text-xs md:text-sm w-40 md:w-50 relative md:before:absolute before:right-15 before:top-12 before:bg-charcoal before:content-[""] before:w-35 before:h-0.5'>
            Conta-gotas de precisão, vidro fosco.
          </p>
        </div>

        <div className="absolute top-10 -right-1 md:top-20 md:right-40">
          <p className=" uppercase font-bold text-sm md:text-2xl  ">10%</p>
          <p className=" text-xs md:text-sm w-40 md:w-50">
            Extrato de pêssego antioxidante, devolve viço.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-5 mb-5">
        <ul className="flex gap-2 items-center">
          <li>
            <a
              href=""
              className=" py-3 px-4 bg-charcoal text-off-white text-sm"
            >
              Comprar - R$89
            </a>
          </li>
          <li className="text-xs text-amber-300"> ★★★★★ </li>
          <li className="text-xs"> 4.9 · 2.341 avaliações</li>
        </ul>
      </div>

      <section className="flex items-center justify-center mt-15 mb-5">
        {stats.map((item) => (
          <div key={item.value} className="flex flex-col text-center border border-[#E2DAD2] px-17 py-6">

            <span className="font-bold text-xl ">{item.value}</span>
            <span className="text-sm">{item.text}</span>

          </div>
        ))}
      </section>

    </section>
    <Carrousel/>
    </section>
  );
}
