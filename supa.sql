-- 1. Insert Mock Profiles (Using generated UUIDs for demo)
-- Note: In production, these IDs come from auth.users. 
-- For this seed script to work without Auth, we insert directly.

INSERT INTO public.profiles (id, full_name, role, is_verified, phone_number)
VALUES 
  ('d0d89052-5a23-4567-89ab-cdef01234567', 'Chinedu Okafor', 'citizen', true, '+234 800 000 0000'),
  ('a1b2c3d4-e5f6-4789-0123-456789abcdef', 'Amina Yusuf', 'citizen', true, '+234 800 111 2222'),
  ('f1e2d3c4-b5a6-4978-3210-fedcba987654', 'NEMA Coordinator', 'responder', true, '+234 700 999 9999');

-- 2. Insert Active Incidents
INSERT INTO public.incidents (title, description, type, severity, status, location, address, affected_count, verified_count)
VALUES 
  (
    'Flash Flood Warning', 
    'Severe flooding reported in Lekki Phase 1. Water levels rising rapidly. Avoid low-lying areas.', 
    'flood', 
    'critical', 
    'verified', 
    ST_Point(3.4731, 6.4474)::geography, -- Lekki, Lagos
    'Lekki Phase 1, Lagos', 
    1200, 
    342
  ),
  (
    'Bridge Collapse', 
    'Structural failure reported at Kano bridge. Traffic halted.', 
    'collapse', 
    'high', 
    'verified', 
    ST_Point(8.5200, 11.9964)::geography, -- Kano
    'Kano State', 
    45, 
    89
  ),
  (
    'Market Fire', 
    'Fire outbreak at main market. Fire services en route.', 
    'fire', 
    'critical', 
    'verified', 
    ST_Point(7.3986, 9.0765)::geography, -- Abuja
    'Wuse Market, Abuja', 
    500, 
    120
  );

-- 3. Insert Alerts
INSERT INTO public.alerts (title, message, type, severity, location, affected_radius_meters)
VALUES 
  (
    'Evacuation Order', 
    'Immediate evacuation ordered for Residents of Coastal Road due to storm surge.', 
    'flood', 
    'critical', 
    ST_Point(3.4200, 6.4300)::geography, 
    5000
  ),
  (
    'Heavy Rain Forecast', 
    'Expect heavy downpour in the next 4 hours. Clear drainages.', 
    'flood', 
    'medium', 
    ST_Point(3.3792, 6.5244)::geography, 
    20000
  );

-- 4. Insert Donations (Matching the Impact Page)
INSERT INTO public.donations (amount, currency, frequency)
VALUES 
  (5000, 'NGN', 'once'),
  (10000, 'NGN', 'monthly'),
  (25000, 'NGN', 'once'),
  (1000, 'NGN', 'once'),
  (50000, 'NGN', 'once');

-- 5. Insert Library Guides
INSERT INTO public.safety_guides (title, category, read_time_minutes, thumbnail_url)
VALUES 
  ('Emergency Go-Bag Guide', 'Preparedness', 10, 'https://picsum.photos/400/250'),
  ('CPR Basics', 'First Aid', 5, 'https://picsum.photos/401/250'),
  ('Flood Safety Protocols', 'Floods', 8, 'https://picsum.photos/402/250');

-- 6. Insert Responder Unit Status
INSERT INTO public.responder_units (unit_code, status, vehicle_type, eta_minutes)
VALUES 
  ('NEMA-Lagos-04', 'en_route', 'ambulance', 12),
  ('NEMA-Abuja-01', 'on_scene', 'truck', 0),
  ('Drone-Recon-09', 'idle', 'drone', null);