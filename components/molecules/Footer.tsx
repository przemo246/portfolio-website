import { AnchorLink } from "../../components/atoms/AnchorLink";

export const Footer = () => {
  return (
    <footer className="bg-black p-10 text-white text-center">
      Built with ❤️ and{" "}
      <AnchorLink href="https://nextjs.org/blog/next-13">Next.js</AnchorLink>
    </footer>
  );
};
