import { profile } from "@/data/profile";

const SkillsBar = () => {
  return (
    <section className="py-16 px-6 bg-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-primary-foreground/40 text-xs font-medium uppercase tracking-[0.2em] mb-8">
          Core Expertise
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {profile.keySkills.map((skill, i) => (
            <span
              key={i}
              className="px-5 py-2.5 rounded-full text-xs font-medium text-primary-foreground/80 border border-primary-foreground/15 hover:border-accent/50 hover:text-accent transition-colors duration-300"
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
