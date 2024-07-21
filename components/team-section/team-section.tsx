import Image from "next/image";
import TeamImage from "./../../public/images/IMG_6115.svg";

const TeamSection = () => {
  return (
    <div className="w-full bg-[#F2F4F7] flex lg:flex-row flex-col-reverse justify-between items-center gap-10 md:px-28 px-6 py-10">
      <div className="lg:w-1/2 flex flex-col md:gap-8 gap-4">
        <h1 className="text-3xl font-bold">Our Team</h1>
        <p>
          Thousand is a full-cycle digital production company with its own
          product analytics, design, web and mobile development.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="md:text-4xl text-3xl font-bold">28</span>
            <span className="text-sm">team members</span>
          </div>
          <div className="flex flex-col">
            <span className="md:text-4xl text-3xl font-bold">+100</span>
            <span className="text-sm">projects</span>
          </div>
          <div className="flex flex-col">
            <span className="md:text-4xl text-3xl font-bold">7 years</span>
            <span className="text-sm">in IT Sphere</span>
          </div>
        </div>
        <p>
          All the necessary specialists - from a designer to a tester - are on
          our staff. We hire the best specialists in the market. It&apos;s
          expensive but worth it
        </p>
      </div>
      <div className="lg:w-1/2">
        <Image src={TeamImage} alt="OurTeam" layout="responsive" />
      </div>
    </div>
  );
};

export default TeamSection;
