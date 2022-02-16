import React from 'react'
import { AppProps } from '../types/app'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function Base(props: AppProps) {
  return (
    <>
        <Navbar/>
        {props.children}
        <Footer/>
    </>
  )
}
