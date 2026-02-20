import { Match, Team, TeamStats, MatchStatus } from "../types";

export const calculateStandings = (
  matches: Match[],
  teams: Team[],
): TeamStats[] => {
  const stats: Record<string, TeamStats> = {};

  // Initialize stats for all teams
  teams.forEach((team) => {
    stats[team.id] = {
      teamId: team.id,
      teamName: team.name,
      teamLogo: team.logo,
      played: 0,
      won: 0,
      lost: 0,
      pointsFor: 0,
      pointsAgainst: 0,
      diff: 0,
      points: 0,
    };
  });

  matches.forEach((match) => {
    if (
      match.status === "jugado" &&
      match.homeScore !== undefined &&
      match.awayScore !== undefined &&
      match.awayTeamId
    ) {
      const home = stats[match.homeTeamId];
      const away = stats[match.awayTeamId];

      if (home && away) {
        home.played += 1;
        away.played += 1;

        home.pointsFor += match.homeScore;
        home.pointsAgainst += match.awayScore;
        away.pointsFor += match.awayScore;
        away.pointsAgainst += match.homeScore;

        if (match.homeScore > match.awayScore) {
          home.won += 1;
          home.points += 3;
          away.lost += 1;
          away.points += 1;
        } else {
          away.won += 1;
          away.points += 3;
          home.lost += 1;
          home.points += 1;
        }

        home.diff = home.pointsFor - home.pointsAgainst;
        away.diff = away.pointsFor - away.pointsAgainst;
      }
    }
  });

  return Object.values(stats).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.diff !== a.diff) return b.diff - a.diff;
    return b.pointsFor - a.pointsFor;
  });
};

export const getHighlights = (stats: TeamStats[]) => {
  if (stats.length === 0) return null;

  // Best Offense (Most Points For / Games Played)
  const bestOffense = [...stats].sort(
    (a, b) => b.pointsFor / (b.played || 1) - a.pointsFor / (a.played || 1),
  )[0];

  // Best Defense (Least Points Against / Games Played)
  const bestDefense = [...stats].sort(
    (a, b) =>
      a.pointsAgainst / (a.played || 1) - b.pointsAgainst / (b.played || 1),
  )[0];

  // Worst Defense (Most Points Against / Games Played)
  const worstDefense = [...stats].sort(
    (a, b) =>
      b.pointsAgainst / (b.played || 1) - a.pointsAgainst / (a.played || 1),
  )[0];

  // Best Diff
  const bestDiff = [...stats].sort((a, b) => b.diff - a.diff)[0];

  return {
    bestOffense,
    bestDefense,
    worstDefense,
    bestDiff,
  };
};
