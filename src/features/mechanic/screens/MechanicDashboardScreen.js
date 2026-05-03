import React from 'react';
import { MechanicProfileCard } from '../components/MechanicProfileCard';
import { LeadCard } from '../components/LeadCard';

const MechanicDashboardScreen = () => {
  const stats = { monthly: 12, rating: 4.8, leads: 3 };

  return (
    <div className="flex-1 flex flex-col bg-[#F4F7F8]">
      <header className="flex justify-between items-center px-5 py-3 border-b border-black/5 sticky top-0 bg-[#F4F7F8] z-50">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#29B6AF]">directions_car</span>
          <span className="text-xl font-black text-[#29B6AF]">AutoCARE</span>
        </div>
        <div className="relative p-2">
          <span className="material-symbols-outlined text-gray-400">notifications</span>
          <span className="absolute top-2 right-2 w-4 h-4 bg-[#FF5C5C] text-white text-[10px] flex items-center justify-center rounded-full font-bold">3</span>
        </div>
      </header>

      <main className="px-5 pt-6 pb-32 space-y-6">
        <MechanicProfileCard name="João Mendes" workshop="Mecânica Central" stats={stats} />

        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Leads recebidos</h2>
            <button className="text-[#29B6AF] font-bold text-sm">Ver todos →</button>
          </div>

          <LeadCard 
            customer="Ana Silva" 
            vehicle="Chevrolet Onix 2021" 
            status="Novo" 
            statusType="new" 
            briefingItems={["Velas", "Óleo", "Arrefecimento"]} 
          />
          
          <LeadCard 
            customer="Marcos Costa" 
            vehicle="Honda Civic" 
            status="Em andamento" 
            statusType="progress" 
          />
        </section>
      </main>
    </div>
  );
};

export default MechanicDashboardScreen;