import Image from "next/image";

const IndustrySection = () => {
  return (
    <section className="w-full space-y-6">
      <h1 className="md:w-1/2 text-3xl font-bold">
        Developed more than <span className="text-[#80A948]">100</span> projects in <span className="text-[#80A948]">15</span>{" "}
        industries
      </h1>
      <div className="md:flex justify-between lg:pr-48 gap-4">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/sm.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />
            <span>Social Media</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/fs.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Fitness & Sports</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/bank.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Bank</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/const.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Construction</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/game.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Game Projects</span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/ed.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Education</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/at.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Auto, Transports</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/mh.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Medicine, Health</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/rs.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Restraunts, Food Delivery</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/mp.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Marketplaces</span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/ar.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>AR Technology</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/tv.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>TV Series</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/st.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Startups</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/rl.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Religious</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src="/images/industriIcons/oc.svg"
              alt="Industry Icon"
              width={50}
              height={50}
            />

            <span>Online Courses</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
