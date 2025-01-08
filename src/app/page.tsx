import ComfirtBanner from "@/components/Banner"
import Banner2 from "@/components/Banner2";
import Carousel from "@/components/Carousel";
import EmailSignup from "@/components/Email";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LearnMore from "@/components/LearnMore";
import Navbar from "@/components/Navbar";
<<<<<<< HEAD
import ThreeProducts from "@/components/ThreeProducts";
import ProductCarousel from "@/components/ProductCarousel";
=======
import ProductCarousel from "@/components/ProductCarousel";
import ThreeProducts from "@/components/ThreeProducts";
import ShopButton from "@/components/ShopButton";
import ShopButton2 from "@/components/ShopButton2";
import ShopButton3 from "@/components/ShopButton3";
import ProductCard from "@/components/ProductCard";

>>>>>>> 392f4eca505f19b8b4c6c6e7cde115335dabe204

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
