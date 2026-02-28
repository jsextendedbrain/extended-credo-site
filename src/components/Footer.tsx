import { profile } from "@/data/profile";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-foreground text-primary-foreground/60 text-center text-xs">
      <p>© {new Date().getFullYear()} {profile.company}. {profile.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
