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
import { cn } from "@/lib/utils";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const items = [
  { label: "English", value: "english" },
  { label: "French", value: "french" }
]


export default function Nav() {
  return (
    <div className="flex w-full py-4 bg-transparent bg-background/80 backdrop-blur-xl absolute top-0">
      <div className="flex justify-between items-center w-full max-w-[88rem] mx-auto md:px-4 max-md:px-4">
        {/** left side*/}

        <div className="flex items-center">
          {/** logo*/}
          <a href="/">
            <Image 
              src="/logo.png"
              alt="Krapa Reserve Gold Logo"
              width={0}
              height={0}
              sizes="150px"
              className="w-auto h-auto"
              loading="eager"
            />
          </a>
        </div>
        
        {/** right side*/}

        {/** desktop view*/}
        <div className="flex items-center gap-14 max-lg:hidden">
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
            className={cn(buttonVariants({ variant: "link" }), "hover:text-white")}
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
        {/** mobile view*/}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="size-8 text-primary"/>
            </SheetTrigger>
            <SheetContent
              showCloseButton={false}
              side="top"
              className="flex flex-col gap-8 px-6 pt-24 min-h-screen bg-background lg:hidden"
            >
              <SheetClose className="absolute right-4 top-6">
                <X className="size-8 text-primary"/>
                <span className="sr-only">Close</span>
              </SheetClose>
              {/** menu items*/}
              <div className="flex flex-col items-center gap-8">
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
                  <SelectTrigger className="max-w-48 hover:text-primary font-bold text-base">
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
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://app.krapa.gold"
                  target="_blank"
                  className={cn(buttonVariants({ variant: "outline" }), "w-sm")}
                >
                  Login
                </a>
                <a
                  href="https://app.krapa.gold"
                  target="_blank"
                  className={cn(buttonVariants({ variant: "default" }), "w-sm")}
                >
                  Signup
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}