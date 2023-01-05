import React from 'react'
import FeatureImg from '../assets/Illustration.png'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import ScrollAnimation from './ScrollAnimation'


const FeatureSection = () => {
  return (
    <ScrollAnimation>
      <SectionWrapper>
        <div className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-1 md:gap-6 lg:grid-cols-2 lg:gap-2">
          <div className="img-wrapper">
            <Image src={FeatureImg} alt="FeatureImg" width={820} height={752} className="md:mt-20 xl:mt-4" />
          </div>
          <div className="content-wrapper text-center xl:text-left lg:pl-10 xl:pl-10 xl:pt-10 pt-10">
            <h2 className="md:text-1xl font-bold capitalize text-blue">Our Feature</h2>
            <h1 className="text-3xl my-5 lg:text-4xl xl:text-6xl md:my-4 xl:my-10 font-semibold tracking-normal">Receive payments quickly from anywhere</h1>
            <div className="xl:mr-10 md:mb-10 mb-10">
              <p className="text-lg text-gray-500">Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
            </div>
            <Link href="/" className="core-btn shadow-2xl bg-blue text-gray-100 py-4 px-7 mr-4">Tack your money</Link>
          </div>
        </div>
      </SectionWrapper>
    </ScrollAnimation>
  )
}

const SectionWrapper = styled.section`
  background-image: url(./sectionbg.png);
  background-position: center;
  background-size: cover;
  margin-top: 5rem;

  .line-height {
    line-height: 56px;
  }
  .capitalize {
    text-transform: uppercase;
  }
`

export default FeatureSection
