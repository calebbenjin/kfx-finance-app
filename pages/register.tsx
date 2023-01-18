import { useState, useContext } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import styled from 'styled-components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import FormSuccess from '@/components/FormSuccess'
import FormError from '@/components/FormError'
import Label from '@/components/common/Label'
import FormInput from '@/components/FormInput'
import { AuthContext } from '@/context/AuthContext'
import { publicFetch } from '@/config/fetch'
import {Button} from '@/components/Button'
import { useRouter } from 'next/router'
import Logo from '@/components/common/Logo'


const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required(
    'First name is required'
  ),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required')
});

const RegisterPage = () => {
  const router = useRouter()
  const {setAuthState} = useContext(AuthContext)
  const [signupSuccess, setSignupSuccess] = useState<any>();
  const [signupError, setSignupError] = useState<any>();
  const [loginLoading, setLoginLoading] = useState<any>(false);



  const submitCredentials = async (credentials: any) => {
    try {
      setLoginLoading(true);
      const {data} = await publicFetch.post('signup', credentials)
      setAuthState(data)
      setSignupSuccess(data.message)
      setSignupError('')
      router.push('/login')
    } catch (error: any) {
      setLoginLoading(false);
      const { data } = error.response;
      setSignupError(data.message);
      setSignupSuccess('');
    }
  };

  return (
    <Layout>
      <Section>
        <div className="flex items-center justify-center mx-auto sm:w-3/6">
          <div className="container w-full sm:w-500 mx-auto pt-10">
            <div className="flex justify-center items-center pb-6">
              <Logo isBage />
            </div>
            <h2 className="mb-2 text-center text-xl sm:text-3xl leading-9 font-extrabold text-gray-900">
              Sign up for an account
            </h2>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: ''
              }}
              onSubmit={values =>
                submitCredentials(values)
              }
              validationSchema={SignupSchema}
            >
              {() => (
                <Form className="mt-8">
                  {signupSuccess && (
                    <FormSuccess text={signupSuccess} />
                  )}
                  {signupError && (
                    <FormError text={signupError} />
                  )}
                  <input
                    type="hidden"
                    name="remember"
                    value="true"
                  />
                  <div>
                    <div className="flex sm:flex-row flex-col">
                      <div className="mb-2 sm:mr-2 sm:w-1/2">
                        <div className="mb-1">
                          <Label text="First Name" />
                        </div>
                        <FormInput
                          ariaLabel="First Name"
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="mb-2 sm:ml-2 sm:w-1/2">
                        <div className="mb-1">
                          <Label text="Last Name" />
                        </div>
                        <FormInput
                          ariaLabel="Last Name"
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="mb-1">
                        <Label text="Email address" />
                      </div>
                      <FormInput
                        ariaLabel="Email address"
                        name="email"
                        type="email"
                        placeholder="Email address"
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

                  <div className="mt-6 text-center">
                    <Button
                      type="submit" loadingText='Creating account....' loading={loginLoading}
                      className="core-btn w-full text-lg shadow-2xl mt-4 bg-gradient text-gray-100 py-2 px-6 md:inline-block text-gray-50">Create account</Button>
                      <p className="mt-2 xl:mt-8">Already have an account? <Link href="/login" className='text-blue font-semibold'>Log in now</Link></p>
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
  flex-direction: row;
  background-image: url(./herobg.png);
  background-position: center;
  background-size: cover;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 100vh;
  }
`

export default RegisterPage
