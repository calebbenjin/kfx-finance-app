import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faList,
  faHeadset,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';

const navItems = [
  {
    label: 'Account',
    path: '/dashboard',
    icon: faChartLine,
    allowedRoles: ['user', 'admin']
  },
  {
    label: 'Transactions',
    path: '/dashboard/transactions',
    icon: faList,
    allowedRoles: ['admin']
  },
  {
    label: 'Orders',
    path: '/dashboard/myorders',
    icon: faChartPie,
    allowedRoles: ['admin']
  },
  // {
  //   label: 'Account',
  //   path: 'account',
  //   icon: faAddressCard,
  //   allowedRoles: ['user', 'admin']
  // },
  {
    label: 'Support',
    path: '/dashboard/support',
    icon: faHeadset,
    allowedRoles: ['user', 'admin']
  },
  // {
  //   label: 'Settings',
  //   path: '/dashboard/settings',
  //   icon: faCogs,
  //   allowedRoles: ['user', 'admin']
  // },
  // {
  //   label: 'Users',
  //   path: 'users',
  //   icon: faDoorOpen,
  //   allowedRoles: ['admin']
  // }
];

type NavProps = {
  navItem: {
    icon?: any,
    label: string,
    path: string,
    allowedRoles?: any 
  }
  isBtn?: boolean
}

type NavItemContainerProp = {
  children: React.ReactNode | React.ReactElement
}

function NavItem({ navItem }: NavProps) {
  const router = useRouter();
  const isActive = router.asPath === navItem.path;

  return (
    <NextLink
      href={navItem.path}
      className={cn(
        isActive
          ? 'text-blue px-4 sm:px-4 justify-center py-3 rounded-full flex text-gray-100 hover:text-blue-500 transform'
          : 'px-2 sm:px-4 justify-center sm:justify-start py-3 rounded-full flex text-lg text-gray-600 hover:text-blue transform hover:translate-x-1 transition ease-in-out duration-100', 
      )}
    >
      <div className="flex items-center flex-col">
        <div className="mr-0 sm:mr-4">
          <FontAwesomeIcon className="text-2xl" icon={navItem.icon} />
        </div>
        <span className="sm:block text-sm">
          {navItem.label}
        </span>
      </div>
    </NextLink>
  );
}

const NavItemContainer = ({ children }: NavItemContainerProp) => (
  <div>{children}</div>
);

const MobileNavbar = () => {
  return (
    <NavWrapper className="shadow-2xl flex justify-between md:hidden bg-white items-center px-5">
      {navItems.map((navItem, i) => (
          <div key={i}>
            <NavItemContainer key={i}>
              <NavItem navItem={navItem} />
            </NavItemContainer>
          </div>
        ))}
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  width: 100%;
  height: 12vh;
  position: fixed;
  bottom: 0;
`

export default MobileNavbar
