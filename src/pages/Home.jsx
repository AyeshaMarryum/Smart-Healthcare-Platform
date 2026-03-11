import Contact from "../components/Contact";
import HeroSection from "../components/Hero";
import Testimonials from "../components/Testimonial";
import TopDoctors from "../components/TopDoctors";
import Ourservices from "../components/Ourservices";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Ourservices />
      <TopDoctors />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
