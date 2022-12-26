import { NavLink } from "../atoms/NavLink";

export const Header = () => {
  return (
    <header className="absolute top-0 py-6 px-12 w-full">
      <div className="max-w-screen-xl my-0 mx-auto flex items-center justify-between">
        <div className="text-3xl text-white font-extralight tracking-widest">
          P/W
        </div>
        <nav>
          <ul className="flex text-white">
            <NavLink to="about" className="mr-6">
              About
            </NavLink>
            <NavLink to="projects" className="mr-6">
              Projects
            </NavLink>
            <NavLink to="contact">Contact</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};
