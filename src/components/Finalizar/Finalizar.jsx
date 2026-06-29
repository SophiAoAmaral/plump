import React, { useState } from 'react';
import produto from '../../imgs/plumb-product.png';
import { Link } from 'react-router-dom';
import concluido from '../../imgs/concluido.png'

export const Finalizar = ({count, setCount}) => {
    const [enviado, setEnviado] = useState(false)
    const total = count * 86
    const percentual = 25
    const desconto = Math.round(total * percentual / 100);
    const valorFinal = Math.round(total - desconto);


    function handleSubmit(e){
        e.preventDefault()
        setEnviado(true)
    }
  return (

        <section className='container mt-10'>
            <div className='flex flex-col-reverse md:grid md:grid-cols-2 md:gap-20 gap-10'>
                <div className='md:p-9'>
                    <form action=""  onSubmit={handleSubmit} id="checkout-form">
                        <div>
                            <div className='flex flex-col gap-3 mb-3'>
                                <span className='uppercase text-peach-dark text-sm font-semibold'>01 · Contato</span>
                                <input type="text" placeholder='E-mail' required />
                                <input type="text" placeholder='Nome Completo' required />
                            </div>
                            <div className='grid grid-cols-2 gap-3 mb-3'>
                                <span className='uppercase text-peach-dark text-sm font-semibold'>02 · Entrega</span>
                                <input type="text" placeholder='Endere endereço(rua,numero)' required className='col-start-1 col-end-3' />
                                <input type="text" placeholder='CEP' className='' required pattern="\d{5}-?\d{3}"/>
                                <input type="text" placeholder='Cidade'required />
                            </div>
                            <div className='grid grid-cols-2 gap-3 mb-3'>
                                <span className='uppercase text-peach-dark text-sm font-semibold'>03 · Pagamento</span>
                                <input type="text" placeholder='Numero do cartão' required className='col-start-1 col-end-3' />
                                <input type="text" placeholder='Validade(MM/AA)'required  pattern="(0[1-9]|1[0-2])\/\d{2}" />
                                <input type="password" placeholder='CVV' required/>
                            </div>
                        </div>
        
                        
                    </form>
                </div>
                <div className='border flex flex-col gap-3 p-4 md:p-9'>
                    <span className='uppercase text-peach tracking-widest text-sm font-semibold'>Resumo do pedido</span>
                    <div className='flex flex-col md:flex-row md:items-center border-b pb-4 border-text-light'>
                        <img src={produto} alt="" className='md:w-40 self-start' />
                        <div>
                            <h3 className='font-semibold '>Peach Extract 10%</h3>
                            <p className='text-sm text-text-light'>Hydrating + Glow · 30 ml</p>
                        </div>
                        <div className='md:ml-20'>
                           <span className='text-sm '>Unidades: {count}</span>
                        </div>
                    </div>
                    <div className='flex justify-between border-b pb-4 border-text-light font-light'>
                        <div className='flex flex-col gap-2 text-text-muted'>
                            <span>Subtotal</span>
                            <span>Frete</span>
                            <span>Desconto 25%</span>
                        </div>
                        <div className='flex flex-col items-end gap-2 text-text-muted font-light '>
                            <span>R${total},00</span>
                            <span className='text-green-500'>Grátis</span>
                            <span>- R${desconto},00</span>
                        </div>
                    </div>
                    <div className='flex justify-between py-3'>
                        <h1 className='md:text-2xl'>Total</h1>
                        <span className='text-2xl'>R${valorFinal},00</span>
                    </div>
                    <button type="submit" form="checkout-form" className='bg-charcoal text-center text-off-white py-2 px-1 cursor-pointer'>Finalizar Compra </button>
                </div>
            </div>


{enviado && (
  <div className="overlay">
    <article className="active">
      <h1 className="text-3xl">Compra realizada com sucesso!</h1>

      <img src={concluido} className="w-50" alt="" />

      <Link
        to="/"
        className="text-peach-dark"
        onClick={() => setCount(0)}
      >
        Voltar ao início
      </Link>
    </article>
  </div>
)}
        
    </section>
  )
}
