import React from "react";

const ProductsSection = () => {
  return (
    <section className="relative bg-[#01232f] py-2 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image da seção */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none z-0 top-80"
        style={{ backgroundImage: "url('/img/bg.png')" }}
      ></div>
      
      <div className="max-w-full mx-auto space-y-12 items-center flex flex-col relative z-10">
        {/* --- BLOCO SUPERIOR: Lentes de Contato --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6 px-28">
            {/* Ícone e Título */}
            <div className="bg-[#1a3a46] w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner">
              <img
                src="/img/lente.png"
                alt="Lentes de Contato"
                className="w-8 h-8"
              />
            </div>

            <h2 className="font-gordita text-4xl md:text-5xl text-white leading-tight">
              <span className="font-bold">Lentes de contato</span> <br />
              <span className="font-light">Lensfit por:</span>
              <span className="inline-block ml-3 bg-white px-4 py-1 rounded-full align-middle">
                <img
                  src="/img/copervision.png"
                  alt="CooperVision"
                  className="h-6 object-contain"
                />
              </span>
            </h2>

            <p className="font-gordita text-gray-300 text-sm md:text-base max-w-lg leading-relaxed">
              Lentes de contato pensadas para o uso diário e mensal, que
              entregam conforto, praticidade e uma excelente oportunidade de
              recorrência e fidelização para a sua ótica.
            </p>

            <button className="px-10 py-3 bg-[#d3635a] hover:bg-[#b54d45] text-white rounded-full font-gordita font-medium text-xs transition-all">
              Conheça agora
            </button>
          </div>

          {/* Imagem do Produto (Box) com Shape Branco conforme a foto */}
          <div className="relative flex items-center justify-center lg:justify-center min-h-[300px] mt-10 lg:mt-0">
            {/* Shape Branco de Fundo (A "Prateleira") */}
            <div
              className="absolute bottom-0 w-full max-w-[514px] h-[120px] bg-white rounded-[29px] shadow-2xl z-0"
              style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
            >
              <div className="absolute top-28 left-64 items-center -translate-x-1/2 -translate-y-1/2 w-full h-4 rounded-b-[20px] bg-[#214b63] z-10 flex justify-center"></div>
            </div>

            {/* Imagem da Caixa Lensfit */}
            <div className="relative z-10 top-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/img/product.png"
                alt="Lentes de Contato Lensfit"
                /* w-auto e h-auto para não distorcer, max-w para controle */
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Glow sutil atrás da caixa para realçar o produto (opcional para PageSpeed/SEO) */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400/20 blur-[80px] -z-10"></div>
          </div>
        </div>

        {/* --- LINHA DIVISORA --- */}
        <div className="w-full flex items-center justify-center">
          <div className="w-[363px] h-[2px] bg-gradient-to-r from-[#ee776e] via-[#ee776e]/50 to-[#b93e3f]"></div>
        </div>

        {/* --- BLOCO INFERIOR: Card Branco Lentes Oftálmicas --- */}
        <div className="bg-white w-full rounded-[40px] p-8 md:p-16 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto Oftálmicas */}
            <div className="text-left space-y-6">
              <div className="bg-[#1a1a1a] w-14 h-14 rounded-2xl flex items-center justify-center">
                <img src="/img/icon-glasses.svg" alt="" className="w-8 h-8" />
              </div>

              <h2 className="font-gordita text-4xl md:text-5xl text-[#01232f] leading-tight">
                <span className="font-bold">Lentes oftálmicas</span> <br />
                <span className="font-light">Lensfit por:</span>
              </h2>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-gray-100 px-5 py-2 rounded-xl">
                  <img
                    src="/img/hoya.png"
                    alt="HOYA"
                    className="h-6 object-contain"
                  />
                </div>
                <span className="text-2xl font-light text-gray-400">&</span>
                <div className="bg-gray-100 px-5 py-2 rounded-xl">
                  <img
                    src="/img/essilorluxottica.png"
                    alt="EssilorLuxottica"
                    className="h-5 object-contain"
                  />
                </div>
              </div>

              <p className="font-gordita text-gray-600 text-sm md:text-base max-w-lg leading-relaxed pt-4">
                Lentes de grau com padrão global de qualidade, pensadas para
                entregar conforto visual e consistência no dia a dia da sua
                ótica, com opções de materiais e tratamentos para diferentes
                perfis de clientes.
              </p>

              <button className="px-10 py-3 bg-[#d3635a] hover:bg-[#b54d45] text-white rounded-full font-gordita font-medium text-xs transition-all shadow-lg">
                Fale conosco no WhatsApp
              </button>
            </div>

            {/* --- Ilustração Técnica das Lentes (Layout de Duas Colunas conforme Imagem) --- */}
            <div className="relative border-2 border-[#ffbd2d] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[80px] rounded-bl-[80px] p-12 lg:p-16 bg-white shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] overflow-hidden">
              {/* Título da Tabela */}
              <div className="text-center mb-12 border-b pb-6 border-gray-100">
                <h4 className="font-gordita text-2xl font-bold text-[#01232f]">
                  Comparativo de Campo Visual
                </h4>
              </div>

              {/* Estrutura de Grid: 2 Colunas (Logos | Lentes) */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-8 items-center">
                {/* --- COLUNA 1: LOGOS (Esquerda) --- */}
                <div className="space-y-8 flex flex-col items-center justify-center border-r border-gray-100 pr-10">
                  <img
                    src="/img/basic.png"
                    alt="Basic"
                    className="h-16 w-auto object-contain"
                  />
                  <img
                    src="/img/quality.png"
                    alt="Quality"
                    className="h-16 w-auto object-contain"
                  />
                  <img
                    src="/img/personaliz.png"
                    alt="Personaliz"
                    className="h-16 w-auto object-contain"
                  />
                  <img
                    src="/img/ocupacional.png"
                    alt="Ocupacional"
                    className="h-16 w-auto object-contain"
                  />
                </div>

                {/* --- COLUNA 2: ILUSTRAÇÕES DE LENTES (Direita) --- */}
                <div className="space-y-2 flex flex-col items-center justify-center">
                  <img
                    src="/img/image.png"
                    alt="Visual Basic"
                    className="h-22 w-auto object-contain"
                  />
                  <img
                    src="/img/image.png"
                    alt="Visual Quality"
                    className="h-22 w-auto object-contain"
                  />
                  <img
                    src="/img/image.png"
                    alt="Visual Personaliz"
                    className="h-22 w-auto object-contain"
                  />
                  <img
                    src="/img/dados.png"
                    alt="Visual Ocupacional"
                    className="h-24 w-auto object-contain"
                  />
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