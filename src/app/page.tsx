import ComfirtBanner from "@/components/Banner"
import Banner2 from "@/components/Banner2";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import ThreeProducts from "@/components/ThreeProducts";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <ComfirtBanner/>
      <ThreeProducts/>
      <Banner2/>
      <Carousel/>
    </div>
  );
}
