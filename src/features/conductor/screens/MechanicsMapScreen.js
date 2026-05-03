import React from 'react';
import { SearchBar } from '../../../components/common/SearchBar';
import { FilterChips } from '../../../components/common/FilterChips';
import { MapArea } from '../components/MapArea';
import { MechanicCard } from '../components/MechanicCard';

const MechanicsMapScreen = () => {
  const categories = ["Todos", "Mais próximos", "Melhor avaliados", "Especialistas"];

  return (
    <div className="flex-1 flex flex-col gap-4 bg-[#F4F7F8]">
      <header className="bg-[#F4F7F8] border-b border-black/5 flex justify-between items-center px-5 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#29B6AF]">build</span>
          <h1 className="text-lg font-bold">Mecânicos</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full active:bg-gray-100">
          <span className="material-symbols-outlined text-gray-400">tune</span>
        </button>
      </header>

      <main className="flex-1 px-5 flex flex-col gap-4 pb-24">
        <SearchBar placeholder="Buscar por nome ou especialidade..." />
        
        <FilterChips categories={categories} activeCategory="Todos" />
        
        <MapArea />

        <p className="text-sm text-gray-500">8 mecânicos encontrados perto de você</p>

        <section className="flex flex-col gap-4">
          <MechanicCard 
            name="Mecânica Central" 
            specialties="Motor • Elétrico • Suspensão" 
            rating="4.8" 
            reviews="127" 
            distance="1,2 km" 
            isOpen 
            isSelected
          />
          <MechanicCard 
            name="Auto Shop Silva" 
            specialties="Motor • Freios" 
            rating="4.5" 
            reviews="89" 
            distance="2,7 km" 
            isOpen={false}
          />
        </section>
      </main>
    </div>
  );
};

export default MechanicsMapScreen;