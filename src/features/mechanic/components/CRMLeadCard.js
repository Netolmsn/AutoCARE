export const CRMLeadCard = ({ customer, vehicle, status, statusType, content, actions }) => {
  const styles = {
    new: { bg: "#E0F4F3", text: "#29B6AF", icon: "description" },
    progress: { bg: "#FFF8EC", text: "#F5A623", icon: "build" },
    completed: { bg: "#F0FFF6", text: "#2ECC71", icon: "check_circle" }
  };

  const current = styles[statusType];

  return (
    <article className="bg-white rounded-xl p-4 border border-black/5 space-y-3">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-gray-900">{customer}</h3>
          <p className="text-sm text-gray-400">{vehicle}</p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold" 
              style={{ backgroundColor: current.bg, color: current.text }}>
          {status}
        </span>
      </div>
      
      <div className="p-3 rounded-xl flex gap-3 items-start" style={{ backgroundColor: current.bg }}>
        <span className="material-symbols-outlined text-sm" style={{ color: current.text }}>
          {current.icon}
        </span>
        <div className="text-sm leading-tight" style={{ color: statusType === 'new' ? '#00423f' : current.text }}>
          {content}
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onPress}
            className={`flex-1 py-2 rounded-full font-bold text-sm ${
              action.primary 
                ? 'bg-[#29B6AF] text-white' 
                : 'border border-gray-200 text-gray-900'
            }`}
          >
            {action.label}
          </button>
        ))}
      </div>
    </article>
  );
};