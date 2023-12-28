import Hero from "@/components/organisms/home-hero/home-hero";
import ParallaxSection from "@/components/organisms/parallax-section";
import ProductScale from "@/components/organisms/product-scale/product-scale";

const Home = () => {
  return (
    <section className=" max-w-[100vw] h-fit">
      <Hero />
      {/* <ProductScale />
      <ParallaxSection /> */}
    </section>
  );
};

export default Home;
