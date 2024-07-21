import IndustrySection from "./industry-section"
import PastProjectSection from "./past-project-section"

const MediaSection = () => {
    return (
        <section id="media-section" className=" bg-[#FFFFFF] w-full space-y-6 py-10 md:px-28 px-6 z-0">
            <IndustrySection />
            <PastProjectSection />
        </section>
    )
}

export default MediaSection