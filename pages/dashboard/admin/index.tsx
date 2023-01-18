import React, { useEffect, useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { parseCookies } from '@/config/parseCookies';
import PageTitle from '@/components/common/PageTitle';
import Link from 'next/link';
import { publicFetch } from '@/config/fetch';

const AdminPage = () => {
  const [users, setUsers] = useState<any>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        setLoading(true)
        const { data } = await publicFetch.get('/')
        setUsers(data?.data?.users)
        setTimeout(() => {
          setLoading(false)
        },1000)
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchAllUsers()
  },[])
  
  return (
    <DashboardLayout>
      <div className="container">
        <PageTitle title="All Users" />
        
        {loading ? <h1>Loading...</h1> : 
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      User name
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Reference Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Payment Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Action
                  </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => {
                const { firstName, lastName, email, referenceNum, taskCode, voulcherNum, isPaid, _id} = user
                return (
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {firstName} {lastName}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {email}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {referenceNum}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {isPaid}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <Link href={`/dashboard/admin/${_id}`}>Edit</Link>
                    </th>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        }
        
      </div>
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
