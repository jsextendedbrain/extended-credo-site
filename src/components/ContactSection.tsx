import { useCmsSection } from "@/hooks/useCmsSection";
import { profile } from "@/data/profile";
import { Mail, Phone, Linkedin } from "lucide-react";

interface ContactContent {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  profileSummary: string;
  languages: string[];
  education: string;
}

const contactFallback: ContactContent = {
  name: profile.name,
  email: profile.email,
  phone: profile.phone,
  linkedin: profile.linkedin,
  profileSummary: profile.profileSummary,
  languages: profile.languages,
  education: profile.education,
};

const ContactSection = () => {
  const { data: contact } = useCmsSection<ContactContent>("contact", contactFallback);
  const c = contact ?? contactFallback;

  return (
    <section id="contact" className="section-padding bg-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/8 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-secondary/8 translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Get in touch</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
          Let's Work Together
        </h2>
        <p className="text-primary-foreground/50 mb-12 max-w-lg mx-auto">
          Looking for a senior product and technology leader? Let's talk about how I can help your organization.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${c.email}`}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity text-sm"
          >
            <Mail size={16} />
            {c.email}
          </a>
          <a
            href={`tel:${c.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-primary-foreground/80 border border-primary-foreground/15 font-medium hover:border-primary-foreground/30 transition-colors text-sm"
          >
            <Phone size={16} />
            {c.phone}
          </a>
          <a
            href={c.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-primary-foreground/80 border border-primary-foreground/15 font-medium hover:border-primary-foreground/30 transition-colors text-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
