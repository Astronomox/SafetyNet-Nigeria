
# SafetyNet Nigeria - Database Architecture

This document outlines the database schema designed for the SafetyNet Nigeria disaster response platform. The database is built on **PostgreSQL** using **Supabase**, leveraging **PostGIS** for geospatial capabilities.

## 1. Core Architecture Principles

1.  **Geospatial First**: Almost every major entity (`incidents`, `reports`, `profiles`) has a `location` column using PostGIS `geography(Point, 4326)`. This enables highly accurate "Find nearby help" or "Alert users within 5km" queries.
2.  **Role-Based Security**: Using Supabase RLS (Row Level Security), we distinguish between `citizens`, `responders`, and `admins`.
    *   *Citizens* can read data and submit reports.
    *   *Responders* can verify incidents and update statuses.
    *   *Admins* manage alerts and official data.
3.  **Real-Time Ready**: The schema is designed to work with Supabase Realtime for instant updates on the frontend (e.g., when a new incident is reported, it pops up on the map immediately).

## 2. Key Relationships

*   **Profiles (Users)**: The central identity table linked to Supabase Auth.
    *   `1:1` with `responder_units` (If the user is a professional responder).
    *   `1:Many` with `incidents` (As a reporter).
    *   `1:Many` with `incident_reports` (User submissions).
    *   `1:Many` with `donations`.

*   **Incidents vs. Reports**:
    *   `incident_reports` are raw, unverified data points from users.
    *   `incidents` are aggregated, verified events (official).
    *   A report can link to an incident via `incident_id`.

## 3. Table Overview

| Table Name | Description | Key Features |
| :--- | :--- | :--- |
| `profiles` | Extended user data | Stores user role, verification status, and live location. |
| `incidents` | Verified events | **Official** source of truth for the map. |
| `incident_reports` | Crowd-sourced data | Raw data from the "Report" button. |
| `alerts` | Notifications | System-wide broadcasts. |
| `responder_units` | Emergency teams | Tracks unit status (En Route, On Scene) and skills. |
| `resources` | Aid tracking | Inventory of relief materials (Food, Water). |
| `safety_guides` | Library content | Static content for the "Guides" section. |
| `donations` | Financials | Tracks funds raised for the Impact Dashboard. |

## 4. Geospatial Queries (PostGIS)

We use the `geography` data type which handles earth curvature calculations automatically (measuring in meters).

**Example: Finding incidents within 5km**
```sql
select * from incidents
where st_dwithin(
  location, 
  st_point(user_longitude, user_latitude)::geography, 
  5000
);
```

## 5. Next Steps for Implementation

1.  Create a new Supabase project.
2.  Go to the SQL Editor.
3.  Copy and paste the contents of `supabase/schema.sql`.
4.  Run the query.
5.  (Optional) Run `supabase/seed.sql` to populate with demo data.
