import Image from "next/image";
import useSwr from "swr";

import { Project } from "../../../pages/api/projects";
import { AnchorLink } from "../../atoms/AnchorLink";
import { Section } from "../../molecules/Section";
import { Spinner } from "../../molecules/Spinner";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Projects = () => {
  const { data, isLoading } = useSwr("/api/projects", fetcher);

  return (
    <Section heading="Projects" name="projects">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10  mx-auto my-0 max-sm:grid-cols-1">
          {data &&
            data
              .sort(
                (a: Project, b: Project) =>
                  Number(b.builtIn) - Number(a.builtIn)
              )
              .map((el: Project) => (
                <div
                  className="relative text-sm shadow-3xl hover:shadow-4xl hover:scale-105 hover:z-10 transition-all"
                  key={el.name}
                >
                  <div className="relative h-48">
                    <Image
                      src={el.img}
                      alt={el.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2 font-semibold">{el.name}</div>
                    <div>
                      <p>{el.description}</p>
                    </div>
                    {(el.linkToGithub || el.linkToLive) && (
                      <div className="mt-2">
                        {el.linkToGithub && (
                          <AnchorLink
                            variant="black"
                            className="mr-2"
                            href={el.linkToGithub}
                          >
                            Repository
                          </AnchorLink>
                        )}
                        {el.linkToLive && (
                          <AnchorLink variant="black" href={el.linkToLive}>
                            Live
                          </AnchorLink>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
        </div>
      )}
    </Section>
  );
};
