import Contact from "../components/Home/Contact";
import HeroSection from "../components/Home/Hero";
import Testimonials from "../components/Home/Testimonial";
import TopDoctors from "../components/Home/TopDoctors";
import Ourservices from "../components/Home/Ourservices";

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
