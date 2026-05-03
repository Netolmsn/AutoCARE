const VehicleHealthScreen = () => {
  return (
    <main className="flex-grow pt-16 pb-32 px-5 space-y-6">
      <section className="bg-white rounded-xl p-6 flex flex-col items-center space-y-4">
        <span className="text-xs text-gray-400 uppercase tracking-wider">Chevrolet Onix 2021</span>
        <HealthProgressRing score={8.4} color="#2ECC71" />
        <div className="flex items-center space-x-1 text-[#2ECC71]">
          <span className="material-symbols-outlined text-sm">arrow_upward</span>
          <span className="text-sm">+0.3 vs. mês anterior</span>
        </div>
      </section>

      <h2 className="text-lg font-bold text-[#006a66]">O que está sendo monitorado</h2>

      <section className="bg-white rounded-xl overflow-hidden">
        <HealthSystemItem icon="build" title="Óleo do Motor" description="Troca em 3.200 km" statusLabel="OK" />
        <HealthSystemItem icon="opacity" title="Arrefecimento" description="Temperatura normal" statusLabel="OK" />
        <HealthSystemItem icon="tire_repair" title="Pneus" description="Verificar calibragem" statusLabel="Atenção" isWarning />
      </section>

      <button className="w-full h-[52px] bg-[#29b6af] text-white rounded-full flex justify-between px-8 items-center active:scale-95 transition-transform">
        <span>Ir ao Mecânico</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </main>
  );
};