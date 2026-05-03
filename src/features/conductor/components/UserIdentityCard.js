export const UserIdentityCard = ({ name, email, initials }) => (
  <div className="bg-white w-full rounded-xl p-6 flex flex-col items-center">
    <div className="w-[72px] h-[72px] rounded-full bg-[#E0F4F3] flex items-center justify-center relative">
      <span className="text-[#29B6AF] text-2xl font-bold">{initials}</span>
      <div className="absolute bottom-0 right-0 bg-[#29B6AF] p-1.5 rounded-full border-2 border-white">
        <span className="material-symbols-outlined text-white text-[14px]">edit</span>
      </div>
    </div>
    <h2 className="text-xl font-bold mt-4">{name}</h2>
    <p className="text-gray-500">{email}</p>
  </div>
);