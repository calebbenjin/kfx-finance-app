import React, { useContext } from 'react'
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faAddressCard,
  faList,
  faChartPie,
  faDoorOpen
} from '@fortawesome/free-solid-svg-icons';
import Logo from './common/Logo';
import { AuthContext } from '@/context/AuthContext';



type NavProps = {
    icon?: any,
    label: string,
    path: string,
    allowedRoles?: any 
    isBtn?: boolean
}

type NavItemContainerProp = {
  children: React.ReactNode | React.ReactElement
}

function NavItem({ path, icon, label }: NavProps) {
  const router = useRouter();
  const isActive = router.asPath === path;

  return (
    <NextLink
      href={path}
      className={cn(
        isActive
          ? 'bg-gradient px-2 sm:px-6 justify-center sm:justify-start py-3 rounded-full flex text-gray-100 hover:text-blue-500 transform'
          : 'px-2 sm:px-6 justify-center text-lg md:mt-4 sm:justify-start py-3 rounded-full flex text-gray-600 hover:text-blue transform hover:translate-x-1 transition ease-in-out duration-100', 
      )}
    >
      <div className="flex items-center">
        <div className="mr-0 sm:mr-4">
          <FontAwesomeIcon icon={icon} />
        </div>
        <span className="hidden sm:block">
          {label}
        </span>
      </div>
    </NextLink>
  );
}

const NavItemContainer = ({ children }: NavItemContainerProp) => (
  <div>{children}</div>
);

const Sidebar = () => {
  const { isAdmin } = useContext(AuthContext)
  
  return (
    <section className="h-screen">
      <div className="">
        <Logo />
      </div>
      <div className="mt-20">
        <NavItemContainer>
          {isAdmin() ? <NavItem path='/dashboard/admin' icon={faDoorOpen} label="Admin" /> :
           <>
            <NavItem path='/dashboard' icon={faChartLine} label="Dashboard" />
            <NavItem path='/dashboard/transactions' icon={faList} label="Transactions" />
            {/* <NavItem path='/dashboard/myorders' icon={faChartPie} label="My Orders" /> */}
            <NavItem path='/dashboard/support' icon={faAddressCard} label="Support" />
           </> 
           }
        </NavItemContainer>
      </div>
    </section>
  )
}

export default Sidebar
