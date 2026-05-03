import React from 'react';
import { BriefingVehicleCard } from '../components/BriefingVehicleCard';
import { BriefingItem } from '../components/BriefingItem';
import { ShareButton } from '../../../components/common/ShareButton';

const MechanicBriefingScreen = () => {
  return (
    <div className="flex-1 flex flex-col bg-[#F4F7F8]">
      <header className="flex justify-between items-center px-5 py-3 border-b border-black/5 sticky top-0 bg-[#F4F7F8] z-40">
        <span className="material-symbols-outlined text-gray-400">arrow_back</span>
        <h1 className="text-lg font-bold">Briefing do Veículo</h1>
        <span className="material-symbols-outlined text-[#29B6AF]">share</span>
      </header>

      <main className="px-5 py-6 space-y-6 pb-40">
        <BriefingVehicleCard 
          model="Chevrolet Onix 2021" 
          plate="ABC-1D23" 
          km="87.400" 
          score="8.4" 
          date="Mai 2026" 
        />

        <section className="bg-white rounded-lg border border-black/[0.03] overflow-hidden">
          <BriefingItem icon="mode_fan" title="Velas de Ignição" description="Substituição prevista — intervalo atingido" status="Verificar" />
          <BriefingItem icon="oil_barrel" title="Óleo do Motor" description="Troca necessária — 3.200 km acima do ideal" status="Verificar" />
          <BriefingItem icon="bolt" title="Sistema Elétrico" description="Bateria e alternador funcionando normalmente" status="OK" type="success" />
        </section>

        <section className="bg-white rounded-lg p-4 border border-black/[0.03] space-y-4">
          <h4 className="font-bold text-sm">Compartilhar briefing</h4>
          <div className="flex gap-3">
            <ShareButton title="WhatsApp" icon="chat" color="#25D366" />
            <ShareButton title="Exportar PDF" icon="picture_as_pdf" isOutline />
          </div>
        </section>
      </main>

      <div className="fixed bottom-24 left-0 w-full px-5">
        <button className="w-full h-[52px] bg-[#29B6AF] text-white rounded-full flex items-center justify-center gap-2 font-bold active:scale-95 transition-transform">
          Encontrar Mecânico
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default MechanicBriefingScreen;