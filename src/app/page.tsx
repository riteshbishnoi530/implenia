import Footer from "@/components/common/Footer";
import Community from "@/components/Community";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import Kickbox from "@/components/Kickbox";
import KickboxProcess from "@/components/KickboxProcess";
import Stories from "@/components/Stories";

export default function Home() {
  return (
   <>
   <Hero/>
   <Kickbox/>
   <HowItWork/>
   <KickboxProcess/>
   <Community/>
   <Stories/>
   <Faq/>
   <Footer/>
   </>

  );
}
