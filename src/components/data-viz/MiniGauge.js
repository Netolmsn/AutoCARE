export const MiniGauge = ({ value, label, colorClass }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="relative w-[72px] h-[72px]">
      <svg className="rotate-[-90deg] w-full h-full">
        <circle cx="36" cy="36" r="33" fill="none" stroke="#E9EFED" strokeWidth="6" />
        <circle 
          cx="36" cy="36" r="33" fill="none" stroke={colorClass === 'teal' ? '#29B6AF' : '#F5A623'} 
          strokeWidth="6" strokeDasharray="207.3"
          style={{ strokeDashoffset: `calc(207.3 - (207.3 * ${value}) / 100)` }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
        {value}%
      </div>
    </div>
    <span className="text-[12px] text-gray-500 uppercase">{label}</span>
  </div>
);