import React from 'react'
import Navbar from './Navbar'

type LayoutProps = {
  children: React.ReactElement | React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
