const CalendarScreen = () => {
  return (
    <main className="px-5 pt-4 space-y-6 pb-24">
      {/* Navegação do Mês */}
      <section className="bg-white rounded-xl p-4 border border-black/5">
        <h2 className="text-center font-bold mb-6">Maio 2026</h2>
        <div className="grid grid-cols-7 gap-y-4 text-center">
           {/* Mapeamento de dias passados e futuros usando <CalendarDay /> */}
           <CalendarDay day={3} isToday />
           <CalendarDay day={12} dotColor="#2ECC71" />
           <CalendarDay day={18} dotColor="#F5A623" />
        </div>
      </section>

      {/* Resumo do Mês Horizontal */}
      <section className="bg-white rounded-xl p-4">
        <h3 className="font-bold mb-4">Resumo do mês</h3>
        <div className="flex gap-2 overflow-x-auto">
          <Badge text="3 revisões" color="teal" />
          <Badge text="R$ 480 previstos" color="warn" />
        </div>
      </section>

      {/* Lista de Manutenções */}
      <section>
        <h3 className="font-bold mb-4">Próximas manutenções</h3>
        <MaintenanceCard 
           type="warn" title="Troca de Óleo" cost="180,00" date="18 Mai" 
           statusText="⚠ Em 15 dias" 
        />
        <MaintenanceCard 
           type="critical" title="Revisão Geral" cost="300,00" date="26 Mai" 
           statusText="Veículo ficará parado por 2 dias" 
        />
      </section>
    </main>
  );
};