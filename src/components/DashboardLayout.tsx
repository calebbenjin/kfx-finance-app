import React from 'react'

type LayoutProps = {
  children: React.ReactElement | React.ReactNode
}

const DashboardLayout = ({children}: LayoutProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default DashboardLayout
