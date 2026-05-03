export const InfoRow = ({ icon, label, value, onEdit }) => (
  <div className="flex items-center p-4 gap-4 border-b border-[#E0F4F3] last:border-0">
    <span className="material-symbols-outlined text-[#29B6AF]">{icon}</span>
    <div className="flex-1">
      <p className="text-[10px] font-bold text-gray-400 uppercase">{label}</p>
      <p className="text-sm text-gray-800">{value}</p>
    </div>
    <button onClick={onEdit}>
      <span className="material-symbols-outlined text-gray-400 text-sm">edit</span>
    </button>
  </div>
);