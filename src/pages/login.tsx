import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import HeroImage from '../assets/heroimg.png'

const LoginPage = () => {
  return (
    <Layout>
      <Section>
        <FormSection className="form-container">
          <div className="container mx-auto text-center pt-10">
            <h2 className='font-bold text-3xl my-4'>Login</h2>
            <p className='font-semibold text-md text-gray-400 my-2'>Enter Login credentials</p>
            <form>
              <div className="input-control">
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-control">
                <input type="text" placeholder="Refference Number" />
              </div>
              <button className="core-btn w-full text-lg shadow-2xl mt-4 bg-blue text-gray-100 py-2 px-6 md:inline-block text-gray-50">Login</button>
              <p className="mt-2 xl:mt-8">Don't have an account? <Link href="/register" className='text-blue font-semibold' >Create account</Link></p>
            </form>
          </div>
        </FormSection>
        <BannerSection>
          <Image src={HeroImage} alt="LoginImage" width={600} height={600} />
        </BannerSection>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-image: url(./herobg.png);
  background-position: center;
  background-size: cover;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 100vh;
  }
`

const FormSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1024px) {
    height: 100%;
    padding: 2rem 0;
  }

  form {
    width: 70%;
    margin: 0 auto;
  }

  .input-control {

    input {
      width: 100%;
      background: #f2f3f4;
      padding: 15px;
      margin-top: 1rem;
      border-radius: 6px;

      @media (max-width: 1024px) {
        padding: 10px;
      }
    }
  }
`

const BannerSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 100%;
  }
`

export default LoginPage
