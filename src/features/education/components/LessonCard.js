export const LessonCard = ({ title, description, duration, progress, image }) => (
  <div className="bg-white rounded-xl overflow-hidden border border-black/5">
    <div className="relative h-40 bg-[#E0F4F3] flex items-center justify-center">
      <img src={image} className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="relative z-10 bg-white/90 rounded-full p-4">
        <span className="material-symbols-outlined text-[#29B6AF] text-3xl fill-icon">play_arrow</span>
      </div>
      <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-0.5 rounded-md text-[10px] font-bold">
        {duration}
      </div>
    </div>
    <div className="p-4 space-y-2">
      <h4 className="font-bold text-lg text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="pt-2">
        <ProgressBar progress={progress} height={4} />
      </div>
    </div>
  </div>
);