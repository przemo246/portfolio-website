import { PropsWithChildren } from "react";

import clsx from "clsx";
import Link from "next/link";

type Variant = "white" | "black";

type Props = PropsWithChildren & {
  className?: string;
  variant?: Variant;
  href: string;
};

const variantClassNameMap: Record<Variant, string> = {
  white: "text-white",
  black: "text-black border-black",
};

const baseClassNames =
  "transition-all border-b pb-0.5 hover:pb-1 hover:text-darkGreen hover:border-darkGreen";

export const AnchorLink = ({
  variant = "white",
  className = "",
  href,
  children,
}: Props) => {
  return (
    <Link
      target="_blank"
      className={clsx(baseClassNames, variantClassNameMap[variant], className)}
      rel="noreferrer"
      href={href}
    >
      {children}
    </Link>
  );
};
