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
        <div className="sm:w-64 px-4 hidden md:block sm:px-8 pt-6 bg-gradient">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
            <DashboardNav />
          <div>
            {children}
          </div>
          <MobileNavbar />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
