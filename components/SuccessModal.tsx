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

const SuccessModal = ({isOpen, isClose}:PreviewProps) => {

  const cancelButtonRef = useRef(null)

  return (
    <Modal isOpen={isOpen} cancelButtonRef={cancelButtonRef} isClose={isClose}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
          <Dialog.Title as="h3" className=" text-xl sm:text-2xl font-bold leading-6 text-green-900">
            Transaction Successfuly Sent!!
          </Dialog.Title>
          <div className="mt-2 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-light-blue sm:mx-auto my-4 sm:h-20 sm:w-20">
              <BsCheck2Circle className="sm:h-16 sm:w-16 h-14 w-14 text-green-800" aria-hidden="true" />
            </div>
          </div>
          <LinkButton href="/dashboard/" className="inline-flex w-full justify-center items-center rounded-md border border-transparent bg-gradient px-10 sm:px-20 my-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Proceed To Dashboard</LinkButton>
        </div>
      </div>
    </Modal>
  )
}

export default SuccessModal
