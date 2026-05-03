export const MechanicCard = ({ name, specialties, rating, reviews, distance, isOpen, isSelected, onSendBriefing }) => (
  <div className={`bg-white rounded-2xl p-4 flex flex-col gap-4 border transition-all ${isSelected ? 'border-[#29B6AF]/20' : 'border-black/5'}`}>
    <div className="flex justify-between items-start">
      <div className="flex gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${isSelected ? 'bg-[#E0F4F3] text-[#29B6AF]' : 'bg-gray-100 text-gray-400'}`}>
          {name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{name}</h3>
          <p className="text-xs text-gray-400">{specialties}</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[#29B6AF] text-sm fill-icon" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-xs font-bold text-gray-900">{rating}</span>
            <span className="text-xs text-gray-400">({reviews} avaliações)</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${isSelected ? 'bg-[#E0F4F3] text-[#29B6AF]' : 'text-gray-400'}`}>
          {distance}
        </span>
        <span className={`text-xs font-bold ${isOpen ? 'text-[#006a66]' : 'text-gray-400'}`}>
          {isOpen ? 'Aberto agora' : 'Fechado'}
        </span>
      </div>
    </div>
    {isSelected && (
      <button 
        onClick={onSendBriefing}
        className="w-full py-3 bg-[#29B6AF] text-white rounded-full font-bold active:bg-[#208a85] transition-colors"
      >
        Enviar Briefing
      </button>
    )}
  </div>
);