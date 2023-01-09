import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import PageTitle from '@/components/common/PageTitle'
import styled from 'styled-components'
import Input from '@/components/common/Input'
import { Button } from '@/components/Button'


const PaymentPage = () => {
  return (
    <DashboardLayout>
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
              <Button className="core-btn shadow-2xl bg-brand text-gray-100 py-4 px-7 mr-4 w-full">PROCEED</Button>
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

export default PaymentPage
