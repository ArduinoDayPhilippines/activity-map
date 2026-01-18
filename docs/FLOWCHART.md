# Application Flowchart

This diagram illustrates the user journey, emphasizing the distinction between **Priority Access (Itinerary)** and **General Queuing (Walk-in)**, driven by real-time capacity checks.

```mermaid
flowchart TD
    %% --- PHASE 1: IDENTIFICATION ---
    subgraph Identity ["Step 1: Identity Handshake"]
        User([User Arrives]) --> Login
        Login[App Login / QR Scan] -->|Fetch Data| SharedDB[(Shared Registration DB)]
        SharedDB -->|Return Profile| AppDashboard
    end

    %% --- PHASE 2: NAVIGATION & DECISION ---
    subgraph Routing ["Step 2: Section Access Logic"]
        AppDashboard -->|Select Section/Floor| CheckItinerary{Has Itinerary?}
        
        %% SCENARIO A: PRIORITY USER
        CheckItinerary -- Yes (VIP) --> GreenLight[**Priority Access**<br/>Proceed to Entrance]
        
        %% SCENARIO B: WALK-IN USER
        CheckItinerary -- No (Walk-in) --> CheckCapacity{Is Section Full?}
        
        CheckCapacity -- No (Space Available) --> GreenLight
        CheckCapacity -- Yes (Full) --> OfferQueue[Show: 'Section Full. Join Queue?']
    end

    %% --- PHASE 3: THE QUEUE ---
    subgraph QueueSystem ["Step 3: Virtual Waiting Room"]
        OfferQueue -->|Join| AddToQueue[**Add to QUEUE Table**<br/>Status: WAITING]
        AddToQueue --> WaitLoop(Wait for Notification)
        
        WaitLoop -->|System Event: User Exits Section| DecrementCount[Update Capacity]
        DecrementCount --> NotifyNext[**Notify Next User**<br/>Status: NOTIFIED]
        NotifyNext --> GreenLight
    end

    %% --- PHASE 4: ON-SITE EXECUTION ---
    subgraph OnSite ["Step 4: The Guard (Physical Scanners)"]
        GreenLight --> GuardScanEntry[**Guard Scans Entry QR**]
        
        GuardScanEntry -->|Update DB| UpdateEntry["1. Set ITINERARY.is_visited = TRUE<br/>2. Increment SECTIONS.current_count<br/>3. Update QUEUE.status = ENTERING"]
        
        UpdateEntry --> ActivityHappens[User Enjoys Activity]
        
        ActivityHappens --> GuardScanExit[**Guard Scans Exit QR**]
        GuardScanExit -->|Update DB| UpdateExit["1. Decrement SECTIONS.current_count<br/>2. Trigger Queue Notification"]
    end

    %% CONNECTIONS
    UpdateExit -.->|Triggers| DecrementCount