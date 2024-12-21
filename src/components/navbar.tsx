import { navItems } from '@/constants/data'
import { appleImg, bagImg, searchImg } from '@/utils/data'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-4 sm:px-12 px-6 shadow-md">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src={appleImg} alt="Apple logo" width={24} height={24} />
        </div>

        {/* Navigation Links */}
        <ul className="hidden sm:flex flex-1 justify-center space-x-6">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="text-sm font-medium text-indigo-300 hover:text-white transition duration-200 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <Image
            src={searchImg}
            alt="Search logo"
            width={20}
            height={20}
            className="cursor-pointer hover:scale-110 transition-transform duration-200"
          />
          <Image
            src={bagImg}
            alt="Bag image"
            width={20}
            height={20}
            className="cursor-pointer hover:scale-110 transition-transform duration-200"
          />
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex items-center space-x-4">
          <Image
            src={searchImg}
            alt="Search"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <Image
            src={bagImg}
            alt="Bag"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  )
}
