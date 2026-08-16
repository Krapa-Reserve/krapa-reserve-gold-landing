export default function What() {
  return (
    <div className="relative w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/vault.png')",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/25 to-background/80"
        aria-hidden
      />
      <div className="relative flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 md:px-8">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            What is KAUX
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.1] text-primary sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Backed by real gold
            <br />
            reserves.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base md:text-lg">
            Designed to give a simple, transparent way to trade, hold 
            and redeem gold. Each Krapa Reserve Gold (KAUX) token
            represents one fine troy ounce of physical gold held in secure
            custody. Owning KAUX represents ownership of the corresponding gold
            held in reserve.
          </p>
        </div>
      </div>
    </div>
  );
}
