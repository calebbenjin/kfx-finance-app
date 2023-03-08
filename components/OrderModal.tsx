import { useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Modal from './Modal'
import { LinkButton } from './Button'
import { FaWhatsapp } from 'react-icons/fa'
import { BsCheck2Circle } from 'react-icons/bs'


type PreviewProps = {
  isOpen: boolean,
  isClose: any
}

const OrderModal = ({isOpen, isClose}:PreviewProps) => {

  const cancelButtonRef = useRef(null)

  return (
    <Modal isOpen={isOpen} cancelButtonRef={cancelButtonRef} isClose={isClose}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
          <Dialog.Title as="h3" className=" text-xl sm:text-2xl font-bold leading-6 text-green-900">
            Order Successfuly Created
          </Dialog.Title>
          <div className="mt-2 p-6 text-center">
            <p className="text-lg text-gray-500">
              Kindly proceed to pay for order
            </p>
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-light-blue sm:mx-auto my-4 sm:h-20 sm:w-20">
              <BsCheck2Circle className="sm:h-16 sm:w-16 h-14 w-14 text-green-800" aria-hidden="true" />
            </div>
            <LinkButton href="https://wa.link/oinamx" className="inline-flex w-full justify-center items-center rounded-md border border-transparent bg-gradient px-10 sm:px-20 my-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"><FaWhatsapp className="mr-4 h-6 w-6" /> <span>Live Chat</span></LinkButton>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6">
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

export default OrderModal
