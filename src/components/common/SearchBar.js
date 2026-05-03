export const SearchBar = ({ placeholder, onChange }) => (
  <div className="relative flex items-center w-full">
    <span className="material-symbols-outlined absolute left-4 text-[#6c7a78]">search</span>
    <input 
      className="w-full pl-12 pr-4 py-3 bg-white rounded-full font-medium text-sm outline-none focus:ring-2 focus:ring-[#29B6AF]" 
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);