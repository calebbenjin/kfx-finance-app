import { useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Modal from './Modal'
import { BsCheck2Circle } from 'react-icons/bs'
import { dateFormater, formatCurrency } from '../util'


type PreviewProps = {
  isOpen: boolean,
  isClose: any,
  data: any
}

const TrackingModal = ({isOpen, isClose, data}:PreviewProps) => {

  const cancelButtonRef = useRef(null)

  return (
    <Modal isOpen={isOpen} cancelButtonRef={cancelButtonRef} isClose={isClose}>
      {data && 
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="">
          <div className="mt-3 text-center sm:mt-0 sm:text-left">
            <Dialog.Title as="h3" className="sm:text-2xl text-center mb-2 font-medium leading-6 text-blue">
              Transactions Completed
            </Dialog.Title>
            <p className="text-md text-gray-500 text-center px-4 sm:px-10">
                This transactions has been successfully sent to <br /><span className="font-semibold">{data?.firstName} {data?.lastName}</span>.
              </p>
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-light-blue sm:mx-auto my-4 sm:h-20 sm:w-20">
                <BsCheck2Circle className="h-10 w-10 text-blue" aria-hidden="true" />
              </div>
            <div className="mt-2">
              <div className="cardHeader flex items-center justify-between">
                <h2 className="font-bold sm:text-lg text-gray-400 mt-5">Reference NO: {data?.referenceNum}</h2>
              </div>

              <div className="details mt-6 bg-light-blue p-3">
                <div className="list flex items-center mb-2 justify-between border-b pb-2">
                  <p className="font-bold text-gray-500 text-sm sm:text-lg">Reciever:</p>
                  <p className="font-semibold text-gray-500 text-sm sm:text-lg">{data?.reciever}</p>
                </div>
                <div className="list flex items-center mb-2 justify-between border-b pb-2">
                  <p className="font-bold text-gray-500 text-sm sm:text-lg">Send Amount:</p>
                  <p className="font-semibold text-gray-500 text-sm sm:text-lg">{formatCurrency(Number(data?.sendAmount))} {data.sendCurrency}</p>
                </div>
                <div className="list flex items-center mb-2 justify-between border-b pb-2">
                  <p className="font-bold text-gray-500 text-sm sm:text-lg">Reiever Amount:</p>
                  <p className="font-semibold text-gray-500 text-sm sm:text-lg">{formatCurrency(Number(data?.recieveAmount))} {data?.recieveCurrency}</p>
                </div>
                <div className="list flex items-center mb-2 justify-between border-b pb-2">
                  <p className="font-bold text-gray-500 text-sm sm:text-lg">Recieve Method:</p>
                  <p className="font-semibold text-gray-500 text-sm sm:text-lg">{data?.recieveMethod}</p>
                </div>
                {/* <div className="list flex items-center mb-2 justify-between border-b pb-2">
                  <p className="font-bold text-gray-500 text-sm sm:text-lg">Transaction Date:</p>
                  <p className="font-semibold text-gray-500 text-sm sm:text-lg">{data?.transactionDate && dateFormater(data?.transationDate)}</p>
                </div> */}
                <div className="list flex items-center mb-2 justify-between border-b pb-2">
                  <p className="font-bold text-gray-500 text-sm sm:text-lg">Pickup Date:</p>
                  <p className="font-semibold text-gray-500 text-sm sm:text-lg">{data?.pickupDate && dateFormater(data?.pickupDate)}</p>
                </div>
                <div className="list flex items-center mb-2 justify-between border-b pb-2">
                  <p className="font-bold text-gray-500 text-sm sm:text-lg">Local Agent Charge:</p>
                  <p className={`font-semibold ${data?.isPaid === 'Paid' ? `text-green-500` : 'text-red-500'} text-sm sm:text-lg`}>{data?.isPaid === 'Paid' ? "Paid" : "Not Paid"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> }
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse justify-between sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-gradient px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => isClose(false)}
        >
          Preceed To Recieve Payment
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => isClose(false)}
          ref={cancelButtonRef}
        >
          Cancel
        </button>
      </div>
    </Modal>
  )
}

export default TrackingModal
