import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import BirdsImg from '../assets/birds.png'

const CardSection = () => {
  return (
    <CardWrapper>
      <div className="container mx-auto mt-20">
        <div className="card bg-light-blue p-10 md:p-20 rounded-6 grid grid-cols-1 md:grid-cols-1 md:gap-10 lg:grid-cols-2 lg:gap-20">
          <Image src={BirdsImg} alt="BirdsImg" height={100} width={100} className="card-img" />
          <div className="content">
            <h2 className="text-lg font-bold uppercase text-blue">Our Feature</h2>
            <h1 className="text-3xl my-5 lg:text-4xl xl:text-5xl md:my-4 xl:my-10 font-semibold tracking-normal">Receive payments quickly from anywhere</h1>
            <p className="text-lg text-gray-500">Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
          </div>
          <div className="form-wrapper pt-10">
            <div className="form-container">
              <h2 className="font-bold text-xl text-blue mb-4">Get Started for Free</h2>
              <form className='mt-5'>
                <input type="text" placeholder='Email Address' />
                <input type="text" placeholder='Password' />
                <button className="core-btn shadow-2xl bg-brand text-gray-100 py-4 px-7 mr-4 w-full">Get Started</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  
  .card {
    position: relative;
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
