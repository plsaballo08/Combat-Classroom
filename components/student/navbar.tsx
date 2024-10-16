"use client";

import Image from "next/image";
import Link from "next/link";
import useStore from "../../globals/store";
import Sidebar from "./sidebar";

export default function Navbar() {
  const { setMenuState } = useStore();

  return (
    <>
      <div className="flex justify-between w-full p-4  border-b-8 items-center border-green-900 bg-primary relative z-50">
        <div className="flex items-center gap-4">
          <button onClick={setMenuState}>
            <Image
              src="/icons/hamburger.svg"
              alt="Hamburger Icon"
              width={24}
              height={24}
            />
          </button>
          <Link href="/student">
            <div className="flex gap-4">
              <Image
                src="/logo.png"
                alt="Philippine Army Logo"
                width={32}
                height={24}
              />
              <span className=" text-white font-bold text-xl">PALMS</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-end pr-2 gap-4">
          <span className=" text-white">User</span>
          <Image
            src="/icons/account_placeholder.svg"
            alt="User Profile"
            width={24}
            height={24}
          />
        </div>
      </div>
      <Sidebar />
    </>
  );
}
