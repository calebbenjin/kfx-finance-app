import { useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Modal from './Modal'


type PreviewProps = {
  isOpen: boolean,
  isClose: any
}

const PreviewTransferDetails = ({isOpen, isClose}:PreviewProps) => {

  const cancelButtonRef = useRef(null)

  return (
    <Modal isOpen={isOpen} cancelButtonRef={cancelButtonRef} isClose={isClose}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="">
          <div className="mt-3 text-center sm:mt-0 sm:text-left">
            <Dialog.Title as="h3" className="text-lg mb-10 font-medium leading-6 text-blue">
              Transactions Review
            </Dialog.Title>
            <div className="mt-2">
              <div className="cardHeader flex items-center justify-between">
                <div className="text-gray-500">
                  <p className="font-bold text-gray-500">From</p>
                  <p>0987788223</p>
                  <p>Premier savings</p>
                </div>
                <div className="amount">
                  <h2 className="font-bold sm:text-xl">$1,000.00</h2>
                </div>
                <div className="receiverAcc text-right text-gray-500">
                  <p className="font-bold text-gray-500">Top</p>
                  <p>09978998789</p>
                  <p>John Deo</p>
                </div>
              </div>

              <div className="details mt-6 bg-light-blue p-3">
                <div className="list flex items-center mb-2 justify-between border-b pb-2">
                  <p className="font-bold text-gray-500">Bank</p>
                  <p>Sterling Bank</p>
                </div>
                <div className="list flex items-center justify-between">
                  <p className="font-bold text-gray-500">Total Debit</p>
                  <p className="font-bold text-gray-500">$1,009</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse justify-between sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-gradient px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => isClose(false)}
        >
          Preceed transaction
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

export default PreviewTransferDetails
