import React from 'react'
import Link from 'next/link';
import { AvatarDemo } from './Avatar';

const Navbar = () => {
  return (
      <nav className="h-16 text-black  border-b-2 border-black ">
          <div className="flex  flex-row justify-between px-8 py-4 text-lg text-medium">
              <div>AlemenoCourses</div>
              <div className="flex space-x-8">
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <AvatarDemo />
              </div>
          </div>
      </nav>
  )
}

export default Navbar