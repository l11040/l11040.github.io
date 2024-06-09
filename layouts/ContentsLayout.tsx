import { ReactNode } from "react";
import TypoHeader from "@/components/common/TypoHeader";

interface ContentsLayoutProps {
  children: ReactNode | ReactNode[];
  title: string;
}

export default function ContentsLayout({
  children,
  title,
}: ContentsLayoutProps) {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <TypoHeader title={title} />
      {children}
    </div>
  );
}
