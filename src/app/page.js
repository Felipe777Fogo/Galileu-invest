'use client';
import Image from 'next/image'
import styles from './page.module.css'
import ButtonAppBar from '@/components/bar'
import SignIn from '@/components/login'

export default function Home() {
  return (
   <>
<ButtonAppBar/>
<SignIn/>
</>

    )
}



