export const StatusHeader = ({ isConnected }) => (
  <header className="flex justify-between items-center px-5 py-3 bg-[#F4F7F8]">
    <div className="text-xl font-black text-[#29B6AF]">AutoCARE</div>
    <div className="flex items-center gap-2 bg-[#E0F4F3] px-3 py-1.5 rounded-full">
      <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-[#2ECC71]' : 'bg-gray-400'}`}></div>
      <span className="text-[12px] font-bold text-[#00423f]">
        {isConnected ? 'Conectado' : 'Buscando...'}
      </span>
    </div>
  </header>
);