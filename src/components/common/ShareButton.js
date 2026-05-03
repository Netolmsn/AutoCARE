export const ShareButton = ({ title, icon, color, isOutline, onPress }) => (
  <button 
    style={{ 
      backgroundColor: isOutline ? 'transparent' : color,
      borderColor: isOutline ? colors.brandPrimary : 'transparent',
      borderWidth: isOutline ? 1.5 : 0
    }}
    className={`flex-1 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform ${isOutline ? 'text-[#29B6AF]' : 'text-white'}`}
  >
    <span className="material-symbols-outlined text-lg">{icon}</span>
    {title}
  </button>
);