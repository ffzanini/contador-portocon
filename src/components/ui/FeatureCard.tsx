"use client";

import { type ReactNode } from "react";
import { cn } from "@/libs/cn";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl bg-white p-6 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg",
        className
      )}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="flex-1 text-gray-600">{description}</p>
    </div>
  );
}
