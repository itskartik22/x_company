import Image from "next/image";
import DiscussForm from "../discuss-section/discuss-form";
import heroImage from "./../../public/images/Group.svg";

const MainSection = () => {
  return (
    <div className="xl:h-screen flex md:flex-row flex-col md:items-center lg:px-28 md:px-16 px-6 py-10">
      <div className="md:hidden flex -rotate-[36deg] absolute sm:-top-[60rem] -top-[25rem] right-0 -z-10">
        <Image src={heroImage} alt="Hero Image" layout="responsive" />
      </div>
      <div className="h-[260px]"></div>
      <div className="md:w-1/2 lg:pt-20 flex flex-col md:gap-10 gap-4">
        <div className="flex flex-col gap-6 bg-gradient-to-r from-white/70 to-white/0 p-4 rounded-sm ">
          <h1 className="md:text-4xl text-3xl font-bold">
            <span className="text-[#FFBA00]">User-Centric Excellence:</span> Our
            App Development services Tackles Your Pain Points
          </h1>
          <p>
            Experience a Seamless Digital Journey with{" "}
            <span className="text-[#80A948] font-semibold">Desun</span> - Where
            Every Line of Code Resolves Your Challenges and{" "}
            <span className="text-[#FFBA00] font-semibold">
              Elevates Your App Experience
            </span>{" "}
            to Unparalleled Heights.
          </p>
        </div>
        <DiscussForm buttonText = "Get Consultaion" buttonColor="#80A948" />
      </div>
    </div>
  );
};

export default MainSection;
