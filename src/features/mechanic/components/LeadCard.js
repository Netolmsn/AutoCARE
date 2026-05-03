import { StatusBadge } from '../../../components/common/StatusBadge';

export const LeadCard = ({ customer, vehicle, status, statusType, briefingItems }) => {
  const borderColors = {
    new: "#29B6AF",
    progress: "#F5A623",
    completed: "#2ECC71"
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-black/5 relative mb-4">
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: borderColors[statusType] }} />
      <div className="p-4 pl-6 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-gray-900">{customer}</h3>
            <p className="text-sm text-gray-500">{vehicle}</p>
          </div>
          <StatusBadge label={status} type={statusType} />
        </div>

        {briefingItems && (
          <div className="bg-[#E0F4F3] p-3 rounded-xl border border-[#29B6AF]/10 flex items-start gap-2">
            <span className="material-symbols-outlined text-[#29B6AF] text-[20px]">assignment</span>
            <div className="flex flex-col">
              <span className="font-bold text-[11px] text-[#29B6AF] uppercase tracking-wide">Briefing AutoCARE anexado</span>
              <span className="text-sm text-[#00423f]">{briefingItems.join(', ')}</span>
            </div>
          </div>
        )}

        <div className="flex gap-2 pt-1">
          <button className="flex-1 py-2 rounded-full border border-[#29B6AF] text-[#29B6AF] font-bold text-sm">Ver briefing</button>
          <button className="flex-1 py-2 rounded-full bg-[#29B6AF] text-white font-bold text-sm">Responder</button>
        </div>
      </div>
    </div>
  );
};