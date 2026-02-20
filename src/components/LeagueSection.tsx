import React, { useMemo } from "react";
import { LeagueData } from "../types";
import { calculateStandings } from "../utils/calculations";
import StandingsTable from "./StandingsTable";
import MatchDay from "./MatchDay";
import TeamStatsHighlights from "./TeamStatsHighlights";
import { motion } from "motion/react";

interface LeagueSectionProps {
  league: LeagueData;
  themeColor: string;
}

const LeagueSection: React.FC<LeagueSectionProps> = ({
  league,
  themeColor,
}) => {
  const stats = useMemo(
    () => calculateStandings(league.matches, league.teams),
    [league.matches, league.teams],
  );

  // Group matches by round
  const matchesByRound = useMemo(() => {
    const rounds: Record<number, typeof league.matches> = {};
    league.matches.forEach((match) => {
      if (!rounds[match.round]) {
        rounds[match.round] = [];
      }
      rounds[match.round].push(match);
    });
    return rounds;
  }, [league.matches]);

  const sortedRounds = Object.keys(matchesByRound)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      {/* Highlights */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Destacados</h2>
        <TeamStatsHighlights stats={stats} themeColor={themeColor} />
      </section>

      {/* Matches Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Jornadas</h2>
        </div>
        <div className="space-y-6">
          {sortedRounds.map((round) => (
            <MatchDay
              key={round}
              round={round}
              matches={matchesByRound[round]}
              teams={league.teams}
              themeColor={themeColor}
            />
          ))}
        </div>
      </section>

      {/* Standings Section */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Tabla de Posiciones
        </h2>
        <StandingsTable stats={stats} themeColor={themeColor} />
      </section>
    </motion.div>
  );
};

export default LeagueSection;
