const UserTypeScreen = () => {
  return (
    <div className="flex-1 w-full max-w-md px-5 flex flex-col items-center">
      <header className="py-8">
        <h1 className="text-xl font-black text-[#29B6AF]">AutoCARE</h1>
      </header>

      <OnboardingIllustration />
      
      {/* Pagination Dots */}
      <div className="flex space-x-2 mb-8">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-6 h-2 rounded-full bg-[#29B6AF]"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>

      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#333333] leading-tight mb-4">
          Pare de ser surpreendido pelo seu carro.
        </h2>
        <p className="text-gray-400">
          Monitoramos a saúde do veículo em tempo real e traduzimos em informações simples.
        </p>
      </section>

      <div className="w-full space-y-4 mb-8">
        <PrimaryButton title="Sou Motorista" icon="directions_car" />
        <OutlineButton title="Sou Mecânico" icon="build" />
      </div>

      <footer className="mt-auto py-6">
        <p className="text-gray-400">
          Já tem uma conta? <a href="#" className="text-[#29B6AF] underline font-semibold">Entrar</a>
        </p>
      </footer>
    </div>
  );
};