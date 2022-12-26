import clsx from "clsx";
import { PropsWithChildren } from "react";
import { Element } from "react-scroll";

import { Heading } from "../atoms/Heading";

type Props = PropsWithChildren & {
  name: string;
  className?: string;
  heading: string;
  classNameHeading?: string;
};

export const Section = ({
  name,
  className = "",
  classNameHeading = "",
  heading,
  children,
}: Props) => {
  return (
    <Element className={clsx(`py-20 bg-white px-6 ${className}`)} name={name}>
      <div className="max-w-screen-xl my-0 mx-auto">
        <div className="flex items-center justify-center">
          <Heading
            variant="secondary"
            className={clsx("text-center mb-20 fancy", classNameHeading)}
          >
            {heading}
          </Heading>
        </div>
        {children}
      </div>
    </Element>
  );
};
