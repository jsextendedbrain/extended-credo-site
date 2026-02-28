import { profile } from "@/data/profile";
import { Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/johanna-portrait.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-card">
                <img
                  src={portrait}
                  alt={`${profile.name} – ${profile.company}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3">
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-2">{profile.name}</h1>
              <p className="text-secondary font-medium mb-6">{profile.tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {profile.profileSummary}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I combine strategic leadership with hands-on execution, working closely with cross-functional teams and stakeholders to turn business needs into scalable and sustainable solutions. I believe in agile ways of working and I am driven by creating long-term value at the intersection of business, technology, and users.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {profile.keySkills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <Mail size={16} /> Get in touch
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">{profile.education}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-foreground mb-2">Languages</h3>
                <p className="text-sm text-muted-foreground">{profile.languages.join(" · ")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
