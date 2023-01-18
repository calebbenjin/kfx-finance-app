import { useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Modal from './Modal'
import { Button } from './Button'
import { useRouter } from 'next/router'
import { publicFetch } from '@/config/fetch'


type PreviewProps = {
  isOpen: boolean,
  isClose: any,
  userID: string
}

const DeleteModal = ({isOpen, isClose, userID}:PreviewProps) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const cancelButtonRef = useRef(null)

  const handleDelete = async () => {
    try {
      setLoading(true)
      const {data} = await publicFetch.delete(`${userID}`)
      setTimeout(() => {
        router.push('/dashboard/admin')
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal isOpen={isOpen} cancelButtonRef={cancelButtonRef} isClose={isClose}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
              Delete account
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Are you sure you want to delete this account? All of your data will be permanently
                removed. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse justify-between sm:px-6">
      <Button
        loading={loading}
        loadingText='Deleting...'
        type="button"
        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={handleDelete}
      >
        Delete Account
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
    </Modal>
  )
}

export default DeleteModal
