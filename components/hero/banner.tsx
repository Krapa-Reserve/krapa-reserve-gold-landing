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
            <div className="flex flex-col items-center mt-48 gap-2">
                <p className="text-4xl">PURE VALUE. PURE TRUST.</p>
                <p className="text-7xl font-bold">Real Gold. Virtual Access.</p>
            </div>
            
            {/** middle */}
            <div className="flex flex-col items-center">
                <div className="flex gap-2">
                    <a
                        href="https://app.krapa.gold"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "default" }), "h-14 min-w-48 px-10 text-sm")}
                    >
                        Buy KAUX
                    </a>
                    <a
                        href="https://krapa.gold"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "secondary" }), "h-14 min-w-48 px-10 text-sm")}
                    >
                        Read Our Docs
                    </a>
                </div>
            </div>

            {/** bottom */}
            <div className="flex h-24 w-full items-center justify-evenly bg-secondary">
                <div className="flex flex-col items-center">
                    <p className="text-sm text-primary">USD Market Cap</p>
                    <p className="text-3xl font-bold"> 
                        <span>$</span>
                        <span>100,000</span> 
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-sm text-primary">Gold Kilograms</p>
                    <p className="text-3xl font-bold">0.2</p>
                </div>
                
            </div>
        </div>
    </div>
  );
}
