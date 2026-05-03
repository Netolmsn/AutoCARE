export const MaintenanceCard = ({ title, date, cost, statusText, type }) => {
  const statusColors = {
    warn: "#F5A623",
    critical: "#FF5C5C",
    ok: "#2ECC71"
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden flex border border-black/5 mb-4">
      <div className="w-1.5" style={{ backgroundColor: statusColors[type] }}></div>
      <div className="p-4 flex-1">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold">{title}</h4>
          <span className="bg-opacity-10 px-3 py-0.5 rounded-lg text-xs" 
                style={{ backgroundColor: statusColors[type], color: statusColors[type] }}>
            {date}
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-2">Previsão: R$ {cost}</p>
        <div className="flex items-center gap-1 text-xs font-bold" style={{ color: statusColors[type] }}>
           {statusText}
        </div>
      </div>
    </article>
  );
};