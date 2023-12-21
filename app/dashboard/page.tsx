'use client'
import Sidebar from '@/components/sidebar'
import React from 'react'
import "./style.css"
import ManageMotor from '@/components/manage-motor'
import AddIcon from '@/public/images/add_button.png'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div className='flex dark:bg-gray-800'>
        <div className='h-screen'
        style={{backgroundColor: "#1F2A40"}}>
          <Sidebar/>
        </div>
        <div className='flex flex-col w-screen text-center items-center'>
          <h1 className='text-6xl font-extrabold mt-12 mb-6 dark:text-slate-300'>List Motorcycle</h1>
          <Link href="/add">
              <Image src={AddIcon} width={70} height={70} alt='AddIcon' className='mb-6' />
          </Link>
          <ManageMotor/>
        </div>
      </div>
    </>
  )
}

export default Page