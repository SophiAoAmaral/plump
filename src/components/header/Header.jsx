import React from 'react'
import logo from '../../imgs/plump-preto.png';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <header className='font-sans pb-3 md:pb-0 border-b border-separator '>
        <article className='text-center bg-charcoal text-off-white uppercase text-xs p-2 tracking-widest'>Frete grátis acima de R$ 99 · Amostra grátis em todo pedido</article>
        <nav className=' container md:flex md:justify-between items-center p-1'>
            <div className='justify-items-center '>
                <Link to='/'> 
                <img src={logo} alt="" className='w-30 cursor-pointer p-2' />
                </Link>
            </div>

            <ul className='flex gap-3 text-sm md:text-base justify-center md:gap-5 items-center [&>*:not(:last-child):hover]:underline'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/formulacao'>Formulação</Link></li>
                <li><Link to='/uso' href="">Como Usar</Link></li>
                <li><Link to='/comprar'>Comprar</Link></li>
                <li className='border hidden md:inline md:py-2 md:px-3 hover:bg-charcoal hover:text-off-white hover:transition'><a href="">Carrinho</a></li>
            </ul>
        </nav>
    </header>
  )
}
