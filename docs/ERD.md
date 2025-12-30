# Entity Relationship Diagram (ERD)

This document outlines the database schema for the Arduino Day PH 2025 Activity Map.

## Quick Links

- **[View Interactive Diagram on dbdiagram.io](https://dbdiagram.io/d/Activity-Map-ERD-6953781339fa3db27bca19fe)**
- **[View Database Dashboard (Supabase)](https://supabase.com/dashboard/project/YOUR_PROJECT_ID)**

---

## Visual Schema

![Database ERD Snapshot](./assets/erd-snapshot.png)

> *Note: This schema includes the shared `User` table from the Registration System.*

---

## Schema Details (Mermaid)

For quick reference directly in GitHub/VS Code:

```mermaid
erDiagram
    %% SHARED TABLE (Team A)
    Reg_User {
        UUID id PK "Shared ID"
        String email
        String name
        String personal_qr_code "Credential"
    }

    %% ACTIVITY MAP TABLES (Team B)
    Floor ||--|{ Activity : "contains"
    Activity ||--o{ QueueLog : "has"
    
    %% CROSS-TEAM RELATIONS
    Reg_User ||--o{ QueueLog : "joins"
    Reg_User ||--o{ Feedback : "writes"

    Floor {
        UUID id PK
        String name
        Int floor_number
    }

    Activity {
        UUID id PK
        UUID floor_id FK
        String name
        Int max_capacity
        Boolean is_active
    }

    QueueLog {
        UUID id PK
        UUID user_id FK
        UUID activity_id FK
        Enum status "WAITING, INSIDE, COMPLETED"
        DateTime joined_at
    }

    Feedback {
        UUID id PK
        UUID user_id FK
        UUID queue_log_id FK
        Int rating
    }
```
