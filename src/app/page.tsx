import ComfirtBanner from "@/components/Banner"
import Banner2 from "@/components/Banner2";
import Carousel from "@/components/Carousel";
import EmailSignup from "@/components/Email";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LearnMore from "@/components/LearnMore";
import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/ProductCarousel";
import ThreeProducts from "@/components/ThreeProducts";
import ShopButton from "@/components/ShopButton";
import ShopButton2 from "@/components/ShopButton2";
import ShopButton3 from "@/components/ShopButton3";
import ProductCard from "@/components/ProductCard";


export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <ComfirtBanner />
      <Banner2/>
      <Carousel/>
      <ThreeProducts />
      <ProductCard />
      <ShopButton3 />
      <ShopButton2 />
      <ShopButton />
      <ProductCarousel />
      <EmailSignup />
      <LearnMore />
      <Footer />
    </>
  );
}
