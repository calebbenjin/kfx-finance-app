import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import PageTitle from '@/components/common/PageTitle'
import { parseCookies } from '@/config/parseCookies';

const UsersPage = () => {
  return (
    <DashboardLayout>
      <PageTitle title="All Users" />
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

export default UsersPage
