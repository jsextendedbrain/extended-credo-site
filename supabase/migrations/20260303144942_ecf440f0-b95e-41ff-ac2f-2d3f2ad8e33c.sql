
-- CMS content sections table (key-value JSON approach)
CREATE TABLE public.cms_sections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_key TEXT NOT NULL UNIQUE,
  content JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.cms_sections ENABLE ROW LEVEL SECURITY;

-- Anyone can read CMS content (public site)
CREATE POLICY "Anyone can read CMS content"
  ON public.cms_sections FOR SELECT
  USING (true);

-- Only authenticated users can update CMS content
CREATE POLICY "Authenticated users can update CMS content"
  ON public.cms_sections FOR UPDATE
  TO authenticated
  USING (true);

-- Only authenticated users can insert CMS content
CREATE POLICY "Authenticated users can insert CMS content"
  ON public.cms_sections FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Seed default content from the existing profile data
INSERT INTO public.cms_sections (section_key, content) VALUES
('hero', '{
  "company": "Extended Brain",
  "tagline": "Digital Products, Strategy & IT-Leadership",
  "introText": "We help organisations clarify, stabilise, and develop their digital products, platforms, and ways of working — bridging strategy and execution with senior expertise."
}'::jsonb),
('contact', '{
  "name": "Johanna Saidi",
  "email": "johanna.saidi@gmail.com",
  "phone": "+46 73 078 70 38",
  "linkedin": "https://linkedin.com/in/johannasaidi",
  "profileSummary": "Senior product and technology leader with 15+ years of experience across large-scale organizations and smaller businesses. A pragmatic problem solver comfortable taking responsibility in complex environments — clarifying, stabilising, and developing products, platforms, and ways of working.",
  "languages": ["Swedish (native)", "English (fluent)", "German (basic)"],
  "education": "Master of Science in Media Technology, Management Control, IT, Communication and Organizational Design – Linköping University (1997–2004)"
}'::jsonb),
('assignments', '[
  {"title":"New E-com Platform & E2E Order Integrations","role":"Product Manager","company":"Rapunzel of Sweden AB","period":"2025–2026","highlights":["End-to-end ownership of order domain during e-commerce platform change","Integrations with ERP, WMS, and return management systems","Cross-team coordination across D2C and wholesale flows"]},
  {"title":"Modernize the System Landscape","role":"Head of IT and Development – CPO/CTO","company":"Rapunzel of Sweden AB","period":"2020–2026","highlights":["Led modernization of the entire system landscape for scalability and growth","Phased, risk-aware roadmap balancing speed, stability, and investment","Company achieved ~25% profitable growth during this period"]},
  {"title":"New CRM Solution (Voyado Engage)","role":"Product & Project Manager","company":"Rapunzel of Sweden AB","period":"2023–2024","highlights":["Evaluated and selected new CRM platform","Led implementation coordinating internal teams, vendor, and external developers","Rollout planning and quality assurance for smooth transition"]},
  {"title":"E-commerce & Omnichannel Platform","role":"Senior Product Owner & Agile Delivery Lead","company":"H&M New Business","period":"2017–2019","highlights":["Global product management for shared platform across 5 H&M Group brands","Enabled new market launches and large-scale rollouts","Managed team of product owners and delivery leads"]},
  {"title":"New Checkout & Campaign Management","role":"Product Manager","company":"Rapunzel of Sweden AB","period":"2021–2022","highlights":["Led analysis to identify root causes of technical and business challenges","Delivered new checkout, flexible campaign management, and stable architecture","Reduced technical issues and increased conversion"]}
]'::jsonb),
('experience', '[
  {"company":"Rapunzel of Sweden AB","role":"Head of Development & IT – CPO/CTO","period":"2020–2026","description":"Overall responsibility for IT and technology development across e-commerce, ERP, POS, infrastructure, and the digital workplace. Member of the management team. Led digital product development, IT stability & security, and AI enablement."},
  {"company":"H&M AB","role":"Head of Product Management & Agile Business Solution","period":"2019–2020","description":"Led a team of 12 product owners and delivery leads, driving platform stability, customer experience, and digital expansion for H&M Group brands."},
  {"company":"H&M AB","role":"Senior Product Owner & Agile Delivery Lead","period":"2018–2019","description":"Product Owner and Business Solution Lead for shared e-commerce/omnichannel platform for H&M Group brands. Transition from project to stable maintenance organisation."},
  {"company":"H&M AB","role":"Project Business Solution Lead – New E-commerce","period":"2016–2018","description":"Overall responsible for the business solution and member of program management for building a new shared e-commerce solution for H&M Group brands."},
  {"company":"H&M AB","role":"Program Manager – Marketing IT & Business Development","period":"2014–2016","description":"Managed development portfolio and led a team of project managers. Key projects implementing PIM and DAM systems."},
  {"company":"H&M AB","role":"IT Delivery Manager – Marketing Solutions","period":"2012–2014","description":"Led several teams delivering IT solutions to Marketing including CRM, Digital Campaigns, PIM/DAM and Digital Signs."},
  {"company":"H&M AB","role":"IT Delivery Manager / Agile Team Lead","period":"2011–2012","description":"Managed three development teams focused on marketing platforms including CRM, Digital Campaigns, Microsites and Price signs."},
  {"company":"H&M AB","role":"Team Lead / Product Owner","period":"2008–2011","description":"Team leader and Product Owner of developers and testers working with H&M digital campaigns and microsites."},
  {"company":"H&M AB","role":"Business Analyst","period":"2006–2008","description":"Analysis and documentation of requirements for hm.com including a custom-built CMS."},
  {"company":"Generic Systems AB","role":"IT & Management Consultant","period":"2004–2006","description":"Projects for the Swedish Defense including business analysis, modeling, UX-Design and programming."}
]'::jsonb),
('courses', '[
  {"category":"AI","courses":["Design av AI agenter – Abundly"]},
  {"category":"Product Management","courses":["Effective User Stories for Agile Requirements","Management 3.0 – Citerus","Modellering och modelleringsledning – Astrakan","Praktisk kravhantering – Astrakan"]},
  {"category":"IT Management","courses":["Personal data protection – H&M","Buying Services – H&M","Avtal & Förhandling – H&M","PPS for steering groups – Tieto Enator","IT-leadership program – H&M"]},
  {"category":"Project Management","courses":["PPS for steering groups – Tieto Enator","PPS portfolio management – Tieto Enator","PPS – Praktisk projektstyrning – Tieto Enator"]},
  {"category":"Leadership","courses":["Feedback for leaders – H&M","Management 3.0 – Citerus","IT-leadership program – H&M","Ditt ledarskap – H&M","Symboliskt ledarskap – H&M"]}
]'::jsonb);

-- Create storage bucket for CMS images
INSERT INTO storage.buckets (id, name, public) VALUES ('cms-images', 'cms-images', true);

-- Storage policies
CREATE POLICY "Anyone can view CMS images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'cms-images');

CREATE POLICY "Authenticated users can upload CMS images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'cms-images');

CREATE POLICY "Authenticated users can update CMS images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'cms-images');

CREATE POLICY "Authenticated users can delete CMS images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'cms-images');
