# System Architecture

This project is built using a **Shared Database Architecture** where the Registration System and the Activity Map share a single Supabase instance.

## Key Components

1.  **Frontend:** Next.js 14 (App Router) hosted on AWS.
2.  **Backend:** Next.js Server Actions & API Routes (Serverless).
3.  **Database:** Supabase (PostgreSQL).
4.  **Auth:** Custom "2FA" implementation (Email + QR) validating against the shared `User` table.

## Detailed Documentation

- **[User & Queue Flow](./FLOWCHART.md)**: Visualizes how a user logs in, joins a queue, and interacts with activities.
- **[Database Schema (ERD)](./ERD.md)**: Details the table relationships, including the cross-team link to the Registration User table.

## Integration Points

- **Registration Team:** We read from their `User` table (Read-Only).
- **Physical Booths:** We validate against static QR codes printed at each booth.
