import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Decorative overlapping shapes inspired by logo */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-[2rem] bg-secondary/20 rotate-12 blur-sm" />
      <div className="absolute top-32 right-24 w-48 h-48 rounded-[2rem] bg-accent/15 -rotate-6 blur-sm" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-[2rem] bg-secondary/10 rotate-45 blur-sm" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {profile.company}
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/80 font-light tracking-wide mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {profile.tagline}
        </p>
        <p
          className="text-base md:text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          {profile.profileSummary}
        </p>
        <button
          onClick={() => document.getElementById("assignments")?.scrollIntoView({ behavior: "smooth" })}
          className="opacity-0 animate-fade-in-up text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          style={{ animationDelay: "0.7s" }}
          aria-label="Scroll down"
        >
          <ArrowDown size={32} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
