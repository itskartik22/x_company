import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import gstoreIcon from "../../public/images/gstore.svg";
import iosToreIcon from "../../public/images/ios.svg";

const ProjectTabs = () => {
  return (
    <Tabs defaultValue="project1" className="w-full space-y-6">
      <TabsList>
        <TabsTrigger value="project1">Project1</TabsTrigger>
        <TabsTrigger value="project2">Project2</TabsTrigger>
        <TabsTrigger value="project3">Project3</TabsTrigger>
        <TabsTrigger value="project4">Project4</TabsTrigger>
      </TabsList>
      <TabsContent value="project1">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="flex flex-col justify-between gap-6 lg:w-1/2">
            <h1 className="text-3xl font-bold">Project 1</h1>
            <p>
              Crafted an innovative rental property management app, seamlessly
              integrating secure login, absence registration, and a tenant
              notice board. Elevating the resident experience with user-friendly
              design and efficient communication channels
            </p>
            <span className="text-gray-700">
              Business analysis <span className="text-orange-400">/</span> iOS{" "}
              <span className="text-orange-400">/</span> Android{" "}
              <span className="text-orange-400">/</span> QA{" "}
              <span className="text-orange-400">/</span> UI/UX Design
            </span>
            <div className="flex gap-6">
              <span className="flex items-center gap-2">
                <IoLocation className="text-xl text-[orange]" />
                India
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineRealEstateAgent className="text-xl text-[orange]" />
                Real Estate
              </span>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">400%</span>
                <span>User Growth</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">+200,000</span>
                <span>Active Users</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src={iosToreIcon} alt="Iosstore" />
              <Image src={gstoreIcon} alt="gstore" />
            </div>
          </div>
          <div >
            <Image
              src="/images/image 15.svg"
              alt="Industry Icon"
              width={400}
              height={400}
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="project2">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="flex flex-col justify-between gap-6 lg:w-1/2">
            <h1 className="text-3xl font-bold">Project 2</h1>
            <p>
              Crafted an innovative rental property management app, seamlessly
              integrating secure login, absence registration, and a tenant
              notice board. Elevating the resident experience with user-friendly
              design and efficient communication channels
            </p>
            <span className="text-gray-700">
              Business analysis / iOS / Android / QA / UI/UX Design
            </span>
            <div className="flex gap-6">
              <span className="flex items-center gap-2">
                <IoLocation className="text-xl text-[orange]" />
                India
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineRealEstateAgent className="text-xl text-[orange]" />
                Real Estate
              </span>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">400%</span>
                <span>User Growth</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">+200,000</span>
                <span>Active Users</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src={iosToreIcon} alt="Iosstore" />
              <Image src={gstoreIcon} alt="gstore" />
            </div>
          </div>
          <Image
            src="/images/image 15.svg"
            alt="Industry Icon"
            width={400}
            height={400}
          />
        </div>
      </TabsContent>
      <TabsContent value="project3">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="flex flex-col justify-between gap-6 lg:w-1/2">
            <h1 className="text-3xl font-bold">Project 3</h1>
            <p>
              Crafted an innovative rental property management app, seamlessly
              integrating secure login, absence registration, and a tenant
              notice board. Elevating the resident experience with user-friendly
              design and efficient communication channels
            </p>
            <span className="text-gray-700">
              Business analysis / iOS / Android / QA / UI/UX Design
            </span>
            <div className="flex gap-6">
              <span className="flex items-center gap-2">
                <IoLocation className="text-xl text-[orange]" />
                India
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineRealEstateAgent className="text-xl text-[orange]" />
                Real Estate
              </span>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">400%</span>
                <span>User Growth</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">+200,000</span>
                <span>Active Users</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src={iosToreIcon} alt="Iosstore" />
              <Image src={gstoreIcon} alt="gstore" />
            </div>
          </div>
          <Image
            src="/images/image 15.svg"
            alt="Industry Icon"
            width={400}
            height={400}
          />
        </div>
      </TabsContent>
      <TabsContent value="project4">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="flex flex-col justify-between gap-6 lg:w-1/2">
            <h1 className="text-3xl font-bold w-1/2">Project 4</h1>
            <p>
              Crafted an innovative rental property management app, seamlessly
              integrating secure login, absence registration, and a tenant
              notice board. Elevating the resident experience with user-friendly
              design and efficient communication channels
            </p>
            <span className="text-gray-700">
              Business analysis / iOS / Android / QA / UI/UX Design
            </span>
            <div className="flex gap-6">
              <span className="flex items-center gap-2">
                <IoLocation className="text-xl text-[orange]" />
                India
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineRealEstateAgent className="text-xl text-[orange]" />
                Real Estate
              </span>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">400%</span>
                <span>User Growth</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">+200,000</span>
                <span>Active Users</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src={iosToreIcon} alt="Iosstore" />
              <Image src={gstoreIcon} alt="gstore" />
            </div>
          </div>
          <Image
            src="/images/image 15.svg"
            alt="Industry Icon"
            width={400}
            height={400}
          />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProjectTabs;
