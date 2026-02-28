import { courses, profile } from "@/data/profile";
import { GraduationCap, BookOpen } from "lucide-react";

const CoursesSection = () => {
  return (
    <section id="courses" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">Courses & Education</h2>

        {/* Education */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-card mb-10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
            <GraduationCap size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Education</h3>
            <p className="text-sm text-muted-foreground">{profile.education}</p>
          </div>
        </div>

        {/* Courses grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((cat, i) => (
            <div key={i} className="bg-card rounded-lg p-6 border border-border shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={16} className="text-secondary" />
                <h3 className="font-semibold text-foreground text-sm">{cat.category}</h3>
              </div>
              <ul className="space-y-2">
                {cat.courses.map((c, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-secondary mt-0.5 shrink-0">–</span>
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
