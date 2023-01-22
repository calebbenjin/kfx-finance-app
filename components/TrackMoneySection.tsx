import React from 'react'
import styled from 'styled-components'

const TrackMoneySection = () => {
  return (
    <Section>
      <div className="container">
        <div className="p-10 md:p-20 rounded-6 grid grid-cols-1 md:grid-cols-1 md:gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="content">
            <h2 className="text-lg font-bold uppercase text-gray-200">Why Choose us</h2>
            <h1 className="text-3xl text-white my-5 lg:text-4xl xl:text-5xl md:my-4 xl:my-10 font-bold tracking-normal">Fast, Simple, Reliable: Send Money Direct to a Bank Account.</h1>
            <p className="text-lg text-gray-200">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
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
    </Section>
  )
}

const Section = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(./img3.jpeg);
  background-position: center;
  background-size: cover;

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
      outline: none;
      background: #F2F3F4;
      color:  #fffff;
      border-radius: 5px;

      &:placeholder {
        color:  #ffff;
      }
    }
  }
`

export default TrackMoneySection
