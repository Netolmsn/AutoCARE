export const AppInput = ({ label, placeholder, isPassword }) => (
  <div className="space-y-1">
    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</label>
    <input 
      type={isPassword ? "password" : "text"}
      placeholder={placeholder}
      style={{ borderColor: "#E0F4F3" }}
      className="w-full h-[52px] px-4 bg-white rounded-xl border focus:ring-1 focus:ring-[#29B6AF] outline-none"
    />
  </div>
);