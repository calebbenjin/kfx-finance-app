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
          <h1 className="text-2xl text-white sm:text-5xl font-bold animate__bounceIn capitalize mb-4">Fast, flexible and secure international money transfers across the world.</h1>
          <p className="hidden sm:block mt-7 mb-10 text-md sm:text-2xl md:pr-20 text-gray-100">Save time and money when you send money internationally with us.</p>
          <div className="hero-btns mt-10 flex items-center justify-between">
            <LinkButton href="/login" className="core-btn shadow-2xl bg-gradient text-gray-100 font-bold py-2 px-4 md:py-4 md:px-7 mr-2">Create Account</LinkButton>
            <LinkButton href="/" className="core-btn shadow-2xl bg-gradient font-bold text-gray-100 py-2 px-4 md:py-4 md:px-7 flex items-center"> <IoLogoGooglePlaystore className="playstore-icon" /> Download App</LinkButton>
          </div>
        </div>
        <CurrencyConverter />
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  height: 100vh;
  padding-top: 10rem;
  display: flex;
  align-items: center;
  overflow: none;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(./img2.jpeg);
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

export default HeroSection
