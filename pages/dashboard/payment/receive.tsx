import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import PageTitle from '@/components/common/PageTitle'
import styled from 'styled-components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/Button'
import PreviewTransferDetails from '@/components/PreviewTransferDetails'
import { parseCookies } from '@/config/parseCookies'
import FormSuccess from '@/components/FormSuccess'
import FormError from '@/components/FormError'
import Label from '@/components/common/Label'
import FormInput from '@/components/FormInput'
import Loading from '@/components/common/Loading'
import { useRouter } from 'next/router'
import OrderModal from '@/components/OrderModal'
import NotPaidModal from '@/components/NotPaidModal'
import { AuthContext } from '@/context/AuthContext'
import { publicFetch } from '@/config/fetch'
import TrackingModal from '@/components/TrackingModal'

const SignupSchema = Yup.object().shape({
  accountName: Yup.string().required('Account name is required'),
  bankName: Yup.string().required('Bank name is required'),
  accountNumber: Yup.string().required('Account Number is required'),
  amount: Yup.string().required('Amount is required'),
  narration: Yup.string(),
})

const ReceivePage = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { authState } = useContext(AuthContext)
  const [notPaidModal, setNotPaidModal] = useState(false)
  const [signupSuccess, setSignupSuccess] = useState<any>()
  const [signupError, setSignupError] = useState<any>()
  const [loginLoading, setLoginLoading] = useState<any>(false)
  const [formData, setFormData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [previewLoading, setPreviewLoading] = useState(false)
  const [trackingData, setTrackingData] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })

  const checkStatusSchema = Yup.object().shape({
    referenceNum: Yup.string().required('referenceNum is required'),
  })

  const handleCheckPaymentStatus = async (credentials: any) => {
    try {
      setLoginLoading(true)
      const { data } = await publicFetch.post('status', credentials)
      if (data?.data === null) {
        setLoginLoading(false)
        setSignupError('Reference Number does not match')
      } else {
        setSignupSuccess(data.message)
        setTrackingData(data?.data)
        setSignupError('')
        setTimeout(() => {
          setIsOpen(true)
          setLoginLoading(false)
          setSignupSuccess('')
        }, 1000)
      }
    } catch (error: any) {
      setLoginLoading(false)
      const { data } = error.response
      setSignupError(data.message)
      setSignupSuccess('')
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      <DashboardLayout>
        <TrackingModal
          isOpen={isOpen}
          data={trackingData}
          isClose={() => setIsOpen(false)}
        />
        {/* <NotPaidModal
          isOpen={notPaidModal}
          isClose={() => setNotPaidModal(false)}
        /> */}
        <div className='container py-24 flex items-center justify-center'>
          <PaymentForm>
            <h3 className='text-xl my-2 font-semibold'>Send To Beneficiary</h3>
            <Formik
              initialValues={{ referenceNum: '', email: '' }}
              onSubmit={(values) => handleCheckPaymentStatus(values)}
              validationSchema={checkStatusSchema}>
              {() => (
                <Form>
                  {signupSuccess && <FormSuccess text={signupSuccess} />}
                  {signupError && <FormError text={signupError} />}
                  <input type='hidden' name='remember' value='true' />
                  <div className='input-control'>
                    <label htmlFor='referenceNum' className='text-gray-500'>
                      Reference Number
                    </label>
                    <FormInput
                      ariaLabel='referenceNum'
                      name='referenceNum'
                      type='text'
                      placeholder='Reference Number'
                    />
                  </div>
                  <Button
                    type='submit'
                    loadingText='TRACKING....'
                    loading={loginLoading}
                    className='core-btn bg-gradient shadow-2xl font-bold w-full text-white sm:mt-5 mt-2 text-sm py-3 px-6 md:inline-block'>
                    TRACK YOUR MONEY
                  </Button>
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
  const { token } = parseCookies(req)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      token: token,
    },
  }
}

export default ReceivePage
