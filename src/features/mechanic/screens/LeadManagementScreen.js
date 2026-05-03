import React from 'react';
import { PipelineSummary } from '../../../components/common/PipelineSummary';
import { FilterTabs } from '../../../components/common/FilterTabs';
import { CRMLeadCard } from '../components/CRMLeadCard';

const LeadManagementScreen = () => {
  const stats = { new: 3, progress: 5, completed: 24, newPct: 9, progressPct: 16, completedPct: 75 };
  const tabs = [
    { id: 'all', label: 'Todos' },
    { id: 'new', label: 'Novos' },
    { id: 'progress', label: 'Em andamento' },
    { id: 'done', label: 'Finalizados' }
  ];

  return (
    <div className="flex-1 bg-[#F4F7F8]">
      <header className="px-5 py-3 border-b border-black/5 sticky top-0 bg-[#F4F7F8] z-50 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Leads</h1>
        <span className="material-symbols-outlined text-gray-400 p-2">search</span>
      </header>

      <main className="px-5 pt-4 space-y-6 pb-32">
        <PipelineSummary stats={stats} />
        
        <FilterTabs tabs={tabs} activeTab="all" />

        <section className="space-y-4">
          <CRMLeadCard 
            customer="Ana Silva" vehicle="Chevrolet Onix 2021" status="Novo" statusType="new"
            content={<><span className="font-bold">Briefing AutoCARE:</span> Velas, Óleo, Pneus</>}
            actions={[
              { label: "Ver briefing", primary: false },
              { label: "Responder", primary: true }
            ]}
          />

          <CRMLeadCard 
            customer="Marcos Costa" vehicle="Honda Civic 2019" status="Em andamento" statusType="progress"
            content={<><span className="font-bold">Serviço:</span> Troca de óleo + Filtros</>}
            actions={[{ label: "Ver histórico", primary: false }]}
          />
        </section>
      </main>

      <button className="fixed bottom-24 right-5 w-14 h-14 bg-[#29B6AF] rounded-full flex items-center justify-center text-white shadow-lg z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

export default LeadManagementScreen;