-- Create storage buckets for project images and videos
INSERT INTO storage.buckets (id, name, public) VALUES 
  ('project-images', 'project-images', true),
  ('project-videos', 'project-videos', true);

-- Create policies for project images bucket
CREATE POLICY "Anyone can view project images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'project-images');

CREATE POLICY "Authenticated users can upload project images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'project-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update project images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'project-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete project images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'project-images' AND auth.role() = 'authenticated');

-- Create policies for project videos bucket
CREATE POLICY "Anyone can view project videos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'project-videos');

CREATE POLICY "Authenticated users can upload project videos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'project-videos' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update project videos" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'project-videos' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete project videos" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'project-videos' AND auth.role() = 'authenticated');