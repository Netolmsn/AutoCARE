const DashboardScreen = () => {
  return (
    <main className="px-5 pt-6 space-y-6 pb-32">
      <section>
        <h1 className="text-2xl font-bold">Bom dia, Ana 👋</h1>
        <p className="text-gray-500">Seu carro está sendo monitorado.</p>
      </section>

      <section className="bg-white rounded-lg p-6 flex flex-col items-center">
        <CircularScore score={8.4} />
        <span className="text-xs tracking-widest uppercase text-gray-400 mt-4">Nota de Segurança</span>
      </section>

      <section className="bg-white rounded-lg p-5">
        <h2 className="text-lg font-bold mb-6">Níveis do Veículo</h2>
        <div className="flex justify-between">
          <MiniGauge value={72} label="Óleo" colorClass="teal" />
          <MiniGauge value={85} label="Água" colorClass="teal" />
          <MiniGauge value={41} label="Temp." colorClass="warn" />
        </div>
      </section>

      {/* Grid de Atalhos e Atividade Recente aqui... */}
    </main>
  );
};