import React from "react";

const Features = () => {
  return (
    /* Background escuro profundo para contraste com o card branco */
    <section
      id="features"
      className="relative bg-[#01232f] pb-30 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-10xl mx-auto relative z-10">
        {/* --- CARD SUPERIOR BRANCO --- */}
        <div className="bg-white rounded-[40px] px-8 md:px-16 lg:px-20 py-20 lg:py-32 shadow-2xl relative overflow-hidden mt-[-50px] z-30">
          {/* Entalhe decorativo no topo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-7 bg-[#01232f] rounded-b-[35px]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* COLUNA ESQUERDA (Logos) - Ocupa 5 colunas do grid */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[450px]">
              {/* Container Centralizador dos Cards */}
              <div className="relative w-full max-w-[450px] h-[350px]">
                {/* 1. O Círculo Laranja Centralizado entre os cards */}
                <div className="absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 w-[109px] h-[109px] bg-[#ffbd2d] rounded-full z-10 flex items-center justify-center shadow-[0_0_30px_rgba(255,189,45,0.3)]"></div>

                {/* --- CARD ESQUERDA: EssilorLuxottica --- */}
                <div className="absolute top-1/2 left-3 -translate-y-1/2 w-[220px] bg-white p-6 rounded-[20px] flex items-center justify-center min-h-[140px] shadow-md z-10 border border-gray-50">
                  <img
                    src="/img/essilorluxottica.png"
                    alt="EssilorLuxottica"
                    className="max-h-10 w-auto object-contain"
                  />
                </div>

                {/* --- CARD SUPERIOR DIREITA: CooperVision --- */}
                <div className="absolute top-8 right-[-7px] w-[220px] bg-white p-6 rounded-[20px] flex items-center justify-center min-h-[140px] shadow-md z-10 border border-gray-50">
                  <img
                    src="/img/copervision.png"
                    alt="CooperVision"
                    className="max-h-10 w-auto object-contain"
                  />
                </div>

                {/* --- CARD INFERIOR DIREITA: HOYA --- */}
                <div className="absolute bottom-8 right-[-7px] w-[220px] bg-white p-6 rounded-[20px] flex items-center justify-center min-h-[140px] shadow-md z-10 border border-gray-50">
                  <img
                    src="/img/hoya.png"
                    alt="HOYA"
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA (Texto) - Ocupa 7 colunas do grid */}
            <div className="lg:col-span-7 lg:pl-10 text-left">
              <h2 className="font-gordita text-[32px] md:text-[45px] font-light text-[#01232f] leading-[1.1] mb-8 tracking-[-1px]">
                Produção com a assinatura <br />
                <span className="font-bold">
                  de líderes <span className="text-[#d3635a]">globais</span>
                </span>
              </h2>

              <div className="space-y-6 font-gordita text-sm md:text-[15px] text-gray-600 leading-relaxed max-w-lg">
                <p>
                  As lentes Lensfit são produzidas pelos fabricantes
                  **EssilorLuxottica, HOYA e CooperVision**, que compõem o
                  portfólio CECOP.
                </p>
                <p>
                  Isso significa acesso à tecnologia de ponta, padronização de
                  qualidade e consistência de produção, trazendo mais segurança
                  na recomendação e mais confiança para colocar a marca na sua
                  vitrine.
                </p>
              </div>

              <button className="mt-10 px-10 py-3.5 bg-[#d3635a] hover:bg-[#b54d45] text-white rounded-full font-gordita font-medium text-[13px] transition-all shadow-lg hover:-translate-y-1 active:scale-95">
                Fale agora com um especialista
              </button>
            </div>
          </div>
        </div>

        {/* --- BANNER INFERIOR (SOBREPOSIÇÃO COM ESTILO ROXO CUSTOMIZADO) --- */}
        <div className="mt-[-60px] relative z-30 mx-auto px-4 md:px-0 flex justify-center bottom-20">
          <div className="relative w-[90%] h-auto rounded-[29px] overflow-hidden shadow-2xl flex items-center">
            {/* 1. Imagem de Fundo com Overlay - Otimizada para ocupar 100% */}
            <div className="absolute inset-0 z-10">
              <img
                src="/img/modelo.png"
                alt="Modelo LensFit"
                className="w-full h-full object-cover object-right"
                style={{ fetchpriority: "high" }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-transparent"></div>
            </div>

            {/* 2. Conteúdo do Banner */}
            <div className="relative z-10 w-full h-full p-8 md:p-16 flex flex-col justify-center max-w-3xl">
              <h3 className="font-gordita text-2xl md:text-[36px] font-light text-white leading-[1.2] mb-10 tracking-[-1px]">
                Lensfit é a marca oficial de lentes{" "}
                <br className="hidden lg:block" />
                CECOP, desenvolvida para <br className="hidden lg:block" />
                <span className="font-bold">
                  fortalecer as vendas em óticas{" "}
                  <br className="hidden lg:block" /> independentes
                </span>{" "}
                de todo o Brasil.
              </h3>

              <button
                className="
        w-fit px-8 py-4 
        bg-[#d3635a] hover:bg-[#b54d45] 
        text-white rounded-full 
        font-gordita font-bold text-[10px] 
        uppercase tracking-[1.5px] 
        transition-all duration-300
        hover:brightness-110 hover:-translate-y-1 
        active:scale-95 shadow-lg
      "
              >
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
