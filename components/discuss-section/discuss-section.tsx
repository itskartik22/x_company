import DiscussForm from "./discuss-form"

const DiscussSection = () => {
    return (
        <div id="discuss-section" className="flex lg:flex-row flex-col justify-between lg:items-center gap-6 py-10 md:px-28 px-6 bg-gradient-to-r from-[#FABC1F] to-[#7CA546]">
        <div className="lg:w-1/2 flex flex-col gap-5 text-white ">
          <h1 className="text-3xl font-bold">Let us Discuss Your Project</h1>
          <p>Let&apos;s figure out how to create an effective application, its cost and terms of its development</p>
          {/* <p>Let's figure out how to create an effective application, its cost and terms of its development</p>
           */}
        </div>
        <DiscussForm buttonText="Discuss the project" buttonColor="orange" />
      </div>
    )
}

export default DiscussSection