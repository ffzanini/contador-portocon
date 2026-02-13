"use client";

import { useState } from "react";
import { RiFileTextLine, RiCalculatorLine, RiTeamLine } from "react-icons/ri";
import { Section } from "@/components/ui/Section";
import { cn } from "@/libs/cn";
import {
  ACCOUNTING_SERVICES,
  TAX_SERVICES,
  LABOR_SERVICES,
} from "@/constants/services";

type TabId = "contabil" | "fiscal" | "trabalhista";

const AREAS: Array<{
  id: TabId;
  label: string;
  title: string;
  icon: (active: boolean) => React.ReactNode;
  services: readonly { title: string; description: string }[];
}> = [
  {
    id: "contabil",
    label: "Contábil",
    title: ACCOUNTING_SERVICES.title,
    icon: (active) => <RiFileTextLine className={active ? "h-6 w-6" : "h-5 w-5"} />,
    services: ACCOUNTING_SERVICES.services,
  },
  {
    id: "fiscal",
    label: "Fiscal",
    title: TAX_SERVICES.title,
    icon: (active) => <RiCalculatorLine className={active ? "h-6 w-6" : "h-5 w-5"} />,
    services: TAX_SERVICES.services,
  },
  {
    id: "trabalhista",
    label: "Trabalhista",
    title: LABOR_SERVICES.title,
    icon: (active) => <RiTeamLine className={active ? "h-6 w-6" : "h-5 w-5"} />,
    services: LABOR_SERVICES.services,
  },
];

export function ServicesTabsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("contabil");
  const activeArea = AREAS.find((a) => a.id === activeTab) ?? AREAS[0];

  return (
    <Section className="pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/80">
          <nav
            className="flex flex-wrap justify-center gap-0 border-b border-gray-200 bg-gray-50/80"
            aria-label="Áreas de serviço"
          >
            {AREAS.map((area) => (
              <button
                key={area.id}
                type="button"
                onClick={() => setActiveTab(area.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-4 text-base font-semibold transition-colors md:px-8 md:py-5 md:text-lg",
                  activeTab === area.id
                    ? "border-b-2 border-primary-600 bg-white text-primary-700 -mb-px"
                    : "border-b-2 border-transparent text-gray-500 hover:bg-white/60 hover:text-gray-700"
                )}
                aria-selected={activeTab === area.id}
                role="tab"
              >
                <span
                  className={cn(
                    "flex shrink-0",
                    activeTab === area.id ? "text-primary-600" : "text-gray-400"
                  )}
                >
                  {area.icon(activeTab === area.id)}
                </span>
                <span>{area.label}</span>
              </button>
            ))}
          </nav>
          <div
            role="tabpanel"
            id={`panel-${activeArea.id}`}
            aria-labelledby={`tab-${activeArea.id}`}
            className="px-6 pb-10 pt-10 md:px-10 md:pb-12 md:pt-12"
          >
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {activeArea.title}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activeArea.services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-gray-50/80 p-6 transition-shadow hover:shadow-md border border-gray-100"
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
        </div>
      </div>
    </Section>
  );
}
