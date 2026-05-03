import React from 'react';
import { BottomSheet } from '../../../components/common/BottomSheet';
import { AlertBanner } from '../../../components/common/AlertBanner';
import { TripChecklistItem } from '../components/TripChecklistItem';

const TripChecklistScreen = () => {
  return (
    <BottomSheet 
      title="Checklist de Viagem" 
      subtitle="Verifique se seu carro está pronto para a estrada."
    >
      <section className="mb-6">
        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Para onde você vai?</label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#29B6AF]">location_on</span>
          <input 
            className="w-full pl-12 pr-4 py-3 border-[1.5px] border-[#29B6AF] rounded-xl outline-none" 
            placeholder="Ex: São Paulo, SP"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-bold text-lg">Resultado da verificação</h3>
        <div className="bg-white border border-black/5 rounded-2xl overflow-hidden">
          <TripChecklistItem title="Óleo do Motor" description="Nível adequado para a viagem." status="OK" />
          <TripChecklistItem title="Pneus" description="Calibragem abaixo do ideal." status="Atenção" type="warning" />
          <TripChecklistItem title="Freios" description="Fluido e pastilhas em nível seguro." status="OK" />
        </div>

        <AlertBanner message="1 item precisa de atenção antes da viagem. Recomendamos verificar a calibragem dos pneus." />

        <div className="pt-6 space-y-4">
          <button className="w-full py-4 bg-[#29B6AF] text-white rounded-full font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform">
            Encontrar Mecânico para Pneus
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button className="w-full text-center text-gray-400 underline text-sm">
            Viajar assim mesmo
          </button>
        </div>
      </section>
    </BottomSheet>
  );
};

export default TripChecklistScreen;