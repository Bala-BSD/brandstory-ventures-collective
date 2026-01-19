import { ExternalLink } from "lucide-react";
import { Company } from "@/data/portfolio";

interface CompanyCardProps {
  company: Company;
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Digital Marketing": "bg-blue-500/20 text-blue-400",
    "AI & Technology": "bg-purple-500/20 text-purple-400",
    "Design & UX": "bg-pink-500/20 text-pink-400",
    "HR & Talent": "bg-green-500/20 text-green-400",
    "Content & Media": "bg-orange-500/20 text-orange-400",
    "B2B Services": "bg-cyan-500/20 text-cyan-400",
    "Professional Services": "bg-indigo-500/20 text-indigo-400",
    "Real Estate": "bg-amber-500/20 text-amber-400",
    "Manufacturing": "bg-red-500/20 text-red-400",
    "Sustainability": "bg-emerald-500/20 text-emerald-400",
    "Consumer": "bg-rose-500/20 text-rose-400",
  };
  return colors[category] || "bg-muted text-muted-foreground";
};

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <div className="group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-hover h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center">
          <span className="font-display text-lg font-bold text-primary">
            {company.name.charAt(0)}
          </span>
        </div>
        {company.website && (
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {company.name}
      </h3>

      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit ${getCategoryColor(company.category)}`}>
        {company.category}
      </span>

      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
        {company.description}
      </p>

      {company.ownership && (
        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">
            Leadership: <span className="text-foreground">{company.ownership}</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default CompanyCard;
