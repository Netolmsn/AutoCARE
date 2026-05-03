export const BottomSheet = ({ children, title, subtitle }) => (
  <div className="fixed inset-0 z-50 flex items-end justify-center">
    <div className="absolute inset-0 bg-black/50" />
    <div className="w-full h-[80vh] bg-white rounded-t-[24px] z-10 flex flex-col overflow-hidden">
      <div className="w-full flex justify-center py-4">
        <div className="w-8 h-1 bg-[#E0F4F3] rounded-full" />
      </div>
      <div className="flex-1 overflow-y-auto px-5 pb-12">
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-[#333333]">{title}</h2>
          <p className="text-gray-400">{subtitle}</p>
        </header>
        {children}
      </div>
    </div>
  </div>
);