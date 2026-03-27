import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-lensfit-bg text-white pt-20 pb-10 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* 1. Card de Logos dos Fabricantes */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[25px] p-10 flex flex-col items-center justify-center space-y-10 shadow-2xl min-h-[350px]">
              <img src="/img/copervision.png" alt="CooperVision" className="h-8 object-contain" />
              <img src="/img/essilorluxottica.png" alt="EssilorLuxottica" className="h-7 object-contain" />
              <img src="/img/hoya.png" alt="HOYA" className="h-10 object-contain" />
            </div>
          </div>

          {/* 2. Coluna de Texto 01 */}
          <div className="lg:col-span-3 space-y-6">
            <p className="font-gordita text-[12px] leading-[21px] text-white/80 text-justify">
              A Lensfit é uma marca de lentes para óticas desenvolvida pela CECOP para fortalecer a ótica independente com um portfólio pensado para a realidade de quem vende no balcão e precisa de consistência no dia a dia. A proposta da Lensfit é entregar uma linha completa para revenda em óticas, unindo lentes de contato (nas versões diária e mensal) e lentes oftálmicas para óculos. Com foco em soluções de alta procura como lentes progressivas, lentes antirreflexo e lentes com filtro de luz azul.
            </p>
            <p className="font-gordita text-[12px] leading-[21px] text-white/80 text-justify">
              Ao posicionar a Lensfit na vitrine, a ótica ganha uma marca com discurso claro, mix objetivo e uma construção voltada para padronização, confiança e recorrência, sem depender apenas de campanhas de preço para gerar giro.
            </p>
          </div>

          {/* 3. Coluna de Texto 02 */}
          <div className="lg:col-span-3 space-y-6">
            <p className="font-gordita text-[12px] leading-[21px] text-white/80 text-justify">
              Um dos pilares da Lensfit é o respaldo de produção: as lentes são produzidas por fabricantes líderes do setor, como EssilorLuxottica, HOYA e CooperVision, trazendo tecnologia, controle e uniformidade em cada entrega. Para a ótica, isso se traduz em mais segurança na recomendação, mais tranquilidade para sustentar o padrão de qualidade e um caminho sólido para diferenciar o portfólio com uma marca do ecossistema CECOP.
            </p>
            <p className="font-gordita text-[12px] leading-[21px] text-white/80 text-justify">
              Com atendimento em todo o Brasil, a Lensfit foi criada para apoiar óticas que buscam crescer com uma solução de lentes que combine confiabilidade, credibilidade e uma proposta comercial orientada ao canal óptico, do primeiro contato ao pós-venda.
            </p>
          </div>

          {/* 4. Coluna de Logos Lensfit/CECOP */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center space-y-12 pt-8">
            <img 
              src="/img/Logo-lensfit.png" 
              alt="Lensfit" 
              className="w-full max-w-[200px] h-auto object-contain invert brightness-0"
            />
            <img 
              src="/img/cecop.png" 
              alt="CECOP" 
              className="w-full max-w-[200px] h-auto object-contain invert brightness-0"
            />
          </div>

        </div>

        {/* --- COPYRIGHT BAR --- */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="font-gordita text-[12px] text-white/40 tracking-wide">
            Copyright © 2026 CECOP - Desenhado e desenvolvido por Agência ExoPlanet.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
