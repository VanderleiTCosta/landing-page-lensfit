import React from "react";

const FeedbackAndContact = () => {
  return (
    <section className="relative bg-[#01232f] pb-32 px-4 flex flex-col items-center overflow-hidden">
      
      {/* --- 1. BANNER DE CRESCIMENTO (Sobreposto ao Card Branco) --- */}
      <div className="relative z-30 w-full max-w-[1166px]">
        <div className="relative bg-[#1a1f2e] rounded-[40px] overflow-hidden min-h-[420px] flex items-center shadow-2xl border border-white/5">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/img/lente-olho.png"
              alt="Lente de contato"
              className="w-full h-full object-cover object-center md:object-right"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e] via-[#1a1f2e]/80 md:via-[#1a1f2e]/40 to-transparent"></div>
          </div>

          {/* Conteúdo do Banner */}
          <div className="relative z-20 p-10 md:p-20 max-w-2xl text-left">
            <h3 className="font-gordita text-2xl md:text-[38px] font-light text-white leading-[1.2] mb-12 tracking-[-1.5px]">
              Quem vive o dia a dia de ser uma <br />
              ótica independente sabe: a CECOP <br />
              é a parceria certa para o seu <br />
              crescimento. <span className="font-bold">Conheça Lensfit</span>
            </h3>

            <button className="px-12 py-4 bg-[#e57c66] hover:bg-[#d3635a] text-white rounded-full font-gordita font-bold text-[11px] uppercase tracking-[1.5px] transition-all shadow-lg hover:-translate-y-1 active:scale-95">
              Saiba mais
            </button>
          </div>
        </div>
      </div>

      {/* --- 2. CARD BRANCO PRINCIPAL --- */}
      <div
        className="relative z-10 shadow-2xl mt-[-150px] w-full overflow-hidden"
        style={{
          maxWidth: "1364px",
          borderRadius: "29px",
          backgroundColor: "#ffffff",
        }}
      >
        {/* PADRÃO GEOMÉTRICO DE FUNDO */}
        <div className="absolute -right-44 bottom-0 w-[350px] lg:w-2/3 h-[650px] opacity-[0.05] pointer-events-none z-0">
          <img src="/img/bg.png" alt="background"/>
        </div>

        {/* CONTEÚDO INTERNO DO CARD BRANCO */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-20 pt-64 pb-24 md:pb-32 space-y-40">
          
          {/* --- BLOCO DE DEPOIMENTOS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {[
              { nome: "Luis Silva Almeida", cargo: "ADMINISTRADOR", foto: "/img/user1.png" },
              { nome: "Maria Eduarda", cargo: "GERENTE DA ÓTICA X", foto: "/img/user2.png" },
              { nome: "Felix Andrade", cargo: "GESTOR DE VENDAS", foto: "/img/user3.png" }
            ].map((user, index) => (
              <div key={index} className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <img src={user.foto} alt={user.nome} className="w-16 h-16 rounded-full object-cover shadow-sm grayscale hover:grayscale-0 transition-all duration-500" />
                  <div>
                    <h4 className="font-gordita font-bold text-[#01232f] text-[20px] leading-tight">{user.nome}</h4>
                    <p className="font-gordita text-[#e57c66] text-[12px] font-bold mt-1 uppercase tracking-wide">{user.cargo}</p>
                  </div>
                </div>
                <p className="font-gordita text-gray-500 text-[14px] leading-[1.6] antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            ))}
          </div>

          {/* --- BLOCO DE CONTATO / FORMULÁRIO --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Texto de Chamada */}
            <div className="text-left space-y-8">
              <h2 className="font-gordita text-[42px] md:text-[52px] text-[#01232f] leading-[1.1] tracking-[-2px]">
                <span className="font-light">Fale conosco agora</span> <br />
                <span className="font-light">através do</span> <span className="font-bold">formulário</span> <br />
                <span className="font-light">ou pelo nosso</span> <br />
                <span className="font-bold">WhatsApp</span>
              </h2>

              <button className="flex items-center space-x-3 px-8 py-3.5 bg-[#84a835] hover:bg-[#72922e] text-white rounded-full font-gordita font-bold text-[13px] transition-all shadow-lg hover:-translate-y-1 active:scale-95">
                <img src="/img/whatsapp-icon.svg" className="w-5 h-5" alt="" />
                <span>Fale com um consultor</span>
              </button>
            </div>

            {/* Card do Formulário */}
            <div className="w-full">
              <div className="bg-[#f9f9f9] rounded-[35px] p-8 md:p-12 shadow-lg border border-gray-100 w-full">
                <form className="space-y-8">
                  <div className="space-y-2">
                    <label className="block font-gordita font-bold text-[#01232f] text-[14px] tracking-wide">Nome:</label>
                    <input 
                      type="text" 
                      placeholder="Ex: João José da Silva" 
                      className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 focus:ring-2 focus:ring-[#e57c66] focus:border-transparent outline-none text-sm placeholder-gray-400 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block font-gordita font-bold text-[#01232f] text-[14px] tracking-wide">E-mail:</label>
                    <input 
                      type="email" 
                      placeholder="Ex: joao@sualoja.com.br" 
                      className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 focus:ring-2 focus:ring-[#e57c66] focus:border-transparent outline-none text-sm placeholder-gray-400 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-gordita font-bold text-[#01232f] text-[14px] tracking-wide">Telefone:</label>
                    <input 
                      type="tel" 
                      placeholder="Ex: (11) 9 8765-4321" 
                      className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 focus:ring-2 focus:ring-[#e57c66] focus:border-transparent outline-none text-sm placeholder-gray-400 transition-all"
                    />
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full px-8 py-4 bg-[#e57c66] hover:bg-[#d3635a] text-white rounded-full font-gordita font-bold text-[13px] transition-all shadow-lg active:scale-95 uppercase tracking-wider">
                      Receber uma proposta
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackAndContact;