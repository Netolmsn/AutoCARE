import { ProgressBar } from '../../../components/common/ProgressBar';

export const CompletionCard = ({ percentage }) => (
  <section className="bg-[#E0F4F3] p-4 rounded-xl space-y-3">
    <div className="flex justify-between items-end">
      <h3 className="font-bold text-gray-800">Perfil completo</h3>
      <span className="font-bold text-[#29B6AF]">{percentage}%</span>
    </div>
    <ProgressBar progress={percentage} height={8} color="#29B6AF" trackColor="#FFFFFF" />
    <p className="text-xs text-gray-800">Adicione fotos da oficina para aumentar sua visibilidade em +15%.</p>
  </section>
);