export const TripChecklistItem = ({ title, description, status, type = 'success' }) => (
  <div className="flex items-center justify-between p-4 border-b border-black/5 last:border-0">
    <div className="flex items-center gap-4">
      <span className={`material-symbols-outlined ${type === 'success' ? 'text-[#29B6AF]' : 'text-[#F5A623]'}`}>
        {type === 'success' ? 'check_circle' : 'warning'}
      </span>
      <div>
        <p className="font-bold text-sm text-gray-800">{title}</p>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
    <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${type === 'success' ? 'bg-[#E0F4F3] text-[#29B6AF]' : 'bg-[#FFF8EC] text-[#F5A623]'}`}>
      {status}
    </span>
  </div>
);