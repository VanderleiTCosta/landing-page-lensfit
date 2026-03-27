import React from 'react';


const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#01232f] overflow-hidden pt-16 px-4 sm:px-6 lg:px-8">
      
      {/* 1. Imagem de Fundo (Modelo) Otimizada para LCP */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/image-hero.png" 
          alt="Modelo LensFit" 
          className="w-full h-full object-cover object-center lg:object-center opacity-80"
          style={{ fetchpriority: "high" }} // Boost extra no PageSpeed
        />
      </div>

      {/* 2. Overlay de Gradiente Otimizado para Contraste do Texto */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#01232f]"></div>

      {/* 3. Conteúdo Principal */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 pb-16">
        <div className="text-left max-w-2xl">
          
          {/* Subtítulo "POWERED BY CECOP" - Gordita Regular */}
          <span className="font-gordita block text-sm font-normal text-white/70 tracking-[2px] mb-4 uppercase">
            POWERED BY CECOP
          </span>
          
          {/* Título Principal - Gordita Bold */}
          <h1 className="font-gordita text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-1.5px] mb-8 leading-[1.15]">
            Sua vitrine com a qualidade dos líderes do mercado: Lentes de contato e lentes oftalmológicas LensFit
          </h1>
          
          {/* Descrição - Gordita Regular/Medium */}
          <p className="font-gordita text-base sm:text-lg text-white/80 mb-12 leading-relaxed max-w-xl font-normal antialiased">
            Com a produção realizada por <strong className="font-medium text-white">EssilorLuxottica, HOYA e CooperVision</strong>, Lensfit é uma marca oficial CECOP, desenvolvida para fortalecer a ótica independente.
          </p>

          {/* Botão Principal Otimizado */}
          <button className="
            w-[240px] h-[48px] flex items-center justify-center
            font-gordita font-medium text-base text-white
            border-none rounded-[24px]
            bg-[linear-gradient(91deg,#e57c66_0%,#d3635a_100%)]
            transition-all duration-300 ease-in-out
            hover:brightness-110 hover:-translate-y-0.5 active:scale-95 active:translate-y-0
            shadow-lg shadow-black/30
          ">
            Quero saber mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;