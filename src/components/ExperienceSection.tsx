import { employments, boardPositions } from "@/data/profile";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-muted/40">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Career</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-14">Work History</h2>

        <div className="relative">
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border" />
          <div className="space-y-10">
            {employments.map((e, i) => (
              <div key={i} className="relative pl-10 group">
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-[3px] border-secondary bg-background group-hover:border-accent transition-colors" />
                <div>
                  <p className="text-[11px] font-semibold text-accent tracking-wide uppercase mb-1">{e.period}</p>
                  <h3 className="text-base font-semibold text-foreground">{e.role}</h3>
                  <p className="text-sm text-secondary font-medium mb-2">{e.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Side Projects</p>
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Board Positions & Independent Projects
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {boardPositions.map((b, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <p className="text-[11px] font-semibold text-accent tracking-wide uppercase mb-1">{b.period}</p>
                <h4 className="text-base font-semibold text-foreground">
                  {b.role} – {b.organization}
                </h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
