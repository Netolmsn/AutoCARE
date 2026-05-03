export const HealthProgressRing = ({ score, color }) => {
  const radius = 62;
  const circumference = 2 * Math.PI * radius; // Aprox 390
  const offset = circumference - (score / 10) * circumference;

  return (
    <div className="relative w-[140px] h-[140px] flex items-center justify-center">
      <svg className="w-full h-full rotate-[-90deg]">
        <circle cx="70" cy="70" r={radius} fill="transparent" stroke="#E0F4F3" strokeWidth="12" />
        <circle 
          cx="70" cy="70" r={radius} fill="transparent" stroke={color} strokeWidth="12" 
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" 
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-4xl font-bold`} style={{ color }}>{score}</span>
        <span className="text-[10px] text-gray-400 uppercase">Nota de Segurança</span>
      </div>
    </div>
  );
};