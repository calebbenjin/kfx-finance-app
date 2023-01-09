import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import PageTitle from '@/components/common/PageTitle'
import { BiTransferAlt } from 'react-icons/bi'
import DashboardMetric from '@/components/DashboardMetric'
import { formatCurrency } from '@/config/index'
import {
  faChartArea,
  faDollarSign,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';



const TransactionHistoryPage = () => {
  return (
    <DashboardLayout>
      <div className="container">

        <PageTitle title="Transactions History" />
        <div className="mb-4 grid">
          <div className="w-full mb-4 sm:mb-0">
            <DashboardMetric
              title="Premier Savings"
              acctNumber='9876644687'
              value={formatCurrency('4000')}
              icon={faChartArea}
              status="Regular"
            />
          </div>
        </div>

        <div className="supportcontainer mt-10 pb-20">
          <div className="list py-6 px-4 rounded-lg mt-4 bg-white flex items-center justify-between">
            <div className="title flex items-center">
              <BiTransferAlt className="text-4xl text-blue" />
              <p className="ml-3 text-md">TFR FRM JOHN DEO TO Lily Opara</p>
            </div>
            <p className="ml-2 text-md text-red">NGN{formatCurrency('2560')}</p>
          </div>
          <div className="list py-6 px-4 rounded-lg mt-4 bg-white flex items-center justify-between">
            <div className="title flex items-center">
              <BiTransferAlt className="text-4xl text-blue" />
              <p className="ml-3 text-md">TFR FRM JOHN DEO TO Lily Opara</p>
            </div>
            <p className="ml-2 text-md text-blue">NGN{formatCurrency('2560')}</p>
          </div>
          <div className="list py-6 px-4 rounded-lg mt-4 bg-white flex items-center justify-between">
            <div className="title flex items-center">
              <BiTransferAlt className="text-4xl text-blue" />
              <p className="ml-3 text-md">TFR FRM JOHN DEO TO Lily Opara</p>
            </div>
            <p className="ml-2 text-md text-red">NGN{formatCurrency('2560')}</p>
          </div>
          <div className="list py-6 px-4 rounded-lg mt-4 bg-white flex items-center justify-between">
            <div className="title flex items-center">
              <BiTransferAlt className="text-4xl text-blue" />
              <p className="ml-3 text-md">TFR FRM JOHN DEO TO Lily Opara</p>
            </div>
            <p className="ml-2 text-md text-blue">NGN{formatCurrency('2560')}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TransactionHistoryPage
