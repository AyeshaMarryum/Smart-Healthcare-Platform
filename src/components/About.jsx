import { assets, cards } from "../assets/asset";

const About = () => {
  return (
    <>
      <div className="w-full min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <div className="relative w-[90%] min-h-[40vh] lg:min-h-[74vh] rounded-4xl flex text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={assets.aboutimg}
              alt="aboutimg"
              className="w-full h-full object-cover brightness-[0.65] scale-105 transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />
          </div>

          <div className="z-10 px-6 sm:px-10 md:px-18 max-w-5xl flex flex-col items-center justify-center">
            <div className="md:mt-24 lg:mt-28">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
                Pioneering the Future
                <br className="hidden sm:block" /> of Healthcare
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-light md:mb-12 max-w-3xl opacity-95 leading-relaxed">
                Dedicated to providing world-class medical excellence through
                innovation,
                <br /> compassion, and community-centered care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] max-w-6xl mx-auto mt-14 mb-10 flex flex-row gap-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col px-3 py-4 border-2 rounded-3xl bg-gray-100 border-gray-300 hover:shadow-lg hover:scale-[1.03] transition-all duration-300 gap-4"
          >
            <h2 className="text-3xl font-bold text-black">{card.title}</h2>

            <p className="text-lg leading-relaxed text-gray-600">{card.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
