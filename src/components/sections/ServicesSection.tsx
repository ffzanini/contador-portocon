import { Section } from "@/components/ui/Section";
import { DepartmentCard } from "@/components/ui/DepartmentCard";
import { DEPARTMENTS } from "@/constants/protocon";

export function ServicesSection() {
  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Tenha todos os serviços da contabilidade organizados em um só lugar
        </h2>
        <p className="text-lg text-gray-600">
          Diga adeus para a interminável troca de emails com seu contador.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {DEPARTMENTS.map((dept, index) => (
          <DepartmentCard
            key={index}
            name={dept.name}
            title={dept.title}
            description={dept.description}
            image={dept.image}
          />
        ))}
      </div>
    </Section>
  );
}
