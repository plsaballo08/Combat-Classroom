import SidebarItem from "./sidebar-item";
import useStore from "../../globals/store";

export default function Sidebar() {
  const { isMenuOpen } = useStore();

  return (
    <aside
      className={`bg-primary flex flex-col gap-4 text-white h-screen absolute top-0 z-40 pt-24 px-6 w-60 transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="grid gap-2">
        <p className="font-semibold pb-1">Home</p>
        <SidebarItem
          iconPath="/icons/dashboard_fill1.svg"
          altValue="Dashboard Icon"
          redirectLink="/student"
          label="Dashboard"
        />
      </div>
      <hr />
      <div className="grid gap-2">
        <p className="font-semibold pb-1">Academics</p>
        <SidebarItem
          iconPath="/icons/courses_fill0.svg"
          altValue="Courses Icon"
          redirectLink="/student/courses"
          label="Courses"
        />
        <SidebarItem
          iconPath="/icons/assessments_fill0.svg"
          altValue="Assessments Icon"
          redirectLink="/student/assessments"
          label="Assessments"
        />
        <SidebarItem
          iconPath="/icons/learning_resources_fill0.svg"
          altValue="Learning Resources Icon"
          redirectLink="/student/learning-resources"
          label="Learning Resources"
        />
      </div>
      <hr />
      <div className="grid gap-2">
        <p className="font-semibold pb-1">Records</p>
        <SidebarItem
          iconPath="/icons/grades_fill0.svg"
          altValue="Grades Icon"
          redirectLink="/student/grades"
          label="Grades"
        />
      </div>
      <hr />
    </aside>
  );
}
