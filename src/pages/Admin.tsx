import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCmsSection, useCmsUpdate } from "@/hooks/useCmsSection";
import { toast } from "sonner";
import { LogOut, Save, Plus, Trash2 } from "lucide-react";
import type { Assignment, Employment, CourseCategory } from "@/data/profile";

interface HeroContent {
  company: string;
  tagline: string;
  introText: string;
}

interface ContactContent {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  profileSummary: string;
  languages: string[];
  education: string;
}

const heroFallback: HeroContent = { company: "", tagline: "", introText: "" };
const contactFallback: ContactContent = { name: "", email: "", phone: "", linkedin: "", profileSummary: "", languages: [], education: "" };

type Tab = "hero" | "assignments" | "experience" | "courses" | "contact";

const Admin = () => {
  const { user, loading, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("hero");

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  const tabs: { key: Tab; label: string }[] = [
    { key: "hero", label: "Hero" },
    { key: "assignments", label: "Assignments" },
    { key: "experience", label: "Experience" },
    { key: "courses", label: "Courses" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-foreground">CMS Admin</h1>
        <Button variant="outline" size="sm" onClick={signOut}>
          <LogOut size={14} className="mr-2" /> Sign Out
        </Button>
      </header>

      <div className="flex border-b border-border px-6 gap-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === t.key
                ? "border-accent text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {activeTab === "hero" && <HeroEditor />}
        {activeTab === "assignments" && <AssignmentsEditor />}
        {activeTab === "experience" && <ExperienceEditor />}
        {activeTab === "courses" && <CoursesEditor />}
        {activeTab === "contact" && <ContactEditor />}
      </div>
    </div>
  );
};

function HeroEditor() {
  const { data, isLoading } = useCmsSection<HeroContent>("hero", heroFallback);
  const update = useCmsUpdate("hero");
  const [form, setForm] = useState<HeroContent | null>(null);

  const current = form ?? data ?? heroFallback;

  const handleSave = async () => {
    try {
      await update.mutateAsync(current);
      toast.success("Hero updated");
    } catch {
      toast.error("Failed to update");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground mb-4">Hero Section</h2>
      <div>
        <label className="text-sm font-medium text-foreground mb-1 block">Company Name</label>
        <Input value={current.company} onChange={(e) => setForm({ ...current, company: e.target.value })} />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-1 block">Tagline</label>
        <Input value={current.tagline} onChange={(e) => setForm({ ...current, tagline: e.target.value })} />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-1 block">Intro Text</label>
        <Textarea value={current.introText} onChange={(e) => setForm({ ...current, introText: e.target.value })} rows={4} />
      </div>
      <Button onClick={handleSave} disabled={update.isPending}>
        <Save size={14} className="mr-2" /> {update.isPending ? "Saving..." : "Save"}
      </Button>
    </div>
  );
}

function AssignmentsEditor() {
  const { data, isLoading } = useCmsSection<Assignment[]>("assignments", []);
  const update = useCmsUpdate("assignments");
  const [items, setItems] = useState<Assignment[] | null>(null);

  const current = items ?? data ?? [];

  const updateItem = (index: number, field: keyof Assignment, value: string | string[]) => {
    const updated = [...current];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const addItem = () => {
    setItems([...current, { title: "", role: "", company: "", period: "", highlights: [""] }]);
  };

  const removeItem = (index: number) => {
    setItems(current.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    try {
      await update.mutateAsync(current);
      toast.success("Assignments updated");
    } catch {
      toast.error("Failed to update");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Assignments</h2>
        <Button variant="outline" size="sm" onClick={addItem}><Plus size={14} className="mr-1" /> Add</Button>
      </div>
      {current.map((a, i) => (
        <div key={i} className="bg-card border border-border rounded-lg p-5 space-y-3">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-muted-foreground">#{i + 1}</span>
            <Button variant="ghost" size="sm" onClick={() => removeItem(i)}><Trash2 size={14} /></Button>
          </div>
          <Input placeholder="Title" value={a.title} onChange={(e) => updateItem(i, "title", e.target.value)} />
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="Role" value={a.role} onChange={(e) => updateItem(i, "role", e.target.value)} />
            <Input placeholder="Company" value={a.company} onChange={(e) => updateItem(i, "company", e.target.value)} />
          </div>
          <Input placeholder="Period" value={a.period} onChange={(e) => updateItem(i, "period", e.target.value)} />
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Highlights (one per line)</label>
            <Textarea
              value={a.highlights.join("\n")}
              onChange={(e) => updateItem(i, "highlights", e.target.value.split("\n"))}
              rows={3}
            />
          </div>
        </div>
      ))}
      <Button onClick={handleSave} disabled={update.isPending}>
        <Save size={14} className="mr-2" /> {update.isPending ? "Saving..." : "Save"}
      </Button>
    </div>
  );
}

function ExperienceEditor() {
  const { data, isLoading } = useCmsSection<Employment[]>("experience", []);
  const update = useCmsUpdate("experience");
  const [items, setItems] = useState<Employment[] | null>(null);

  const current = items ?? data ?? [];

  const updateItem = (index: number, field: keyof Employment, value: string) => {
    const updated = [...current];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const addItem = () => {
    setItems([...current, { company: "", role: "", period: "", description: "" }]);
  };

  const removeItem = (index: number) => {
    setItems(current.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    try {
      await update.mutateAsync(current);
      toast.success("Experience updated");
    } catch {
      toast.error("Failed to update");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Work Experience</h2>
        <Button variant="outline" size="sm" onClick={addItem}><Plus size={14} className="mr-1" /> Add</Button>
      </div>
      {current.map((e, i) => (
        <div key={i} className="bg-card border border-border rounded-lg p-5 space-y-3">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-muted-foreground">#{i + 1}</span>
            <Button variant="ghost" size="sm" onClick={() => removeItem(i)}><Trash2 size={14} /></Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="Role" value={e.role} onChange={(e) => updateItem(i, "role", e.target.value)} />
            <Input placeholder="Company" value={e.company} onChange={(e) => updateItem(i, "company", e.target.value)} />
          </div>
          <Input placeholder="Period" value={e.period} onChange={(e) => updateItem(i, "period", e.target.value)} />
          <Textarea placeholder="Description" value={e.description} onChange={(e) => updateItem(i, "description", e.target.value)} rows={3} />
        </div>
      ))}
      <Button onClick={handleSave} disabled={update.isPending}>
        <Save size={14} className="mr-2" /> {update.isPending ? "Saving..." : "Save"}
      </Button>
    </div>
  );
}

function CoursesEditor() {
  const { data, isLoading } = useCmsSection<CourseCategory[]>("courses", []);
  const update = useCmsUpdate("courses");
  const [items, setItems] = useState<CourseCategory[] | null>(null);

  const current = items ?? data ?? [];

  const updateCategory = (index: number, value: string) => {
    const updated = [...current];
    updated[index] = { ...updated[index], category: value };
    setItems(updated);
  };

  const updateCourses = (index: number, value: string) => {
    const updated = [...current];
    updated[index] = { ...updated[index], courses: value.split("\n").filter(Boolean) };
    setItems(updated);
  };

  const addCategory = () => {
    setItems([...current, { category: "", courses: [""] }]);
  };

  const removeCategory = (index: number) => {
    setItems(current.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    try {
      await update.mutateAsync(current);
      toast.success("Courses updated");
    } catch {
      toast.error("Failed to update");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Courses & Education</h2>
        <Button variant="outline" size="sm" onClick={addCategory}><Plus size={14} className="mr-1" /> Add Category</Button>
      </div>
      {current.map((cat, i) => (
        <div key={i} className="bg-card border border-border rounded-lg p-5 space-y-3">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-muted-foreground">#{i + 1}</span>
            <Button variant="ghost" size="sm" onClick={() => removeCategory(i)}><Trash2 size={14} /></Button>
          </div>
          <Input placeholder="Category name" value={cat.category} onChange={(e) => updateCategory(i, e.target.value)} />
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Courses (one per line)</label>
            <Textarea value={cat.courses.join("\n")} onChange={(e) => updateCourses(i, e.target.value)} rows={4} />
          </div>
        </div>
      ))}
      <Button onClick={handleSave} disabled={update.isPending}>
        <Save size={14} className="mr-2" /> {update.isPending ? "Saving..." : "Save"}
      </Button>
    </div>
  );
}

function ContactEditor() {
  const { data, isLoading } = useCmsSection<ContactContent>("contact", contactFallback);
  const update = useCmsUpdate("contact");
  const [form, setForm] = useState<ContactContent | null>(null);

  const current = form ?? data ?? contactFallback;

  const handleSave = async () => {
    try {
      await update.mutateAsync(current);
      toast.success("Contact updated");
    } catch {
      toast.error("Failed to update");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground mb-4">Contact Section</h2>
      <Input placeholder="Name" value={current.name} onChange={(e) => setForm({ ...current, name: e.target.value })} />
      <Input placeholder="Email" value={current.email} onChange={(e) => setForm({ ...current, email: e.target.value })} />
      <Input placeholder="Phone" value={current.phone} onChange={(e) => setForm({ ...current, phone: e.target.value })} />
      <Input placeholder="LinkedIn URL" value={current.linkedin} onChange={(e) => setForm({ ...current, linkedin: e.target.value })} />
      <div>
        <label className="text-sm font-medium text-foreground mb-1 block">Profile Summary</label>
        <Textarea value={current.profileSummary} onChange={(e) => setForm({ ...current, profileSummary: e.target.value })} rows={4} />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-1 block">Education</label>
        <Textarea value={current.education} onChange={(e) => setForm({ ...current, education: e.target.value })} rows={2} />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-1 block">Languages (one per line)</label>
        <Textarea
          value={current.languages.join("\n")}
          onChange={(e) => setForm({ ...current, languages: e.target.value.split("\n").filter(Boolean) })}
          rows={3}
        />
      </div>
      <Button onClick={handleSave} disabled={update.isPending}>
        <Save size={14} className="mr-2" /> {update.isPending ? "Saving..." : "Save"}
      </Button>
    </div>
  );
}

export default Admin;
