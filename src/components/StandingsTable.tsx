import React from "react";
import { TeamStats } from "../types";

interface StandingsTableProps {
  stats: TeamStats[];
  themeColor: string;
}

const StandingsTable: React.FC<StandingsTableProps> = ({
  stats,
  themeColor,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className={`h-1 w-full ${themeColor}`}></div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base text-left">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
            <tr>
              <th className="px-4 py-3 md:px-6 md:py-4 w-12 text-center">#</th>
              <th className="px-4 py-3 md:px-6 md:py-4">Equipo</th>
              <th
                className="px-4 py-3 md:px-6 md:py-4 text-center"
                title="Partidos Jugados">
                PJ
              </th>
              <th
                className="px-4 py-3 md:px-6 md:py-4 text-center"
                title="Partidos Ganados">
                PG
              </th>
              <th
                className="px-4 py-3 md:px-6 md:py-4 text-center"
                title="Partidos Perdidos">
                PP
              </th>
              <th
                className="px-4 py-3 md:px-6 md:py-4 text-center hidden sm:table-cell"
                title="Puntos a Favor">
                PF
              </th>
              <th
                className="px-4 py-3 md:px-6 md:py-4 text-center hidden sm:table-cell"
                title="Puntos en Contra">
                PC
              </th>
              <th
                className="px-4 py-3 md:px-6 md:py-4 text-center font-bold"
                title="Diferencia">
                DIF
              </th>
              <th
                className="px-4 py-3 md:px-6 md:py-4 text-center font-bold text-gray-900"
                title="Puntos">
                PTS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {stats.map((team, index) => (
              <tr
                key={team.teamId}
                className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 md:px-6 md:py-4 text-center font-mono text-gray-400">
                  {index + 1}
                </td>
                <td className="px-4 py-3 md:px-6 md:py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={team.teamLogo}
                      alt={team.teamName}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      {team.teamName}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 md:px-6 md:py-4 text-center text-gray-600">
                  {team.played}
                </td>
                <td className="px-4 py-3 md:px-6 md:py-4 text-center text-green-600 font-medium">
                  {team.won}
                </td>
                <td className="px-4 py-3 md:px-6 md:py-4 text-center text-red-500">
                  {team.lost}
                </td>
                <td className="px-4 py-3 md:px-6 md:py-4 text-center text-gray-500 hidden sm:table-cell">
                  {team.pointsFor}
                </td>
                <td className="px-4 py-3 md:px-6 md:py-4 text-center text-gray-500 hidden sm:table-cell">
                  {team.pointsAgainst}
                </td>
                <td
                  className={`px-4 py-3 md:px-6 md:py-4 text-center font-medium ${team.diff > 0 ? "text-green-600" : team.diff < 0 ? "text-red-500" : "text-gray-500"}`}>
                  {team.diff > 0 ? "+" : ""}
                  {team.diff}
                </td>
                <td className="px-4 py-3 md:px-6 md:py-4 text-center font-bold text-gray-900 bg-gray-50/50">
                  {team.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StandingsTable;
