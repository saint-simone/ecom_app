import ComfirtBanner from "@/components/Banner"
import EmailSignup from "@/components/Email";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LearnMore from "@/components/LearnMore";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div >
      <Header />
      <Navbar/>
      <ComfirtBanner />
      <EmailSignup />
      <LearnMore />
      <Footer />
    </div>
  );
}
