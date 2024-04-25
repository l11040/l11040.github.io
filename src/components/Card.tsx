import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className="relative bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 rounded-xl p-4">
            {children}
        </div>
    );
}