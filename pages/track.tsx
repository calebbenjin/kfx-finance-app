import Layout from '@/components/Layout'
import TrackMoneySection from '@/components/TrackMoneySection'
import Footer from '@/components/Footer'
import styled from 'styled-components'
import playstoreImg from '../assets/playstore.png'
import Image from 'next/image'
import { LinkButton } from '@/components/Button'
import CurrencyConverter from '@/components/CurrencyConverter'


export default function Home() {
  return (
    <>
      <Layout>
      <HeroWrapper>
        <div className="container mx-auto flex items-center flex-wrap md:flex-wrap lg:flex-nowrap">
          <div className="hero-content">
            <h1 className="text-2xl text-white sm:text-5xl font-bold animate__bounceIn capitalize mb-4">Send money transfers online from the United States with confidence.</h1>
            <div className="hero-btns mt-10 flex mx-auto">
              <LinkButton href="/login" className="core-btn shadow-2xl text-lg bg-gradient rounded text-gray-100 font-bold py-3 px-4 md:py-4 md:px-7 sm:mr-7 mr-2">Start Sending</LinkButton>
              <LinkButton href="/" className="">
                <Image src={playstoreImg} alt="download on playstore" width={170} height={100} />
              </LinkButton>
            </div>
          </div>
          <CurrencyConverter />
        </div>
      </HeroWrapper>
        <TrackMoneySection />
        <Footer />
      </Layout>
    </>
  )
}


const HeroWrapper = styled.div`
  height: 100vh;
  padding-top: 10rem;
  display: flex;
  align-items: center;
  overflow: none;
  background-image: linear-gradient(rgba(0, 0, 0, 0.242), rgba(0, 0, 0, 0)), url(./bgadmin.jpeg);
  background-position: center;
  background-size: cover;

  .playstore-icon {
    font-size: 1.5rem;
    color: #fff;
  }

  .line-height {
    line-height: 4rem;
  }

  @media (max-width: 1024px) {
    height: 100%;
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
    text-align: center;

    .hero-btns {
      width: 90%;
      margin: 0 auto;
    }
  }

  .hero-content {
    width: 50%;
    @media (max-width: 1024px) {
      padding-bottom: 1rem;
      width: 100%;
    }
  }

  .hero-image {
    background: red;
    position: relative;
    width: 50%;
  }
`