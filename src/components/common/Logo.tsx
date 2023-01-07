import React from 'react'
import styled from 'styled-components'
import { SiFsecure } from 'react-icons/si'

const Logo = () => {
  return (
    <BrandLogo><SiFsecure className="logo" /> <span>Pay</span>Foreign</BrandLogo>
  )
}

const BrandLogo = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 900;
  color: #0061d7;
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
