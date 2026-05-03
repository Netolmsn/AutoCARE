export const BriefingVehicleCard = ({ model, plate, km, score, date }) => (
  <section className="bg-white rounded-lg p-6 border border-black/[0.03]">
    <div className="flex items-start gap-4 pb-4">
      <div className="w-12 h-12 bg-[#d0e4e3] rounded-full flex items-center justify-center text-[#29B6AF]">
        <span className="material-symbols-outlined text-3xl">directions_car</span>
      </div>
      <div>
        <h2 className="text-xl font-bold text-[#171d1c]">{model}</h2>
        <p className="text-sm text-gray-500">Placa: {plate} · VIN detectado</p>
      </div>
    </div>
    <div className="border-t border-[#E0F4F3] pt-4 grid grid-cols-3 gap-2 text-center">
      <div>
        <p className="text-[10px] font-bold text-gray-500 uppercase">Quilometragem</p>
        <p className="text-lg font-bold">{km} km</p>
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-500 uppercase">Nota atual</p>
        <p className="text-lg font-bold text-[#2ECC71]">{score}</p>
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-500 uppercase">Gerado em</p>
        <p className="text-lg font-bold">{date}</p>
      </div>
    </div>
  </section>
);