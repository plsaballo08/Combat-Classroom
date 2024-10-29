"use client";
import Lessons from "@/components/student/Courses/lessons/page";
import Image from "next/image";
import Link from "next/link";

export default function LessonHome() {
  return (
    <>
      <div className="flex  justify-between shadow-md mt-10 mx-auto w-10/12 h-52  ">
        {/* Left Section */}
        <div className="flex flex-col gap-2 pl-10 pt-6 w-8/12">
          <span className="text-xl font-bold">
            Module 1: Military Leadership
          </span>
          <span className="text-sm text-gray-400">Uploaded 1 day ago</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            elementum interdum iaculis. Donec vulputate nec ante tristique
            venenatis. Suspendisse potenti. Cras non purus in dui auctor mollis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum augue ac rutrum vulputate. Aliquam in neque metus. Mauris
            rhoncus neque eget dapibus feugiat.
          </p>
        </div>

        {/* Divider */}
        <div className="border-l border-gray-300 h-auto my-6"></div>

        {/* Right Section */}
        <div className="flex flex-col justify-start gap-4 pr-14 pt-6">
          <span className="text-lg font-bold">Course Details</span>
          <div className="flex items-center gap-2">
            <Image src="/clock.png" alt="Clock Icon" width={20} height={20} />
            <span>1h 33m of Content</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/monitor.png"
              alt="Lesson Icon"
              width={20}
              height={20}
            />
            <span>12 Lessons of Learning Content</span>
          </div>
          <Link href="/">
            <button className="items-center bg-green-900 text-white px-4 py-2 rounded-md w-72 h-10 hover:bg-green-700">
              Continue Lesson 2
            </button>{" "}
          </Link>
        </div>
      </div>
      <div className="flex gap-4 mx-32 my-10">
        <Lessons />
      </div>
    </>
  );
}
