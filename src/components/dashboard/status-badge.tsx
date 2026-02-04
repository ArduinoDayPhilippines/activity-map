import React from "react";
import { CheckCircle, AlertCircle, XCircle, Activity } from "lucide-react";

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles: Record<string, string> = {
    open: "bg-green-500/10 text-green-500 border-green-500/20",
    full: "bg-red-500/10 text-red-500 border-red-500/20",
    closed: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    upcoming: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    active: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  };

  const icons: Record<string, React.ElementType> = {
    open: CheckCircle,
    full: AlertCircle,
    closed: XCircle,
    upcoming: Activity,
    active: Activity,
  };

  const normalizedStatus = status.toLowerCase();
  const Icon = icons[normalizedStatus] || Activity;
  const style = styles[normalizedStatus] || styles.upcoming;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${style}`}
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      <Icon className="w-3 h-3" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};
