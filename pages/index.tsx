import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import Router from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    useEffect(() => {
        const { pathname } = Router
        if (pathname == '/') {
            Router.push('/login')
        }
    });
    
  return (
    <>
      
    </>
  )
}
