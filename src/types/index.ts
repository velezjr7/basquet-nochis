export type LeagueCategory = 'femenil' | 'mixta' | 'juvenil';

export interface Team {
  id: string;
  name: string;
  logo: string;
}

export type MatchStatus = 'programado' | 'jugado' | 'suspendido';

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  status: MatchStatus;
  round: number; // Jornada
}

export interface LeagueData {
  id: string;
  name: string;
  category: LeagueCategory;
  teams: Team[];
  matches: Match[];
}

export interface TeamStats {
  teamId: string;
  teamName: string;
  teamLogo: string;
  played: number;
  won: number;
  lost: number;
  pointsFor: number;
  pointsAgainst: number;
  diff: number;
  points: number; // usually 2 for win, 1 for loss, 0 for forfeit/suspended? Or standard 2/1/0
}
