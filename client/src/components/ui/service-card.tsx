import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  className 
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-neutral-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow", 
      className
    )}>
      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-title font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};
