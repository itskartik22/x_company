import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import marsImg from "./../../public/images/mars.png";
import planetImg from "./../../public/images/planet.png";
import saturnImg from "./../../public/images/saturn.png";
import uranusImg from "./../../public/images/uranus.png";
import jupiterImg from "./../../public/images/jupiter.png";
import earthImg from "./../../public/images/earth.png";

const ServiceSection = () => {
  return (
    <div id="service-section" className="bg-white w-full md:px-28 px-6 py-10 flex flex-col gap-6">
      <div className="h-[2px] w-full bg-gray-200"></div>
      <div className="flex justify-around">
        <Image
          src={marsImg}
          alt="Hero Image"
          width={50}
          height={50}
        />
        <Image
        className="md:block hidden"
          src={planetImg}
          alt="Hero Image"
          width={50}
          height={50}
        />
        <Image
          src={jupiterImg}
          alt="Hero Image"
          width={50}
          height={50}
        />
        <Image
          src={saturnImg}
          alt="Hero Image"
          width={50}
          height={50}
        />
        <Image
          src={earthImg}
          alt="Hero Image"
          width={50}
          height={50}
        />
        <Image
        className="md:block hidden"
          src={uranusImg}
          alt="Hero Image"
          width={50}
          height={50}
        />
      </div>
        <div className="h-[2px] w-full bg-gray-200"></div>
      <div className="flex md:flex-row flex-col justify-between md:gap-20 gap-6">
        <div className="md:w-2/5 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Full Development Cycle</h1>
            <p>We use proven technologies</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-medium">Web</h4>
            <p className="text-sm">
              PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt
              / MySQL / Laravel / GO lang / django / Python
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-medium">Mobile</h4>
            <p className="text-sm">
              Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm /
              Coroutine / RxJava / RxSwift / Unit Test / Navigation
            </p>
          </div>
        </div>
        <div className="md:w-2/5 text-lg flex flex-col justify-between gap-6">
            <Link href="/services" className="flex items-center gap-5">
                <span className="hover:border-b-2 hover:border-[#80A948]">IOS development</span>
                <IoIosArrowForward className="text-[#80A948]" />
            </Link>
            <Link href="/services" className="flex items-center gap-5">
                <span className="hover:border-b-2 hover:border-[#80A948]">Android development</span>
                <IoIosArrowForward className="text-[#80A948]" />
            </Link>
            <Link href="/services" className="flex items-center gap-5">
                <span className="hover:border-b-2 hover:border-[#80A948]">Web Development</span>
                <IoIosArrowForward className="text-[#80A948]" />
            </Link>
            <Link href="/services" className="flex items-center gap-5">
                <span className="hover:border-b-2 hover:border-[#80A948]">UI/UX Development</span>
                <IoIosArrowForward className="text-[#80A948]" />
            </Link>
            <Link href="/services" className="flex items-center gap-5">
                <span className="hover:border-b-2 hover:border-[#80A948]">Testing Development</span>
                <IoIosArrowForward className="text-[#80A948]" />
            </Link>
            <Link href="/services" className="flex items-center gap-5">
                <span className="hover:border-b-2 hover:border-[#80A948]">Launch</span>
                <IoIosArrowForward className="text-[#80A948]" />
            </Link>
            <Link href="/services" className="flex items-center gap-5">
                <span className="hover:border-b-2 hover:border-[#80A948]">IT Consulting</span>
                <IoIosArrowForward className="text-[#80A948]" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
