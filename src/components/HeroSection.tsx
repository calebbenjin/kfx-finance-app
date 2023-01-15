import React from 'react'
import styled from 'styled-components'
import CurrencyConverter from './CurrencyConverter'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { LinkButton } from './Button'

const HeroSection = () => {
  return (
    <HeroWrapper>
      <div className="container mx-auto flex items-center flex-wrap md:flex-wrap lg:flex-nowrap">
        <div className="hero-content">
          <h1 className="text-3xl sm:text-5xl font-bold animate__bounceIn">Sending money for medical care, family and friends has never been easier.</h1>
          <p className="mt-7 mb-10 text-md sm:text-1xl md:pr-20 text-gray-500">Send money for medical care, emergency supplies and anything else your family and friends need to bank accounts in Ukraine and nearby countries for $0* fees from the United States, Canada and Europe.</p>
          <div className="hero-btns mt-10 flex">
            <LinkButton href="/login" className="core-rounded-btn shadow-2xl bg-gradient text-gray-100 py-3 px-6 md:py-4 md:px-7 mr-4">Get Started</LinkButton>
            <LinkButton href="/" className="core-rounded-btn shadow-2xl bg-gradient text-gray-100 py-3 px-6 md:py-4 md:px-7 flex items-center"> <IoLogoGooglePlaystore className="playstore-icon" /> Download App</LinkButton>
          </div>
        </div>
        <CurrencyConverter />
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  height: 100vh;
  padding-top: 4rem;
  display: flex;
  align-items: center;
  overflow: none;
  /* justify-content: center; */
  background-image: url(./herobg.png);
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
    padding-top: 6rem;
    /* padding-bottom: 2rem; */
    text-align: center;

    .hero-btns {
      width: 90%;
      margin: 0 auto;
    }
  }

  .hero-content {
    width: 50%;
    @media (max-width: 1024px) {
      padding-bottom: 3rem;
      width: 100%;
    }
  }

  .hero-image {
    background: red;
    position: relative;
    width: 50%;
  }
`

export default HeroSection
