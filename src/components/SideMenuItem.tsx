import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface SideMenuItemProps {
  icon: ReactNode; // SVG 아이콘을 받을 수 있도록 ReactNode 타입으로 변경
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
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive
            ? "group flex items-center rounded-lg bg-gray-100 p-4 text-gray-900 md:p-2 dark:bg-gray-700 dark:text-white"
            : "group flex items-center rounded-lg p-4 text-gray-900 hover:bg-gray-100 md:p-2 dark:text-white dark:hover:bg-gray-700"
        }
      >
        <div className="mx-auto flex h-5 w-5 flex-shrink-0 items-center justify-center text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
          {icon}
        </div>

        {/* sm 사이즈에서는 label 숨김 */}
        <span className="ms-3 hidden flex-1 whitespace-nowrap md:flex">
          {label}
        </span>
      </NavLink>
    </li>
  );
}
