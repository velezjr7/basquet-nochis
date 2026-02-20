import React from "react";
import { Match, Team } from "../types";
import { Calendar, Clock, AlertTriangle, Coffee } from "lucide-react";

interface MatchCardProps {
  match: Match;
  homeTeam: Team;
  awayTeam?: Team; // Optional for bye weeks
  themeColor: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
  match,
  homeTeam,
  awayTeam,
  themeColor,
}) => {
  const isPlayed = match.status === "jugado";
  const isSuspended = match.status === "suspendido";
  const isBye = match.status === "descansa";

  if (isBye) {
    return (
      <div
        className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 opacity-90`}>
        <div className={`h-1 w-full ${themeColor} opacity-50`}></div>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={homeTeam.logo}
              alt={homeTeam.name}
              className="w-10 h-10 rounded-full bg-gray-50 object-cover grayscale"
            />
            <div>
              <span className="text-sm font-semibold text-gray-800 block leading-tight">
                {homeTeam.name}
              </span>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                Descansa
              </span>
            </div>
          </div>
          <div className="text-gray-400">
            <Coffee size={20} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 ${isSuspended ? "opacity-75" : ""}`}>
      <div className={`h-1 w-full ${themeColor}`}></div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{match.date || "TBD"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{match.time || "TBD"}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          {/* Home Team */}
          <div className="flex flex-col items-center flex-1">
            <img
              src={homeTeam.logo}
              alt={homeTeam.name}
              className="w-12 h-12 rounded-full bg-gray-50 mb-2 object-cover"
            />
            <span className="text-sm font-semibold text-center text-gray-800 leading-tight">
              {homeTeam.name}
            </span>
          </div>

          {/* Score / VS */}
          <div className="flex flex-col items-center justify-center px-2 min-w-max">
            {isPlayed ? (
              <div className="text-2xl font-bold text-gray-900 tracking-tight whitespace-nowrap">
                {match.homeScore} - {match.awayScore}
              </div>
            ) : isSuspended ? (
              <div className="flex flex-col items-center text-amber-500">
                <AlertTriangle size={24} />
                <span className="text-xs font-bold mt-1 uppercase">
                  Suspended
                </span>
              </div>
            ) : (
              <div className="text-xl font-bold text-gray-300">VS</div>
            )}
          </div>

          {/* Away Team */}
          {awayTeam && (
            <div className="flex flex-col items-center flex-1">
              <img
                src={awayTeam.logo}
                alt={awayTeam.name}
                className="w-12 h-12 rounded-full bg-gray-50 mb-2 object-cover"
              />
              <span className="text-sm font-semibold text-center text-gray-800 leading-tight">
                {awayTeam.name}
              </span>
            </div>
          )}
        </div>

        {isPlayed && (
          <div className="mt-3 text-center">
            <span className="inline-block px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wider">
              Final
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchCard;
