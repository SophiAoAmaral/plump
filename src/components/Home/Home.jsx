import React from 'react'
import product from '../../imgs/plumb-product.png'
import { Carrousel } from '../Carrousel/carrousel';
import { Link, Links } from 'react-router';

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
];


const list = [
  {
    id: '01',
    title:'Formulação',
    text:'Os quatro ativos, suas concentrações exatas e o porquê de cada um.',
    links:'Ver formulação →',
    component:'/formulaçao'
  },
  {
    id: '02',
    title:'Como usar',
    text:'A rotina em 3 passos, manhã e noite, com dicas de aplicação.',
    links:'Ver rotina →',
    component:'/rotina'
  },

    {
    id: '03',
    title:'Comprar',
    text:'Preço, parcelamento e garantia de 30 dias glow ou dinheiro de volta.',
    links:'Comprar agora →',
    component:'/comprar'
  },

]

export const Home = () => {
  return (
    <section>
    <section className="container py-2.5">
      <div className="flex flex-col ">
        <span className="uppercase text-peach-dark text-xs sm:text-sm md:text-xl block text-center">
          Extrait de Pêche · 10% · Hydrating + Glow
        </span>
        <h1 className=" text-3xl sm:text-5xl md:text-9xl md:w-6xl m-auto text-center py-3 font-semibold block">
          Hidratação com brilho <span className="text-peach">de verdade.</span>
        </h1>
      </div>

      <div className="flex flex-col items-center relative">
        <div>
          <img src={product} alt="" className="w-xl" />
        </div>
        <div className="absolute  top-11 -left-1 sm:top-10 sm:-left-0 md:top-20 md:left-70 text-end">
          <p className=" uppercase font-bold  text-xs sm:text-sm md:text-base ">Sem fragrância</p>
          <p className='text-xs md:text-sm w-30 sm:w-40 md:w-50 relative md:before:absolute before:left-15 before:top-12 before:bg-charcoal before:content-[""] before:w-35 before:h-0.5'>
            Formulação clínica, segura para pele sensível.
          </p>
        </div>
        <div className="absolute bottom-5 -left-2 sm:bottom-10 sm:-left-3 md:bottom-25 md:left-70 text-end">
          <p className=" uppercase font-bold text-sm sm:text-xl md:text-2xl ">2%</p>
          <p className=" text-xs md:text-sm w-30 sm:w-40  md:w-50">
            Ácido hialurônico para preencher e suavizar
          </p>
        </div>

        <div className="absolute bottom-6 -right-3 sm:bottom-10 sm:-right-3 md:bottom-25 md:right-70">
          <p className="uppercase font-bold text-xs sm:text-sm md:text-base">30ml</p>
          <p className=' text-xs md:text-sm w-30 sm:w-40 md:w-50 relative md:before:absolute before:right-15 before:top-12 before:bg-charcoal before:content-[""] before:w-35 before:h-0.5'>
            Conta-gotas de precisão, vidro fosco.
          </p>
        </div>

        <div className="absolute top-10 -right-3 md:top-20 md:right-70">
          <p className=" uppercase font-bold text-xs sm:text-sm md:text-2xl  ">10%</p>
          <p className=" text-xs md:text-sm w-30 sm:w-40 md:w-50">
            Extrato de pêssego antioxidante, devolve viço.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-5 mb-5">
        <ul className="flex  flex-col md:flex-row  gap-2 items-center">
          <li>
            <a
              href=""
              className=" py-3 px-4 bg-charcoal text-off-white text-sm"
            >
              Comprar - R$89
            </a>
          </li>
          <li className="text-xs text-amber-300 mt-2 md:mt-0">4.9 ★★★★★  </li>
          <li className="text-xs"> 2.341 avaliações</li>
        </ul>
      </div>

      <section className="flex flex-col md:flex-row md:items-center justify-center md:mt-15 mb-5">
        {stats.map((item) => (
          <div key={item.value} className="flex flex-col text-center border border-[#E2DAD2] px-17 py-6">

            <span className="font-bold text-xl ">{item.value}</span>
            <span className="text-sm">{item.text}</span>

          </div>
        ))}
      </section>

    </section>
    <Carrousel/>

    <main className='container mt-10 md:mt-20 flex flex-col gap-10'>
      <div>
        <span className='text-xs font-bold text-peach-dark uppercase tracking-widest'>Conheça o plump.</span>
        <h2 className='text-4xl md:text-6xl py-2 md:py-4 font-bold md:w-200 '>Tudo o que você precisa saber.</h2>
      </div>
        <div className='flex flex-col md:flex-row'>
          {
            list.map((item)=>(
              <div key={item.id} className='flex flex-col border border-[#E2DAD2] px-10 py-6'>
                  <span className='text-peach font-bold font-xs py-2'>{item.id}</span>
                  <h3 className='text-xl font-bold pb-2'>{item.title}</h3>
                  <p className='text-text-secondary pb-2'>{item.text}</p>
                  <Link to={item.component} className='font-bold hover:text-text-secondary hover:transition'>{item.links}</Link>
              </div>
            ))
          }
        </div>
      
    </main>


    </section>
  );
}
