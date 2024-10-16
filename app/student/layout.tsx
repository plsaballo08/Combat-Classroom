"use client";

import Navbar from "@/components/student/navbar";
import useStore from "../../globals/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMenuOpen } = useStore();

  return (
    <>
      <Navbar />
      <div>
        <div
          className={`transition-opacity duration-300 absolute inset-0 bg-black  ${
            isMenuOpen ? "opacity-50" : "opacity-0 -z-10"
          }`}
        ></div>

        {children}
      </div>
    </>
  );
}
