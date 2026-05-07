"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface DashboardCardProps {
  title: string
  value: string | number
  description?: string
  icon?: ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
  neonColor?: 'cyan' | 'emerald' | 'rose' | 'violet' | 'amber'
}

export function DashboardCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
  neonColor = 'cyan'
}: DashboardCardProps) {
  const neonClasses = {
    cyan: "neon-border-cyan",
    emerald: "neon-border-emerald",
    rose: "neon-border-rose",
    violet: "border-violet-500/50 shadow-[0_0_10px_rgba(139,92,246,0.3)]",
    amber: "border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.3)]"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className={cn("glass overflow-hidden border-border/50", neonClasses[neonColor], className)}>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </CardTitle>
          <div className={cn("p-2 rounded-lg bg-accent/50", `text-neon-${neonColor}`)}>
            {icon}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold tracking-tight">{value}</div>
          <div className="flex items-center gap-2 mt-1">
            {trend && (
              <span className={cn(
                "text-xs font-bold px-1.5 py-0.5 rounded",
                trend.isPositive ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
              )}>
                {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
              </span>
            )}
            <p className="text-xs text-muted-foreground">
              {description}
            </p>
          </div>
          
          {/* Animated background pulse */}
          <div className={cn(
            "absolute -right-4 -bottom-4 w-24 h-24 blur-3xl opacity-10 rounded-full",
            `bg-${neonColor}-500`
          )} />
        </CardContent>
      </Card>
    </motion.div>
  )
}
