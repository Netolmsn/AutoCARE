export const ToggleSwitch = ({ isActive }) => (
  <div className={`w-10 h-6 rounded-full relative ${isActive ? 'bg-[#29B6AF]' : 'bg-[#E0F4F3]'}`}>
    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isActive ? 'right-1' : 'left-1'}`}></div>
  </div>
);