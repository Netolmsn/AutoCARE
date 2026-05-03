import { StatItem } from '../../../components/common/StatItem';

export const MechanicProfileCard = ({ name, workshop, stats }) => (
  <section className="bg-white rounded-xl p-5 border border-black/5">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-[#E0F4F3] flex items-center justify-center text-[#29B6AF] font-bold text-lg">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <h1 className="text-lg font-bold text-gray-900">Olá, {name.split(' ')[0]}!</h1>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#2ECC71]" />
          <span className="text-sm text-gray-500">{workshop} · Aberta agora</span>
        </div>
      </div>
    </div>
    <div className="h-[1px] bg-black/5 w-full my-4" />
    <div className="flex justify-between">
      <StatItem label="Mensais" value={stats.monthly} />
      <StatItem label="Avaliação" value={`${stats.rating} ★`} hasBorder />
      <StatItem label="Leads" value={stats.leads} color="#FF5C5C" />
    </div>
  </section>
);