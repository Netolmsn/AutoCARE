export const CalendarDay = ({ day, isToday, dotColor, isPast }) => (
  <div className={`flex flex-col items-center ${isPast ? 'opacity-40' : ''}`}>
    <span className={`w-8 h-8 flex items-center justify-center font-medium 
      ${isToday ? 'bg-[#29b6af] text-white rounded-full' : 'py-1'}`}>
      {day}
    </span>
    {dotColor && (
      <div className="w-1 h-1 rounded-full mt-1" style={{ backgroundColor: dotColor }} />
    )}
  </div>
);