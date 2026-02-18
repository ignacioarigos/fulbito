import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) return <div>No autorizado</div>;

  // Fetch próximo partido, KPIs, etc.
  const nextMatch = await prisma.match.findFirst({ where: { status: 'SCHEDULED' }, orderBy: { date: 'asc' } });
  const stats = await prisma.player.findMany({
    select: {
      name: true,
      _count: { select: { incidents: { where: { type: 'GOAL' } } } },
    },
  });

  return (
    <div className="p-4">
      <h1>Próximo Partido: {nextMatch?.date.toDateString()}</h1>
      {/* Lista de confirmados, KPIs, etc. */}
    </div>
  );
}
