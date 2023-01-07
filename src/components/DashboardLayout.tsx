import React from 'react'
import Sidebar from './Sidebar'
import DashboardNav from './common/DashboardNav'
import MobileNavbar from './common/MobileNavbar'

type LayoutProps = {
  children: React.ReactElement | React.ReactNode
}

const DashboardLayout = ({children}: LayoutProps) => {
  return (
    <div>
      <div className="flex">
        <div className="sm:w-64 px-4 hidden md:block sm:px-8 pt-6 bg-white">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full border-l border-gray-200">
          <div className="py-4 border-b border-gray-200 bg-white">
            <DashboardNav />
          </div>
          <div className="px-4 sm:px-8 py-2 bg-gray-100">
            {children}
          </div>
          <MobileNavbar />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
