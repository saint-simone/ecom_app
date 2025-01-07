import ComfirtBanner from "@/components/Banner"
import Banner2 from "@/components/Banner2";
import Carousel from "@/components/Carousel";
import EmailSignup from "@/components/Email";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LearnMore from "@/components/LearnMore";
import Navbar from "@/components/Navbar";
import ThreeProducts from "@/components/ThreeProducts";

export default function Home() {
  return (
    <div >
      <Header />
      <Navbar/>
      <ThreeProducts/>
      <Banner2/>
      <Carousel/>
      <ComfirtBanner />
      <EmailSignup />
      <LearnMore />
      <Footer />
    </div>
  );
}
