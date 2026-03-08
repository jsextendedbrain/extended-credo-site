import { ArrowUpRight } from "lucide-react";
import { selectedAssignments } from "@/data/profile";

const AssignmentsSection = () => {
  return (
    <section id="assignments" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
          Selected Assignments
        </h2>
        <p className="text-muted-foreground mb-14 max-w-xl">
          Key projects and achievements across product management and technology leadership.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selectedAssignments.map((a, i) => (
            <div
              key={i}
              className="group bg-card rounded-xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-[11px] font-semibold text-accent tracking-wide uppercase">{a.period}</p>
                  <h3 className="text-base font-semibold text-foreground leading-snug mt-1">
                    {a.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground/30 group-hover:text-secondary transition-colors shrink-0 mt-1"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-0.5">{a.role}</p>
              <p className="text-sm text-secondary font-medium mb-5">{a.company}</p>
              <ul className="space-y-2.5">
                {a.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssignmentsSection;
