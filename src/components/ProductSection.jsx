import React from "react";

const ProductsSection = () => {
  return (
    <section className="relative bg-lensfit-bg py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* --- BLOCO SUPERIOR: Lentes de Contato --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            {/* Ícone e Título */}
            <div className="bg-[#1a3a46] w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner">
              <img src="/img/lente.png" alt="Lentes de Contato" className="w-8 h-8" />
            </div>

            <h2 className="font-gordita text-lensfit-h2 text-white leading-[55px] tracking-lensfit-tight">
              <span className="font-bold">Lentes de contato</span> <br />
              <span className="font-light">Lensfit por:</span>
              <span className="inline-block ml-3 bg-white px-4 py-1 rounded-full align-middle">
                <img src="/img/copervision.png" alt="CooperVision" className="h-6 object-contain" />
              </span>
            </h2>

            <p className="font-gordita text-white text-lensfit-p max-w-lg leading-[21px]">
              Lentes de contato pensadas para o uso diário e mensal, que entregam conforto, praticidade e uma excelente oportunidade de recorrência e fidelização para a sua ótica.
            </p>

            <button className="w-[240px] h-[48px] bg-lensfit-red hover:brightness-110 text-white rounded-full font-gordita font-medium text-lensfit-btn transition-all shadow-lg">
              Conheça agora
            </button>
          </div>

          {/* Imagem do Produto (Box) */}
          <div className="relative flex items-center justify-center min-h-[350px]">
            <div className="absolute bottom-0 w-full max-w-[500px] h-[120px] bg-white rounded-[30px] shadow-2xl z-0"></div>
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img src="/img/product.png" alt="Lentes de Contato Lensfit" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>

        {/* --- BLOCO INFERIOR: Card Branco Lentes Oftálmicas --- */}
        <div className="bg-white w-full rounded-[40px] p-12 md:p-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texto Oftálmicas */}
            <div className="text-left space-y-8">
              <div className="bg-[#1a1a1a] w-14 h-14 rounded-2xl flex items-center justify-center">
                <img src="/img/lente.png" alt="" className="w-8 h-8 invert" />
              </div>

              <h2 className="font-gordita text-lensfit-h2 text-lensfit-bg leading-[55px] tracking-lensfit-tight">
                <span className="font-bold">Lentes oftálmicas</span> <br />
                <span className="font-light">Lensfit por:</span>
                <span className="font-bold"> HOYA & <br />EssilorLuxottica</span>
              </h2>

              <p className="font-gordita text-[#4d4d4d] text-lensfit-p max-w-lg leading-[21px]">
                Lentes de grau com padrão global de qualidade, pensadas para entregar conforto visual e consistência no dia a dia da sua ótica, com opções de materiais e tratamentos para diferentes perfis de clientes.
              </p>

              <button className="w-[240px] h-[48px] bg-lensfit-red hover:brightness-110 text-white rounded-full font-gordita font-medium text-lensfit-btn transition-all shadow-lg">
                Fale conosco no WhatsApp
              </button>
            </div>

            {/* Ilustração Técnica */}
            <div className="relative border border-[#ffbd2d] rounded-[40px] p-10 bg-white overflow-hidden">
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="space-y-6 flex flex-col items-center">
                  <img src="/img/basic.png" alt="Basic" className="h-12 w-auto" />
                  <img src="/img/quality.png" alt="Quality" className="h-12 w-auto" />
                  <img src="/img/personaliz.png" alt="Personaliz" className="h-12 w-auto" />
                  <img src="/img/ocupacional.png" alt="Ocupacional" className="h-12 w-auto" />
                </div>
                <div className="space-y-6 flex flex-col items-center">
                  <img src="/img/quality.png" alt="Visual" className="h-12 w-auto" />
                  <img src="/img/quality.png" alt="Visual" className="h-12 w-auto" />
                  <img src="/img/quality.png" alt="Visual" className="h-12 w-auto" />
                  <img src="/img/dados.png" alt="Visual" className="h-12 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
