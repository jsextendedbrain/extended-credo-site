import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import heroBgGraphic from "@/assets/hero-bg-graphic.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background speech bubble graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={heroBgGraphic}
          alt=""
          className="w-[500px] md:w-[700px] lg:w-[900px] opacity-10"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
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
          We help organisations clarify, stabilise, and develop their digital products, platforms, and ways of working — bridging strategy and execution with senior expertise.
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
