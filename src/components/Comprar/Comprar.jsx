import React, { useState } from 'react'
import produto from '../../imgs/plumb-product.png'
import { Link } from 'react-router-dom'

export const Comprar = ({count, setCount}) => {
    function handleClick(){
        setCount(count + 1)
    }
  return (
<section className='container'>
    <h2 className='text-center mt-6 font-bold text-3xl md:text-5xl'>Comprar</h2>
  <section className='grid md:grid-cols-2 mt-9 justify-center md:items-stretch ' >
      <div className='border p-5 border-b-0 md:border-b '>
        <img src={produto} alt="Sérum Peach Extract 10%" className='md:animate-float' />
      </div>
      <div className='p-3 md:p-10 flex flex-col  border'>
        <span className='text-peach-dark uppercase text-sm tracking-widest md:mt-15'>Peach Extract 10%</span>
        <h1 className='text-3xl md:text-6xl font-bold my-2'>Hydrating + Glow Formula</h1>
        <div className='flex gap-2.5 items-center mb-2'>
          <span className='text-peach'>★★★★★</span>
          <span className='text-sm '>4.9 · 2.341 avaliações</span>
        </div>
        <div className='flex gap-4 items-center '>
          <span className='text-2xl'>R$89</span>
          <span className='text-text-light relative before:absolute before:w-[45px] before:top-[10px] before:-right-0 before:h-[2px] before:bg-text-light '>R$119</span>
          <span className='text-xs border py-1 px-2 border-peach text-peach'>-25%</span>
        </div>
        <span className='text-text-muted text-sm mb-4'>ou 3x de R$ 29,67 sem juros</span>
            <button 
            className='md:block bg-charcoal text-center text-off-white py-2 px-1 '
            onClick={handleClick}
            >
              Adicionar à sacola
            </button>
        <span className='text-center text-xs mb-5 pb-7 border-peach-dark border-b mt-2 text-text-secondary '>Estoque limitado</span>
        <ul className='flex flex-wrap gap-5 text-text-light text-xs items-center justify-center md:items-start '>
          <li>Vegano</li>
          <li>Cruelty-free</li>
          <li>Sem fragrância</li>
          <li>Dermatologicamente testado</li>
        </ul>
      </div>
  </section>
</section>
  )
}
