import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <header className="sticky top-0 z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Free Shipping On Orders Over $75. Free Returns.</p>
        <div className="inline-flex gap-1 items-center">
          <Link href="/shop" >
            <p>Get started now!</p>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header