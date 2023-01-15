import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { parseCookies } from '@/config/parseCookies';

const AdminPage = () => {
  return (
    <DashboardLayout>
      <h2>Admin Page</h2>
    </DashboardLayout>
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

export default AdminPage
