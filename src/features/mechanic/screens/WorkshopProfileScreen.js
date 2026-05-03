import React from 'react';
import { WorkshopHeader } from '../components/WorkshopHeader';
import { CompletionCard } from '../components/CompletionCard';
import { InfoRow } from '../../../components/common/InfoRow';
import { SpecialtyChip } from '../../../components/common/SpecialtyChip';

const WorkshopProfileScreen = () => {
  const specialties = ["Motor", "Elétrico", "Suspensão", "Freios"];

  return (
    <div className="flex-1 flex flex-col bg-[#F4F7F8]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F7F8] border-b border-black/5 px-5 py-3 flex justify-between items-center">
        <span className="material-symbols-outlined text-gray-400">arrow_back</span>
        <h1 className="text-lg font-bold">Perfil da Oficina</h1>
        <button className="text-[#29B6AF] font-bold">Salvar</button>
      </header>

      <main className="mt-14 px-5 py-6 space-y-6 pb-24">
        <WorkshopHeader name="Mecânica Central" rating="4.8" reviews="127" isOpen />
        
        <CompletionCard percentage={78} />

        <section className="space-y-2">
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">INFORMAÇÕES BÁSICAS</h4>
          <div className="bg-white rounded-xl overflow-hidden">
            <InfoRow icon="store" label="Nome da oficina" value="Mecânica Central" />
            <InfoRow icon="location_on" label="Endereço" value="Rua das Flores, 142 — Anápolis, GO" />
            <InfoRow icon="schedule" label="Horário" value="Seg–Sex: 8h às 18h · Sáb: 8h às 13h" />
          </div>
        </section>

        <section className="space-y-4">
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ESPECIALIDADES</h4>
          <div className="bg-white rounded-xl p-4">
            <div className="flex flex-wrap gap-2">
              {specialties.map(s => <SpecialtyChip key={s} label={s} isActive />)}
              <SpecialtyChip label="Ar-condicionado" />
            </div>
          </div>
        </section>

        <button className="w-full py-4 bg-[#29B6AF] text-white rounded-full font-bold active:scale-95 transition-transform">
          Salvar alterações
        </button>
      </main>
    </div>
  );
};

export default WorkshopProfileScreen;