import React from 'react'
import styled from 'styled-components'

const ChooseSection = () => {
  return (
    <Section>
      <div className="container mx-auto">
        <div className="cardwrapper rounded-6 shadow-lg bg-light-blue p-6 xl:p-20">
          <h2 className="text-lg font-bold text-blue text-center">Why Financy</h2>
          <h1 className="text-4xl font-semibold text-center mt-4">Why Choose Us</h1>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 md:gap-10 lg:grid-cols-2 lg:gap-6">
            <div className="card mb-4 flex xl:flex-nowrap flex-wrap bg-white p-6 rounded-lg shadow-4">
              <div className="mr-4">
                <p className="iconbox"></p>
              </div>
              <div className="content">
                <p className="font-semibold mb-4">No Extra Fee</p>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
              </div>
            </div>
            <div className="card mb-4 flex xl:flex-nowrap flex-wrap bg-white p-6 rounded-lg shadow-4">
              <div className="mr-4">
                <p className="iconbox"></p>
              </div>
              <div className="content">
                <p className="font-semibold mb-4">No Extra Fee</p>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
              </div>
            </div>
            <div className="card mb-4 flex xl:flex-nowrap flex-wrap bg-white p-6 rounded-lg shadow-4">
              <div className="mr-4">
                <p className="iconbox"></p>
              </div>
              <div className="content">
                <p className="font-semibold mb-4">No Extra Fee</p>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
              </div>
            </div>
            <div className="card mb-4 flex xl:flex-nowrap flex-wrap bg-white p-6 rounded-lg shadow-4">
              <div className="mr-4">
                <p className="iconbox"></p>
              </div>
              <div className="content">
                <p className="font-semibold mb-4">No Extra Fee</p>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin: 4rem 0;

  .cardwrapper {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .cardwrapper {
      width: 100%;
      margin: 0 auto;
    }
  }

  .iconbox {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .iconbox:nth-child(1) {
    background: red;
  }
  .iconbox:nth-child(2) {
    background: blue;
  }
`

export default ChooseSection
