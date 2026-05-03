export const SettingItem = ({ icon, title, subtitle, hasChevron, children }) => (
  <div className="p-4 flex items-center gap-4 hover:bg-[#eff5f3] transition-colors cursor-pointer">
    <div className="bg-[#E0F4F3] p-2 rounded-lg">
      <span className="material-symbols-outlined text-[#29B6AF]">{icon}</span>
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-[#171d1c]">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
    {hasChevron && <span className="material-symbols-outlined text-gray-400">chevron_right</span>}
    {children} {/* Para casos como o ToggleSwitch */}
  </div>
);