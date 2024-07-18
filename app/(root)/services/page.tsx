import BlogSection from '@/components/_ui/common/BlogSection'
import CardInfo from '@/components/_ui/common/CardInfo'
import ChoosePlan from '@/components/_ui/common/ChoosePlan'
import OurServices from '@/components/_ui/common/OurServices'
import React from 'react'

function page() {
  return (
    <main>
     <OurServices/>
     <CardInfo/>
     <ChoosePlan/>
     <BlogSection/>
    </main>
  )
}

export default page