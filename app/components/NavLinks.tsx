'use client';

import Link from 'next/link'
import { Montserrat } from "next/font/google";
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

function NavLinks() {
     const pathname = usePathname();
  return (
    <ul className={`hidden md:flex gap-4 font-light ${montserrat.className} text-white`}>
      <Link className={`hover:text-[#10B981] ${pathname === '/' ? 'text-[#10B981]' : ''}`} href={"/"}>Home</Link>
      <Link className={`hover:text-[#10B981] ${pathname === '/properties' ? 'text-[#10B981]' : ''}`} href={"/properties"}>Properties</Link>
      <Link className={`hover:text-[#10B981] ${pathname === '/blogs' ? 'text-[#10B981]' : ''}`} href={"/blogs"}>Blogs</Link>
      <Link className={`hover:text-[#10B981] ${pathname === '/about' ? 'text-[#10B981]' : ''}`} href={"/about"}>About</Link>
      <Link className={`hover:text-[#10B981] ${pathname === '/contact' ? 'text-[#10B981]' : ''}`} href={"/contact"}>Contact</Link>
    </ul>
  )
}

export default NavLinks