"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { Navbar } from "@/components/navbar"
import { identityVerifications } from "@/lib/dummy-data"
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  MoreVertical, 
  ExternalLink,
  Fingerprint,
  FileCheck,
  Clock,
  Phone,
  FileText,
  Upload,
  CheckCircle2,
  Mail,
  Bell,
  ChevronDown
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CustomPieChart } from "@/components/charts/pie-chart"
import { CustomLineChart } from "@/components/charts/line-chart"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function IdentityPage() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 light">
      <AppSidebar className="bg-white border-r border-slate-200" />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Custom Header matching Image 2 */}
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6">
          <h1 className="text-xl font-bold text-slate-800">Identity Verification & User Dashboard</h1>
          <div className="flex items-center gap-4">
             <Button variant="ghost" size="icon" className="text-slate-500"><Mail className="h-5 w-5" /></Button>
             <Button variant="ghost" size="icon" className="relative text-slate-500">
               <Bell className="h-5 w-5" />
               <span className="absolute top-2 right-2 h-2 w-2 bg-rose-500 rounded-full border-2 border-white" />
             </Button>
             <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
               <div className="flex flex-col text-right">
                 <span className="text-sm font-bold">Admin</span>
                 <span className="text-xs text-slate-500">Jane Doe</span>
               </div>
               <Avatar className="h-9 w-9 border border-slate-200">
                 <AvatarImage src="https://i.pravatar.cc/150?u=jane" />
                 <AvatarFallback>JD</AvatarFallback>
               </Avatar>
               <ChevronDown className="h-4 w-4 text-slate-400" />
             </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid gap-6 lg:grid-cols-4">
            {/* Main Content Area (3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Identity Scanning Section */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold">Identity Scanning & Verification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg shadow-sm"><Phone className="h-5 w-5" /></div>
                          <span className="font-bold text-slate-800">Phone Number Verification</span>
                        </div>
                        <Badge className="bg-emerald-500 text-white hover:bg-emerald-600 border-none px-3 shadow-lg shadow-emerald-500/20">Active</Badge>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-full" />
                      </div>
                   </div>

                   <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg shadow-sm"><FileCheck className="h-5 w-5" /></div>
                          <span className="font-bold text-slate-800">Document Scan (ID Card/Driver's License)</span>
                        </div>
                        <span className="text-sm font-bold text-blue-600">Processing - 65% Complete</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-[65%] animate-pulse" />
                      </div>
                   </div>

                   <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-50 text-slate-400 rounded-lg"><Upload className="h-5 w-5" /></div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold">Upload ID Document</span>
                          <span className="text-xs text-slate-400">Document Scan (ID Card/Driver's License)</span>
                        </div>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Upload ID Document</Button>
                   </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                {/* User Profile Information */}
                <Card className="border-slate-200 shadow-sm">
                  <CardHeader className="pb-2 flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-bold">User Profile Information</CardTitle>
                    <Badge variant="outline" className="text-emerald-500 border-emerald-200 bg-emerald-50">Verifying Profile</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 pt-2">
                      <ProfileField label="Full Name:" value="[Scanning...]" />
                      <ProfileField label="Date of Birth:" value="[Scanning...]" />
                      <ProfileField label="Address:" value="[Scanning...]" />
                      <ProfileField label="National ID:" value="[Scanning...]" />
                    </div>
                  </CardContent>
                </Card>

                {/* Verification Success Rate */}
                <Card className="border-slate-200 shadow-sm">
                   <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold">Verification Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[180px] p-0 overflow-hidden">
                    <CustomLineChart 
                      title="" 
                      data={[
                        { date: '1', val: 20 },
                        { date: '2', val: 45 },
                        { date: '3', val: 30 },
                        { date: '4', val: 80 },
                        { date: '5', val: 65 },
                        { date: '6', val: 90 },
                      ]} 
                      xKey="date" 
                      yKey="val"
                      color="#3b82f6"
                      className="border-none bg-transparent"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Verification History */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Verification History</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-100 text-slate-500">
                          <th className="px-6 py-4 text-left font-medium">Date</th>
                          <th className="px-6 py-4 text-left font-medium">User ID/Phone</th>
                          <th className="px-6 py-4 text-left font-medium">Verification Type</th>
                          <th className="px-6 py-4 text-left font-medium">Status</th>
                          <th className="px-6 py-4 text-left font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {[1, 2, 3].map((i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-medium">2023-10-27</td>
                            <td className="px-6 py-4 text-slate-600">+1 (555) 123-4567</td>
                            <td className="px-6 py-4 text-slate-600">Phone & ID</td>
                            <td className="px-6 py-4">
                              <Badge className="bg-amber-100 text-amber-600 border-none hover:bg-amber-100 font-bold">Pending</Badge>
                            </td>
                            <td className="px-6 py-4">
                              <button className="text-blue-600 font-bold hover:underline">View Details</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar (1 col) */}
            <div className="space-y-6">
               <Card className="border-slate-200 shadow-sm">
                 <CardHeader className="pb-2">
                   <CardTitle className="text-sm font-bold text-slate-500 uppercase">Scan Results</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-6 pt-2">
                    <div className="space-y-3">
                       <span className="text-sm font-bold text-slate-800">Phone Number Scan</span>
                       <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                         <span className="text-sm font-bold">+1 (555) 123-4567</span>
                         <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                       </div>
                       <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold">
                         <CheckCircle2 className="h-3 w-3" />
                         Verified
                       </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-100">
                       <div className="flex items-center justify-between">
                         <span className="text-sm font-bold text-slate-800">ID Document Scan</span>
                         <Badge variant="ghost" className="text-[10px] uppercase font-bold text-slate-400">Analyzing...</Badge>
                       </div>
                       <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-200">
                          <FileText className="h-8 w-8 text-slate-300" />
                       </div>
                       <div className="space-y-1">
                          <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                             <div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Analyzing Document...
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 text-xs font-medium pl-3">
                             Extracting Details...
                          </div>
                       </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-100">
                       <div className="flex items-center justify-between">
                         <span className="text-sm font-bold text-slate-800">Face Match</span>
                         <Badge variant="ghost" className="text-[10px] uppercase font-bold text-slate-400">Comparing...</Badge>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="h-16 w-16 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200">
                            <Avatar className="h-12 w-12 rounded-sm"><AvatarImage src="https://i.pravatar.cc/150?u=target" /></Avatar>
                          </div>
                          <p className="text-xs text-slate-400 leading-tight">User's photo from document</p>
                       </div>
                    </div>
                 </CardContent>
               </Card>

               <Card className="border-slate-200 shadow-sm">
                 <CardHeader className="pb-2">
                   <CardTitle className="text-sm font-bold text-slate-500 uppercase">User Status Distribution</CardTitle>
                 </CardHeader>
                 <CardContent className="h-[200px] p-0">
                    <CustomPieChart 
                      title="" 
                      data={[
                        { name: 'Verified', value: 65, color: '#3b82f6' },
                        { name: 'Pending', value: 25, color: '#fbbf24' },
                        { name: 'Failed', value: 10, color: '#ef4444' },
                      ]}
                      className="border-none bg-transparent"
                    />
                 </CardContent>
               </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function ProfileField({ label, value }: { label: string, value: string }) {
  const isScanning = value === "[Scanning...]"
  
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-all">
      <span className="text-sm font-bold text-slate-500">{label}</span>
      <span className={`text-sm font-black ${isScanning ? 'text-blue-500 animate-pulse' : 'text-slate-900'}`}>
        {value}
      </span>
    </div>
  )
}
