import { Team, Match } from '../types';

export const teams: Team[] = [
  { id: 'f1', name: 'Las Guerreras', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=Guerreras' },
  { id: 'f2', name: 'Amazonas', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=Amazonas' },
  { id: 'f3', name: 'Valkirias', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=Valkirias' },
  { id: 'f4', name: 'Reinas del Sur', logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=Reinas' },
];

export const matches: Match[] = [
  // Jornada 1
  { id: 'm1', homeTeamId: 'f1', awayTeamId: 'f2', homeScore: 45, awayScore: 40, date: '2023-10-01', time: '10:00', status: 'jugado', round: 1 },
  { id: 'm2', homeTeamId: 'f3', awayTeamId: 'f4', homeScore: 32, awayScore: 38, date: '2023-10-01', time: '11:30', status: 'jugado', round: 1 },
  // Jornada 2
  { id: 'm3', homeTeamId: 'f1', awayTeamId: 'f3', homeScore: 50, awayScore: 48, date: '2023-10-08', time: '10:00', status: 'jugado', round: 2 },
  { id: 'm4', homeTeamId: 'f2', awayTeamId: 'f4', homeScore: 42, awayScore: 45, date: '2023-10-08', time: '11:30', status: 'jugado', round: 2 },
  // Jornada 3
  { id: 'm5', homeTeamId: 'f1', awayTeamId: 'f4', date: '2023-10-15', time: '10:00', status: 'programado', round: 3 },
  { id: 'm6', homeTeamId: 'f2', awayTeamId: 'f3', date: '2023-10-15', time: '11:30', status: 'programado', round: 3 },
];
