import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import BirdsImg from '../assets/birds.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const CardSection = () => {
  return (
    <AnimationOnScroll animateIn="animate__backInUp" animateOnce={false}>
      <CardWrapper>
        <div className="container mx-auto mt-20">
          <div className="card cardBg p-10 md:p-20 rounded-6 grid grid-cols-1 md:grid-cols-1 md:gap-10 lg:grid-cols-2 lg:gap-20">
            <Image src={BirdsImg} alt="BirdsImg" height={100} width={100} className="card-img" />
            <div className="content">
              <h2 className="text-lg font-bold uppercase text-blue">Our Feature</h2>
              <h1 className="text-3xl my-5 lg:text-4xl xl:text-5xl md:my-4 xl:my-10 text-white font-bold tracking-normal">Fast, Simple, Reliable: Send Money Direct to a Bank Account.</h1>
              <p className="text-lg text-gray-200 font-semibold">With so many options to transfer money internationally - through bank accounts, mobile wallets, at thousands of locations and online - PayForiegn lets you find your way.</p>
            </div>
            {/* <div className="form-wrapper pt-10">
              <div className="form-container">
                <h2 className="font-bold text-xl text-blue mb-4">Get Started for Free</h2>
                <form className='mt-5'>
                  <input type="text" placeholder='Email Address' />
                  <input type="text" placeholder='Password' />
                  <button className="core-btn shadow-2xl bg-brand text-gray-100 py-4 px-7 mr-4 w-full">Get Started</button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </CardWrapper>
    </AnimationOnScroll>
  )
}

const CardWrapper = styled.section`
  
  .card {
    position: relative;
  }

  .cardBg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.674)), url(./img4.jpg);
    background-position: center;
    background-size: cover;
  }

  .card-img {
    position: absolute;
    right: -1.5rem;
    top: -1.5rem;
  }

  .form-container {
    width: 60%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      width: 100%;
    }

    input {
      width: 100%;
      padding: 15px;
      margin-bottom: 1rem;
      background: #ffff !important;
      outline: none;
    }
  }
`

export default CardSection
