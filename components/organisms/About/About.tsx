import { AnchorLink } from "../../atoms/AnchorLink";
import { Heading } from "../../atoms/Heading";
import { Section } from "../../molecules/Section";
import { technologies } from "./technologies";

export const About = () => {
  return (
    <Section heading="About" name="about">
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          <div className="rounded-full bg-[url('/img/profile.jpg')] w-[280px] h-[280px] rounded-full bg-cover bg-[86%] mr-6"></div>
          <div className="max-w-screen-sm">
            <Heading variant="tertiary" className="mb-4 text-left">
              Hey!👋 My name is Przemek
            </Heading>
            <p>
              I&apos;m a passionate front-end developer with commercial
              experience however I also enjoy bulding projects in my free time.
              I have finished a 240 hour front-end bootcamp at{" "}
              <AnchorLink variant="black" href="https://infoshareacademy.com/">
                InfoShare Academy
              </AnchorLink>{" "}
              in 2021 and apart from that I have spent many, many hours more
              perfecting my front-end skills on my own. I focus mostly on
              JavaScript, TypeScript and React however I am very open-minded
              about tools that I use. Apart from front-end programming I am also
              very keen to dig deeper into server-side programming as well as
              web3 tools and frameworks.
            </p>
          </div>
        </div>
        <div className="tracking-widest mt-10 mb-8">
          Some of the technologies I have worked with:
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-wrap">
            {technologies.map((t) => (
              <li
                key={t.name}
                className="flex flex-col items-center mr-10 opacity-70 hover:opacity-100 transition-all"
              >
                <div>{t.icon({ color: "#111", size: "2.8rem" })}</div>
                <div className="mt-2 text-sm">{t.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
