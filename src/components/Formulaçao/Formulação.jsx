import React from 'react'
import imageInicio from '../../imgs/pantenol-inicio.png'
import imageInicio2 from '../../imgs/pele-2.png'

import image1 from '../../imgs/pessego.png';
import image2 from '../../imgs/acido-hia.png';
import image3 from '../../imgs/pantenol.png';
import image4 from '../../imgs/pele-2.png';
import contaGotas from '../../imgs/conta-gotas.png'
import { Link } from 'react-router';








const elements = [
    {
        id: '1',
        element: 'Peach',
        img:image1,
        title: 'Extrato de Pêssego',
        text:'Antioxidante rico em vitaminas A e C. Devolve viço, protege contra radicais livres e dá aquele aspecto saudável de pele descansada.',
        carac:'Prunus persica fruit extract',
        porc:'10%'
    },
    {
        id: '2',
        element: 'HA',
        img:image2,
        title: 'Ácido Hialurônico',
        text:'Retém até 1000x seu peso em água nas camadas superficiais da pele preenchimento e aspecto plump na hora da aplicação.',
        carac:'Sodium hyaluronate, baixo e alto peso molecular',
        porc:'2%'
    },
    {
        id: '3',
        element: 'Niacin.',
        img:image3,
        title: 'Niacinamida',
        text:'Equilibra a oleosidade, refina a aparência dos poros e uniformiza o tom da pele ao longo do uso contínuo.',
        carac:'Vitamina B3',
        porc:'5%'
    },
    {
        id: '4',
        element: 'Pro-B5',
        img:image4,
        title: 'Pantenol',
        text:'Acalma vermelhidão e fortalece a barreira cutânea, melhorando a retenção de água e a resistência da pele.',
        carac:'Provitamina B5',
        porc:'1%'
    },

];

const components = ['Parabenos', 'Sulfatos', 'Fragrância', 'Óleo mineral', 'Álcool secante', 'Crueldade animal']


export const Formulação = () => {
  return (
    <section className='container mt-10'>
        <div className='flex flex-col justify-center'>
            <span className='text-peach-dark text-xs font-bold tracking-widest py-2 uppercase'>Formulação clínica</span>
            <h1 className='text-4xl md:text-7xl md:w-200 font-semibold'>Quatro ativos. Dosagem real. <span className='text-peach'>Zero enrolação.</span></h1>
            <p className=' text-sm md:text-medium text-text-muted md:w-150 py-3'>Cada ingrediente listado na concentração exata do jeito que a dermatologia recomenda. Sem lista interminável só pra parecer sofisticado.</p>
            <div className='grid grid-cols-2 justify-center items-center '>
                <img src={imageInicio}  className='' alt="" />
                <img src={imageInicio2} className='' alt="" />
                <span className='text-xs text-text-light py-1 col-start-1 col-end-3 md:col-end-2'>Textura fluida, translúcida com leve tom pêssego — absorve sem deixar resíduo.</span>
            </div>
        </div>

        <main className='border-t mt-20 py-8'>
        {
            elements.map((element)=>(
                <div key={element.id} className='border-b border-separator flex flex-col md:flex-row md:justify-around md:items-center py-2'>
                    <span className='md:w-20 uppercase text-peach font-bold text-sm self-center '>{element.element}</span>
                    <img src={element.img} alt={element.title} className='w-70 h-70 md:w-40 md:h-40 m-auto rounded-2xl md:rounded-none mt-2 md:mt-0' />
                    <div className='md:w-200 self-center justify-self-start'>
                        <h3 className='text-2xl py-1 font-semibold text-center md:text-start '>{element.title}</h3>
                        <p className='text-text-secondary md:w-180 pb-2 text-center md:text-start'>{element.text}</p>
                        <span className='text-text-light text-xs italic'>{element.carac}</span>
                    </div>

                    <span className='text-xl md:text-3xl w-20 font-bold'>{element.porc}</span>
                </div>
            ))
        }
        </main>


        <section className='bg-charcoal p-5 mt-5 rounded-2xl'>
            <div className='flex flex-col-reverse md:flex-row md:items-center md:justify-center gap-10 md:gap-20'>
                <div className='md:w-150'>
                    <span className='text-sm text-peach-dark uppercase'>Sem segredos</span>
                    <h3 className='text-off-white text-4xl md:text-5xl py-3 font-semibold'>A fórmula inteira, à mostra.</h3>
                    <p className='md:w-120 text-text-light text-sm'>Acreditamos que você merece saber exatamente o que passa na pele. Base aquosa, pH balanceado (5.5), e nada de parabenos, sulfatos, óleos minerais ou fragrância sintética.</p>
                    <div className='flex flex-col md:flex-row flex-wrap gap-3 mt-2 mb-2 md:mb-0'>
                        {
                            components.map((i)=>(
                                    <span key={i} className='text-white text-sm border-2   border-charcoal-hover p-2 pl-6 relative before:absolute before:bg-peach-dark before:top-[50%] before:left-2 before:w-2.5 before:h-[2px]'>{i}</span>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <img src={contaGotas} alt="" className='w-100 rounded-2xl ' />
                </div>
            </div>

        </section>


        <article className='text-center'>
            <h1  className=' text-4xl mt-10 font-bold'>Pronto para o glow?</h1>
            <Link to='/comprar' className='inline-block w-auto text-center bg-charcoal text-off-white py-2 px-4 mt-2 rounded-2xl hover:bg-charcoal-hover'>Comprar — R$ 89</Link>
        </article>
    </section>
  )
}
