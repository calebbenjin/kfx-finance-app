import { useRef } from 'react'
import { Dialog } from '@headlessui/react'
import Modal from './Modal'
import { LinkButton } from './Button'
import { FaWhatsapp } from 'react-icons/fa'
import { BsCheck2Circle } from 'react-icons/bs'

type PreviewProps = {
  isOpen: boolean
  isClose: any
  title?: string
}

const SupportModal = ({ isOpen, isClose, title }: PreviewProps) => {
  const cancelButtonRef = useRef(null)

  return (
    <Modal isOpen={isOpen} cancelButtonRef={cancelButtonRef} isClose={isClose}>
      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        <div className='sm:flex sm:items-start'>
          <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center'>
            <Dialog.Title
              as='h3'
              className='text-lg font-medium leading-6 text-gray-900'>
              Live Chat / Account Officer
            </Dialog.Title>
            <div className='mt-2 p-6 text-center'>
              <p className='text-sm text-gray-500'>
                {title ||
                  `Are you having issues with transfer, then feel free to live chat your life chat Account officer.`}
              </p>
              <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-light-blue sm:mx-auto my-4 sm:h-20 sm:w-20'>
                <BsCheck2Circle
                  className='sm:h-16 sm:w-16 h-14 w-14 text-green-800'
                  aria-hidden='true'
                />
              </div>
              <div className='inline-flex w-full justify-center items-center rounded-md border border-transparent bg-gradient px-10 sm:px-20 my-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'>
                {' '}
                <span>
                  Use The live chat at the bottom right to talk with an agent.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse justify-between sm:px-6'>
        <button
          type='button'
          className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
          onClick={() => isClose(false)}
          ref={cancelButtonRef}>
          Cancel
        </button>
      </div>
    </Modal>
  )
}

export default SupportModal
