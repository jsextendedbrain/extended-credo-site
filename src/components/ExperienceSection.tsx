import { employments, boardPositions } from "@/data/profile";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">Work History</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-6" />

          <div className="space-y-8">
            {employments.map((e, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-secondary border-2 border-background" />
                <div>
                  <p className="text-xs font-medium text-accent mb-1">{e.period}</p>
                  <h3 className="text-base font-semibold text-foreground">{e.role}</h3>
                  <p className="text-sm text-secondary font-medium mb-2">{e.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board positions */}
        <h3 className="text-2xl font-semibold text-foreground mt-16 mb-8">Board Positions & Independent Projects</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {boardPositions.map((b, i) => (
            <div key={i} className="bg-card rounded-lg p-5 border border-border shadow-card">
              <p className="text-xs font-medium text-accent mb-1">{b.period}</p>
              <h4 className="text-base font-semibold text-foreground">{b.role} – {b.organization}</h4>
              <p className="text-sm text-muted-foreground mt-2">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
