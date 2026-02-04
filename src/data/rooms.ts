import { Room } from "@/components/dashboard/room-card";

export const mockRooms: Room[] = [
  {
    id: "room-1",
    title: "Room 1",
    date: new Date().toISOString(), // Open now
    registered: 150,
    capacity: 300,
    status: "open",
  },
  {
    id: "room-2",
    title: "Room 2",
    date: new Date().toISOString(),
    registered: 48,
    capacity: 50,
    status: "full",
  },
  {
    id: "room-3",
    title: "Room 3",
    date: new Date().toISOString(),
    registered: 12,
    capacity: 40,
    status: "open",
  },
  {
    id: "room-4",
    title: "Room 4",
    date: new Date().toISOString(),
    registered: 0,
    capacity: 25,
    status: "closed",
  },
];
