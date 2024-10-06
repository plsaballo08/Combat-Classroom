"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, path }) => {
  const pathname = usePathname();

  return (
    <li className={`p-1 px-0 ${pathname === path ? "border-b" : ""}`}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default NavItem;
