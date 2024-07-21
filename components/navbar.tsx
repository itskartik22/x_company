"use client"
import Image from "next/image";
import logo from "./../public/images/logo-bg-2 1.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="lg:fixed static top-4 z-30 bg-transparent w-full lg:px-24">
      <div className="bg-white z-50 shadow-md py-2 pl-2 pr-6 rounded-md flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="md:flex hidden space-x-8 text-gray-700">
            <Link href="/#service-section" className={`${pathname === '/#service-section' ? 'underline' : ''}`}>Services</Link>
            <Link href="/#media-section" className={`link ${pathname === '/#media-section' ? 'underline' : ''}`}>Media</Link>
            <Link href="/#ads-section" className={`link ${pathname === '/#ads-section' ? 'underline' : ''}`}>Cases</Link>
            <Link href="/#faq-section" className={`link ${pathname === '/#faq-section' ? 'underline' : ''}`}>FAQ</Link>
            <Link href="/#contact-section" className={`link ${pathname === '/#contact-section' ? 'underline' : ''}`}>Contacts</Link>
        </div>
        <div className="md:flex hidden items-center space-x-4 text-green-600">
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone"></i>{" "}
            <span>+91 0000000000</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-envelope"></i>{" "}
            <span>demo@gmail.com</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
