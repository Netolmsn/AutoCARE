export const AlertBanner = ({ message, type = 'warning' }) => (
  <div className="flex items-start gap-4 p-4 bg-[#FFF8EC] border-l-4 border-[#F5A623] rounded-r-xl">
    <span className="material-symbols-outlined text-[#F5A623]">info</span>
    <p className="text-sm text-[#546666]">{message}</p>
  </div>
);