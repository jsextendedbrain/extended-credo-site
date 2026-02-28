import { courses, profile } from "@/data/profile";
import { GraduationCap } from "lucide-react";

const CoursesSection = () => {
  return (
    <section id="courses" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Learning</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-14">
          Courses & Education
        </h2>

        {/* Education */}
        <div className="bg-foreground rounded-xl p-7 mb-12 flex items-start gap-5">
          <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
            <GraduationCap size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-primary-foreground mb-1">Education</h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">{profile.education}</p>
          </div>
        </div>

        {/* Courses grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((cat, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <h3 className="font-semibold text-foreground text-sm mb-4 pb-3 border-b border-border">
                {cat.category}
              </h3>
              <ul className="space-y-2.5">
                {cat.courses.map((c, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                    <span>{c}</span>
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

export default CoursesSection;
