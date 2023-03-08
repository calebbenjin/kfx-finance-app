import { useState } from 'react'
import Layout from '@/components/Layout'
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
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/authenticate`, credentials)
      setLoginSuccess(data.message)
      setLoginError('')

      if(typeof window !== 'undefined') {
        localStorage.setItem('userID', data?.userInfo?._id)
      }

      if(data?.userInfo?.role === 'admin') {
        router.push('/dashboard/admin')
      } else {
        router.push('/dashboard')
      }
      
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
        <div className="flex items-center justify-center mx-auto sm:w-3/6">
          <div className="container w-full sm:w-500 mx-auto sm:pt-10">
            {/* <div className="flex justify-center items-center pb-6">
              <Logo isBage />
            </div> */}
            <h2 className='font-bold text-xl sm:text-3xl text-center text-white my-4'>Log in to your account</h2>
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
                      className="core-btn w-full sm:w-3/6 font-bold text-lg shadow-2xl mt-6 bg-gradient text-gray-100 py-3 px-6 md:inline-block text-gray-50"
                      loading={loginLoading} loadingText='Logging In...'>Log In</Button>
                    <p className="mt-4 xl:mt-8  text-white">Don't have an account? <Link href="/register" className='font-semibold' >Create account</Link></p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-image: linear-gradient(rgba(0, 0, 0, 0.892), rgba(0, 0, 0, 0.266)), url(./img4.jpeg);
  background-position: center;
  background-size: cover;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 100vh;
  }
`

export default LoginPage
