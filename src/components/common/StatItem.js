export const StatItem = ({ label, value, color, hasBorder }) => (
  <div className={`flex flex-col items-center text-center flex-1 ${hasBorder ? 'border-x border-black/5' : ''}`}>
    <span className="font-bold text-lg" style={{ color: color || "#29B6AF" }}>{value}</span>
    <span className="text-[10px] text-gray-500 uppercase tracking-wider leading-tight">{label}</span>
  </div>
);