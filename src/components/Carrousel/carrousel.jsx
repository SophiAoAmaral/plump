import React from 'react'

const awards = [
  "",
  "hidratação 72hr",
  "peach extract 10%",
  "vegano",
  "sem fragrâcia",
  "cruelty-free",
  "glow formula",
]


export const Carrousel = () => {
  return (
<section className="relative overflow-hidden bg-charcoal py-4">
  <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
    {[...awards, ...awards].map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-6 px-6 text-xs uppercase tracking-widest text-[#8A8079]"
      >
        <span className='text-off-white'>{item}</span>
      </div>
    ))}
  </div>
</section>
  )
}
