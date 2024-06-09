import { ReactNode } from "react";
import ActiveLink from "@/components/common/ActiveLink";

interface SideMenuItemProps {
  icon: ReactNode;
  label: string;
  href?: string;
}

export default function SideMenuItem({
  icon,
  label,
  href = "/",
}: SideMenuItemProps) {
  return (
    <li className="flex-grow cursor-pointer">
      <ActiveLink
        href={href}
        className="group flex items-center rounded-lg p-4 text-gray-900 md:p-2 dark:text-white"
        activeClassName="bg-gray-100 dark:bg-gray-700"
      >
        <div className="mx-auto flex h-5 w-5 flex-shrink-0 items-center justify-center text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
          {icon}
        </div>
        <span className="ms-3 hidden flex-1 whitespace-nowrap md:flex">
          {label}
        </span>
      </ActiveLink>
    </li>
  );
}
