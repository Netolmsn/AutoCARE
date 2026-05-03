export const HealthSystemItem = ({ icon, title, description, statusLabel, isWarning }) => (
  <div className="p-4 flex items-center space-x-4 border-b border-[#E0F4F3] last:border-0">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isWarning ? 'bg-[#FFF8EC]' : 'bg-[#E0F4F3]'}`}>
      <span className={`material-symbols-outlined ${isWarning ? 'text-[#F5A623]' : 'text-[#006a66]'}`}>
        {icon}
      </span>
    </div>
    <div className="flex-grow">
      <h3 className="text-sm font-bold text-[#171d1c]">{title}</h3>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
    <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase 
      ${isWarning ? 'bg-[#FFF8EC] text-[#F5A623]' : 'bg-[#F0FFF6] text-[#2ECC71]'}`}>
      {statusLabel}
    </span>
  </div>
);