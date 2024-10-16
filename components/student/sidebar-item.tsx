import Image from "next/image";
import Link from "next/link";

interface SidebarItemProps {
  iconPath: string;
  altValue: string;
  redirectLink: string;
  label: string;
}

export default function SidebarItem({
  iconPath,
  altValue,
  redirectLink,
  label,
}: SidebarItemProps) {
  return (
    <Link href={redirectLink}>
      <div className="text-sm flex gap-2">
        <Image src={iconPath} alt={altValue} width={16} height={16} />
        <p>{label}</p>
      </div>
    </Link>
  );
}
