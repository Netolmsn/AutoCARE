export const BriefingItem = ({ icon, title, description, status, type = 'warning' }) => (
  <div className="p-4 flex items-start gap-3 border-b border-black/[0.03] last:border-0">
    <div className={`mt-1 ${type === 'warning' ? 'text-[#F5A623]' : 'text-[#29B6AF]'}`}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-sm text-[#171d1c]">{title}</h4>
        <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${type === 'warning' ? 'bg-[#F5A6231A] text-[#F5A623]' : 'bg-[#2ECC711A] text-[#2ECC71]'}`}>
          {status}
        </span>
      </div>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  </div>
);