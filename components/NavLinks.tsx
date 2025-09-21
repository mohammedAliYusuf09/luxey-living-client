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
      <Link className={`hover:text-action ${pathname === '/' ? 'text-action' : ''}`} href={"/"}>Home</Link>
      <Link className={`hover:text-action ${pathname === '/properties' ? 'text-action' : ''}`} href={"/properties"}>Properties</Link>
      <Link className={`hover:text-action ${pathname === '/blogs' ? 'text-action' : ''}`} href={"/blogs"}>Blogs</Link>
      <Link className={`hover:text-action ${pathname === '/about' ? 'text-action' : ''}`} href={"/about"}>About</Link>
      <Link className={`hover:text-action ${pathname === '/contact' ? 'text-action' : ''}`} href={"/contact"}>Contact</Link>
    </ul>
  )
}

export default NavLinks