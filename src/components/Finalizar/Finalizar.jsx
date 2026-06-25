import React from 'react'
import produto from '../../imgs/plumb-product.png'

export const Finalizar = ({count, setCount}) => {

    const total = count * 86
    const percentual = 25
    const desconto = Number((total * percentual / 100).toFixed(2));
    const valorFinal = Number((total - desconto).toFixed(2));


    function handleClick(){
        
    }

  return (
    <section className='container mt-10'>
        <div className='grid grid-cols-2 gap-20'>
            <div className='p-9'>
                <form action="">
                    <div className='flex flex-col gap-3 mb-3'>
                        <span className='uppercase text-peach-dark text-sm font-semibold'>01 · Contato</span>
                        <input type="text" placeholder='E-mail' />
                        <input type="text" placeholder='Nome Completo' />
                    </div>
                    <div className='grid grid-cols-2 gap-3 mb-3'>
                        <span className='uppercase text-peach-dark text-sm font-semibold'>02 · Entrega</span>
                        <input type="text" placeholder='Endere endereço(rua,numero)' className='col-start-1 col-end-3' />
                        <input type="text" placeholder='CEP' className=''/>
                        <input type="text" placeholder='Cidade' />
                    </div>

                    <div className='grid grid-cols-2 gap-3 mb-3'>
                        <span className='uppercase text-peach-dark text-sm font-semibold'>03 · Pagamento</span>
                        <input type="text" placeholder='Numero do cartão' className='col-start-1 col-end-3' />
                        <input type="text" placeholder='Validade(MM/AA)' />
                        <input type="text" placeholder='CVV' />
                    </div>
                </form>
            </div>
            <div className='border flex flex-col gap-3 p-9'>
                <span className='uppercase text-peach tracking-widest text-sm font-semibold'>Resumo do pedido</span>
                <div className='flex items-center border-b pb-4 border-text-light'>
                    <img src={produto} alt="" className='w-40 self-start' />
                    <div>
                        <h3 className='font-semibold '>Peach Extract 10%</h3>
                        <p className='text-sm text-text-light'>Hydrating + Glow · 30 ml</p>
                    </div>
                    <div className='ml-55'> 
                       <span className='text-lg'>{count}</span>
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
                        <span>- R${desconto}0</span>
                    </div>
                </div>
                <div className='flex justify-between py-3'>
                    <h1 className='md:text-2xl'>Total</h1>
                    <span className='text-2xl'>R${valorFinal}0</span>
                </div>
                <button className='bg-charcoal text-center text-off-white py-2 px-1 cursor-pointer' onClick={handleClick}>Finalizar Compra </button>
            </div>
        </div>
    </section>
  )
}
