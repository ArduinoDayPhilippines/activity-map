"use client";

import React from "react";
import { SlidersHorizontal, Clock, Search, Users } from "lucide-react";

interface RoomFiltersProps {
  filterStatus: string;
  setFilterStatus: (status: string) => void;
  filterCapacity: string;
  setFilterCapacity: (capacity: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const RoomFilters: React.FC<RoomFiltersProps> = ({
  filterStatus,
  setFilterStatus,
  filterCapacity,
  setFilterCapacity,
  sortBy,
  setSortBy,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search Bar */}
        <div className="relative w-full md:w-96 group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400 group-focus-within:text-[#06b6d4] transition-colors" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search rooms..."
            className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg leading-5 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:bg-black/40 focus:border-[#06b6d4]/50 transition-all duration-300 sm:text-sm"
          />
        </div>

        {/* Filters and Sort */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Status Filter */}
          <div className="relative group col-span-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SlidersHorizontal className="h-4 w-4 text-[#06b6d4]" />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full lg:w-auto bg-black/20 border border-white/10 rounded-lg pl-9 pr-8 py-2 text-sm text-white focus:outline-none focus:border-[#06b6d4]/50 hover:bg-black/30 transition-colors cursor-pointer appearance-none"
            >
              <option value="all" className="bg-[#0a1520]">
                All Status
              </option>
              <option value="open" className="bg-[#0a1520]">
                Open
              </option>
              <option value="full" className="bg-[#0a1520]">
                Full
              </option>
              <option value="closed" className="bg-[#0a1520]">
                Closed
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Capacity Filter */}
          <div className="relative group col-span-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-4 w-4 text-[#06b6d4]" />
            </div>
            <select
              value={filterCapacity}
              onChange={(e) => setFilterCapacity(e.target.value)}
              className="w-full lg:w-auto bg-black/20 border border-white/10 rounded-lg pl-9 pr-8 py-2 text-sm text-white focus:outline-none focus:border-[#06b6d4]/50 hover:bg-black/30 transition-colors cursor-pointer appearance-none"
            >
              <option value="all" className="bg-[#0a1520]">
                All Capacity
              </option>
              <option value="low" className="bg-[#0a1520]">
                Low (&lt;70%)
              </option>
              <option value="medium" className="bg-[#0a1520]">
                Medium (70-90%)
              </option>
              <option value="high" className="bg-[#0a1520]">
                High (&ge;90%)
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Sort By */}
          <div className="relative group col-span-1 sm:col-span-2 lg:col-span-1 lg:border-l lg:border-white/10 lg:pl-3 lg:ml-1">
            <div className="absolute inset-y-0 left-0 pl-3 lg:pl-6 flex items-center pointer-events-none">
              <Clock className="h-4 w-4 text-[#06b6d4]" />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full lg:w-auto bg-black/20 border border-white/10 rounded-lg pl-9 pr-8 py-2 text-sm text-white focus:outline-none focus:border-[#06b6d4]/50 hover:bg-black/30 transition-colors cursor-pointer appearance-none"
            >
              <option value="date" className="bg-[#0a1520]">
                Sort by Time
              </option>
              <option value="capacity-asc" className="bg-[#0a1520]">
                Capacity (Low-High)
              </option>
              <option value="capacity-desc" className="bg-[#0a1520]">
                Capacity (High-Low)
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
