import ComfirtBanner from "@/components/Banner"
import Banner2 from "@/components/Banner2";
import Carousel from "@/components/Carousel";
import EmailSignup from "@/components/Email";
import Footer from "@/components/Footer";
import LearnMore from "@/components/LearnMore";
import ThreeProducts from "@/components/ThreeProducts";
import ProductCarousel from "@/components/ProductCarousel";
import ShopButton from "@/components/ShopButton";
import ShopButton3 from "@/components/ShopButton3";
import ProductCard from "@/components/ProductCard";


export default function Home() {
  return (
    <>
      <ComfirtBanner />
      <ThreeProducts />
      <Banner2/>
      <Carousel/>
      <ProductCard />
      <ShopButton3 />
      <ShopButton />
      <ProductCarousel />
      <EmailSignup />
      <LearnMore />
      <Footer />
    </>
  );
}
