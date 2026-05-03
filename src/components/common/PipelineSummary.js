export const PipelineSummary = ({ stats }) => (
  <section className="bg-white rounded-xl p-6 space-y-4 border border-black/5">
    <h2 className="text-xs font-bold uppercase text-gray-500">Visão geral</h2>
    <div className="grid grid-cols-3 gap-2">
      <div>
        <p className="text-3xl font-bold text-[#29B6AF]">{stats.new}</p>
        <p className="text-sm text-gray-400">Novos</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-[#F5A623]">{stats.progress}</p>
        <p className="text-sm text-gray-400">Em andamento</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-[#2ECC71]">{stats.completed}</p>
        <p className="text-sm text-gray-400">Concluídos</p>
      </div>
    </div>
    <div className="w-full h-2 rounded-full flex overflow-hidden">
      <div className="h-full bg-[#29B6AF]" style={{ width: `${stats.newPct}%` }} />
      <div className="h-full bg-[#F5A623]" style={{ width: `${stats.progressPct}%` }} />
      <div className="h-full bg-[#2ECC71]" style={{ width: `${stats.completedPct}%` }} />
    </div>
  </section>
);