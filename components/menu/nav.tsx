"use client"

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "English", value: "english" },
  { label: "French", value: "french" }
]


export default function Nav() {
  return (
    <div className="flex w-full py-6 bg-transparent sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center w-full max-w-[88rem] mx-auto md:px-8">
        {/** left side*/}
        <div className="flex items-center">
          {/** logo*/}
          <a href="/">
            <Image 
              src="/logo.png"
              alt="Krapa Reserve Gold Logo"
              width={0}
              height={0}
              sizes="180px"
              className="w-auto h-auto"
              loading="eager"
            />
          </a>
        </div>
        
        {/** right side*/}
        <div className="flex items-center gap-14">
          {/** menu items*/}
          <div className="flex items-center gap-8">
            <a 
              href="/faq"
              className="hover:text-primary font-bold"
            >
              FAQ's
            </a>
            <Select 
              items={items}
              defaultValue="english"
            >
              <SelectTrigger className="w-full max-w-48 hover:text-primary font-bold text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                alignItemWithTrigger={false}
              >
                <SelectGroup>
                  {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
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