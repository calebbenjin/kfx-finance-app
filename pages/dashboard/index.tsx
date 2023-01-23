import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import {
  faChartArea,
  faSackDollar,
  faHandHoldingDollar,
  faCoins
} from '@fortawesome/free-solid-svg-icons';
import DashboardChart from '@/components/DashboardChart'
import DashboardLayout from '@/components/DashboardLayout'
import DashboardMetric from '@/components/DashboardMetric'
import { formatCurrency } from '@/config/index'
import { IoIosSend } from 'react-icons/io'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import Card from '@/components/common/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/AuthContext';
import { Button } from '@/components/Button';
import { parseCookies } from '@/config/parseCookies';
import Loading from '@/components/common/Loading';



const DashboardPage = () => {
  const { authState } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })

  
  const handlePayment = () => {
    router.push('/dashboard/payment')
  }

  const handleReceivePayment = () => {
    router.push('/dashboard/payment/receive')
  }

  return (
    <>
    {isLoading && <Loading />}
    <DashboardLayout>
      {authState ? 
      <div className="container dashboardHero bg-blue pt-10 pb-10">
        <p className="capitalize text-lg text-white">{`Welcome ${authState?.firstName}`}</p>
        <div className="text-center">
          <div className="w-full mb-4 sm:mb-0">
            <DashboardMetric
              title={authState.accType ? authState.accType : "Premier Savings"}
              acctNumber={authState.acctNum ? authState.acctNum : '9876644687'}
              value={authState.amount ? formatCurrency(authState?.amount) : "0.00"}
              icon={faChartArea}
              status={authState.acctStatus ? authState.acctStatus : "Regular"}
            />
          </div>
        </div>
      </div>
      : "Loading" }



      <div className="container mt-16 pb-36">
        <div className="items-center grid grid-cols-2  gap-4">
          <Button onClick={handlePayment} className="core-btn mt-6 font-semibold mx-auto md:w-auto w-full shadow-2xl bg-gradient text-gray-100 py-3 px-3 md:py-4 sm:px-10 flex items-center justify-between"><span>Send payment</span> <IoIosSend className="playstore-icon sm:ml-2" /> </Button>
          <Button onClick={handleReceivePayment} className="core-btn mt-6 font-semibold mx-auto md:w-auto w-full shadow-2xl bg-gradient text-gray-100 py-3 px-3 md:py-4 md:px-7 flex items-center justify-between"><span>Receive payment</span> <IoIosSend className="playstore-icon sm:ml-2" /> </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-10">
          <div className="adsCard py-10 sm:py-20 px-4 mt-6 rounded-lg">
            <h3 className="sm:text-2xl text-gray-100 font-semibold capitalize">Save time and money when you send money internationally with us.</h3>
          </div>
          <div className="adsCard2 py-10 sm:py-20 px-4 mt-6 rounded-lg">
            <h3 className="sm:text-2xl text-gray-100 font-semibold capitalize">Fast, flexible and secure international money transfers across the world.</h3>
          </div>
        </div>

        {/* <div className="serviceSection grid grid-cols-3 gap-y-6 gap-x-6 mt-16">
          <div className="serviceCard">
            <div className="iconBox mx-auto flex items-center justify-center text-white h-16 w-16 sm:h-40 sm:w-40 rounded-full bg-blue">
              <FontAwesomeIcon className="h-7 w-7 sm:h-20 sm:w-20" icon={faSackDollar} />
            </div>
            <p className="text-center mt-2 font-semibold">Savings</p>
          </div>
          <div className="serviceCard">
            <div className="iconBox mx-auto flex items-center justify-center text-white h-16 w-16 sm:h-40 sm:w-40 sm:rounded-full rounded-full bg-blue">
              <FontAwesomeIcon className="h-7 w-7 sm:h-20 sm:w-20" icon={faHandHoldingDollar} />
            </div>
            <p className="text-center sm:text-lg mt-2 font-semibold">Payments</p>
          </div>
          <div className="serviceCard">
            <div className="iconBox mx-auto flex items-center justify-center text-white h-16 w-16 sm:h-40 sm:w-40 rounded-full bg-blue">
              <FontAwesomeIcon className="h-7 w-7 sm:h-20 sm:w-20" icon={faCoins} />
            </div>
            <p className="text-center mt-2 font-semibold">Investment</p>
          </div>
        </div> */}
      </div>
    </DashboardLayout>
    </>
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
