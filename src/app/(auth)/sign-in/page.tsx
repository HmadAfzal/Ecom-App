"use client"
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import {
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase/products'

const page = () => {
  return (
    <div className='w-[24%] m-auto mt-40'>
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
