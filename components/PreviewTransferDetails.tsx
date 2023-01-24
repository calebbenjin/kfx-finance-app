import { useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Modal from './Modal'
import { formatCurrency } from '../util'
import { useRouter } from 'next/router'
import { Button } from './Button'


type PreviewProps = {
  isOpen: boolean,
  isClose: any,
  data: any, 
  handleClick: () => void,
  isLoading: boolean
}

const PreviewTransferDetails = ({isOpen, isClose, data, isLoading, handleClick}:PreviewProps) => {

  const cancelButtonRef = useRef(null)

  return (
    <Modal isOpen={isOpen} cancelButtonRef={cancelButtonRef} isClose={isClose}>
      <>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="">
            <div className="mt-3 text-center sm:mt-0 sm:text-left">
              <Dialog.Title as="h3" className="text-lg mb-10 font-medium leading-6 text-blue">
                Transactions Preview
              </Dialog.Title>
              <div className="mt-2">
                <div className="cardHeader flex items-center justify-between">
                  <div className="text-gray-500 text-left">
                    <p className="font-bold text-gray-500">From</p>
                    <p>0987788223</p>
                  </div>
                  {/* <div className="amount">
                    <h2 className="font-bold sm:text-xl">{data?.currency} {formatCurrency(Number(data?.amount))}</h2>
                  </div> */}
                  <div className="receiverAcc text-right text-gray-500">
                    <p className="font-bold text-gray-500">To</p>
                    <p>{data?.accountNumber}</p>
                    <p>{data?.accountName}</p>
                  </div>
                </div>

                <div className="details mt-6 bg-light-blue p-3">
                  <div className="list flex items-center mb-2 justify-between border-b pb-2">
                    <p className="font-bold text-gray-500">Bank</p>
                    <p>{data?.bankName}</p>
                  </div>
                  <div className="list flex items-center mb-2 justify-between border-b pb-2">
                    <p className="font-bold text-gray-500">Transaction Charges</p>
                    <p className="text-lg"><span className="text-xs font-semibold">{data?.currency}</span> {formatCurrency(Number(data?.amount)/4)}</p>
                  </div>
                  <div className="list flex items-center justify-between">
                    <p className="font-bold text-gray-500">Total to Pay</p>
                    <p className="font-bold text-gray-500">{data?.currency} {formatCurrency(Number(data?.amount))}</p>
                  </div>
                </div>
                {/* <p>By acceptance of this quotation, you are confirming your transaction will be reported as BOP Code 401 - Gifts.</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse justify-between sm:px-6">
          <Button
            type="button"
            loading={isLoading}
            loadingText='Processing...'
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-gradient px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={handleClick}
          >
            Preceed transaction
          </Button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => isClose(false)}
            ref={cancelButtonRef}
          >
            Cancel
          </button>
        </div>
      </>
    </Modal>
  )
}

export default PreviewTransferDetails
