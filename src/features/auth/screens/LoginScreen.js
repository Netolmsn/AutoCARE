const LoginScreen = () => {
  return (
    <div className="flex-1 px-5 pt-8 bg-[#F4F7F8]">
      {/* Header Section */}
      <h2 className="text-2xl font-bold text-[#006a66]">Bem-vinda de volta.</h2>
      <p className="text-gray-500 mb-8">Entre na sua conta para monitorar seu veículo.</p>

      {/* Social Logins */}
      <div className="space-y-3 mb-6">
         <SocialButton provider="Google" />
         <SocialButton provider="Apple" />
      </div>

      {/* Divider extraído do HTML */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-[1px] bg-[#E0F4F3]"></div>
        <span className="text-gray-400 text-sm">ou</span>
        <div className="flex-1 h-[1px] bg-[#E0F4F3]"></div>
      </div>

      <LoginForm />

      {/* Ilustração de fundo com opacidade 10% */}
      <img src="car_outline.png" className="absolute bottom-0 right-0 opacity-10 pointer-events-none w-64" />
    </div>
  );
};