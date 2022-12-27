import { useEffect, useState } from "react";
import Head from "next/head";

import clsx from "clsx";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

import { Hero } from "../components/organisms/Hero/Hero";
import { About } from "../components/organisms/About/About";
import { Projects } from "../components/organisms/Projects/Projects";
import { Contact } from "../components/organisms/Contact/Contact";
import { Footer } from "../components/molecules/Footer";

export default function Home() {
  const [isGoToTopVisible, setIsGoToTopVisible] = useState(false);

  const checkScroll = () => {
    const HTMLElement = document.documentElement;

    if (HTMLElement) {
      HTMLElement.scrollTop >= 80
        ? setIsGoToTopVisible(true)
        : setIsGoToTopVisible(false);
    }
  };

  useEffect(() => {
    addEventListener("scroll", checkScroll);
    return () => removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>Przemysław Welenc - Passionate Front-end Developer</title>
        <meta
          name="description"
          content="Portfolio website of a passionate front-end developer with modern stack, such as React, Next.js, Gatsby.js, Tailwind, also Web3 stack such as Hardhat, Solidity, Ethers and useDapp"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-base text-black text-base font-light leading-relaxed relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <div
          className={clsx(
            isGoToTopVisible ? "block" : "hidden",
            "fixed p-2 bottom-[5%] right-[3%] bg-black cursor-pointer"
          )}
          onClick={() => scroll.scrollToTop()}
        >
          <AiOutlineArrowUp color="#fff" width="1.5rem" height="1.5rem" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
