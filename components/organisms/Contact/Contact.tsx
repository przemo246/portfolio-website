import Link from "next/link";

import { Heading } from "../../atoms/Heading";
import { Form } from "../../molecules/Form";
import { Section } from "../../molecules/Section";
import { contactDetails } from "./contactDetails";

export const Contact = () => {
  return (
    <Section
      heading="Get in touch"
      name="contact"
      className="bg-darkGreen px-4"
      classNameHeading="hidden"
    >
      <div className="flex">
        <div className="w-1/2">
          <div className="flex flex-col items-start mb-14">
            <Heading
              className="text-3xl text-white mb-6 fancy fancy--white"
              variant="tertiary"
            >
              Get in touch!
            </Heading>
            <div className="text-white max-w-lg font-extralight">
              Feel free to reach out to me if you want to talk about a potential
              partnership or cooperation.
            </div>
          </div>
          <ul>
            {contactDetails.map((c) => (
              <li className="mb-10 flex items-center" key={c.url}>
                <div className="mr-4">
                  {c.icon({ color: "#fff", size: "1.8em" })}
                </div>
                <Link
                  href={c.type === "mail" ? `mailto:${c.url}` : c.url}
                  className="text-white font-extralight hover:underline tracking-wide"
                >
                  {c.url.replace("https://", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Form />
      </div>
    </Section>
  );
};
