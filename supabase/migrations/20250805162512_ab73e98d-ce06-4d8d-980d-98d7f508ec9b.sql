-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('personal', 'client')),
  description TEXT,
  skills TEXT[] DEFAULT '{}',
  image_url TEXT,
  website_url TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create media table
CREATE TABLE public.media (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('image', 'video')),
  title TEXT,
  description TEXT,
  file_url TEXT NOT NULL,
  gallery_type TEXT NOT NULL CHECK (gallery_type IN ('events', 'portfolio', 'videos')),
  display_order INTEGER DEFAULT 0,
  upload_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create notion_pages table
CREATE TABLE public.notion_pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  notion_url TEXT NOT NULL,
  display_order INTEGER NOT NULL CHECK (display_order IN (1, 2, 3)),
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(display_order)
);

-- Create profile table
CREATE TABLE public.profile (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  about TEXT,
  profile_image_url TEXT,
  social_links JSONB DEFAULT '{}',
  contact_info JSONB DEFAULT '{}',
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notion_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profile ENABLE ROW LEVEL SECURITY;

-- Create policies (public read, admin write for now)
CREATE POLICY "Anyone can view projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Anyone can view media" ON public.media FOR SELECT USING (true);
CREATE POLICY "Anyone can view notion pages" ON public.notion_pages FOR SELECT USING (true);
CREATE POLICY "Anyone can view profile" ON public.profile FOR SELECT USING (true);

-- Admin policies (for now, any authenticated user can manage - you can restrict this later)
CREATE POLICY "Authenticated users can manage projects" ON public.projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage media" ON public.media FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage notion pages" ON public.notion_pages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage profile" ON public.profile FOR ALL USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_notion_pages_updated_at
  BEFORE UPDATE ON public.notion_pages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_profile_updated_at
  BEFORE UPDATE ON public.profile
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default profile if none exists
INSERT INTO public.profile (name, about, social_links, contact_info)
VALUES (
  'Your Name',
  'Your bio goes here...',
  '{"linkedin": "", "instagram": "", "email": "", "whatsapp": "", "x": ""}',
  '{"availability": "Available for new projects", "preferences": ""}'
) ON CONFLICT DO NOTHING;