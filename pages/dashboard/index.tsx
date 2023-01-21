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

  return (
    <>
    {isLoading && <Loading />}
    <DashboardLayout>
      {authState ? 
      <div className="container dashboardHero bg-blue mt-10 pt-10 pb-10">
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



      <div className="container mt-20">
      <Button onClick={handlePayment} className="core-btn mt-6 font-semibold mx-auto md:w-auto w-full shadow-2xl bg-gradient text-gray-100 py-3 px-6 md:py-4 md:px-7 flex items-center justify-between"><span>Proceed to receive payment</span> <IoIosSend className="playstore-icon ml-10" /> </Button>

        <div className="serviceSection grid grid-cols-3 gap-y-6 gap-x-6 mt-16">
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
        </div>
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
