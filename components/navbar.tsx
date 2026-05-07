"use client"

import { Search, Bell, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function Navbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center gap-4 border-b border-white/5 bg-background/40 px-6 backdrop-blur-2xl">
      <SidebarTrigger className="lg:hidden text-zinc-400" />
      <div className="flex flex-1 items-center gap-4 md:gap-8">
        <h1 className="text-xl font-black tracking-tighter md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">{title}</h1>
        <div className="hidden w-full max-w-[400px] items-center relative md:flex">
          <Search className="absolute left-3 h-4 w-4 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
          <Input
            placeholder="Search security logs, users, anomalies..."
            className="pl-9 h-10 bg-white/5 border-white/10 focus-visible:ring-cyan-500/50 focus-visible:bg-white/10 transition-all rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-white/5 transition-colors">
          <Bell className="h-5 w-5 text-zinc-400" />
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-rose-500 border-2 border-background animate-pulse" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger render={
            <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:scale-110 transition-transform">
              <Avatar className="h-10 w-10 border border-white/10">
                <AvatarImage src="https://i.pravatar.cc/150?u=admin" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </Button>
          } />
          <DropdownMenuContent className="w-56 glass" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-bold leading-none">Security Admin</p>
                <p className="text-xs leading-none text-muted-foreground">admin@fraudshield.ai</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/5" />
            <DropdownMenuItem className="cursor-pointer hover:bg-white/5">Profile</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-white/5">Settings</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/5" />
            <DropdownMenuItem className="cursor-pointer text-rose-500 hover:bg-rose-500/10">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
