import { z } from 'zod';

export const playerSchema = z.object({
  name: z.string().min(1),
  nickname: z.string().optional(),
  position: z.string().optional(),
  photo: z.string().url().optional(),
  foot: z.enum(['left', 'right', 'both']).optional(),
  active: z.boolean().default(true),
  rating: z.number().min(1).max(5).optional(),
});

export const matchSchema = z.object({
  date: z.date(),
  location: z.string().optional(),
  format: z.string().optional(),
  duration: z.number().optional(),
  notes: z.string().optional(),
});

export const attendanceSchema = z.object({
  matchId: z.string(),
  playerId: z.string(),
  status: z.enum(['PRESENT', 'ABSENT', 'DOUBTFUL']),
});
