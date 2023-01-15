import React, { useContext } from 'react'
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faAddressCard,
  faChartPie,
  faCogs,
  faDoorOpen
} from '@fortawesome/free-solid-svg-icons';
import Logo from './common/Logo';
import { AuthContext } from '@/context/AuthContext';


const navItems = [
  {
    label: 'Account',
    path: '/dashboard',
    icon: faChartLine,
    role: 'user'
  },
  // {
  //   label: 'T-History',
  //   path: '/dashboard/history',
  //   icon: faChartPie,
  //   allowedRoles: ['admin']
  // },
  {
    label: 'Support',
    path: '/dashboard/support',
    icon: faAddressCard,
    role: 'user'
  },
  {
    label: 'Settings',
    path: '/dashboard/settings',
    icon: faCogs,
    role: 'user'
  },
  {
    label: 'Users',
    path: '/dashboard/admin',
    icon: faDoorOpen,
    role: 'admin'
  }
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
  const { isAdmin } = useContext(AuthContext)
  const router = useRouter();
  const isActive = router.asPath === navItem.path;

  return (
    <NextLink
      href={navItem.path}
      className={cn(
        isActive
          ? 'bg-gradient px-2 sm:px-6 justify-center sm:justify-start py-3 rounded-full flex text-gray-100 hover:text-blue-500 transform'
          : 'px-2 sm:px-6 justify-center text-lg md:mt-4 sm:justify-start py-3 rounded-full flex text-gray-600 hover:text-blue transform hover:translate-x-1 transition ease-in-out duration-100', 
      )}
    >
      <div className="flex items-center">
        <div className="mr-0 sm:mr-4">
          <FontAwesomeIcon icon={navItem.icon} />
        </div>
        <span className="hidden sm:block">
          {navItem.label}
        </span>
      </div>
    </NextLink>
  );
}

const NavItemContainer = ({ children }: NavItemContainerProp) => (
  <div>{children}</div>
);

const Sidebar = () => {
  return (
    <section className="h-screen">
      <div className="">
        <Logo />
      </div>
      <div className="mt-20">
        {navItems.map((navItem, i) => (
          <div key={i}>
            <NavItemContainer key={i}>
              <NavItem navItem={navItem} />
            </NavItemContainer>
            {/* {navItem.role.includes('admin') && 
            <NavItemContainer key={i}>
              <NavItem navItem={navItem} />
            </NavItemContainer>} */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sidebar
