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
// import { AuthContext } from './../context/AuthContext';
import defaultAvatar from '../../assets/defaultAvatar.png';
import Image from 'next/image';
import DropdownContent from './DropdownContent';



const AvatarDropdown = () => {
  const node = useRef<HTMLInputElement>();
  // const auth = useContext(AuthContext);
  // const { authState } = auth;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownItems = [
    {
      title: 'Log Out',
      icon: faSignOutAlt,
      // onClick: auth.logout
    }
  ];

  const handleClick = (e:any) => {
    if (!node.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClick
      );
    };
  }, []);

  return (
    <div ref={node}>
      <button
        ref={node}
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
          {/* <p className="text-white">{authState.userInfo.firstName}</p> */}
          <p className="text-white">John</p>
        </div>
        <div className="mr-1 text-white">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </button>

      {dropdownOpen && (
        <div className="relative">
          <DropdownContent dropdownItems={dropdownItems} />
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
