"use client"
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import {
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase/products'
import Image from 'next/image'
import logo from "../../../../public/logo.png";

const page = () => {
  return (
    <div className='w-[24%] m-auto mt-24'>
      <div className='w-[100%] flex items-center justify-center mb-16'> <Image src={logo} alt={"logo"} width={200} height={200} className='m-auto'/></div>
      
    <Auth
    supabaseClient={supabase}
    providers={['google', 'github']}
    appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: 'orange',
              
             
            },
          },
        },
      }}
      theme='dark'
  />
  </div>
  )
}

export default page
