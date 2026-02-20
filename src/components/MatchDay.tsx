import React from 'react';
import { Match, Team } from '../types';
import MatchCard from './MatchCard';

interface MatchDayProps {
  round: number;
  matches: Match[];
  teams: Team[];
  themeColor: string;
}

const MatchDay: React.FC<MatchDayProps> = ({ round, matches, teams, themeColor }) => {
  const getTeam = (id: string) => teams.find(t => t.id === id)!;

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className={`w-2 h-6 rounded-full ${themeColor}`}></span>
        Jornada {round}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map(match => (
          <MatchCard
            key={match.id}
            match={match}
            homeTeam={getTeam(match.homeTeamId)}
            awayTeam={getTeam(match.awayTeamId)}
            themeColor={themeColor}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchDay;
