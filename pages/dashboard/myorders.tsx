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

const MyOrdersPage = () => {
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
          <div className="orderList flex flex-row sm:flex-col">
            <div className="orderHead text-left sm:text-center grid grid-flow-row sm:grid-cols-6">
              <FontAwesomeIcon className=" text-gray-400" icon={faList} />
              <h1 className="text-lg mt-3">Name</h1>
              <h1 className="text-lg mt-3">Amount</h1>
              <h1 className="text-lg mt-3">Bank Name</h1>
              <h1 className="text-lg mt-3">Account Number</h1>
              <h1 className="text-lg mt-3">Date</h1>
            </div>
            {}
            <div className="orderbody text-left sm:text-center grid grid-flow-row ml-6 sm:ml-0 sm:grid-cols-6">
              <FontAwesomeIcon className=" text-gray-400" icon={faList} />
              <h1 className="text-lg mt-3">John</h1>
              <h1 className="text-lg mt-3">Name</h1>
              <h1 className="text-lg mt-3">Name</h1>
              <h1 className="text-lg mt-3">Name</h1>
              <h1 className="text-lg mt-3">Name</h1>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default MyOrdersPage
