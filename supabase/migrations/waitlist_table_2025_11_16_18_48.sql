-- Create waitlist table for Ringo eSIM signups
CREATE TABLE IF NOT EXISTS public.waitlist_2025_11_16_18_48 (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.waitlist_2025_11_16_18_48 ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (anyone can join waitlist)
CREATE POLICY "Anyone can join waitlist" ON public.waitlist_2025_11_16_18_48
  FOR INSERT WITH CHECK (true);

-- Create policy for reading (authenticated users only)
CREATE POLICY "Authenticated users can view waitlist" ON public.waitlist_2025_11_16_18_48
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email_2025_11_16_18_48 ON public.waitlist_2025_11_16_18_48(email);