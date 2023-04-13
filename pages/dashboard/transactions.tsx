import DashboardLayout from '@/components/DashboardLayout'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faList } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '@/context/AuthContext'
import DashboardMetric from '@/components/DashboardMetric'
import { dateFormater, formatCurrency } from '@/config/index'

const TransactionPage = () => {
  const { authState } = useContext(AuthContext)

  return (
    <DashboardLayout>
      {authState ? (
        <div className='container dashboardHero bg-blue sm:pt-10 pb-10'>
          <p className='capitalize text-lg text-white'>{`Welcome ${authState?.firstName}`}</p>
          <div className='text-center'>
            <div className='w-full mb-4 sm:mb-0'>
              <DashboardMetric
                title={
                  authState.accType ? authState.accType : 'Premier Savings'
                }
                currency={authState.currency ? authState.currency : 'USD'}
                acctNumber={
                  authState.acctNum ? authState.acctNum : '9876644687'
                }
                value={
                  authState.amount ? formatCurrency(authState?.amount) : '0.00'
                }
                icon={faChartArea}
                status={authState.acctStatus ? authState.acctStatus : 'Regular'}
              />
            </div>
          </div>
        </div>
      ) : (
        'Loading'
      )}
      {/* <div className='container text-center'>
        <div className='sm:mt-36 mt-36'>
          <FontAwesomeIcon
            className=' text-3xl sm:text-6xl text-gray-400'
            icon={faList}
          />
          <h1 className='text-lg mt-3'>You have no transactions yet!</h1>
        </div>
      </div> */}
      <div className='container text-center'>
        <div className='sm:mt-36 mt-20'>
          <div className='orderLis'>
            <div className='text-left grid grid-cols-4 sm:grid-cols-6 gap-6 bg-gray-200 px-3 pb-2'>
              <h1 className='text-sm mt-3'>Name</h1>
              <h1 className='text-sm mt-3'>Amount</h1>
              <h1 className='text-sm mt-3'>Bank</h1>
              <h1 className='text-sm mt-3'>Account</h1>
              <h1 className='text-sm mt-3 sm:block hidden'>Country</h1>
              <h1 className='text-sm mt-3 sm:block hidden'>Date</h1>
            </div>
            {}
            {authState?.transactions?.map((list: any, index: any) => (
              <div
                key={index}
                className='border-1 border-bottom border-gray-200 text-left grid sm:ml-0 grid-cols-4 sm:grid-cols-6 sm:px-3'>
                <h1 className='sm:text-sm text-xs mt-3'>{list?.accountName}</h1>
                <h1 className='sm:text-sm text-xs mt-3'>
                  {list?.currency ? list?.currency : null}{' '}
                  {list?.amount ? formatCurrency(list?.amount) : null}
                </h1>
                <h1 className='sm:text-sm text-xs mt-3'>{list?.bankName}</h1>
                <h1 className='sm:text-sm text-xs mt-3'>
                  {list?.accountNumber}
                </h1>
                <h1 className='sm:text-sm text-xs mt-3 sm:block hidden'>
                  {list?.country}
                </h1>
                <h1 className='sm:text-sm text-xs mt-3 sm:block hidden'>
                  {list?.updatedAt ? dateFormater(list?.updatedAt) : null}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TransactionPage
