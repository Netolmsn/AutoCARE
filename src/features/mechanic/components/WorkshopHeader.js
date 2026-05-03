export const WorkshopHeader = ({ name, rating, reviews, isOpen }) => (
  <section className="bg-white rounded-xl overflow-hidden">
    <div className="relative h-[120px] bg-[#E0F4F3] flex flex-col items-center justify-center">
      <span className="material-symbols-outlined text-[#29B6AF] text-3xl">photo_camera</span>
      <span className="text-xs text-gray-400">Adicionar foto de capa</span>
    </div>
    <div className="relative flex flex-col items-center pb-6">
      <div className="relative -mt-9">
        <div className="w-[72px] h-[72px] bg-[#E0F4F3] rounded-full border-[3px] border-white flex items-center justify-center">
          <span className="material-symbols-outlined text-[#29B6AF] text-3xl">build</span>
        </div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#29B6AF] rounded-full border-2 border-white flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-[14px]">photo_camera</span>
        </div>
      </div>
      <div className="mt-3 text-center">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <div className="flex items-center justify-center gap-1 mt-1">
          <span className="material-symbols-outlined text-yellow-400 text-sm fill-icon">star</span>
          <span className="text-sm font-bold">{rating}</span>
          <span className="text-sm text-gray-400">({reviews} avaliações)</span>
        </div>
        {isOpen && (
          <div className="inline-block mt-3 px-4 py-1 bg-[#F0FFF6] text-[#2ECC71] rounded-full text-xs font-bold">
            Aberta agora
          </div>
        )}
      </div>
    </div>
  </section>
);