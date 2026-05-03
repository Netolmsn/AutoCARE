export const FilterChips = ({ categories, activeCategory, onSelect }) => (
  <div className="flex gap-3 overflow-x-auto py-1 no-scrollbar">
    {categories.map(cat => (
      <button 
        key={cat}
        onClick={() => onSelect(cat)}
        className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-semibold transition-transform active:scale-95 ${
          activeCategory === cat ? 'bg-[#29B6AF] text-white' : 'bg-white border border-[#E0F4F3] text-gray-400'
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
);