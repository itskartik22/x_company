import Image from "next/image";
import ADSSection from "@/components/ads-section/ads-section";
import DiscussSection from "@/components/discuss-section/discuss-section";
import TeamSection from "@/components/team-section/team-section";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import MainSection from "@/components/main-section/main-section";
import heroImage from "@/public/images/Group.svg";
import ServiceSection from "@/components/service-section/service-section";
import FAQSection from "@/components/faq-section/faq-section";
import MediaSection from "@/components/media-section.tsx/media-section";
import MobileMenu from "@/components/mobile-menu";
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="md:block hidden w-1/2 h-full absolute -rotate-6  -top-10 lg:-right-48 -right-80 -z-30">
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="responsive"
        />
      </div>
      <MobileMenu />
      <Navbar />
      <MainSection />
      <ServiceSection />
      <MediaSection />
      <DiscussSection />
      <ADSSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
