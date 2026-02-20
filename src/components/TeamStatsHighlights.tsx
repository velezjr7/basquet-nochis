import React from "react";
import { TeamStats } from "../types";
import { getHighlights } from "../utils/calculations";
import {
  Shield,
  ShieldAlert,
  Target,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

interface TeamStatsHighlightsProps {
  stats: TeamStats[];
  themeColor: string;
}

interface StatCardProps {
  title: string;
  teamName: string;
  value: string | number;
  icon: LucideIcon;
  colorClass: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  teamName,
  value,
  icon: Icon,
  colorClass,
  label,
}) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
    <div className={`p-3 rounded-lg ${colorClass} bg-opacity-10`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
        {title}
      </p>
      <h4 className="text-lg font-bold text-gray-900 leading-tight mb-1">
        {teamName}
      </h4>
      <p className="text-sm font-medium text-gray-500">
        <span className="font-mono font-bold text-gray-900">{value}</span>{" "}
        {label}
      </p>
    </div>
  </div>
);

const TeamStatsHighlights: React.FC<TeamStatsHighlightsProps> = ({ stats }) => {
  const highlights = getHighlights(stats);

  if (!highlights) return null;

  const { bestOffense, bestDefense, worstDefense, bestDiff } = highlights;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard
        title="Más Canastero"
        teamName={bestOffense.teamName}
        value={
          Math.round((bestOffense.pointsFor / (bestOffense.played || 1)) * 10) /
          10
        }
        label="pts/partido"
        icon={Target}
        colorClass="bg-orange-100 text-orange-600"
      />
      <StatCard
        title="Mejor Defensa"
        teamName={bestDefense.teamName}
        value={
          Math.round(
            (bestDefense.pointsAgainst / (bestDefense.played || 1)) * 10,
          ) / 10
        }
        label="recibidos/partido"
        icon={Shield}
        colorClass="bg-blue-100 text-blue-600"
      />
      <StatCard
        title="Peor Defensa"
        teamName={worstDefense.teamName}
        value={
          Math.round(
            (worstDefense.pointsAgainst / (worstDefense.played || 1)) * 10,
          ) / 10
        }
        label="recibidos/partido"
        icon={ShieldAlert}
        colorClass="bg-red-100 text-red-600"
      />
      <StatCard
        title="Mejor Diferencia"
        teamName={bestDiff.teamName}
        value={bestDiff.diff > 0 ? `+${bestDiff.diff}` : bestDiff.diff}
        label="puntos total"
        icon={TrendingUp}
        colorClass="bg-green-100 text-green-600"
      />
    </div>
  );
};

export default TeamStatsHighlights;
