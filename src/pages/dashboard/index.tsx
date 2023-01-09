import React, {
  useState,
  useContext,
  useEffect
} from 'react';
import {
  faChartArea,
  faDollarSign,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import DashboardChart from '@/components/DashboardChart'
import DashboardLayout from '@/components/DashboardLayout'
import DashboardMetric from '@/components/DashboardMetric'
import PageTitle from '@/components/common/PageTitle'
import { formatCurrency } from '@/config/index'
import { IoIosSend } from 'react-icons/io'
import { GrTransaction } from 'react-icons/gr'
import Card from '@/components/common/Card'
import { LinkButton, Button } from '@/components/Button';
import { useRouter } from 'next/router';

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState();
  const router = useRouter()

  
  const handlePayment = () => {
    router.push('/dashboard/payment')
  }

  return (
    <DashboardLayout>
      <div className="container">
        <PageTitle title="Welcome John Deo" />
        <div className="mb-4">
          <div className="w-full mb-4 sm:mb-0">
            <DashboardMetric
              title="Premier Savings"
              acctNumber='9876644687'
              value={formatCurrency('4000')}
              icon={faChartArea}
              status="Regular"
            />
          </div>

          <Button onClick={handlePayment} className="core-rounded-btn mt-6 md:w-auto w-full shadow-2xl bg-gradient text-gray-100 py-3 px-6 md:py-4 md:px-7 flex items-center justify-between"><span>Proceed to receive payment</span> <IoIosSend className="playstore-icon ml-10" /> </Button>
        </div>
        
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
            {dashboardData && (
              <DashboardChart
                // salesData={dashboardData.graphData}
              />
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage
