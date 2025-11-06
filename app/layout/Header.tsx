import Navitems from "@/components/Navitems";
import UserDropdown from "@/components/UserDropdown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="header sticky top-0 z-50  border-gray-600 px-2">
      <div className=" header-wrapper ">
        <Link href="/" className="flex items-center gap-2 ">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-10 "
            width={100}
            height={100}
          />
          <span className="text-gray-400 text-sm font-bold">Aivarya</span>
        </Link>
        <nav className=" hidden sm:block">
          <Navitems />
        </nav>
        <nav className=" ">
          <UserDropdown />
        </nav>
      </div>
    </header>
  );
};

export default Header;
