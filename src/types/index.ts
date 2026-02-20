export type LeagueCategory = "femenil" | "mixta" | "juvenil";

export interface Team {
  id: string;
  name: string;
  logo: string;
}

export type MatchStatus = "programado" | "jugado" | "suspendido" | "descansa";

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId?: string; // Optional for bye weeks
  homeScore?: number;
  awayScore?: number;
  date?: string;
  time?: string;
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
  points: number;
}
