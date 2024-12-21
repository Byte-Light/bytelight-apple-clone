export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10">
        {/* Footer Links */}
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

        {/* Legal and Social Section */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center">
          {/* Legal Info */}
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bytelight Inc. All rights reserved. 
            <a href="#" className="hover:text-gray-400 ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-gray-400 ml-2">Terms of Use</a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-5 sm:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H7v4H5v4h2v8h4v-8h3l1-4h-4V9.5c0-.552.448-1 1-1h3V5h-3c-2.761 0-5 2.239-5 5V8z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.822 9.822 0 01-2.828.775 4.93 4.93 0 002.165-2.723 9.936 9.936 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.921 4.921 0 001.524 6.573 4.903 4.903 0 01-2.23-.616v.062a4.927 4.927 0 003.946 4.83 4.937 4.937 0 01-2.224.085 4.926 4.926 0 004.6 3.42A9.86 9.86 0 010 20.055a13.9 13.9 0 007.548 2.211c9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.637A10.024 10.024 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c3.326 0 3.725.013 5.034.073 1.24.057 2.062.25 2.548.422a5.103 5.103 0 011.823 1.035 5.1 5.1 0 011.034 1.823c.172.486.365 1.308.422 2.548C23.987 8.275 24 8.674 24 12c0 3.326-.013 3.725-.073 5.034-.057 1.24-.25 2.062-.422 2.548a5.103 5.103 0 01-1.035 1.823 5.1 5.1 0 01-1.823 1.034c-.486.172-1.308.365-2.548.422C15.725 23.987 15.326 24 12 24c-3.326 0-3.725-.013-5.034-.073-1.24-.057-2.062-.25-2.548-.422a5.103 5.103 0 01-1.823-1.035 5.1 5.1 0 01-1.034-1.823c-.172-.486-.365-1.308-.422-2.548C.013 15.725 0 15.326 0 12c0-3.326.013-3.725.073-5.034.057-1.24.25-2.062.422-2.548a5.103 5.103 0 011.035-1.823 5.1 5.1 0 011.823-1.034c.486-.172 1.308-.365 2.548-.422C8.275.013 8.674 0 12 0zm0 2.162c-3.23 0-3.604.012-4.872.07-.998.047-1.577.215-1.948.363a3.316 3.316 0 00-1.159.748 3.315 3.315 0 00-.748 1.159c-.148.37-.316.95-.363 1.948-.058 1.268-.07 1.642-.07 4.872s.012 3.604.07 4.872c.047.998.215 1.577.363 1.948.172.471.397.845.748 1.159a3.316 3.316 0 001.159.748c.37.148.95.316 1.948.363 1.268.058 1.642.07 4.872.07s3.604-.012 4.872-.07c.998-.047 1.577-.215 1.948-.363a3.316 3.316 0 001.159-.748 3.315 3.315 0 00.748-1.159c.148-.37.316-.95.363-1.948.058-1.268.07-1.642.07-4.872s-.012-3.604-.07-4.872c-.047-.998-.215-1.577-.363-1.948a3.316 3.316 0 00-.748-1.159 3.315 3.315 0 00-1.159-.748c-.37-.148-.95-.316-1.948-.363-1.268-.058-1.642-.07-4.872-.07zm0 3.338a6.5 6.5 0 11.001 13.002A6.5 6.5 0 0112 5.5zm0 1.622a4.878 4.878 0 100 9.755 4.878 4.878 0 000-9.755zm6.234-2.189a1.561 1.561 0 11-.001 3.122 1.561 1.561 0 01.001-3.122z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
