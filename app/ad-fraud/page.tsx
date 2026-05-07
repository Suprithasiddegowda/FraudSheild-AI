"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { Navbar } from "@/components/navbar"
import { CustomLineChart } from "@/components/charts/line-chart"
import { CustomBarChart } from "@/components/charts/bar-chart"
import { CustomPieChart } from "@/components/charts/pie-chart"
import { IncidentTable } from "@/components/incident-table"
import { fraudStats, fraudTrend, fraudSources, recentIncidents } from "@/lib/dummy-data"
import { 
  Shield, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  DollarSign, 
  Globe, 
  Calendar, 
  ChevronDown,
  Filter
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AdFraudPage() {
  return (
    <div className="flex min-h-screen bg-[#020617] text-white dark mesh-gradient-dark">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar title="Ad Fraud Detection Dashboard" />
        <div className="flex flex-1 overflow-hidden">
          {/* Left Filter Panel - Matching Image 1 */}
          <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-2xl p-4 space-y-6 hidden xl:block overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-500/50">Filters</span>
                <Filter className="h-3 w-3 text-cyan-500/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-zinc-500">Date Range</label>
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors group">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold group-hover:text-cyan-400 transition-colors">This Month</span>
                    <span className="text-[10px] text-zinc-500">Oct 1 - Oct 25, 2024</span>
                  </div>
                  <Calendar className="h-4 w-4 text-cyan-500 group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-zinc-400">Campaigns</label>
                <div className="space-y-1">
                  {['All Campaigns', 'Holiday Boost', 'App Installs', 'Web Traffic'].map((item) => (
                    <div key={item} className="sidebar-filter-item text-xs hover:bg-white/5 px-2 py-1.5 rounded cursor-pointer transition-colors">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-zinc-400">Traffic Sources</label>
                <div className="space-y-1">
                  {['All', 'DSPs', 'Ad Networks', 'Direct'].map((item) => (
                    <div key={item} className="sidebar-filter-item text-xs hover:bg-white/5 px-2 py-1.5 rounded cursor-pointer transition-colors">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-zinc-400">Fraud Types</label>
                <div className="space-y-1">
                  {['All', 'IVT', 'Bots', 'Click Farming', 'Geo Fraud'].map((item) => (
                    <div key={item} className="sidebar-filter-item text-xs hover:bg-white/5 px-2 py-1.5 rounded cursor-pointer transition-colors">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-zinc-400">Region</label>
                <div className="p-2 rounded bg-zinc-900 border border-white/5 flex items-center justify-between cursor-pointer text-xs">
                  Global <ChevronDown className="h-3 w-3 text-zinc-500" />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 cyber-grid">
            {/* Top Stats Bar - Matching Image 1 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <StatCard title="Overall Fraud Rate" value="8.4%" trend="-0.5%" trendColor="rose" glowColor="rose" />
              <StatCard title="Total Traffic" value="1,245,678" subValue="clicks" glowColor="cyan" />
              <StatCard title="Valid Traffic" value="1,141,010" subValue="clicks" color="emerald" glowColor="emerald" />
              <StatCard title="Invalid Traffic (IVT)" value="104,668" subValue="clicks" color="rose" glowColor="rose" />
              <StatCard title="Revenue Saved" value="$3,240" color="emerald" glowColor="emerald" />
            </div>

            {/* Charts Row 1 */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <CustomLineChart 
                  title="Ad Fraud Trend (Daily)" 
                  data={fraudTrend} 
                  xKey="date" 
                  yKey="fraudRate" 
                  color="#06b6d4"
                  className="bg-zinc-900/40 border-white/5"
                />
              </div>
              <div className="lg:col-span-1">
                <CustomBarChart 
                  title="Fraud Distribution by Type" 
                  data={[
                    { name: 'Bots', value: 35000 },
                    { name: 'Click Farm', value: 28000 },
                    { name: 'Geo', value: 18000 },
                    { name: 'Data Center', value: 14000 },
                    { name: 'Hidden Ads', value: 8000 },
                  ]}
                  xKey="name" 
                  yKey="value"
                  className="bg-zinc-900/40 border-white/5"
                />
              </div>
              <div className="lg:col-span-1">
                 <Card className="bg-zinc-900/40 border-white/5 h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Fraud Hotspots by Country</CardTitle>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">World Map</p>
                    </CardHeader>
                    <CardContent className="h-[250px] relative flex items-center justify-center p-0 overflow-hidden">
                       <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                        className="w-full h-full object-contain opacity-20 contrast-150 grayscale invert"
                        alt="Map"
                       />
                       {/* Hotspot Indicators */}
                       <Hotspot x="30%" y="40%" label="USA" value="High" color="rose" />
                       <Hotspot x="60%" y="35%" label="Russia" value="Medium" color="orange" />
                       <Hotspot x="75%" y="45%" label="China" value="Critical" color="rose" />
                       <Hotspot x="68%" y="60%" label="India" value="Low" color="emerald" />
                    </CardContent>
                 </Card>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <CustomPieChart 
                  title="Top 5 Fraudulent Sources" 
                  data={fraudSources} 
                  className="bg-zinc-900/40 border-white/5"
                />
              </div>
              <div className="lg:col-span-2">
                <Card className="bg-zinc-900/40 border-white/5 overflow-hidden">
                  <CardHeader className="pb-2 flex flex-row items-center justify-between">
                    <CardTitle className="text-sm font-medium">Recent Fraud Incidents</CardTitle>
                    <button className="text-[10px] font-bold text-cyan-500 uppercase">View All</button>
                  </CardHeader>
                  <CardContent className="p-0">
                    <IncidentTable incidents={recentIncidents} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, subValue, trend, trendColor = 'emerald', color = 'white', glowColor }: any) {
  const colorMap: any = {
    white: 'text-white',
    emerald: 'text-emerald-400',
    rose: 'text-rose-400',
    cyan: 'text-cyan-400'
  }
  
  const glowClasses: any = {
    cyan: 'shadow-[0_0_20px_rgba(6,182,212,0.15)] border-cyan-500/20',
    rose: 'shadow-[0_0_20px_rgba(244,63,94,0.15)] border-rose-500/20',
    emerald: 'shadow-[0_0_20px_rgba(16,185,129,0.15)] border-emerald-500/20'
  }
  
  return (
    <Card className={`bg-black/40 backdrop-blur-2xl border-white/5 p-4 space-y-2 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${glowColor ? glowClasses[glowColor] : ''}`}>
      <div className={`absolute top-0 right-0 w-24 h-24 bg-${glowColor}-500/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-${glowColor}-500/10 transition-colors`} />
      <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest relative z-10">{title}</p>
      <div className="flex items-baseline gap-2 relative z-10">
        <span className={`text-2xl font-black tracking-tighter ${colorMap[color]}`}>{value}</span>
        {trend && (
          <span className={`text-[10px] font-black text-${trendColor}-500 bg-${trendColor}-500/10 px-1.5 py-0.5 rounded border border-${trendColor}-500/20`}>
            {trend}
          </span>
        )}
      </div>
      {subValue && <p className="text-[10px] font-medium text-zinc-600 relative z-10 tracking-tight">{subValue}</p>}
    </Card>
  )
}

function Hotspot({ x, y, label, value, color }: any) {
  return (
    <div className="absolute" style={{ top: y, left: x }}>
       <div className={`h-2 w-2 rounded-full bg-${color}-500 animate-ping absolute`} />
       <div className={`h-2 w-2 rounded-full bg-${color}-500 relative`} />
       <div className="absolute top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/10 text-[8px]">
         <span className="font-bold">{label}:</span> <span className={`text-${color}-400`}>{value}</span>
       </div>
    </div>
  )
}
