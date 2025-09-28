import AboutHero from '@/components/AboutHero'
import Consultation from '@/components/Consultation'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import TipsInsits from '@/components/TipsInsits'
import { WhyWorkWithMe } from '@/components/WhyWorkWithMe'
import WorkShow from '@/components/WorkShow'
import React from 'react'

function about() {
  return (
    <main className='pt-14'>
      <AboutHero/>
      <WorkShow/>
      <WhyWorkWithMe />
      <TestimonialCarousel />
      <TipsInsits/>
      <Consultation/>
    </main>
  )
}

export default about