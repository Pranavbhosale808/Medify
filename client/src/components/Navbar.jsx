import React from "react";
import { LuBell } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "./ui/label";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <nav className="fixed z-50 bg-white w-full flex justify-between items-center p-[10px] border-b">
      <div className="lg:hidden flex">
        <MobileMenu />
      </div>
      <div className="flex space-x-4 justify-center items-center">
        <div className="mx-4 hover:flex justify-center items-center space-x-2 cursor-pointer hidden">
          <FaAngleLeft />
          <Label>Back</Label>
        </div>
        <div className="w-10 h-10 bg-subtitle text-white text-center text-4xl">
          L
        </div>
        <h4>Company Name</h4>
      </div>
      <div className="lg:flex space-x-6 justify-center items-center hidden">
        <h4>Lorem ipsum dolor</h4>
        <div className="relative">
          <LuBell className="text-primary scale-150" />
          <Badge className="absolute -top-4 -right-3 text-error text-[10px] bg-tertiary aspect-square px-[6px] flex justify-center items-center">
            3
          </Badge>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}

export default Navbar;
