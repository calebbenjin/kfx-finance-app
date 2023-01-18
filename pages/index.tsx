import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import FeatureSection from '@/components/FeatureSection'
import CardSection from '@/components/CardSection'
import TestimonieSection from '@/components/TestimonieSection'
import LatestTractionsSection from '@/components/LatestTractionsSection'
import ChooseSection from '@/components/ChooseSection'
import TrackMoneySection from '@/components/TrackMoneySection'
import Footer from '@/components/Footer'
import Head from 'next/head'


export default function Home() {
  
  return (
    <>
      {/* <Head>
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#0061d7" />
      </Head> */}
      <Layout>
        <HeroSection />
        <FeatureSection />
        <CardSection />
        <TestimonieSection />
        <LatestTractionsSection />
        <ChooseSection />
        <TrackMoneySection />
        <Footer />
      </Layout>
    </>
  )
}
