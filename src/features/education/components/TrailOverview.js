import { ProgressBar } from '../../../components/common/ProgressBar';

export const TrailOverview = ({ progress, nextLesson }) => (
  <section className="bg-white rounded-xl p-6 border border-black/5">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-gray-900">Sua trilha</h2>
      <span className="text-[#29B6AF] text-xl font-bold">{progress}%</span>
    </div>
    <ProgressBar progress={progress} />
    <div className="mt-6 space-y-2">
      <p className="text-sm text-gray-600">{nextLesson}</p>
      <button className="flex items-center text-[#29B6AF] font-bold text-sm">
        Continuar <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
      </button>
    </div>
  </section>
);