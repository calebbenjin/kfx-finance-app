import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  faCaretDown,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultAvatar from '../../assets/defaultAvatar.png';
import Image from 'next/image';
import DropdownContent from './DropdownContent';
import { AuthContext } from '@/context/AuthContext';



const AvatarDropdown = () => {
  const {authState, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownItems = [
    {
      title: 'Log Out',
      icon: faSignOutAlt,
      onClick: logout
    }
  ];

  return (
    <div>
      <button
        className="flex rounded-full items-center py-2 px-3 bg-gradient focus:outline-none shadow-lg"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <Image
          src={defaultAvatar}
          className="rounded-full w-6 border-2 border-white"
          alt="Avatar"
          width={50} height={50}
        />
        <div className="px-3">
          {/* <p className="text-white">{authState?.firstName}</p> */}
        </div>
        <div className="mr-1 text-white">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </button>

      {dropdownOpen ? (
        <div className="relative">
          <DropdownContent dropdownItems={dropdownItems} />
        </div>
      ) : null }
    </div>
  );
};

export default AvatarDropdown;
