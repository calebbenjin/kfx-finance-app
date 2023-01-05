import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Link from 'next/link'

interface ButtonTypes {
  children: React.ReactNode | React.ReactElement,
  onClick?: () => void,
  className: any,
  href?: any
}


const Button = ({children, onClick, className}: ButtonTypes) => {
  return (
    <motion.button onClick={onClick} className={className}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.button>
  )
}


const LinkButton = ({children, onClick, className, href}: ButtonTypes) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link href={href} className={className} onClick={onClick}>{children}</Link>
    </motion.button>
  )
}

export {Button, LinkButton}
