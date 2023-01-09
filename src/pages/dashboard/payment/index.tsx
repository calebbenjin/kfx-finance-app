import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import PageTitle from '@/components/common/PageTitle'
import styled from 'styled-components'
import Input from '@/components/common/Input'


const PaymentPage = () => {
  return (
    <DashboardLayout>
      <PageTitle title="Payment" />

      <PaymentForm>
        <h2 className="text-center">Send To Beneficiary</h2>

        <form>
          <div className="input-control">
            <Input type="text" name="accountName"  placeholder="Beneficiary Account Name" />
          </div>
          <div className="input-control">
            <input type="text" placeholder="Beneficiary Bank Name" />
          </div>
          <div className="input-control">
            <input type="text" placeholder="Beneficiary Account Number" />
          </div>
          <div className="input-control">
            <input type="text" placeholder="Amount" />
          </div>
          <div className="input-control">
            <input type="text" placeholder="Narration" />
          </div>
          <div className="input-control">
            <button className="w-full">PROCEED</button>
          </div>
        </form>
      </PaymentForm>
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
