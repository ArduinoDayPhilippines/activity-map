"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { StatusBadge } from "./status-badge";

export interface Room {
  id: string;
  title: string;
  date: string;
  registered: number;
  capacity: number;
  status: string;
  coverImage?: string;
}

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const router = useRouter();

  const safeCapacity = room.capacity > 0 ? room.capacity : 0;
  const percentage =
    safeCapacity > 0 ? Math.round((room.registered / safeCapacity) * 100) : 0;
  const spotsLeft =
    safeCapacity > 0
      ? Math.max(safeCapacity - room.registered, 0)
      : "Unlimited";

  return (
    <div
      onClick={() => router.push(`/room/${room.id}`)}
      className="group bg-linear-to-br from-[#0B1F23]/80 via-[#0E1924]/70 to-[#0B1F23]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-[#22d3ee]/60 shadow-xl shadow-black/20 hover:shadow-[#22d3ee]/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* Cover Image */}
      <div className="relative w-full h-48 bg-linear-to-br from-[#38311E]/60 via-[#373531]/50 to-[#35351C]/40 overflow-hidden">
        {room.coverImage ? (
          <>
            <Image
              src={room.coverImage}
              alt={room.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1F23]/60 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1F23]/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-[#0B1F23]/40 backdrop-blur-sm rounded-2xl border border-[#06b6d4]/30 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-14 h-14 text-[#06b6d4]" />
              </div>
            </div>
          </>
        )}
        {/* Status badge in corner */}
        <div className="absolute top-4 right-4 z-10">
          <StatusBadge status={room.status} />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3
            className="font-bold text-xl text-white flex-1 group-hover:text-[#06b6d4] transition-colors line-clamp-1"
          >
            {room.title}
          </h3>
        </div>
        <p className="text-sm text-white mb-4 flex items-center gap-2 bg-[#0B1F23]/40 px-3 py-2 rounded-lg w-fit">
          <Clock className="w-4 h-4 text-[#06b6d4]" />
          {new Date(room.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-300 font-medium">
              Occupancy
            </span>
            <span className="font-bold text-white">
              {room.registered} / {room.capacity}
            </span>
          </div>
          <div className="relative">
            <div className="w-full bg-linear-to-r from-[#0E1924] to-[#0B1F23] rounded-full h-3 overflow-hidden border border-[#06b6d4]/20">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  percentage >= 90
                    ? "bg-linear-to-r from-red-500 via-orange-500 to-red-600"
                    : percentage >= 70
                      ? "bg-linear-to-r from-amber-500 via-yellow-500 to-amber-600"
                      : "bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-600"
                } shadow-lg`}
                style={{ width: `${percentage}%` }}
              >
                <div className="h-full w-full bg-linear-to-r from-white/20 to-transparent" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span
              className={`text-sm font-bold ${
                percentage >= 90
                  ? "text-red-400"
                  : percentage >= 70
                    ? "text-amber-400"
                    : "text-emerald-400"
              }`}
            >
              {percentage}% filled
            </span>
            <span className="text-xs text-gray-400">
              {spotsLeft} spots left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
