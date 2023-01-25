import React from 'react'
import NextLink from 'next/link';
import MobileMenu from './MobileMenu';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import Link from 'next/link'
import styled from 'styled-components'
import { SiFsecure } from 'react-icons/si'
import Logo from './common/Logo';


type NavProps = {
  href: string,
  text: string,
  isBtn?: boolean
}

function NavItem({ href, text, isBtn }: NavProps) {
  // const [isBtn, setIsBtn] = useState(false)
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? 'font-bold text-gray-100 border border-b'
          : 'font-semibold text-gray-100 ', 
        isBtn ? 'core-btn shadow-2xl ml-4 bg-white py-3 text-gray-500 px-6 hidden md:inline-block' : 'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
      )}
    >
      <span className="capsize md:text-1xl">{text}</span>
    </NextLink>
  );
}

const Navbar = () => {
  return (
    <NavWrapper className="shadow-sm">
        <div className="container">
          <nav className="flex items-center justify-between w-full relative border-gray-200 dark:border-gray-700 mx-auto xl:py-6 text-gray-900 bg-opacity-100">
            <Logo />
            <div className="ml-[-0.20rem]">
              <MobileMenu />
              <NavItem href="/" text="Home" />
              <NavItem href="/login" text="Send Money" />
              <NavItem href="/track" text="Track and Receive" />
              <NavItem href="/login" isBtn text="Login" />
              <NavItem href="/register" isBtn text="Sign Up" />
            </div>
          </nav>
        </div>
      </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background: #00000079;
`

export default Navbar
