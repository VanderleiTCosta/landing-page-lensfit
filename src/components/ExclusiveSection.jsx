import React from 'react';

const ExclusiveSection = () => {
  return (
    <section className="relative bg-lensfit-bg py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <h2 className="font-gordita text-lensfit-h2 text-white leading-[55px] tracking-lensfit-tight">
              <span className="font-light">Lensfit é um produto</span> <br />
              <span className="font-bold">exclusivo <span className="text-lensfit-red">CECOP</span></span>
            </h2>

            <p className="font-gordita text-white text-lensfit-p max-w-lg leading-[21px]">
              As lentes de contato e oftálmicas Lensfit fazem parte do ecossistema CECOP, e foram desenvolvidas com o intuito de fortalecer a revenda, alinhada à realidade do canal óptico e pronta para ser um diferencial no seu balcão.
            </p>

            <button className="w-[240px] h-[48px] bg-lensfit-red hover:brightness-110 text-white rounded-full font-gordita font-medium text-lensfit-btn transition-all shadow-lg">
              Quero Lensfit na minha ótica
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px] aspect-square bg-[#e0e0e0] rounded-[40px] flex items-center justify-center p-12 shadow-2xl">
              <img src="/img/oculos.png" alt="Óculos" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveSection;
