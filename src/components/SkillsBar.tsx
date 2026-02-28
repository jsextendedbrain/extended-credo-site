import { profile } from "@/data/profile";

const SkillsBar = () => {
  return (
    <section className="py-12 px-6 bg-muted/50 border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {profile.keySkills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-xs font-medium bg-card text-foreground border border-border shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsBar;
