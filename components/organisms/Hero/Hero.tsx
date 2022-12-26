import { AiOutlineArrowDown } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";

import { Header } from "../../molecules/Header";
import { HeroContent } from "../../molecules/HeroContent";

export const Hero = () => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center bg-[url('/img/bg.jpg')] bg-cover bg-bottom bg-no-repeat relative px-6"
      id="top"
    >
      <Header />
      <HeroContent />
      <LinkScroll
        className="p-2 bg-white absolute rounded-full cursor-pointer bottom-[5%] left-1/2 animate-bounce"
        smooth={true}
        duration={500}
        to="about"
      >
        <AiOutlineArrowDown color="#111" size="1.3em" />
      </LinkScroll>
    </section>
  );
};
