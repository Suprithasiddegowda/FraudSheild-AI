"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { RecentIncident } from "@/types"
import { cn } from "@/lib/utils"

export function IncidentTable({ incidents }: { incidents: RecentIncident[] }) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      case 'high': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'medium': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      default: return 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20';
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'blocked': return 'text-rose-500';
      case 'monitored': return 'text-amber-500';
      default: return 'text-emerald-500';
    }
  }

  return (
    <div className="rounded-xl border border-white/5 glass overflow-hidden">
      <Table>
        <TableHeader className="bg-white/5">
          <TableRow className="border-white/5 hover:bg-transparent">
            <TableHead className="font-bold text-zinc-500 uppercase text-[10px] tracking-widest">Source / IP</TableHead>
            <TableHead className="font-bold text-zinc-500 uppercase text-[10px] tracking-widest">Incident Type</TableHead>
            <TableHead className="font-bold text-zinc-500 uppercase text-[10px] tracking-widest">Risk Level</TableHead>
            <TableHead className="font-bold text-zinc-500 uppercase text-[10px] tracking-widest">Timestamp</TableHead>
            <TableHead className="font-bold text-zinc-500 uppercase text-[10px] tracking-widest">Countermeasure</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {incidents.map((incident) => (
            <TableRow key={incident.id} className="hover:bg-white/[0.02] transition-colors border-white/5 group">
              <TableCell className="font-mono text-xs text-cyan-500/80">{incident.source}</TableCell>
              <TableCell className="font-semibold text-white/90">{incident.type}</TableCell>
              <TableCell>
                <Badge variant="outline" className={cn("capitalize px-2 py-0 h-5 text-[10px] font-bold", getSeverityColor(incident.severity))}>
                  {incident.severity}
                </Badge>
              </TableCell>
              <TableCell className="text-zinc-500 text-[10px] font-medium">{incident.timestamp}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className={cn("h-1.5 w-1.5 rounded-full animate-pulse", incident.status === 'blocked' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]')} />
                  <span className={cn("font-black text-[10px] uppercase tracking-widest", getStatusColor(incident.status))}>
                    {incident.status}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
