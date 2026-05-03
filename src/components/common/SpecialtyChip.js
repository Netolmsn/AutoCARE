export const SpecialtyChip = ({ label, isActive, onPress }) => (
  <button 
    onClick={onPress}
    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
      isActive 
        ? 'bg-[#29B6AF] text-white' 
        : 'bg-white border border-[#E0F4F3] text-gray-400'
    }`}
  >
    {label}
  </button>
);