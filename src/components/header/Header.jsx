import React from 'react'
import logo from '../../imgs/plump-preto.png';

export const Header = () => {
  return (
    <header className='font-sans pb-3 md:pb-0 border-b '>
        <article className='text-center bg-charcoal text-off-white uppercase text-xs p-2 tracking-widest'>Frete grátis acima de R$ 99 · Amostra grátis em todo pedido</article>
        <nav className=' container md:flex md:justify-between items-center p-1'>
            <div className='justify-items-center '>
                <img src={logo} alt="" className='w-30 cursor-pointer p-2' />
            </div>

            <ul className='flex gap-3 text-sm md:text-base justify-center md:gap-5 items-center [&>*:not(:last-child):hover]:underline'>
                <li><a href="">Inicio</a></li>
                <li><a href="">Formulação</a></li>
                <li><a href="">Como Usar</a></li>
                <li><a href="">Comprar</a></li>
                <li className='border hidden md:inline md:py-2 md:px-3 hover:bg-charcoal hover:text-off-white hover:transition'><a href="">Carrinho</a></li>
            </ul>
        </nav>
    </header>
  )
}
