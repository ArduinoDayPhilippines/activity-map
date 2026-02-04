"use client";

import BokehBackground from "@/components/background/bokeh-background";
import Squares from "@/components/background/squares-background";
import { RoomCard } from "@/components/dashboard/room-card";
import { RoomFilters } from "@/components/dashboard/room-filters";
import { useRooms } from "@/hooks/useRooms";

export default function DashboardPage() {
  const {
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
  } = useRooms();

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0a1f14] via-[#0a1520] to-[#120c08] text-white relative overflow-hidden font-urbanist">
      <BokehBackground />
      <Squares direction="diagonal" speed={0.3} />

      <div className="relative z-10">
        <nav className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            <span className="font-bold text-xl">Activity Map Navbar Placeholder</span>
          </div>
        </nav>

        <main className="flex-1 px-4 md:px-8 py-8 pt-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col mb-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-6">
                Active Rooms
              </h1>

              <RoomFilters
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                filterCapacity={filterCapacity}
                setFilterCapacity={setFilterCapacity}
                sortBy={sortBy}
                setSortBy={setSortBy}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#06b6d4] mx-auto mb-4"></div>
                  <p className="text-gray-400">Loading rooms...</p>
                </div>
              </div>
            ) : (
              <>
                {filteredRooms.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRooms.map((room) => (
                      <RoomCard key={room.id} room={room} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-black/20 rounded-2xl border border-white/5">
                    <p className="text-gray-400 text-lg">
                      No rooms found matching your filters.
                    </p>
                    <button
                      onClick={resetFilters}
                      className="mt-4 text-[#06b6d4] hover:underline"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
