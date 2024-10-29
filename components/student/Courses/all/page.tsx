"use client";

import Completed from "../completed/page";
import InProgress from "../in_progress/page";
import NotStarted from "../not_started/page";

export default function AllModules() {
  return (
    <div className="flex flex-col gap-3">
      <NotStarted />
      <InProgress />
      <Completed />
    </div>
  );
}
