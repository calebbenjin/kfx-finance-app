import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import FormError from '@/components/FormError'
import FormInput from '@/components/FormInput'
import FormSuccess from '@/components/FormSuccess'
import {Button} from '@/components/Button'
import Label from '@/components/common/Label'
import PageTitle from '@/components/common/PageTitle'
import { publicFetch } from '@/config/fetch'
import { parseCookies } from '@/config/parseCookies'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { formatCurrency, dateFormater } from '@/config/index'
import DeleteModal from '@/components/DeleteModal'

type userProps = {
  userID: any,
  data: any
}

const SignupSchema = Yup.object().shape({
  reciever: Yup.string(),
  recieveAmount: Yup.string(),
  recieveMethod: Yup.string(),
  sendAmount: Yup.string(),
  amount: Yup.string(),
  sendCurrency: Yup.string(),
  recieveCurrency: Yup.string(),
  pickupDate: Yup.string(),
});


const EditUserPage = ({userID}: userProps) => {
  const [user, setUser] = useState<any>()
  const [signupSuccess, setSignupSuccess] = useState<any>();
  const [signupError, setSignupError] = useState<any>();
  const [loginLoading, setLoginLoading] = useState<any>(false)
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false)

  useEffect(() => {
    const fetchUserByID = async () => {
      const {data} = await publicFetch.get(`${userID}`)
      setUser(data?.data?.user)
    }

    fetchUserByID()
  }, [signupSuccess])

  const submitCredentials = async (credentials: any) => {
    try {
      setLoginLoading(true);
      const { data } = await publicFetch.patch(`${userID}`, credentials)
      setSignupSuccess(data.status)
      setSignupError('')
      setTimeout(() => {
        setLoginLoading(false);
      }, 3000)
      // redirect
    } catch (error: any) {
      setLoginLoading(false);
      const { data } = error.response;
      setSignupError(data.message);
      setSignupSuccess('');
    }
  };


  return (
    <DashboardLayout>
      <DeleteModal userID={userID} isOpen={openDeleteModal} isClose={() => setOpenDeleteModal(false)} />
      <div className="container">
        <PageTitle title="Edit user" />
        
        {user && 
        <div className="userDetails my-10 grid grid-cols-4 gap-6">
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Full Name</p>
            <p>{user?.firstName} {user?.lastName}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Email</p>
            <p>{user?.email}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Reference Number</p>
            <p>{user?.referenceNum}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Task Code</p>
            <p>{user?.taskCode}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Voucher Number</p>
            <p>{user?.voulcherNum}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Balance</p>
            <p>{user?.amount && formatCurrency(Number(user?.amount))}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Recieve Amount</p>
            <p>{user?.recieveAmount && formatCurrency(Number(user?.recieveAmount))}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Recieve Currency Type</p>
            <p>{user?.recieveCurrency}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Recieve Method</p>
            <p>{user?.recieveMethod}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Recieve Name</p>
            <p>{user?.reciever}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Send Amount</p>
            <p>{user?.sendAmount && formatCurrency(Number(user?.sendAmount))}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Send Currency Type</p>
            <p>{user?.sendCurrency}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Transaction Date</p>
            <p>{user?.transactionDate}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Pickup Date</p>
            <p>{user?.pickupDate && dateFormater(user?.pickupDate)}</p>
          </div>
          <div className="card mb-4">
            <p className="text-sm font-semibold text-gray-400">Payment Status</p>
            <p>{user?.isPaid}</p>
          </div>
        </div>
        }
        <div className="formContainer pb-20">
          <Formik
            initialValues={{
              reciever: "",
              recieveAmount: "",
              recieveMethod: "",
              sendAmount: "",
              amount: "",
              isPaid: "",
              sendCurrency: "",
              recieveCurrency: "",
              pickupDate: ""
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
                  <div className="mb-1">
                    <div className="mb-1">
                      <Label text="Reciever Full Name" />
                    </div>
                    <FormInput
                      ariaLabel="reciever"
                      name="reciever"
                      type="text"
                      placeholder="Reciever Full Name"
                    />
                  </div>
                  <div className="flex sm:flex-row flex-col">
                    <div className="mb-2 sm:mr-2 sm:w-1/2">
                      <div className="mb-1">
                        <Label text="Recieve Amount" />
                      </div>
                      <FormInput
                        ariaLabel="Recieve Amount"
                        name="recieveAmount"
                        type="text"
                        placeholder="Recieve Amount"
                      />
                    </div>
                    <div className="mb-2 sm:ml-2 sm:w-1/2">
                      <div className="mb-1">
                        <Label text="Amount" />
                      </div>
                      <FormInput
                        ariaLabel="Amount"
                        name="amount"
                        type="text"
                        placeholder="Amount"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col">
                    <div className="mb-2 sm:mr-2 sm:w-1/2">
                      <div className="mb-1">
                        <Label text="Recieve Method" />
                      </div>
                      <FormInput
                        ariaLabel="Recieve Method"
                        name="recieveMethod"
                        type="text"
                        placeholder="Recieve Method"
                      />
                    </div>
                    <div className="mb-2 sm:ml-2 sm:w-1/2">
                      <div className="mb-1">
                        <Label text="Send Amount" />
                      </div>
                      <FormInput
                        ariaLabel="Send Amount"
                        name="sendAmount"
                        type="text"
                        placeholder="Send Amount"
                      />
                    </div>
                  </div>

                  <div className="flex sm:flex-row flex-col">
                    <div className="mb-2 sm:mr-2 sm:w-1/2">
                      <div className="mb-1">
                        <Label text="Send Currency" />
                      </div>
                      <FormInput
                        ariaLabel="Send Currency"
                        name="sendCurrency"
                        type="text"
                        placeholder="Send Currency"
                      />
                    </div>
                    <div className="mb-2 sm:ml-2 sm:w-1/2">
                      <div className="mb-1">
                        <Label text="Recieve Currency" />
                      </div>
                      <FormInput
                        ariaLabel="Recieve Currency"
                        name="recieveCurrency"
                        type="text"
                        placeholder="Recieve Currency"
                      />
                    </div>
                  </div>
                  
                  <div className='flex sm:flex-row flex-col'>
                    <div className="mb-2 sm:mr-2 sm:w-1/2">
                      <div className="mb-1">
                        <Label text="Pick up Date" />
                      </div>
                      <FormInput
                        ariaLabel="Pickup Date"
                        name="pickupDate"
                        type="date"
                        placeholder="Recieve Currency"
                      />
                    </div>
                    <div className="mb-2 sm:ml-2 sm:w-1/2">
                      <div className="mb-1">
                        <Label text="Payment Status" />
                      </div>
                      <FormInput
                        ariaLabel="isPaid"
                        name="isPaid"
                        type="text"
                        placeholder="Payment Status"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button
                    type="submit" loadingText='Updating....' loading={loginLoading}
                    className="core-btn w-500 text-lg shadow-2xl mt-4 bg-gradient text-gray-100 py-2 px-6 md:inline-block text-gray-50">Update</Button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="deleteContainer py-20">
            <button className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setOpenDeleteModal(true)}>Delete</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

type serverProps = {
  req: any,
  query: any
}

export async function getServerSideProps({ req, query: { id } }: serverProps) {
  const { token } = parseCookies(req)

  if (!token) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {
      userID: id,
    },
  }
}

export default EditUserPage
