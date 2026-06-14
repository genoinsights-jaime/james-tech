"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useEffect } from "react";

type TransitionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export function TransitionLink({
  href,
  onClick,
  target,
  children,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      document.documentElement.classList.remove("jt-route-transition");
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      target === "_blank" ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const hrefValue = typeof href === "string" ? href : href.pathname ?? "";

    if (!hrefValue || hrefValue.startsWith("#")) {
      return;
    }

    event.preventDefault();
    document.documentElement.classList.add("jt-route-transition");

    window.setTimeout(() => {
      router.push(hrefValue);
    }, 140);
  };

  return (
    <Link href={href} target={target} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
