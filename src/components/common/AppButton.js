export const AppButton = ({ title, onPress }) => (
  <button 
    style={{ backgroundColor: "#29B6AF", borderRadius: 9999, height: 52 }}
    className="w-full text-white font-bold flex items-center justify-center transition-transform active:scale-95"
  >
    {title}
  </button>
);

export const PrimaryButton = ({ title, icon, onPress }) => (
  <button className="w-full h-14 bg-[#29B6AF] rounded-full flex items-center justify-center space-x-3 active:scale-95 transition-transform">
    <span className="material-symbols-outlined text-white">{icon}</span>
    <span className="text-white font-bold">{title}</span>
  </button>
);

export const OutlineButton = ({ title, icon, onPress }) => (
  <button className="w-full h-14 bg-white border-[1.5px] border-[#29B6AF] rounded-full flex items-center justify-center space-x-3 active:scale-95 transition-transform">
    <span className="material-symbols-outlined text-[#29B6AF]">{icon}</span>
    <span className="text-[#29B6AF] font-bold">{title}</span>
  </button>
);