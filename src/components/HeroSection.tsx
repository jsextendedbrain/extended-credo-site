import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Layered background */}
      <div className="absolute inset-0">
        {/* Base texture - subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        {/* Large organic shapes */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-secondary/8" />
        <div className="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full bg-accent/6" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Large logo */}
        <div
          className="mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.05s" }}
        >
          <img
            src={logo}
            alt="Extended Brain"
            className="mx-auto h-32 md:h-44 lg:h-52 w-auto drop-shadow-lg"
          />
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          {profile.company}
        </h1>
        <p
          className="text-lg md:text-xl text-foreground/70 font-light tracking-widest uppercase mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {profile.tagline}
        </p>
        <div
          className="w-16 h-px bg-accent mx-auto mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        />
        <p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          {profile.profileSummary}
        </p>
        <button
          onClick={() =>
            document
              .getElementById("assignments")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="opacity-0 animate-fade-in-up text-accent hover:text-accent/80 transition-colors"
          style={{ animationDelay: "0.7s" }}
          aria-label="Scroll down"
        >
          <ArrowDown size={28} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
