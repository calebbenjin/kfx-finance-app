import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import PageTitle from '@/components/common/PageTitle'
import { FaUserTie } from 'react-icons/fa'
import { IoIosArrowForward, IoIosChatboxes } from 'react-icons/io'
import { GoIssueReopened } from 'react-icons/go'
import { VscFeedback } from 'react-icons/vsc'
import SupportModal from '@/components/supportModal'
import { parseCookies } from '@/config/parseCookies';



const SupportPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <DashboardLayout>
      <div className="container pt-20">
        <PageTitle title="Support" />
        <SupportModal isOpen={isOpen} isClose={() => setIsOpen(false)} />
        <div className="supportcontainer pb-20 pt-4">
          <div onClick={openModal} className="list py-6 shadow-lg px-4 rounded-lg mt-4 bg-white flex items-center justify-between">
            <div className="title flex items-center">
              <FaUserTie className="text-3xl text-blue" />
              <p className="ml-2 text-lg">Account Officer</p>
            </div>
            <IoIosArrowForward className="text-xl" />
          </div>
          <div onClick={openModal} className="list py-6 shadow-lg px-4 rounded-lg mt-4 bg-white flex items-center justify-between">
            <div className="title flex items-center">
              <IoIosChatboxes className="text-3xl text-blue" />
              <p className="ml-2 text-lg">Live Chat</p>
            </div>
            <IoIosArrowForward className="text-xl" />
          </div>
          <div onClick={openModal} className="list py-6 shadow-lg px-4 rounded-lg mt-4 bg-white flex items-center justify-between">
            <div className="title flex items-center">
              <GoIssueReopened className="text-3xl text-blue" />
              <p className="ml-2 text-lg">Report an Issue</p>
            </div>
            <IoIosArrowForward className="text-xl" />
          </div>
          <div onClick={openModal} className="list py-4 shadow-lg px-6 rounded-lg mt-4 bg-white flex items-center justify-between">
            <div className="title flex items-center">
              <VscFeedback className="text-3xl text-blue" />
              <p className="ml-2 text-lg">Send feedback</p>
            </div>
            <IoIosArrowForward className="text-xl cursor" />
          </div>
        </div>
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

export default SupportPage
