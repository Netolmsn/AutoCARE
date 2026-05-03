export const MapArea = ({ onLocationPress }) => (
  <div className="relative w-full h-[200px] rounded-2xl overflow-hidden bg-gray-200">
    <img 
      src="image_4f8862.jpg" 
      className="w-full h-full object-cover"
    />
    <button 
      onClick={onLocationPress}
      className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full flex items-center gap-2 border border-black/5 active:scale-90 transition-transform"
    >
      <span className="material-symbols-outlined text-[#29B6AF] text-lg">my_location</span>
      <span className="text-[#29B6AF] text-xs font-bold">Usar minha localização</span>
    </button>
  </div>
);