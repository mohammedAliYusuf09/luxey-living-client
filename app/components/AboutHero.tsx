import Image from "next/image";
import React from "react";
import JamesCarter from "@/public/assats/james-carter.png";

function AboutHero() {
  return (
    <>
      <div className={`responsive-container text-white`}>
        <div>
          <h4>MY NAME IS</h4>
          <h2>James Carter</h2>
          <span>Your Trusted Real Estate Expert in Austin, TX</span>
        </div>
        <Image src={JamesCarter} alt="hero" width={600} height={800} />
      </div>
      <p>
        Hi, I’m James Carter — a licensed real estate agent based in Austin,
        Texas. With over 7 years of experience, I’ve helped dozens of families
        and investors find the perfect home. Whether it’s your first house or
        your fifth, I’m here to guide you every step of the way with honesty,
        clarity, and care.
      </p>
    </>
  );
}

export default AboutHero;
