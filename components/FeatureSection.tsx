import React from 'react'
import FeatureImg from '../assets/phone1.png'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import playstoreImg from '../assets/playstore.png'


const FeatureSection = () => {
  return (
    <AnimationOnScroll animateIn="animate__backInUp" animateOnce={false}>
      <SectionWrapper>
        <div className="container mx-auto py-20 flex">
            <Image src={FeatureImg} alt="FeatureImg" width={320} height={352} className="md:mt-20 xl:mt-4" />
          {/* <div className="img-wrapper">
          </div> */}
          <div className="content-wrapper text-center xl:text-left lg:pl-10 xl:pl-10 xl:pt-10 pt-10">
            {/* <h2 className="md:text-1xl font-bold capitalize text-blue">Our Feature</h2> */}
            <h1 className="text-3xl my-5 sm:text-6xl md:my-4 xl:my-10 font-semibold tracking-normal">Money Transfers at your Fingertips</h1>
            <div className="xl:mr-10 md:mb-10 mb-10">
              <p className="text-lg text-gray-500">Discover more ways to send and receive money with PayForiegn. </p>
            </div>
            <Link href="/">
              <Image src={playstoreImg} alt="download on playstore" width={170} height={100} />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </AnimationOnScroll>
  )
}

const SectionWrapper = styled.section`
  background-image: url(./sectionbg.png);
  background-position: center;
  background-size: cover;
  margin-top: 5rem;
  width: 70%;
  margin: auto;

  .line-height {
    line-height: 56px;
  }
  .capitalize {
    text-transform: uppercase;
  }
`

export default FeatureSection
