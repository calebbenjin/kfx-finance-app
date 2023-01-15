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
      setTimeout(() => {
        router.push('/login')
      }, 3000)
      // redirect
    } catch (error: any) {
      setLoginLoading(false);
      const { data } = error.response;
      setSignupError(data.message);
      console.log(data.message)
      setSignupSuccess('');
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
            <h2 className="mb-2 text-center text-xl sm:text-3xl leading-9 font-extrabold text-gray-900">
              Sign up for an account
            </h2>
            {/* <p className='font-semibold text-md sm:mb-10 text-center text-gray-400 my-2'>Enter Your credentials</p> */}
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

export default RegisterPage
