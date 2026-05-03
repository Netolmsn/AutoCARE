import React from 'react';
import { TrailOverview } from '../components/TrailOverview';
import { LessonCard } from '../components/LessonCard';
import { LessonItem } from '../components/LessonItem';

const KnowledgeTrailScreen = () => {
  return (
    <div className="flex-1 flex flex-col bg-[#F4F7F8]">
      <header className="flex justify-between items-center px-5 py-3 border-b border-black/5 bg-[#F4F7F8]">
        <h1 className="text-xl font-black text-[#29B6AF]">Aprenda</h1>
        <div className="bg-[#E0F4F3] px-3 py-1 rounded-full">
          <span className="text-[#29B6AF] text-xs font-bold">3 de 8 concluídos</span>
        </div>
      </header>

      <main className="px-5 py-4 space-y-6 pb-24">
        <TrailOverview progress={37} nextLesson="Continue de onde parou — próximo: Como conferir o óleo do motor." />

        <section>
          <h3 className="text-lg font-bold mb-4">Em andamento</h3>
          <LessonCard 
            title="Como conferir o óleo do motor" 
            description="Aprenda a verificar o nível e a qualidade do óleo em menos de 1 minuto." 
            duration="60s" 
            progress={60} 
            image="engine_oil.jpg" 
          />
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold">A fazer</h3>
          <LessonItem category="ARREFECIMENTO" title="Como verificar o nível de água do radiador" duration="60s" image="radiator.jpg" />
          <LessonItem category="PAINEL E ALERTAS" title="O que significam as luzes do painel" duration="60s" image="dashboard.jpg" />
        </section>

        <section>
          <h3 className="text-lg font-bold mb-4">Concluídos</h3>
          <LessonItem category="PAINEL E ALERTAS" title="Como ler as luzes de alerta críticas" isCompleted />
        </section>
      </main>
    </div>
  );
};

export default KnowledgeTrailScreen;