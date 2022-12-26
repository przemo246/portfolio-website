import { AiOutlineLoading } from "react-icons/ai";

export const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <AiOutlineLoading className="animate-spin" color="#111" size="2.8rem" />
    </div>
  );
};
