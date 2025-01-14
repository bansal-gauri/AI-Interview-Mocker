"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path=usePathname();
    const router = useRouter();
    const isInterviewPage = path.startsWith('/dashboard/interview/');
    useEffect(()=>{
      
    },[]);

  return (
    <div className='flex p-4 items-center justify-between bg-[#d4d4d4] shadow-sm'>
        <Image src={'/logo.png'} width={160} height={100} alt = 'logo'/>
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`} onClick={()=>router.replace('/dashboard')}>Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${isInterviewPage && 'text-primary font-bold'}`}>Questions</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/upgrade' && 'text-primary font-bold'}`} onClick={()=>router.replace('/upgrade')}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/how_it_works' && 'text-primary font-bold'}`} onClick={()=>router.replace('/how_it_works')}>How it works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header