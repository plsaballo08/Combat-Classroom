"use client";

import Image from "next/image";
import Link from "next/link";

const modules = [
  {
    id: 1,
    title: "Leadership Styles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum interdum iaculis. Donec vulputate nec ante tristique venenatis. Suspendisse potenti. Cras non purus in dui auctor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum augue ac rutrum vulputate. Aliquam in neque metus. Mauris rhoncus neque eget dapibus feugiat.",
    duration: "1h 30m",
    status: "completed",
  },
  {
    id: 2,
    title: "Effective Communication",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum interdum iaculis. Donec vulputate nec ante tristique venenatis. Suspendisse potenti. Cras non purus in dui auctor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum augue ac rutrum vulputate. Aliquam in neque metus. Mauris rhoncus neque eget dapibus feugiat.",
    duration: "1h 30m",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Critical and Creative Thinking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum interdum iaculis. Donec vulputate nec ante tristique venenatis. Suspendisse potenti. Cras non purus in dui auctor mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum augue ac rutrum vulputate. Aliquam in neque metus. Mauris rhoncus neque eget dapibus feugiat.",
    duration: "1h 30m",
    status: "not-started",
  },
];

export default function Lessons() {
  return (
    <div>
      {modules.map((module) => (
        <div key={module.id} className="border-b border-gray-200 pb-2 mb-2">
          <Link href="" className="flex flex-row gap-10 mx-4 my-4">
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
              <div className="flex flex-row justify-between items-center w-full">
                <span className="text-sm text-gray-600">{module.duration}</span>
                <span
                  className={`flex items-center justify-center text-sm w-24 h-6 rounded-md ${
                    module.status === "completed"
                      ? "bg-green-700 text-white"
                      : module.status === "in-progress"
                      ? "bg-yellow-400"
                      : module.status === "not-started"
                      ? "bg-gray-200"
                      : ""
                  }`}
                >
                  {module.status === "completed"
                    ? "Completed"
                    : module.status === "in-progress"
                    ? "In Progress"
                    : module.status === "not-started"
                    ? "Not Started"
                    : ""}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
