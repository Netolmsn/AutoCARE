export const ProgressBar = ({ progress, height = 8, color = "#29B6AF", trackColor = "#E0F4F3" }) => (
  <div className="w-full rounded-full" style={{ height, backgroundColor: trackColor }}>
    <div 
      className="h-full rounded-full" 
      style={{ width: `${progress}%`, backgroundColor: color }} 
    />
  </div>
);
