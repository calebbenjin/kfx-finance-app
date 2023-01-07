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
          ? 'font-semibold bg-gray-100 text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400', 
        isBtn ? 'core-btn shadow-2xl ml-4 bg-gradient py-3 px-6 hidden md:inline-block' : 'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
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
          <nav className="flex items-center justify-between w-full relative border-gray-200 dark:border-gray-700 mx-auto xl:py-6 py-2 text-gray-900 bg-opacity-100">
          
          <Logo />
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/blog" text="How it works" />
            <NavItem href="/about" text="About" />
            <NavItem href="/login" text="Login" />
            <NavItem href="/register" isBtn text="Start Free" />
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
  background: #fffffff6;
`

export default Navbar
