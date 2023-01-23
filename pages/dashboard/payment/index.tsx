import React, {useEffect, useState} from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import PageTitle from '@/components/common/PageTitle'
import styled from 'styled-components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { Button } from '@/components/Button'
import PreviewTransferDetails from '@/components/PreviewTransferDetails'
import { parseCookies } from '@/config/parseCookies';
import FormSuccess from '@/components/FormSuccess'
import FormError from '@/components/FormError'
import Label from '@/components/common/Label'
import FormInput from '@/components/FormInput'
import Loading from '@/components/common/Loading'
import Router, { useRouter } from 'next/router'


const SignupSchema = Yup.object().shape({
  accountName: Yup.string().required(
    'Account name is required'
  ),
  bankName: Yup.string().required('Bank name is required'),
  accountNumber: Yup.string().required('Account Number is required'),
  amount: Yup.string().required('Amount is required'),
  narration: Yup.string()
});

const PaymentPage = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [signupSuccess, setSignupSuccess] = useState<any>();
  const [signupError, setSignupError] = useState<any>();
  const [loginLoading, setLoginLoading] = useState<any>(false);
  const [formData, setFormData] = useState()
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })

  const submitCredentials = (credentials: any) => {
    setFormData(credentials)

    setTimeout(() => {
      setIsOpen(true)
    },2000)
  };

  const handlePayment = () => {
    setIsLoading(true)
    setIsOpen(false)
    setTimeout(() => {
      router.push('/dashboard/payment/tax')
    }, 2000)
  }

  return (
    <>
    {isLoading && <Loading />}
    <DashboardLayout>
      <PreviewTransferDetails handleClick={handlePayment} data={formData} isOpen={isOpen} isClose={() => setIsOpen(false)} />
      <div className="container py-20">
        <PaymentForm>
          <PageTitle title="Send To Beneficiary" />
          <Formik
              initialValues={{
                accountName: '',
                bankName: '',
                accountNumber: '',
                amount: '',
                narration: '',
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
                          <Label text="Account Name" />
                        </div>
                        <FormInput
                          ariaLabel="Account Name"
                          type="text"
                          name="accountName"  placeholder="Beneficiary Account Name"
                        />
                      </div>
                      <div className="mb-2 sm:ml-2 sm:w-1/2">
                        <div className="mb-1">
                          <Label text="Bank Name" />
                        </div>
                        <FormInput
                          ariaLabel="Bank Name"
                          type="text"
                          name="bankName" placeholder="Beneficiary Bank Name"
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="mb-1">
                        <Label text="Account Number" />
                      </div>
                      <FormInput
                        ariaLabel="Account Number"
                        type="text"
                        name="accountNumber" placeholder="Beneficiary Account Number"
                      />
                    </div>
                    <div>
                      <div className="mb-1">
                        <Label text="Amount" />
                      </div>
                      <FormInput
                        ariaLabel="Amount"
                        name="amount" placeholder="Amount"
                        type="text"
                      />
                    </div>
                    <div>
                      <div className="mb-1">
                        <Label text="Narration" />
                      </div>
                      <FormInput
                        ariaLabel="Narration"
                        name="narration" placeholder="Narration"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Button
                      type="submit" loadingText='Verifying....' loading={loginLoading}
                      className="core-btn w-full text-lg shadow-2xl mt-4 bg-gradient text-gray-100 py-2 px-6 md:inline-block text-gray-50">PROCEED</Button>
                  </div>
                </Form>
              )}
            </Formik>
        </PaymentForm>
      </div>
    </DashboardLayout>
    </>
  )
}


const PaymentForm = styled.div`
  margin: 2rem auto;
  width: 50%;

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

export default PaymentPage
