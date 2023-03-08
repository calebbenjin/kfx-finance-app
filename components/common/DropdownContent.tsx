import React from 'react'
import DropdownItem from './DropdownItem';


type DropdownContentProps = {
  dropdownItems: any
}

const DropdownContent = ({ dropdownItems }: DropdownContentProps) => {
  return (
    <div className="bg-white w-full absolute z-10 p-2 shadow-lg rounded-lg mt-2">
      {dropdownItems.map((item: any, i: any) => {
        return (
          <div className="mt-1" key={i}>
            <DropdownItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default DropdownContent
