import BlogSection from '@/components/_ui/common/BlogSection'
import BoxBackground from '@/components/_ui/common/BoxBackground'
import CardInfoRev from '@/components/_ui/common/CardInfoRev'

function page() {
  return (
    <main>
      <div className='container'>
        <BlogSection />
      </div>
      <CardInfoRev/>
        <BoxBackground/>
    </main>
  )
}

export default page