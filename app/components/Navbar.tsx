"use client";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import UserNav from "./UserNav";
interface linkProps {
  name: string;
  href: string;
}
const links: linkProps[] = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Tv Shows",
    href: "/home/shows",
  },
  {
    name: "Movies",
    href: "/home/movies",
  },
  {
    name: "Recently Added",
    href: "/home/recently",
  },
  {
    name: "My List",
    href: "/home/user/list",
  },
];
export interface IUserInfo {
  username: string;
  pfp: string;
  email: string;
}
export default function Navbar({ pfp, username, email }: IUserInfo) {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-7xl  mx-auto items-center justify-between px-5 sm:px-6 lg:px-8 py-5 flex">
      <div className="flex items-center ">
        <Link href={"/home"} className="w-32">
          <Image
            src={"/netflix_logo.svg"}
            width={150}
            height={150}
            alt=""
            className="50]"
          />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={
                pathname === link.href
                  ? "underline font-semibold text-sm"
                  : "text-gray-300 font-normal text-sm"
              }
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8 ">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
        <UserNav pfp={pfp} username={username} email={email} />
      </div>
    </div>
  );
}
