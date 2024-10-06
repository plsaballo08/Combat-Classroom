import Image from "next/image";
import Link from "next/link";
import NavItem from "./nav-item";

export default function AdminHeader() {
  return (
    <header className="bg-primary text-white flex justify-between h-14 px-10 items-center fixed w-full">
      <div className="flex items-center gap-12">
        <Link href="/admin">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Logo of Philippine Army"
              width={32}
              height={32}
            ></Image>
            <p className="font-bold text-2xl">PALMS</p>
          </div>
        </Link>
        <nav>
          <ul className="flex text-sm gap-4">
            <NavItem href="/admin" label="Dashboard" path="/admin" />
            <NavItem
              href="/admin/registration"
              label="Registration"
              path="/admin/registration"
            />
            <NavItem
              href="/admin/manage-courses"
              label="Manage Courses"
              path="/admin/manage-courses"
            />
            <NavItem
              href="/admin/manage-users"
              label="Manage Users"
              path="/admin/manage-users"
            />
          </ul>
        </nav>
      </div>
      <div className="flex gap-2 items-center">
        <Image
          src="/icons/logout.svg"
          alt="Log out icon"
          width={16}
          height={16}
        />
        <span className="text-sm">Log out</span>
      </div>
    </header>
  );
}
