// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Project = {
  name: string;
  builtIn: string;
  description: string;
  img: string;
  linkToGithub: string | null;
  linkToLive: string | null;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  res.status(200).json([
    {
      name: "deBetting",
      builtIn: "2022",
      description:
        "DeBetting is a project which was created for Chainlink Fall 2022 Hackathon and has been qualified to top 40 quality projects. It is a decentralized betting app, which allows you to bet your DAI tokens on a football match. What makes it special is a use of Chainlink External API calls and Yearn protocol as an additional yield source. The project was built in a team and my responsibility was to design the app as well as do the smart contract integration on the front-end.",
      img: "/img/projects/debetting.png",
      linkToGithub:
        "https://gitlab.com/silverowiecx/debetting-chainlink-hackaton-fall-2022",
      linkToLive: "https://devpost.com/software/debet-kyacl3",
    },
    {
      name: "NFTPadlock",
      builtIn: "2022",
      description:
        "NFTPadlock is a project that allows to create a relationship with another Ethereum address and each one in a couple receives a fractional padlock NFT. Apart from that, each one in the relationship deposits ETH that is stored in a vault and as long as the relationshp lasts the vault is generating yield. The project was built in a team and I was responsible for designing the app as well as smart contract integration on the front-end.",
      img: "/img/projects/nftpadlock.png",
      linkToGithub: "https://github.com/przemo246/nft-padlock",
      linkToLive: "https://nft-padlock.vercel.app/",
    },
    {
      name: "Oniofocus",
      builtIn: "2021",
      description:
        "This is a small project I created on the front-end bootcamp I attended in 2021. The graphic design is 100% mine and the code was written in Vanilla JavaScript. The idea itself is taken from pomofocus.io online timer.",
      img: "/img/projects/oniofocus.png",
      linkToGithub: "https://github.com/Przemo246/Oniofocus",
      linkToLive: "https://przemo246.github.io/Oniofocus",
    },
    {
      name: "cryptostalker",
      builtIn: "2021",
      description:
        "cryptostalker is a web app that allows you to check current news from the cryptocurrencies world, prices of the biggest cryptocurrencies (by market cap) as well as create a portfolio of your crypto assets. The project was initially written in Vanilla JavaScript and then rewritten in React.",
      img: "/img/projects/cryptostalker.png",
      linkToGithub: "https://github.com/Przemo246/cryptostalker",
      linkToLive: "https://cryptostalker-18727.web.app",
    },
    {
      name: "mojakrew",
      builtIn: "2021",
      description:
        "mojakrew is a straightforward app which serves a purpose of storing blood tests made in different laboratories. It solves a problem of having many blood tests either in a paper form or on different platforms depending on where the blood tests was made. Apart from entering blood tests, user can also manage them - edit, delete and download in a .pdf format",
      img: "/img/projects/mojakrew.png",
      linkToGithub: "https://github.com/Przemo246/mojakrew",
      linkToLive: "https://przemo246.github.io/mojakrew/",
    },
  ]);
}
