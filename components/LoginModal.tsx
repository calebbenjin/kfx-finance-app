import { useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Modal from './Modal'
import { BsCheck2Circle } from 'react-icons/bs'
import { Button } from './Button'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import FormSuccess from '@/components/FormSuccess'
import FormError from '@/components/FormError'
import Label from '@/components/common/Label'
import FormInput from '@/components/FormInput'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'

type ModalProps = {
  isOpen: boolean,
  isClose: any,
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
});

const LoginModal = ({isOpen, isClose}: ModalProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [loginSuccess, setLoginSuccess] = useState<any>();
  const [loginError, setLoginError] = useState<any>();
  const [loginLoading, setLoginLoading] = useState<any>(false);

  const cancelButtonRef = useRef(null)

  const handleLogin = () => {
    setIsLoading(true)
    setTimeout(() => {

    }, 2000)
  }

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
        router.push('/dashboard/payment')
      }
      
    } catch (error: any) {
      setLoginLoading(false);
      const { data } = error.response;
      setLoginError(data.message);
      setLoginSuccess(null);
    }
  };

  return (
    <Modal isOpen={isOpen} cancelButtonRef={cancelButtonRef} isClose={() => isClose(false)}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="">
          <div className="mt-3 text-center sm:mt-0 sm:text-left">
            <Dialog.Title as="h3" className="sm:text-2xl text-center mb-2 font-medium leading-6 text-blue">
              Log In to proceed payment
            </Dialog.Title>
            
            <div className="sm:px-8">
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
                        className="core-btn w-full sm:w-4/6 font-bold sm:text-sm shadow-2xl mt-6 bg-gradient text-gray-100 py-3 px-6 md:inline-block text-gray-50"
                        loading={loginLoading} loadingText='Logging In...'>Proceed To Dashboard</Button>
                      <p className="mt-4 xl:mt-8  text-gray-600">Don't have an account? <Link href="/register" className='font-semibold text-blue' >Create account</Link></p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6">
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => isClose(false)}
          ref={cancelButtonRef}
        >
          Cancel
        </button>
      </div>
    </Modal>
  )
}

export default LoginModal
