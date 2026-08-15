export default function What() {
  return (
    <div className="relative w-full">
      <div 
        className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/vault.png')",
        }}
      />
      <div className="relative flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-8 max-lg:max-w-3xl max-md:max-w-xl max-sm:max-w-sm">
          <p className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-3xl text-center text-primary font-bold max-w-4xl">KAUX is a virtual asset, backed by gold reserves.</p>
          <p className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-center max-w-2xl">Designed to give investors a simple, transparent way to buy, hold, trade, and redeem gold. Each Krapa Reserve Gold (KAUX) token represents one fine troy ounce of physical gold held in secure custody. Owning KAUX represents ownership of the corresponding gold held in reserve.</p>
        </div>
      </div>
    </div>
  );
}
