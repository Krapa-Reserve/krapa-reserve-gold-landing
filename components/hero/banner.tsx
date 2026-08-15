import { ArrowRight, BookOpen } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export default function Banner() {
  return (
    <div 
        className="relative flex w-full items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('/banner.png')"
        }}
    >
        <div
            className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/15 to-background/75"
            aria-hidden
        />
        <div className="relative flex flex-col h-screen w-full items-center justify-between">
            {/** top */}
            <div className="flex max-w-4xl flex-col items-center px-4 pt-28 text-center sm:pt-32 md:pt-36 lg:pt-40">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Pure Value · Pure Trust
                </p>
                <h1 className="mt-3 text-4xl font-bold leading-[1.08] text-primary sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl">
                    Real Gold.
                    <br />
                    Virtual Access.
                </h1>

            </div>
            
            {/** middle */}
            <div className="flex w-full max-w-lg flex-col items-center gap-4 px-4 sm:px-0">
                <div className="w-full border border-primary/25 bg-background/70 p-3 backdrop-blur-xl sm:p-4">
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <a
                            href="https://app.krapa.gold"
                            target="_blank"
                            className={cn(buttonVariants({ variant: "default" }), "h-12 w-full gap-2 px-6 text-xs sm:h-14 sm:flex-1 sm:text-sm")}
                        >
                            Buy KAUX
                            <ArrowRight className="size-4 shrink-0" />
                        </a> 
                        <a
                            href="https://krapa.gold"
                            target="_blank"
                            className={cn(buttonVariants({ variant: "outline" }), "h-12 w-full gap-2 px-6 text-xs sm:h-14 sm:flex-1 sm:text-sm")}
                        >
                            <BookOpen className="size-4 shrink-0" />
                            Read Our Docs
                        </a>
                    </div>
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
