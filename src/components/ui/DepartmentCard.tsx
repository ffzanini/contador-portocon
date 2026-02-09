import Image from "next/image";
import { cn } from "@/libs/cn";

interface DepartmentCardProps {
  name: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  className?: string;
}

export function DepartmentCard({
  name,
  title,
  description,
  image,
  className,
}: DepartmentCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg",
        className
      )}
    >
      {image && (
        <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg">
          <Image
            src={image.src}
            alt={image.alt}
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
        {name}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
