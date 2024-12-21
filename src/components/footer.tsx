'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          <div>
            <h5 className="text-gray-400 font-semibold mb-4">Shop and Learn</h5>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-400 cursor-pointer">Store</li>
              <li className="hover:text-gray-400 cursor-pointer">Mac</li>
              <li className="hover:text-gray-400 cursor-pointer">iPad</li>
              <li className="hover:text-gray-400 cursor-pointer">iPhone</li>
              <li className="hover:text-gray-400 cursor-pointer">Watch</li>
              <li className="hover:text-gray-400 cursor-pointer">Accessories</li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-400 font-semibold mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-400 cursor-pointer">Apple Music</li>
              <li className="hover:text-gray-400 cursor-pointer">iCloud</li>
              <li className="hover:text-gray-400 cursor-pointer">Apple TV+</li>
              <li className="hover:text-gray-400 cursor-pointer">Apple Fitness+</li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-400 font-semibold mb-4">Apple Store</h5>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-400 cursor-pointer">Find a Store</li>
              <li className="hover:text-gray-400 cursor-pointer">Genius Bar</li>
              <li className="hover:text-gray-400 cursor-pointer">Today at Apple</li>
              <li className="hover:text-gray-400 cursor-pointer">Apple Camp</li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-400 font-semibold mb-4">About Apple</h5>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-400 cursor-pointer">Newsroom</li>
              <li className="hover:text-gray-400 cursor-pointer">Careers</li>
              <li className="hover:text-gray-400 cursor-pointer">Investors</li>
              <li className="hover:text-gray-400 cursor-pointer">Events</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bytelight Inc. All rights reserved.{' '}
            <a href="#" className="hover:text-gray-400 ml-2">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="#" className="hover:text-gray-400 ml-2">
              Terms of Use
            </a>
          </p>
          <div className="flex gap-5 mt-5 sm:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              {/* Facebook Icon */}
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              {/* Twitter Icon */}
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              {/* Instagram Icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
