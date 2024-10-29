"use client";

import Image from "next/image";
import Link from "next/link";

const modules = [
  {
    id: 1,
    title: "Module 3: Fundamentals of Logistics Module",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed augue pellentesque, convallis elit non, egestas erat. Nam vitae mi justo. Vestibulum finibus, magna et egestas dapibus, nisl dui ullamcorper ex, vitae mollis diam velit id erat. In facilisis magna lorem, et dictum lorem porta a. Duis tincidunt ornare dui eget facilisis.",
  },
  {
    id: 2,
    title: "MODULE 4: Supply and Distribution Operations ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed augue pellentesque, convallis elit non, egestas erat. Nam vitae mi justo. Vestibulum finibus, magna et egestas dapibus, nisl dui ullamcorper ex, vitae mollis diam velit id erat. In facilisis magna lorem, et dictum lorem porta a. Duis tincidunt ornare dui eget facilisis.",
  },
];

export default function Completed() {
  return (
    <div>
      {modules.map((module) => (
        <div key={module.id} className="border-b border-gray-200 pb-3 mb-3">
          <Link href="/lessons" className="flex flex-row gap-10">
            <button>
              <Image
                className="m-auto"
                src="/module_icon.png"
                alt="Module Icon"
                width={200}
                height={200}
              />
            </button>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold">{module.title}</span>
              <p className="text-sm">{module.description}</p>
              <span className="flex items-center justify-center bg-green-700 text-white text-sm w-24 h-6 rounded-md">
                Completed
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
