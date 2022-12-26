import { PropsWithChildren } from "react";

import clsx from "clsx";

type Variant = "primary" | "secondary" | "tertiary";

type Props = PropsWithChildren & {
  className?: string;
  variant: Variant;
};

const variantClassNameMap: Record<Variant, string> = {
  primary: "text-6xl font-bold",
  secondary: "text-5xl font-bold",
  tertiary: "text-2xl font-medium",
};

const baseClassNames = "text-black";

export const Heading = ({ variant, className, children }: Props) => {
  if (variant === "primary") {
    return (
      <h1
        className={clsx(
          baseClassNames,
          variantClassNameMap[variant],
          className
        )}
      >
        {children}
      </h1>
    );
  } else if (variant === "secondary") {
    return (
      <h2
        className={clsx(
          baseClassNames,
          variantClassNameMap[variant],
          className
        )}
      >
        {children}
      </h2>
    );
  } else {
    return (
      <h3
        className={clsx(
          baseClassNames,
          variantClassNameMap[variant],
          className
        )}
      >
        {children}
      </h3>
    );
  }
};
