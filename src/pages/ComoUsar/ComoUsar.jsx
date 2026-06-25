import React from 'react'
import { Link } from 'react-router-dom';
import passo1 from '../../imgs/passo1.png';
import passo2 from '../../imgs/passo2.png';
import passo3 from '../../imgs/passo3.png';
import noite from '../../imgs/noite.jpeg';
import dia from '../../imgs/dia.jpeg'

const modos = [
    {
        id:'01',
        img:passo1,
        title:'Pele limpa e seca',
        text:'Lave o rosto com seu limpador habitual e seque com leveza. O sérum penetra melhor numa pele limpa, sem resíduos de maquiagem ou oleosidade.',
        dica:'Dica: espere 30s após secar para a pele não ficar úmida demais.'
    },
     {
        id:'02',
        img:passo2,
        title:'3 a 4 gotas',
        text:'Pingue de 3 a 4 gotas na ponta dos dedos e espalhe suavemente pelo rosto e pescoço, de dentro para fora. Não precisa esfregar  a textura fluida absorve rápido.',
        dica:'Pouco é suficiente: o conta-gotas dosa a quantidade certa.'
    },
    {
        id:'03',
        img:passo3,
        title:'Sele e proteja',
        text:'Finalize com seu hidratante para selar a hidratação. Durante o dia, aplique sempre protetor solar por cima passo inegociável para manter o glow.',
        dica:'À noite, pode usar antes do seu creme noturno favorito.'
    },
]

const horarios =[
    {
        id:'01',
        img:dia,
        horario:'AM · Manhã',
        title:'Antes do protetor solar',
        text:'Use após a limpeza, sele com hidratante e finalize com FPS. A niacinamida ajuda a controlar a oleosidade ao longo do dia.'
    },
    {
        id:'02',
        img:noite,
        horario:'PM · Noite',
        title:'O passo do glow noturno',
        text:'Aplique sobre a pele limpa antes do creme noturno. É à noite que a pele se regenera o ácido hialurônico potencializa a hidratação.'
    }
]



export const ComoUsar = () => {
  return (
    <section>
        <section className= 'container p-2 md:p-0'>
            <main className='mt-5 md:mt-10'>
                <span className='text-peach-dark uppercase font-semibold text-sm'>como usar · 30 segundos</span>
                <h1 className='text-5xl md:text-7xl font-bold py-2'>A rotina, <span className='text-peach'>descomplicada.</span></h1>
                <p className='text-text-secondary md:w-150 py-2'>Manhã e noite, três passos. O plump. entra logo após a limpeza e antes do hidratante o jeito certo de garantir absorção máxima.</p>
            </main>
            <section>
                <div className='grid md:grid-cols-3 gap-2 mt-4'>
                    {
                        modos.map((modo)=>(
                            <article key={modo.id} className='border-b border-peach-dark mb-5 pb-5 text-center md:text-start '>
                                <img src={modo.img} alt={modo.id} className='rounded-2xl md:rounded-none md:h-120 w-auto object-cover'/>
                                <span className='text-peach inline-block pt-4 pb-2  relative md:before:absolute before:bg-peach before:h-[1px] before:w-[360px] before:top-[27px] before:-right-95'>{modo.id}</span>
                                <h3 className='text-2xl pb-2'>{modo.title}</h3>
                                <p className='text-text-secondary w-90'>{modo.text}</p>
                                <span className='text-xs italic text-text-light pt-2 inline-block '>{modo.dica}</span>
                            </article>
                        ))
                    }
                </div>
            </section>
        </section>

        <div className='bg-charcoal'>
            <div className='container flex flex-col justify-center items-center py-10'>
                    <span className='inline-block uppercase  text-peach font-bold text-sm'>Manhã & noite</span>
                    <h3 className='text-off-white text-3xl md:text-5xl py-5'>Quando aplicar</h3>

                    <article className='grid md:grid-cols-2 gap-0 '>
                        {
                            horarios.map((item)=>(
                                <div key={item.id} className='pb-4 '>
                                    <img src={item.img} className="w-100 md:w-full md:h-[450px] object-cover" />
                                    <span className='text-peach uppercase font-bold inline-block pt-5 pb-5'>{item.horario}</span>
                                    <h3 className='text-2xl md:text-3xl text-off-white pb-2'>{item.title}</h3>
                                    <p className='text-text-light md:w-120 pb-3'>{item.text}</p>
                                </div>
                            ))
                        }
                    </article>
            </div>
        </div>

        <article className='text-center flex flex-col items-center justify-center'>
            <h1  className=' text-2xl md:text-5xl mt-10 font-bold mb-2'>Comece sua rotina hoje.</h1>
            <Link to='/comprar' className='inline-block w-auto text-center bg-charcoal text-off-white py-2 px-4 mt-2 rounded-2xl hover:bg-charcoal-hover '>Comprar — R$ 89</Link>
        </article>
    </section>


  )
}
