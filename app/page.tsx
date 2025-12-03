import Image from "next/image";
import HeroSlider from "./components/heroslider/page";
import CategoryStrip from "./components/category/page";
import FeaturedProducts from "./fearturedProducts/page";
import OffersSection from "./offers/page";

export default function Home() {
  return (
  <div>
    <HeroSlider />
    <CategoryStrip />
    <FeaturedProducts />
    <OffersSection />
  </div>
  );
}
