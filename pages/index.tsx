import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import FeatureSection from '@/components/FeatureSection'
import CardSection from '@/components/CardSection'
import TestimonieSection from '@/components/TestimonieSection'
import LatestTractionsSection from '@/components/LatestTractionsSection'
import ChooseSection from '@/components/ChooseSection'
import TrackMoneySection from '@/components/TrackMoneySection'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <FeatureSection />
        <CardSection />
        {/* <TestimonieSection /> */}
        {/* <LatestTractionsSection /> */}
        {/* <ChooseSection /> */}
        <TrackMoneySection />
        <Footer />
      </Layout>
    </>
  )
}
