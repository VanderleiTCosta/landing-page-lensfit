import React from "react";

const FeedbackAndContact = () => {
  return (
    <section className="relative bg-lensfit-bg pb-32 px-4 flex flex-col items-center overflow-hidden">
      
      {/* --- 1. BANNER DE CRESCIMENTO --- */}
      <div className="relative z-30 w-full max-w-[1166px]">
        <div className="relative bg-[#1a1f2e] rounded-[40px] overflow-hidden min-h-[400px] flex items-center shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img src="/img/lente-olho.png" alt="Lente" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e] via-[#1a1f2e]/60 to-transparent"></div>
          </div>

          <div className="relative z-20 p-12 md:p-20 max-w-2xl text-left">
            <h3 className="font-gordita text-lensfit-h2 font-light text-white leading-[55px] mb-12 tracking-lensfit-tight">
              Quem vive o dia a dia de ser uma <br />
              ótica independente sabe: a CECOP <br />
              é a parceria certa para o seu <br />
              crescimento. <span className="font-bold">Conheça Lensfit</span>
            </h3>

            <button className="w-[240px] h-[48px] bg-lensfit-red hover:brightness-110 text-white rounded-full font-gordita font-medium text-lensfit-btn transition-all shadow-lg">
              Saiba mais
            </button>
          </div>
        </div>
      </div>

      {/* --- 2. CARD BRANCO PRINCIPAL --- */}
      <div className="relative z-10 shadow-2xl mt-[-100px] w-full max-w-[1366px] bg-white rounded-[40px] overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-20 pt-48 pb-24 space-y-32">
          
          {/* --- BLOCO DE DEPOIMENTOS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { nome: "Luis Silva Almeida", cargo: "Administrador", foto: "/img/user1.png" },
              { nome: "Maria Eduarda", cargo: "Gerente da ótica X", foto: "/img/user2.png" },
              { nome: "Felix Andrade", cargo: "Gestor de vendas", foto: "/img/user3.png" }
            ].map((user, index) => (
              <div key={index} className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <img src={user.foto} alt={user.nome} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-gordita font-bold text-lensfit-bg text-[20px] leading-tight">{user.nome}</h4>
                    <p className="font-gordita text-lensfit-red text-[12px] font-bold mt-1 uppercase">{user.cargo}</p>
                  </div>
                </div>
                <p className="font-gordita text-[#4d4d4d] text-lensfit-p leading-[21px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            ))}
          </div>

          {/* --- BLOCO DE CONTATO --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="text-left space-y-8">
              <h2 className="font-gordita text-lensfit-h2 text-lensfit-bg leading-[55px] tracking-lensfit-tight">
                Fale conosco agora <br />
                através do <span className="font-bold">formulário</span> <br />
                ou pelo nosso <br />
                <span className="font-bold text-[#25d366]">WhatsApp</span>
              </h2>

              <button className="flex items-center justify-center w-[240px] h-[48px] bg-[#25d366] hover:brightness-110 text-white rounded-full font-gordita font-medium text-lensfit-btn transition-all shadow-lg">
                Fale com um consultor
              </button>
            </div>

            <div className="w-full">
              <div className="bg-[#f9f9f9] rounded-[40px] p-10 shadow-lg border border-gray-100">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="block font-gordita font-bold text-lensfit-bg text-[15px]">Nome:</label>
                    <input type="text" placeholder="Ex: João José da Silva" className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 outline-none text-sm placeholder-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-gordita font-bold text-lensfit-bg text-[15px]">E-mail:</label>
                    <input type="email" placeholder="Ex: joao@sualoja.com.br" className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 outline-none text-sm placeholder-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-gordita font-bold text-lensfit-bg text-[15px]">Telefone:</label>
                    <input type="tel" placeholder="Ex: (11) 9 8765-4321" className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 outline-none text-sm placeholder-gray-300" />
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full h-[48px] bg-lensfit-red hover:brightness-110 text-white rounded-full font-gordita font-medium text-lensfit-btn transition-all shadow-lg">
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
