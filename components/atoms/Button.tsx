import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type PropsWithChildren,
} from "react";

import clsx from "clsx";

type Variant = "full" | "ghost";

type Props = PropsWithChildren<{ variant?: Variant }> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const variantClassNameMap: Record<Variant, string> = {
  full: "text-black bg-white",
  ghost: "text-white bg-transparent",
};

const baseClassNames =
  "border-2 border-solid border-white px-[25px] py-2.5 transition-all hover:translate-y-[-3px]";

export const Button = ({
  variant = "full",
  type = "button",
  children,
  className,
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(baseClassNames, variantClassNameMap[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
