import React from 'react'
import logo from '../../imgs/plump-branco.png'

export const Footer = () => {
  return (
    <footer className='bg-charcoal mt-10 md:mt-30  font-sans'>
        <main className='container flex flex-col md:flex-row justify-between pt-10 gap-5 md:gap-0 pb-6 md:items-center'>
            <div className='flex flex-col text-center'>
                <img src={logo} alt="" className='w-40 self-center'/>
                <span className='block text-footer-light  text-xs'>Clinical formulations with integrity.</span>
                <span className='text-footer-light  text-xs'>Formulações clínicas com transparência total.</span>
            </div>
            <div>
                <ul className='flex flex-row gap-5 md:gap-20 justify-around'>
                    <div>
                        <h3 className='uppercase text-text-muted text-xs tracking-widest'>Produto</h3>
                        <li className='text-xs text-footer-light hover:text-text-muted py-1 cursor-pointer'>Formulação</li>
                        <li  className='text-xs text-footer-light hover:text-text-muted py-1 cursor-pointer'>Como usar</li>
                        <li  className='text-xs text-footer-light hover:text-text-muted py-1 cursor-pointer'>Comprar</li>
                    </div>
                    <div>
                        <h3 className='uppercase text-text-muted text-xs tracking-widest'>Marca</h3>
                        <li className='text-xs text-footer-light hover:text-text-muted py-1 cursor-pointer'>Sobre</li>
                        <li className='text-xs text-footer-light hover:text-text-muted py-1 cursor-pointer'>Instagram</li>
                        <li className='text-xs text-footer-light hover:text-text-muted py-1 cursor-pointer'>Contato</li>
                    </div>
                </ul>
            </div>
        </main>

        <article className='border-t border-charcoal-hover mt-3 text-center p-1'>
            <span className='text-xs text-footer-light '>© 2026 plump. — marca fictícia criada para demonstração.</span>
        </article>

    </footer>
  )
}
