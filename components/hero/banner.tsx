import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Banner() {
  return (
    <div 
        className="flex items-center justify-center w-full bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('/banner.png')"
        }}
    >
        <div className="flex flex-col h-screen w-full items-center justify-between">
            {/** top */}
            <div className="flex flex-col items-center mt-48 gap-2 max-lg:gap-4 max-lg:max-w-md max-sm:max-w-sm">
                <p className="text-center text-4xl max-lg:text-3xl max-sm:text-2xl">PURE VALUE. PURE TRUST.</p>
                <p className="text-center text-7xl max-lg:text-6xl max-sm:text-5xl font-bold ">Real Gold. Virtual Access.</p>
            </div>
            
            {/** middle */}
            <div className="flex flex-col items-center">
                <div className="flex gap-2">
                    <a
                        href="https://app.krapa.gold"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "default" }), "h-14 max-lg:h-12 max-sm:h-10 min-w-48 max-lg:min-w-40 max-sm:min-w-32 px-10 text-sm max-sm:text-xs")}
                    >
                        Buy KAUX
                    </a> 
                    <a
                        href="https://krapa.gold"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "secondary" }), "h-14 max-lg:h-12 max-sm:h-10 min-w-48 max-lg:min-w-40 max-sm:min-w-32 px-10 text-sm max-sm:text-xs")}
                    >
                        Read Our Docs
                    </a>
                </div>
            </div>

            {/** bottom */}
            <div className="w-full border-t border-primary/40 bg-background/80 backdrop-blur-xl">
                <div className="mx-auto grid w-full max-w-[88rem] grid-cols-2 divide-x divide-border/60 md:px-8">
                    <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-5 sm:gap-2 sm:py-6">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">USD Market Cap</p>
                        <p className="text-2xl font-bold tabular-nums sm:text-3xl"> 
                            <span>$</span>
                            <span>100,000</span> 
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-5 sm:gap-2 sm:py-6">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">Gold (Kilograms)</p>
                        <p className="text-2xl font-bold tabular-nums sm:text-3xl">0.2</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
