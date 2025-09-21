import AboutHero from '@/components/AboutHero'
import Consultation from '@/components/Consultation'
import Stranth from '@/components/Stranth'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import TipsInsits from '@/components/TipsInsits'
import WorkShow from '@/components/WorkShow'
import React from 'react'

function about() {
  return (
    <main>
      <AboutHero/>
      <WorkShow/>
      <Stranth />
      <TestimonialCarousel />
      <TipsInsits/>
      <Consultation/>
    </main>
  )
}

export default about