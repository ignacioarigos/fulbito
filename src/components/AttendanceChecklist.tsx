'use client';

import { useState } from 'react';
import { prisma } from '@/lib/db';

export default function AttendanceChecklist({ matchId }: { matchId: string }) {
  const [attendances, setAttendances] = useState([]);

  // Fetch players and current attendances
  // Use useEffect to load data

  const handleSubmit = async (data: any) => {
    // Server action to update attendances
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Marcar Asistencia</h2>
      {/* Checklist con checkboxes para PRESENT/ABSENT/DOUBTFUL */}
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">Guardar</button>
    </div>
  );
}
