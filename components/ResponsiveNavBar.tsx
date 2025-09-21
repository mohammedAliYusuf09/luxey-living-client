import React from "react";
import Logo from "@/public/assats/realestatelogo.png";
import Image from "next/image";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { Globe } from "lucide-react";
import WrapButton from "@/components/ui/wrap-button";

function ResponsiveNavBar() {
  return (
    <div className="bg-[#14171C] py-2">
      <div className="flex justify-between items-center responsive-container">
        {/* logo */}
        <Image width={110} src={Logo} alt="logo" />
        {/* links */}
        <NavLinks/>
        {/* find button */}
      {/* <FindButton /> */}
      <WrapButton className="hidden md:inline-flex" href="/properties" >
            <Globe className="animate-spin" />
            FIND
        </WrapButton>
      <MobileMenu/>
      </div>
    </div>
  );
}

export default ResponsiveNavBar;
