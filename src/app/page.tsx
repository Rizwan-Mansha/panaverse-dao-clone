import Hero from '@/widgets/Hero'
import CoreTracks from '@/widgets/CoreTracks'
import SpecialiedTracks from '@/widgets/SpecializedTracks'
import OutcomeSection from '@/widgets/OutcomeSection'
// import Footer from '@/widgets/Footer'

export default function Home() {
  return (
   <main className=''>
    {/* Hero Section */}
      <Hero />
      {/* CoreTracks Section */}
      <CoreTracks />
      <SpecialiedTracks />
      <OutcomeSection />
      {/* <Footer /> */}

      {/* <Specialization /> */}
   </main>
  )
}
