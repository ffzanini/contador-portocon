"use client";

import { cn } from "@/libs/cn";
import Link from "next/link";
import { type ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}

export function CTAButton({
  children,
  href,
  variant = "primary",
  className,
  external = false,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";

  const variantStyles = {
    primary:
      "bg-primary-600 text-white hover:bg-secondary-600 hover:scale-105 focus:ring-secondary-500",
    secondary:
      "bg-white text-primary-600 border-2 border-primary-600 hover:bg-secondary-50 hover:border-secondary-600 hover:text-secondary-600 hover:scale-105 focus:ring-secondary-500",
  };

  const Component = external ? "a" : Link;
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <Component
      {...linkProps}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </Component>
  );
}
