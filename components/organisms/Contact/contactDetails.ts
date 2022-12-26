import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { IconType } from "react-icons";

type ContactDetailsType = "link" | "mail";

type ContactDetails = {
  icon: IconType;
  url: string;
  type: ContactDetailsType;
};

export const contactDetails: ContactDetails[] = [
  {
    icon: AiFillGithub,
    url: "https://github.com/przemo246",
    type: "link",
  },
  {
    icon: AiFillLinkedin,
    url: "https://linkedin.com/in/przemyslaw-welenc/",
    type: "link",
  },
  {
    icon: AiOutlineMail,
    url: "przemo247@outlook.com",
    type: "mail",
  },
];
