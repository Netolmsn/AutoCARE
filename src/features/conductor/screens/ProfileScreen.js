const ProfileScreen = () => {
  return (
    <main className="px-5 pb-32 pt-4 space-y-6">
      <UserIdentityCard name="Ana Silva" email="ana.silva@email.com.br" initials="AS" />

      <section className="space-y-3">
        <label className="text-xs font-bold text-gray-400 tracking-widest px-1">MEU VEÍCULO</label>
        <div className="bg-white rounded-xl overflow-hidden">
          <SettingItem icon="directions_car" title="Chevrolet Onix 2021" subtitle="Placa: ABC-1D23" hasChevron />
          <SettingItem icon="settings_input_component" title="Dispositivo OBD2" subtitle="Conectado">
             <div className="bg-[#F5FBF9] px-2 py-1 rounded-full border border-black/5">
                <span className="text-[10px] font-bold text-[#2ECC71]">Ativo</span>
             </div>
          </SettingItem>
        </div>
      </section>

      {/* Seções de Notificações, Conta e Botão de Logout... */}
    </main>
  );
};