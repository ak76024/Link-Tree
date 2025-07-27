"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
const [navOpen, setNavOpen] = useState(false);
const navLinks="cursor-pointer hover:scale-110 active:scale-90 hover:bg-slate-300 hover:text-black transition duration-150 ease-in-out rounded-lg p-4 py-2";
return (
    <nav className='bg-white w-[100vw] sm:w-[90vw] sm:fixed sm:top-10 mx-auto right-0 left-0 rounded-xl md:rounded-full p-4 pt-5 md:py-0 md:flex md:items-center'>
        <button
            className="md:hidden absolute top-4 right-6 z-20 bg-gray-200 p-2 rounded-full"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation">
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
        </button>
        <div className="logo md:w-2/3 flex px-3 flex-col md:flex-row gap-4 items-center justify-between">
            <Link onClick={() => setNavOpen(false)} href="/"><img className='h-8' src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="Logo"/></Link>
            <ul className={`flex w-full flex-col md:flex-row flex-wrap gap-2 text-gray-600 font-semibold justify-center md:justify-start ${navOpen ? 'flex' : 'hidden'} md:flex`}>
                <Link onClick={() => setNavOpen(!navOpen)} href="/generate" className={navLinks}><li>YourLinks</li></Link>
                <Link onClick={() => setNavOpen(!navOpen)} href="/" className={navLinks}><li>Template</li></Link>
                <Link onClick={() => setNavOpen(!navOpen)} href="/" className={navLinks}><li>Marketplace</li></Link>
                <Link onClick={() => setNavOpen(!navOpen)} href="/" className={navLinks}><li>Pricing</li></Link>
            </ul>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end my-4 gap-3">
            <button className='text-lg cursor-pointer font-bold bg-gray-200 hover:bg-gray-300 p-4 px-7 rounded-lg'>Log in</button>
            <button className='text-lg text-white cursor-pointer font-bold bg-[#1e2330] hover:bg-[#1e2550] p-4 px-7 rounded-full'>Sign up free</button>
        </div>
    </nav>
);
}

export default Navbar;