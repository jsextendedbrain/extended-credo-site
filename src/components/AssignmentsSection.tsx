import { selectedAssignments } from "@/data/profile";
import { Briefcase } from "lucide-react";

const AssignmentsSection = () => {
  return (
    <section id="assignments" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">Selected Assignments</h2>
        <p className="text-muted-foreground mb-12 max-w-xl">Key projects and achievements across product management and technology leadership.</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selectedAssignments.map((a, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-border group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0 group-hover:bg-secondary/25 transition-colors">
                  <Briefcase size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-accent">{a.period}</p>
                  <h3 className="text-base font-semibold text-foreground leading-snug">{a.title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{a.role}</p>
              <p className="text-sm text-secondary font-medium mb-4">{a.company}</p>
              <ul className="space-y-2">
                {a.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-accent mt-1 shrink-0">•</span>
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
