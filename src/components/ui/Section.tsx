import { cn } from "@/libs/cn";
import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  padding?: "default" | "large";
  id?: string;
}

export function Section({
  children,
  className,
  padding = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        padding === "large" ? "section-padding-lg" : "section-padding",
        className
      )}
    >
      <div className="container-padding mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
