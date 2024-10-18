"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container lg:mx-24 px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={120} height={40} />
          </div>
          <div className="xs:hidden sm:flex items-center space-x-8">
            <Link href="#" className="text-black hover:text-gray-900 relative group">
              CATALOGUE
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link href="#" className="text-black hover:text-gray-900 relative group">
              FASHION
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link href="#" className="text-black hover:text-gray-900 relative group">
              FAVOURITE
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link href="#" className="text-black hover:text-gray-900 relative group">
              LIFESTYLE
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors ease-in">Shop Now</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className="block text-gray-700 hover:text-gray-900 py-2 relative group">
              CATALOGUE
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            
            <Link href="#" className="block text-black hover:text-gray-900 py-2 relative group">
              FASHION
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link href="#" className="block text-black hover:text-gray-900 py-2 relative group">
              FAVOURITE
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link href="#" className="block text-black hover:text-gray-900 py-2 relative group">
              LIFESTYLE
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <button className="bg-black text-white px-4 py-2 rounded w-full mt-2 hover:bg-gray-800 transition-colors ease-in">Shop Now</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
