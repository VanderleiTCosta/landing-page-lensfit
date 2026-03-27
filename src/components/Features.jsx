import React from "react";

const Features = () => {
  return (
    <section id="features" className="relative bg-lensfit-bg pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- CARD SUPERIOR BRANCO --- */}
        <div className="bg-white rounded-[40px] px-8 md:px-16 lg:px-20 py-20 lg:py-24 shadow-2xl relative overflow-hidden mt-[-100px] z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* COLUNA ESQUERDA (Logos) */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]">
              <div className="relative w-full max-w-[400px] h-[300px]">
                {/* Linhas conectoras (simuladas com bordas) */}
                <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-1 h-32 bg-[#ffbd2d]"></div>
                <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-12 h-1 bg-[#ffbd2d]"></div>
                
                {/* --- CARD ESQUERDA: EssilorLuxottica --- */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200px] bg-white p-6 rounded-[10px] flex items-center justify-center min-h-[120px] shadow-lg z-20 border border-gray-100">
                  <img src="/img/essilorluxottica.png" alt="EssilorLuxottica" className="max-h-8 w-auto object-contain" />
                </div>

                {/* --- CARD SUPERIOR DIREITA: CooperVision --- */}
                <div className="absolute top-0 right-0 w-[200px] bg-[#f2f2f2] p-6 rounded-[10px] flex items-center justify-center min-h-[120px] z-10">
                  <img src="/img/copervision.png" alt="CooperVision" className="max-h-8 w-auto object-contain" />
                </div>

                {/* --- CARD INFERIOR DIREITA: HOYA --- */}
                <div className="absolute bottom-0 right-0 w-[200px] bg-[#f2f2f2] p-6 rounded-[10px] flex items-center justify-center min-h-[120px] z-10">
                  <img src="/img/hoya.png" alt="HOYA" className="max-h-8 w-auto object-contain" />
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA (Texto) */}
            <div className="lg:col-span-7 lg:pl-10 text-left">
              <h2 className="font-gordita text-lensfit-h2 font-light text-lensfit-bg leading-[55px] mb-8 tracking-lensfit-tight">
                Produção com a assinatura <br />
                <span className="font-bold">
                  de líderes <span className="text-lensfit-red">globais</span>
                </span>
              </h2>

              <div className="space-y-6 font-gordita text-lensfit-p text-[#4d4d4d] leading-[21px] max-w-lg">
                <p>
                  As lentes Lensfit são produzidas pelos fabricantes <strong>EssilorLuxottica, HOYA e CooperVision</strong>, que compõem o portfólio CECOP.
                </p>
                <p>
                  Isso significa acesso à tecnologia de ponta, padronização de qualidade e consistência de produção, trazendo mais segurança na recomendação e mais confiança para colocar a marca na sua vitrine. Com Lensfit, você oferece um portfólio competitivo, com respaldo industrial e atendimento nacional.
                </p>
              </div>

              <button className="mt-10 w-[240px] h-[48px] bg-lensfit-red hover:brightness-110 text-white rounded-full font-gordita font-medium text-lensfit-btn transition-all shadow-lg">
                Fale agora com um especialista
              </button>
            </div>
          </div>
        </div>

        {/* --- BANNER INFERIOR --- */}
        <div className="mt-20 relative z-30">
          <div className="relative w-full h-[450px] rounded-[40px] overflow-hidden shadow-2xl flex items-center">
            <div className="absolute inset-0 z-0">
              <img src="/img/modelo.png" alt="Modelo" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-12 md:p-20 max-w-3xl">
              <h3 className="font-gordita text-lensfit-h2 font-light text-white leading-[55px] mb-10 tracking-lensfit-tight">
                Lensfit é a marca oficial de lentes <br />
                CECOP, desenvolvida para <br />
                <span className="font-bold">fortalecer as vendas em óticas independentes</span> de todo o Brasil.
              </h3>

              <button className="w-[300px] h-[48px] bg-lensfit-red hover:brightness-110 text-white rounded-full font-gordita font-medium text-lensfit-btn transition-all shadow-lg">
                Quero oferecer Lensfit na minha ótica
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
