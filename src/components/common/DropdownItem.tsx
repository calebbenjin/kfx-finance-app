import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type DropdownProps = {
  item: {
    icon?: any,
    onClick?: () => void,
    title?: string
  }
}

const DropdownItem = ({ item }: DropdownProps) => {
  return (
    <button
      className="text-gray-700 flex items-center"
      onClick={item.onClick}
    >
      <FontAwesomeIcon icon={item.icon} />
      <p className="ml-2">{item.title}</p>
    </button>
  )
};


export default DropdownItem
