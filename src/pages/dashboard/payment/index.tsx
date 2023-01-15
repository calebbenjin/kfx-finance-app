import React, {useState} from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import PageTitle from '@/components/common/PageTitle'
import styled from 'styled-components'
import Input from '@/components/common/Input'
import { Button } from '@/components/Button'
import PreviewTransferDetails from '@/components/PreviewTransferDetails'
import { parseCookies } from '@/config/parseCookies';


const PaymentPage = () => {
  const [isOpen, setIsOpen] = useState(false)


  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsOpen(true)
  }

  return (
    <DashboardLayout>
      <PreviewTransferDetails isOpen={isOpen} isClose={() => setIsOpen(false)} />
      <div className="container">
        <PaymentForm>
          <PageTitle title="Send To Beneficiary" />
          <form className="mt-10">
            <div className="input-control mb-3">
              <Input type="text" name="accountName"  placeholder="Beneficiary Account Name" />
            </div>
            <div className="input-control mb-3">
              <Input type="text" name="bankName" placeholder="Beneficiary Bank Name" />
            </div>
            <div className="input-control mb-3">
              <Input type="text" name="accountNumber" placeholder="Beneficiary Account Number" />
            </div>
            <div className="input-control mb-3">
              <Input type="text" name="amount" placeholder="Amount" />
            </div>
            <div className="input-control mb-3">
              <Input type="text" name="narration" placeholder="Narration" />
            </div>
            <div className="input-control">
              <Button onClick={handleSubmit} className="core-btn shadow-2xl bg-gradient text-gray-100 py-4 px-7 mr-4 w-full">PROCEED</Button>
            </div>
          </form>
        </PaymentForm>
      </div>
    </DashboardLayout>
  )
}


const PaymentForm = styled.div`
  margin: 2rem auto;
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`


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

export default PaymentPage
