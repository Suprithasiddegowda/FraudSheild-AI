"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CustomLineChartProps {
  title: string;
  data: any[];
  xKey: string;
  yKey: string;
  color?: string;
  secondaryYKey?: string;
}

export function CustomLineChart({ title, data, xKey, yKey, color = "#06b6d4", secondaryYKey }: CustomLineChartProps) {
  return (
    <Card className="glass border-border/50">
      <CardHeader>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis 
                dataKey={xKey} 
                stroke="#64748b" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="#64748b" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "rgba(15, 23, 42, 0.9)", 
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  backdropFilter: "blur(10px)"
                }} 
              />
              <Line 
                type="monotone" 
                dataKey={yKey} 
                stroke={color} 
                strokeWidth={3} 
                dot={{ fill: color, strokeWidth: 2, r: 4 }} 
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              {secondaryYKey && (
                <Line 
                  type="monotone" 
                  dataKey={secondaryYKey} 
                  stroke="#8b5cf6" 
                  strokeWidth={2} 
                  strokeDasharray="5 5"
                  dot={false}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
