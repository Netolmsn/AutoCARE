export const CircularScore = ({ score }) => (
  <div className="relative w-[120px] h-[120px]">
    <svg className="rotate-[-90deg] w-full h-full">
      <circle cx="60" cy="60" r="55" fill="none" stroke="#E9EFED" strokeWidth="10" />
      <circle 
        cx="60" cy="60" r="55" fill="none" stroke="#2ECC71" strokeWidth="10" 
        strokeDasharray="345.5" 
        style={{ strokeDashoffset: `calc(345.5 - (345.5 * ${score * 10}) / 100)` }} 
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center font-black text-4xl">
      {score}
    </div>
  </div>
);