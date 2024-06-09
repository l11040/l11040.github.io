"use client";

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useMemo } from 'react';

interface ActiveLinkProps extends LinkProps {
  className?: string;
  activeClassName: string;
  children: ReactNode;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ href, className, activeClassName, children, ...props }) => {
  const pathname = usePathname();

  // Memoize normalization to avoid recalculating on every render
  const normalizedHref = useMemo(() => {
    const normalize = (path: string) => {
      if (path === '/') return path;
      return path.endsWith('/') ? path.slice(0, -1) : path;
    };
    return normalize(href as string);
  }, [href]);

  const normalizedPathname = useMemo(() => {
    const normalize = (path: string) => {
      if (path === '/') return path;
      return path.endsWith('/') ? path.slice(0, -1) : path;
    };
    return normalize(pathname);
  }, [pathname]);

  const isActive = normalizedPathname === normalizedHref ||
    normalizedPathname.startsWith(`${normalizedHref}/`) ||
    (normalizedHref !== '/' && normalizedPathname.includes(normalizedHref));

  const combinedClassName = isActive ? `${className ?? ''} ${activeClassName}`.trim() : className;

  return (
    <Link href={href} {...props} className={combinedClassName}>
      {children}
    </Link>
  );
};

export default ActiveLink;
