import { animated, easings, useSpring } from "@react-spring/web";

import { Button } from "../atoms/Button";
import { Link as LinkScroll } from "react-scroll";

const baseConfig = {
  config: {
    easing: easings.easeInBack,
  },
};

export const HeroContent = () => {
  const springsH1 = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    ...baseConfig,
  });
  const springsLine = useSpring({
    from: { width: 0 },
    to: { width: 70 },
    ...baseConfig,
    delay: 500,
  });
  const springSpan = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ...baseConfig,
  });

  return (
    <div className="relative">
      <div className="ml-20 tracking-widest text-sm">
        <animated.span style={{ ...springSpan }} className="text-white">
          PRZEMYSLAW WELENC
        </animated.span>
        <animated.div
          style={{ ...springsLine }}
          className="bg-white h-[1px] top-[10px] left-0 absolute"
        ></animated.div>
      </div>
      <animated.h1
        className="font-medium text-6xl text-white"
        style={{ ...springsH1 }}
      >
        Passionate front-end developer
      </animated.h1>
      <div className="flex items-center justify-center mt-8">
        <LinkScroll smooth={true} duration={500} to="projects">
          <Button variant="ghost" className="mr-4">
            Projects
          </Button>
        </LinkScroll>
        <LinkScroll smooth={true} duration={500} to="contact">
          <Button variant="full">Contact</Button>
        </LinkScroll>
      </div>
    </div>
  );
};
