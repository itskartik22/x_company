import Image from "next/image";
import StageCard from "./stage-card";
import HopeImage from "../../public/images/hope-gif1.svg";

const ADSSection = () => {
  return (
    <div id="ads-section" className="bg-white flex flex-col md:gap-10 gap-4 py-10 md:px-28 px-6">
      <h1 className="font-bold text-3xl">Application Development Stages</h1>
      <div className="relative w-full flex md:flex-row flex-col justify-between gap-4">
        <div className="flex gap-4 flex-col md:order-0 order-1">
          <StageCard
            image="/images/StageCardIcons/planing.svg"
            type="Analysis"
            description="We craft precise technical specs, aligning with your business, technology, and user requirements."
          />
          <StageCard
            image="/images/StageCardIcons/graphic-design.svg"
            type="Design"
            description="We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces."
          />
          <StageCard
            image="/images/StageCardIcons/coding-language.svg"
            type="Development"
            description="We create an extensible architecture, write clean and stable code. We integrate with customer technologies."
          />
        </div>
        <div className="md:absolute w-full xl:flex md:hidden justify-center md:order-2 order-0">
          <Image
            src={HopeImage}
            alt="Application Development Stages"
            // width={440}
            // height={564}
            // layout="responsive"
          />
        </div>
        {/* </div> */}
        <div className="flex gap-4 flex-col">
          <StageCard
            image="/images/StageCardIcons/security.svg"
            type="Testing"
            description="We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions."
          />
          <StageCard
            image="/images/StageCardIcons/hosting.svg"
            type="Launching"
            description="We design the application page and publish it in the App Store and Google Play stores."
          />
          <StageCard
            image="/images/StageCardIcons/application.svg"
            type="Support"
            description="We monitor the stability of the application, update it for new devices and versions of iOS and Android."
          />
        </div>
      </div>
    </div>
  );
};

export default ADSSection;
