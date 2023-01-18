import React, {useContext, useState} from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import PageTitle from '@/components/common/PageTitle'
import styled from 'styled-components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { Button } from '@/components/Button'
import { parseCookies } from '@/config/parseCookies';
import FormSuccess from '@/components/FormSuccess'
import FormError from '@/components/FormError'
import Label from '@/components/common/Label'
import FormInput from '@/components/FormInput'
import { useRouter } from 'next/router'
import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SupportModal from '@/components/supportModal'
import { AuthContext } from '@/context/AuthContext'


const SignupSchema = Yup.object().shape({
  taskCode: Yup.string().required(
    'Task Code is required'
  )
});

const TaskPage = () => {
  const { authState } = useContext(AuthContext)
  const [supportModal, setSupportModal] = useState(false)
  const router = useRouter()
  const [signupSuccess, setSignupSuccess] = useState<any>();
  const [signupError, setSignupError] = useState<any>();
  const [loginLoading, setLoginLoading] = useState<any>(false);



  const submitCredentials =  (credentials: any) => {
    if(credentials.taskCode === authState?.taskCode) {
      setSignupSuccess('Awesome your task code is correct!!')
      setSignupError('')
      setLoginLoading(true)
      setTimeout(() => {
        router.push('/dashboard/payment/voucher')
      },2000)
    } else {
      setSignupError('Incorrect Task Code!')
      setSignupSuccess('')
      setLoginLoading(false)
    }
  };

  const handleSupport = () => {
    setSupportModal(true)
  }

  return (
    <DashboardLayout>
      <SupportModal isOpen={supportModal} isClose={() => setSupportModal(false)} />
      <div className="container">
        <PaymentForm>
          <PageTitle title="Enter Task Code" />
          <div className="bg-indigo-600 shadow-lg">
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-2 sm:py-10 lg:px-8">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex w-0 flex-1 items-center">
                  <span className="flex rounded-lg bg-indigo-800 p-2">
                    <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <p className="ml-3 truncate font-medium text-white">
                    <span className="md:hidden">Don&lsquo;t have a task code?</span>
                    <span className="hidden md:inline">Don&lsquo;t have a task code?</span>
                  </p>
                </div>
                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                  <button
                    onClick={handleSupport}
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                  >
                    Request for task code!
                  </button>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                  <button
                    type="button"
                    className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  >
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Formik
              initialValues={{
                taskCode: ''
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
                    <div>
                      <div className="mb-1">
                        <Label text="Task Code" />
                      </div>
                      <FormInput
                        ariaLabel="TaskCode"
                        name="taskCode" placeholder="Enter Task Code"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Button
                      type="submit" loadingText='Checking....' loading={loginLoading}
                      className="core-btn w-full text-lg shadow-2xl mt-4 bg-gradient text-gray-100 py-2 px-6 md:inline-block text-gray-50">PROCEED</Button>
                  </div>
                </Form>
              )}
            </Formik>
        </PaymentForm>
      </div>
    </DashboardLayout>
  )
}


const PaymentForm = styled.div`
  margin: 2rem auto;
  width: 60%;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`


export async function getServerSideProps({ req }: any) {
  const { token } = parseCookies(req);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      token: token
    },
  };
}

export default TaskPage
