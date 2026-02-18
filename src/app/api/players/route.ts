import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { playerSchema } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = playerSchema.parse(body);
    const player = await prisma.player.create({ data });
    return NextResponse.json(player);
  } catch (error) {
    return NextResponse.json({ error: 'Error creando jugador' }, { status: 400 });
  }
}
