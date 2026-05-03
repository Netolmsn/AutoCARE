export const StatusBadge = ({ label, type }) => {
  const styles = {
    new: { bg: "#E0F4F3", text: "#29B6AF" },
    progress: { bg: "#FFF8EC", text: "#F5A623" },
    completed: { bg: "#F0FFF6", text: "#2ECC71" }
  };

  return (
    <span 
      className="text-[10px] font-bold px-2 py-0.5 rounded uppercase"
      style={{ backgroundColor: styles[type].bg, color: styles[type].text }}
    >
      {label}
    </span>
  );
};