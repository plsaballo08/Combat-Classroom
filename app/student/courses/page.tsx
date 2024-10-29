"use client";

import AllModules from "@/components/student/Courses/all/page";
import Completed from "@/components/student/Courses/completed/page";
import InProgress from "@/components/student/Courses/in_progress/page";
import NotStarted from "@/components/student/Courses/not_started/page";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Not Started", "In Progress", "Completed"];
  return (
    <div className="flex flex-col py-10 px-14">
      <span className="text-lg font-bold">My Modules</span>
      <div className="border-b border-gray-200">
        <nav className=" flex gap-6 text-base pt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-sm font-medium pb-2 ${
                activeTab === tab
                  ? "border-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-400 hover:border-gray-300"
              } border-b-2 focus:outline-none`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        {activeTab === "All" && (
          <div>
            <AllModules />
          </div>
        )}
        {activeTab === "Not Started" && (
          <div>
            <NotStarted />
          </div>
        )}
        {activeTab === "In Progress" && (
          <div>
            <InProgress />
          </div>
        )}
        {activeTab === "Completed" && (
          <div>
            <Completed />
          </div>
        )}
      </div>
    </div>
  );
}
