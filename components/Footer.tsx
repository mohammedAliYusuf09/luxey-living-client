import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assats/realestatelogo.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-12">
      <div className="responsive-container">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-600 pb-8 mb-8">
          {/* Logo and Description */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Image width={100} height={100} src={logo} alt="brand logo" />
            </div>
            <p className="max-w-xs text-sm">
              Lets talk about your goals, your budget, and your dream location. No pressure - just honest guidance and local expertise.
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#272224] text-white px-4 py-2 focus:outline-none w-full max-w-xs"
              />
              <button className="bg-action text-white px-6 py-1 hover:bg-green-600 transition-colors">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-1 mb-8 md:mb-0 md:text-center">
            <h3 className="text-lg font-semibold mb-4 text-white">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <p className="hover:text-white transition-colors cursor-pointer">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/properties">
                  <p className="hover:text-white transition-colors cursor-pointer">Properties</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="hover:text-white transition-colors cursor-pointer">About</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="hover:text-white transition-colors cursor-pointer">Contact</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex-1 md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-white">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <p className="hover:text-white transition-colors cursor-pointer">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/properties">
                  <p className="hover:text-white transition-colors cursor-pointer">Properties</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="hover:text-white transition-colors cursor-pointer">About</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="hover:text-white transition-colors cursor-pointer">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-2 md:mb-0">youremail123@gmail.com</p>
          <p>© 2025 James Carter Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;