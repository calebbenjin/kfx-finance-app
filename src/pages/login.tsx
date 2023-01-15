import { useState, useContext } from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import FormSuccess from '@/components/FormSuccess'
import FormError from '@/components/FormError'
import Label from '@/components/common/Label'
import FormInput from '@/components/FormInput'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'
import axios from 'axios'
import Logo from '@/components/common/Logo'

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
});

const LoginPage = () => {
  const router = useRouter()
  const [loginSuccess, setLoginSuccess] = useState<any>();
  const [loginError, setLoginError] = useState<any>();
  const [loginLoading, setLoginLoading] = useState<any>(false);


  const submitCredentials = async (credentials: any) => {
    try {
      setLoginLoading(true);
      const {data} = await axios.post(`${process.env.NEXT_APP_API_URL}/authenticate`, credentials)
      setLoginSuccess(data.message)
      setLoginError('')
      if(typeof window !== 'undefined') {
        localStorage.setItem('userID', data?.userInfo?._id)
      }

      setTimeout(() => {
        if(data?.userInfo?.role === 'admin') {
          router.push('/dashboard/admin')
        } else {
          router.push('/dashboard')
        }
      }, 3000)
      
    } catch (error: any) {
      setLoginLoading(false);
      const { data } = error.response;
      setLoginError(data.message);
      setLoginSuccess(null);
    }
  };


  return (
    <Layout>
      <Section>
        <FormSection>
          <div className="container w-full sm:w-500 mx-auto pt-10">
            <div className="flex justify-center items-center pb-6">
              <Logo isBage />
            </div>
            <h2 className='font-bold text-xl sm:text-3xl text-center my-4'>Log in to your account</h2>
            <p className='font-semibold text-md text-center text-gray-400 my-2'>Enter Login credentials</p>
            <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                onSubmit={values =>
                  submitCredentials(values)
                }
                validationSchema={LoginSchema}
              >
                {() => (
                  <Form className="mt-8">
                    {loginSuccess && (
                      <FormSuccess text={loginSuccess} />
                    )}
                    {loginError && (
                      <FormError text={loginError} />
                    )}
                    <div>
                      <div className="mb-2">
                        <div className="mb-1">
                          <Label text="Email" />
                        </div>
                        <FormInput
                          ariaLabel="Email"
                          name="email"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        <div className="mb-1">
                          <Label text="Password" />
                        </div>
                        <FormInput
                          ariaLabel="Password"
                          name="password"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <Button
                        type="submit"
                        className="core-btn w-full text-lg shadow-2xl mt-4 bg-gradient text-gray-100 py-2 px-6 md:inline-block text-gray-50"
                        loading={loginLoading} loadingText='Logging In...'>Log In</Button>
                      <p className="mt-2 xl:mt-8">Don't have an account? <Link href="/register" className='text-blue font-semibold' >Create account</Link></p>
                    </div>
                  </Form>
                )}
              </Formik>
          </div>
        </FormSection>
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
    width: 40%;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 90%;
      margin: 0 auto;
    }
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

export default LoginPage
