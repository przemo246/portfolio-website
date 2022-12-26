import { PropsWithChildren } from "react";
import { Link as LinkScroll } from "react-scroll";

type Props = PropsWithChildren & {
  className?: string;
  to: string;
};

export const NavLink = ({ className = "", to, children }: Props) => {
  return (
    <li
      className={`transition-all border-b border-transparent pb-0.5 cursor-pointer hover:border-white ${className}`}
    >
      <LinkScroll smooth={true} duration={500} to={to}>
        {children}
      </LinkScroll>
    </li>
  );
};
