// TableOfContentsPortal.tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Heading } from "../hooks/useTableOfContents";
import { useLocation } from "react-router-dom";
import Card from "./Card";

interface TableOfContentsPortalProps {
  headings: Heading[];
  containerId: string;
}

const TableOfContentsPortal: React.FC<TableOfContentsPortalProps> = ({
  headings,
  containerId,
}) => {
  const container = document.getElementById(containerId);
  const location = useLocation();

  useEffect(() => {
    const hash = decodeURIComponent(location.hash);

    try {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } catch {}
  }, [location]);

  return container
    ? ReactDOM.createPortal(
        <div className={`fixed bottom-0 left-0 right-0 z-20 md:relative`}>
          <Card className="max-h-[600px] overflow-y-auto overflow-x-hidden rounded-b-none !py-4 md:rounded-xl ">
            <ul>
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  className={`group flex items-center rounded-lg p-4 pl-0 text-gray-900 hover:bg-gray-100 md:p-2 dark:text-white dark:hover:bg-gray-700`}
                  style={{ marginLeft: `${(heading.level - 1) * 20}px` }}
                >
                  <a
                    href={`#${location.pathname}#${heading.id}`}
                    className="h-full w-full "
                  >
                    <span className="ms-1 flex-1 overflow-x-hidden text-ellipsis text-nowrap md:flex">
                      {heading.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </div>,
        container,
      )
    : null;
};

export default TableOfContentsPortal;
