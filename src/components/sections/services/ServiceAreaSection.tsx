import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { cn } from "@/libs/cn";

interface Service {
  title: string;
  description: string;
}

interface ServiceAreaSectionProps {
  title: string;
  services: Service[];
  icon?: ReactNode;
  label?: string;
  accent?: "primary" | "secondary";
  className?: string;
}

export function ServiceAreaSection({
  title,
  services,
  icon,
  label,
  accent = "primary",
  className,
}: ServiceAreaSectionProps) {
  const accentColor =
    accent === "secondary"
      ? "text-secondary-600 bg-secondary-50"
      : "text-primary-600 bg-primary-50";

  return (
    <Section className={className}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          {label && (
            <span
              className={cn(
                "mb-3 inline-block text-xs font-semibold uppercase tracking-wider",
                accentColor
              )}
            >
              {label}
            </span>
          )}
          {icon && (
            <div
              className={cn(
                "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl",
                accentColor
              )}
            >
              <div className="text-2xl">{icon}</div>
            </div>
          )}
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg border border-gray-100"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
