# 🏗️ System Architecture

This project is a **Queue & Capacity Management System** built on a **Shared Database Architecture**. It operates in tandem with the Event Registration Website to manage crowd flow, itineraries, and activity access.

## 🧩 Key Principles

1.  **Shared Identity:** We do not create new users. We strictly read user identities from the Registration Database.
2.  **Queue Credentialing:** The QR Code scan is used solely to identify the user for queuing purposes and itinerary verification.
3.  **Itinerary-Based Priority:**
    * **Priority Users:** Visitors with a pre-booked itinerary for a specific section get immediate access.
    * **Walk-in Users:** Visitors without an itinerary for the section must join a digital queue if capacity is full.

## ⚙️ Key Components

1.  **Frontend:** Next.js 14 (App Router) hosted on AWS Amplify.
2.  **Database:** Supabase (PostgreSQL) - Shared instance with Registration App.
3.  **Real-Time Engine:** Supabase Realtime / Webhooks to handle live queue updates and notifications.

## 🔌 Integration & Data Flow

-   **Registration System:** Provides the "Source of Truth" for User Profiles and generated QR Codes.
-   **Gatekeeper Scanners:** Guards scan users at Entry/Exit points. This updates the `current_count` of a section, which automatically triggers queue movement.