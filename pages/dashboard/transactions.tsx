import DashboardLayout from '@/components/DashboardLayout'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartArea,
  faList
} from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '@/context/AuthContext';
import DashboardMetric from '@/components/DashboardMetric';
import { formatCurrency } from '@/config/index';

const TransactionPage = () => {
  const { authState } = useContext(AuthContext)


  return (
    <DashboardLayout>
      
      {authState ? 
      <div className="container dashboardHero bg-blue pt-10 pb-10">
        <p className="capitalize text-lg text-white">{`Welcome ${authState?.firstName}`}</p>
        <div className="text-center">
          <div className="w-full mb-4 sm:mb-0">
            <DashboardMetric
              title={authState.accType ? authState.accType : "Premier Savings"}
              currency={authState.currency ? authState.currency : "USD"}
              acctNumber={authState.acctNum ? authState.acctNum : '9876644687'}
              value={authState.amount ? formatCurrency(authState?.amount) : "0.00"}
              icon={faChartArea}
              status={authState.acctStatus ? authState.acctStatus : "Regular"}
            />
          </div>
        </div>
      </div>
      : "Loading" }
      <div className="container text-center">
        <div className="sm:mt-36 mt-36">
          <FontAwesomeIcon className=" text-3xl sm:text-6xl text-gray-400" icon={faList} />
          <h1 className="text-lg mt-3">You have no transactions yet!</h1>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TransactionPage
