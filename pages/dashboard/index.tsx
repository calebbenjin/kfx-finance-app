import React, {
  useContext
} from 'react';
import {
  faChartArea
} from '@fortawesome/free-solid-svg-icons';
import DashboardChart from '@/components/DashboardChart'
import DashboardLayout from '@/components/DashboardLayout'
import DashboardMetric from '@/components/DashboardMetric'
import { formatCurrency } from '@/config/index'
import { IoIosSend } from 'react-icons/io'
import { GrTransaction } from 'react-icons/gr'
import Card from '@/components/common/Card'
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/AuthContext';
import { Button } from '@/components/Button';
import { parseCookies } from '@/config/parseCookies';


const DashboardPage = () => {
  const { authState } = useContext(AuthContext)
  const router = useRouter()

  
  const handlePayment = () => {
    router.push('/dashboard/payment')
  }

  return (
    <DashboardLayout>
      {authState ? 
      <div className="container bg-light-blue pb-10">
        <p className="py-6 capitalize text-lg">{`Welcome ${authState?.firstName} ${authState?.lastName}`}</p>
        <div className="mb-4 bg-light-blue text-center">
          <div className="w-full mb-4 sm:mb-0">
            <DashboardMetric
              title={authState.accType ? authState.accType : "Premier Savings"}
              acctNumber={authState.acctNum ? authState.acctNum : '9876644687'}
              value={authState.amount ? formatCurrency(authState?.amount) : "0.00"}
              icon={faChartArea}
              status={authState.acctStatus ? authState.acctStatus : "Regular"}
            />
          </div>

          <Button onClick={handlePayment} className="core-rounded-btn mt-6 font-semibold mx-auto md:w-auto w-full shadow-2xl bg-gradient text-gray-100 py-3 px-6 md:py-4 md:px-7 flex items-center justify-between"><span>Proceed to receive payment</span> <IoIosSend className="playstore-icon ml-10" /> </Button>
        </div>
      </div>
      : "Loading" }


      <div className="container">
        <div className="transcard mt-6">
            <div className="flex items-center justify-center">
              <div className="box p-10 text-center">
                <GrTransaction className="text-4xl mx-auto mb-2" />
                <h3 className="text-gray-500 mt-4 text-lg">You have no transactions yet!</h3>
              </div>
            </div>
          </div>
          <div className="w-full mt-4">
            <Card>
              {/* {dashboardData && (
                <DashboardChart
                  salesData={salesData}
                />
              )} */}
            </Card>
          </div>
      </div>
    </DashboardLayout>
  )
}

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

export default DashboardPage
