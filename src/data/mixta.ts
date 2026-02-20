import { Team, Match } from '../types';

export const teams: Team[] = [
  { id: 'm1', name: 'Los Invencibles', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=Invencibles' },
  { id: 'm2', name: 'Titanes', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=Titanes' },
  { id: 'm3', name: 'Spartans', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=Spartans' },
  { id: 'm4', name: 'Dream Team', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=DreamTeam' },
];

export const matches: Match[] = [
  // Jornada 1
  { id: 'mm1', homeTeamId: 'm1', awayTeamId: 'm2', homeScore: 60, awayScore: 55, date: '2023-10-01', time: '14:00', status: 'jugado', round: 1 },
  { id: 'mm2', homeTeamId: 'm3', awayTeamId: 'm4', homeScore: 48, awayScore: 52, date: '2023-10-01', time: '15:30', status: 'jugado', round: 1 },
  // Jornada 2
  { id: 'mm3', homeTeamId: 'm1', awayTeamId: 'm3', homeScore: 58, awayScore: 60, date: '2023-10-08', time: '14:00', status: 'jugado', round: 2 },
  { id: 'mm4', homeTeamId: 'm2', awayTeamId: 'm4', homeScore: 50, awayScore: 50, date: '2023-10-08', time: '15:30', status: 'suspendido', round: 2 }, // Suspended match example
  // Jornada 3
  { id: 'mm5', homeTeamId: 'm1', awayTeamId: 'm4', date: '2023-10-15', time: '14:00', status: 'programado', round: 3 },
  { id: 'mm6', homeTeamId: 'm2', awayTeamId: 'm3', date: '2023-10-15', time: '15:30', status: 'programado', round: 3 },
];
