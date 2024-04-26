import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  const classes = `relative bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 rounded-xl p-4 ${className}`;
  return <div className={classes}>{children}</div>;
}
