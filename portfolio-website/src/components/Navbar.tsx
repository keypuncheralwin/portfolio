import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/Assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src={logo} alt='/' width='50' height='50' />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
                    <div className='fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-[#ecf0f3] ease-in duration-500'>
                        <div className='flex w-full items-center justify-between'>
                            <div></div>
                            <div className='p-10'><AiOutlineClose className='shadow-gray-400 cursor-pointer' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;