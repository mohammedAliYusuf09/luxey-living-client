'use client'
import { useState } from "react";
import Logo from "@/public/assats/realestatelogo.png";
import Image from "next/image";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { Globe } from "lucide-react";
import WrapButton from "@/components/ui/wrap-button";
import { motion, useMotionValueEvent, useScroll } from "motion/react"


function ResponsiveNavBar() {

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(true);
  const { scrollY } = useScroll();

  // The useMotionValueEvent hook listens to the scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Check if the user has scrolled past the initial threshold
    setScrolled(latest > 20);

    const previous = scrollY.getPrevious();
    
    // Animate the navbar based on scroll direction
    // Hide if scrolling down and past a certain point
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      // Show if scrolling up
      setHidden(false);
    }
  });

  // const [scrolled, setScrolled] = useState<boolean>(false);
  // const [hidden, setHidden] = useState<boolean>(false); 
  // const {scrollY} = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {

  //   setScrolled(latest > 20 ? true : false);
    

  //   const pre = scrollY.getPrevious();
  //   if (pre !== undefined && latest > pre && latest > 150) {
  //     setHidden(true)
  //   } else {
  //     setHidden(false)
  //   }
  // })

  return (
<motion.nav
      // Variants define the animation states
      variants={{
        visible: { y: "0%", opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      // Initial state is "hidden" to make it appear with a transition on load
      initial="hidden"
      // Animate between "hidden" and "visible" based on the state
      animate={hidden ? "hidden" : "visible"}
      // Apply a smooth transition
      transition={{ duration: 0.4, ease: "easeInOut" }}
      // Use dynamic classes for background and shadow on scroll
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${scrolled ? "bg-gray-900/80 backdrop-blur-sm shadow-xl" : "bg-transparent"}`}>
      
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
    </motion.nav>
  );
}

export default ResponsiveNavBar;
