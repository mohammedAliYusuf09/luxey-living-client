import BlogGrid from '@/components/BlogGrid'
import BlogsHeader from '@/components/BlogsHeader'
import Consultation from '@/components/Consultation'
import React from 'react'

function blogs() {
  return (
    <main>
      <BlogsHeader />
      <div className='responsive-container mb-6'>
        <BlogGrid />
      </div>
      <Consultation/>
    </main>
  )
}

export default blogs