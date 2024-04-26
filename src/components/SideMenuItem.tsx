import React, { ReactNode } from 'react';

interface SideMenuItemProps {
    icon: ReactNode; // SVG 아이콘을 받을 수 있도록 ReactNode 타입으로 변경
    label: string;
    href?: string;
}

export default function SideMenuItem({ icon, label, href }: SideMenuItemProps) {
    return (
        <li className='flex-grow cursor-pointer'>
            <a href={href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="mx-auto flex items-center justify-center flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    {icon}
                </div>

                {/* sm 사이즈에서는 label 숨김 */}
                <span className="flex-1 ms-3 whitespace-nowrap md:flex hidden">{label}</span>
            </a>
        </li>
    );
}
