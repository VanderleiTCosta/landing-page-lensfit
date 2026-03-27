import React from 'react';

const ExclusiveSection = () => {
  return (
    <section className="relative bg-[#01232f] py-24 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none -bottom-40"
        style={{ backgroundImage: "url('/img/bg.png')" }}
      ></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* --- BLOCO SUPERIOR: Exclusivo CECOP --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <h2 className="font-gordita text-[42px] md:text-[56px] text-white leading-[1.1] tracking-[-2px]">
              <span className="font-light">Lensfit é um produto</span> <br />
              <span className="font-bold uppercase">
                exclusivo <span className="text-[#e57c66]">CECOP</span>
              </span>
            </h2>

            <p className="font-gordita text-gray-300 text-base md:text-lg max-w-lg leading-relaxed font-normal opacity-90">
              As lentes de contato e oftálmicas Lensfit fazem parte do ecossistema CECOP, e foram desenvolvidas com o intuito de fortalecer a revenda, alinhada à realidade do canal óptico e pronta para ser um diferencial no seu balcão.
            </p>

            <button className="px-10 py-4 bg-[#e57c66] hover:bg-[#d3635a] text-white rounded-full font-gordita font-medium text-xs transition-all shadow-xl hover:-translate-y-1 active:scale-95">
              Quero Lensfit na minha ótica
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px] aspect-square bg-[#e0e0e0] rounded-[60px] flex items-center justify-center p-12 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/img/oculos.png" 
                alt="Armação premium Lensfit" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExclusiveSection;