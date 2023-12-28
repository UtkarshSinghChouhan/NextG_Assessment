import Hero from "@/components/organisms/home-hero/home-hero";
import ParallaxSection from "@/components/organisms/parallax-section";

const Home = () => {
  return (
    <section className=" max-w-[100vw] h-fit">
      <Hero />
      <ParallaxSection />
    </section>
  );
};

export default Home;
