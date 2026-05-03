export const FilterTabs = ({ tabs, activeTab, onTabChange }) => (
  <nav className="bg-white rounded-xl p-1 border border-black/5 flex gap-1">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => onTabChange(tab.id)}
        className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
          activeTab === tab.id 
            ? 'bg-[#29B6AF] text-white' 
            : 'text-gray-400'
        }`}
      >
        {tab.label}
      </button>
    ))}
  </nav>
);