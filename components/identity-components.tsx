"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Scan, User, CheckCircle2, XCircle, Clock } from "lucide-react"

export function FaceMatchUI() {
  return (
    <Card className="glass border-border/50 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Scan className="h-5 w-5 text-cyan-500" />
            <span className="font-bold">Biometric Analysis</span>
          </div>
          <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">98.4% Match</Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative group">
            <div className="aspect-square rounded-lg overflow-hidden border border-border/50 bg-accent/20">
              <img 
                src="https://i.pravatar.cc/300?u=target" 
                alt="ID Document" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-lg pointer-events-none" />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-lg" />
            </div>
            <p className="text-[10px] text-center mt-2 text-muted-foreground uppercase tracking-widest font-bold">Extracted ID Photo</p>
          </div>
          
          <div className="relative group">
            <div className="aspect-square rounded-lg overflow-hidden border border-border/50 bg-accent/20">
              <img 
                src="https://i.pravatar.cc/300?u=live" 
                alt="Live Selfie" 
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
              />
              <motion.div 
                className="absolute inset-x-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <p className="text-[10px] text-center mt-2 text-muted-foreground uppercase tracking-widest font-bold">Live Selfie Scan</p>
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Facial Landmarks</span>
            <span className="text-emerald-500 font-bold">MATCHED</span>
          </div>
          <Progress value={94} className="h-1 bg-accent" />
          
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Skin Texture Analysis</span>
            <span className="text-emerald-500 font-bold">AUTHENTIC</span>
          </div>
          <Progress value={88} className="h-1 bg-accent" />
          
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Liveness Detection</span>
            <span className="text-emerald-500 font-bold">PASSED</span>
          </div>
          <Progress value={100} className="h-1 bg-accent" />
        </div>
      </CardContent>
    </Card>
  )
}

export function UserProfileCard() {
  return (
    <Card className="glass border-border/50">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="h-24 w-24 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-violet-500">
              <img 
                src="https://i.pravatar.cc/150?u=target" 
                className="h-full w-full rounded-full border-2 border-background object-cover"
                alt="Profile"
              />
            </div>
            <div className="absolute bottom-1 right-1 h-6 w-6 rounded-full bg-emerald-500 border-2 border-background flex items-center justify-center">
              <CheckCircle2 className="h-3 w-3 text-white" />
            </div>
          </div>
          <h3 className="mt-4 text-xl font-bold">Marcus Holloway</h3>
          <p className="text-sm text-muted-foreground">San Francisco, CA</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-accent/50">Risk: Low</Badge>
            <Badge variant="secondary" className="bg-accent/50">Level 3 KYC</Badge>
          </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/20 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-cyan-500/10 text-cyan-500">
                <User className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium text-muted-foreground">Document ID</span>
                <span className="text-sm font-bold font-mono">US-PASS-9982X</span>
              </div>
            </div>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/20 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-cyan-500/10 text-cyan-500">
                <Scan className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium text-muted-foreground">Phone Number</span>
                <span className="text-sm font-bold font-mono">+1 (555) 012-3456</span>
              </div>
            </div>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
