import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";


export default function Nav() {
  return (
    <div className="flex w-full py-6 bg-transparent sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center w-full max-w-[88rem] mx-auto md:px-8">
        {/** left side*/}
        <div className="flex items-center">
          {/** logo*/}
          <Image 
            src="/logo.png"
            alt="Krapa Reserve Gold Logo"
            width={0}
            height={0}
            sizes="180px"
            className="w-auto h-auto"
            loading="eager"
          />
        </div>
        
        {/** right side*/}
        <div className="flex items-center gap-14">
          {/** menu items*/}
          <div className="flex items-center gap-8">
            <a href="/faq">FAQ's</a>
            <a href="/">English</a>
          </div>
          {/** login/signup*/}
          <div className="flex items-center gap-2">
          <a
            href="https://app.krapa.gold"
            target="_blank"
            className={buttonVariants({ variant: "link" })}
          >
            Login
          </a>
          <a
            href="https://app.krapa.gold"
            target="_blank"
            className={buttonVariants({ variant: "default" })}
          >
            Signup
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}