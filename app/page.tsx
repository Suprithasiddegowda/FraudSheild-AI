"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Shield, Lock, Fingerprint, Activity, BarChart3, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white overflow-hidden selection:bg-cyan-500/30">
      {/* Background Cyber Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `linear-gradient(rgba(6,182,212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 w-full max-w-7xl gap-16 py-20 lg:py-0">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-black shadow-[0_0_40px_rgba(6,182,212,0.6)]">
              <Shield className="h-8 w-8" />
            </div>
            <span className="text-4xl font-black tracking-tighter uppercase italic bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">FraudShield AI</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500"
          >
            Next-Generation <br /> 
            <span className="text-cyan-400">Cyber Defense</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-xl mb-12 leading-relaxed"
          >
            Protect your enterprise with real-time ad fraud detection and high-fidelity identity verification powered by advanced neural analysis and quantum-safe encryption.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              onClick={() => router.push('/ad-fraud')}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold h-16 px-10 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              Launch Dashboard
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => router.push('/identity')}
              className="border-zinc-800 hover:bg-white/5 text-white font-bold h-16 px-10 rounded-2xl transition-all hover:border-cyan-500/50 backdrop-blur-xl"
            >
              Identity Verification
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/5 pt-12"
          >
            <div className="flex flex-col items-center lg:items-start gap-2">
              <Activity className="h-6 w-6 text-cyan-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Real-time</span>
              <span className="text-sm font-semibold">1ms Latency</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <Lock className="h-6 w-6 text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Security</span>
              <span className="text-sm font-semibold">AES-256 Auth</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <BarChart3 className="h-6 w-6 text-violet-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Analytics</span>
              <span className="text-sm font-semibold">D3 Visualization</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <Fingerprint className="h-6 w-6 text-rose-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Biometrics</span>
              <span className="text-sm font-semibold">Neural Match</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="lg:w-1/2 relative flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full scale-75 animate-pulse" />
          <div className="relative z-10 w-full max-w-[600px] aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
             <img 
               src="/cyber_defense_visual.png" 
               alt="Cyber Defense Visualization" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
             <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">Threat Intelligence</p>
                <p className="text-sm text-zinc-300">Neural analysis active. Monitoring 1.2M endpoints for anomalous behavior patterns.</p>
             </div>
          </div>
        </motion.div>
      </main>

      {/* Floating Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />
    </div>
  )
}
