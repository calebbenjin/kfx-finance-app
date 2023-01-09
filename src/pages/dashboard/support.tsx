import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import PageTitle from '@/components/common/PageTitle'
import { FaUserTie } from 'react-icons/fa'
import { IoIosArrowForward, IoIosChatboxes } from 'react-icons/io'
import { GoIssueReopened } from 'react-icons/go'
import { VscFeedback } from 'react-icons/vsc'



const SupportPage = () => {
  return (
    <DashboardLayout>
      <PageTitle title="Support" />

      <div className="supportcontainer pb-20 pt-4">
        <div className="list py-6 px-4 rounded-lg mt-4 bg-white flex items-center justify-between">
          <div className="title flex items-center">
            <FaUserTie className="text-3xl text-blue" />
            <p className="ml-2 text-lg">Account Officer</p>
          </div>
          <IoIosArrowForward className="text-xl" />
        </div>
        <div className="list py-6 px-4 rounded-lg mt-4 bg-white flex items-center justify-between">
          <div className="title flex items-center">
            <IoIosChatboxes className="text-3xl text-blue" />
            <p className="ml-2 text-lg">Live Chat</p>
          </div>
          <IoIosArrowForward className="text-xl" />
        </div>
        <div className="list py-6 px-4 rounded-lg mt-4 bg-white flex items-center justify-between">
          <div className="title flex items-center">
            <GoIssueReopened className="text-3xl text-blue" />
            <p className="ml-2 text-lg">Report an Issue</p>
          </div>
          <IoIosArrowForward className="text-xl" />
        </div>
        <div className="list py-4 px-6 rounded-lg mt-4 bg-white flex items-center justify-between">
          <div className="title flex items-center">
            <VscFeedback className="text-3xl text-blue" />
            <p className="ml-2 text-lg">Send feedback</p>
          </div>
          <IoIosArrowForward className="text-xl cursor" />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default SupportPage
