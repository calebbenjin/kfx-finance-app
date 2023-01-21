import React from 'react'
import styled from 'styled-components'
import { SiFsecure } from 'react-icons/si'

type logoProps = {
  isBage?: any
}

const Logo = ({isBage}: logoProps) => {
  return (
    <>
    {isBage ? <BrandLogo><SiFsecure className="logo text-white sm:h-20 sm:w-20 w-8 h-8" /></BrandLogo> : <BrandLogo><SiFsecure className="logo" /> <span>PayForeign</span></BrandLogo>}
      
    </>
  )
}

const BrandLogo = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 900;
  color: #ffff;
  font-size: 1.2rem;
  margin: 0;

  .logo {
    font-size: 2rem;
  }

  @media (max-width: 786px) {
    font-size: 1rem;

    .logo {
      font-size: 1.5rem;
    }
  }
`

export default Logo
