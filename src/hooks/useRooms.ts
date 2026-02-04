import { useState, useEffect } from "react";
import { mockRooms } from "@/data/rooms";
import { Room } from "@/components/dashboard/room-card";

export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCapacity, setFilterCapacity] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Mock loading rooms
    async function loadRooms() {
      setLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setRooms(mockRooms);
      setLoading(false);
    }

    loadRooms();
  }, []);

  const filteredRooms = rooms
    .filter((room) => {
      // 1. Search Query
      if (
        searchQuery &&
        !room.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // 2. Status Filter
      if (filterStatus !== "all" && room.status !== filterStatus) {
        return false;
      }

      // 3. Capacity Filter
      if (filterCapacity !== "all") {
        const percentage =
          room.capacity > 0
            ? Math.round((room.registered / room.capacity) * 100)
            : 0;

        if (filterCapacity === "low" && percentage >= 70) return false;
        if (
          filterCapacity === "medium" &&
          (percentage < 70 || percentage >= 90)
        )
          return false;
        if (filterCapacity === "high" && percentage < 90) return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sort logic
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime(); // Newest first
      }
      if (sortBy === "capacity-asc") {
        const pctA = a.capacity > 0 ? a.registered / a.capacity : 0;
        const pctB = b.capacity > 0 ? b.registered / b.capacity : 0;
        return pctA - pctB;
      }
      if (sortBy === "capacity-desc") {
        const pctA = a.capacity > 0 ? a.registered / a.capacity : 0;
        const pctB = b.capacity > 0 ? b.registered / b.capacity : 0;
        return pctB - pctA;
      }
      return 0;
    });

  const resetFilters = () => {
    setFilterStatus("all");
    setFilterCapacity("all");
    setSearchQuery("");
  };

  return {
    rooms: filteredRooms,
    loading,
    filterStatus,
    setFilterStatus,
    filterCapacity,
    setFilterCapacity,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    resetFilters,
  };
}
