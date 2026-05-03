export const LessonItem = ({ title, category, duration, image, isCompleted }) => (
  <div className={`bg-white rounded-xl p-3 flex items-center gap-3 border border-black/5 ${isCompleted ? 'opacity-80' : ''}`}>
    <div className={`relative w-[72px] h-[56px] rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden ${isCompleted ? 'bg-[#F0FFF6]' : 'bg-[#E0F4F3]'}`}>
      {isCompleted ? (
        <span className="material-symbols-outlined text-[#1D9C58] text-xl fill-icon">check_circle</span>
      ) : (
        <>
          <img src={image} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <span className="material-symbols-outlined text-[#29B6AF] text-xl fill-icon">play_arrow</span>
          <div className="absolute bottom-1 right-1 bg-black/80 text-white px-1 rounded-[2px] text-[8px] font-bold">{duration}</div>
        </>
      )}
    </div>
    <div className="flex-grow min-w-0">
      <p className={`text-[10px] font-bold mb-0.5 uppercase ${isCompleted ? 'text-gray-400' : 'text-[#29B6AF]'}`}>{category}</p>
      <h5 className={`text-sm font-semibold truncate ${isCompleted ? 'text-gray-400' : 'text-gray-900'}`}>{title}</h5>
    </div>
    <span className={`material-symbols-outlined ${isCompleted ? 'text-[#1D9C58]' : 'text-gray-300'}`}>
      {isCompleted ? 'check_circle' : 'chevron_right'}
    </span>
  </div>
);