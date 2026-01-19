import { useState } from "react";
import { companies, categories } from "@/data/portfolio";
import CompanyCard from "./CompanyCard";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCompanies = activeCategory === "All"
    ? companies
    : companies.filter((company) => company.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gradient-dark relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-gradient-gold">Ventures</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A diverse portfolio of companies spanning technology, services, and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Company Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCompanies.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No companies found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
