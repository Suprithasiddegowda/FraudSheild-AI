"use client"

import * as React from "react"
import { Shield, UserCheck, LayoutDashboard, Settings, Bell, Search, Moon, Sun } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useTheme } from "next-themes"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const items = [
  {
    title: "Ad Fraud Detection",
    url: "/ad-fraud",
    icon: Shield,
  },
  {
    title: "Identity Verification",
    url: "/identity",
    icon: UserCheck,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <Sidebar className="border-r border-border/50 glass">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <Shield className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight neon-text-cyan">FraudShield AI</span>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">Enterprise Security</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={pathname === item.url}
                    className={`transition-all duration-200 ${
                      pathname === item.url 
                        ? "bg-primary/10 text-primary neon-border-cyan" 
                        : "hover:bg-accent/50"
                    }`}
                  >
                    <Link href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className={`h-5 w-5 ${pathname === item.url ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-accent/50">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <span>Alerts</span>
                  <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">4</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-accent/50">
                  <Settings className="h-5 w-5 text-muted-foreground" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border/50">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-500" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold">Admin User</span>
              <span className="text-[10px] text-muted-foreground">Premium Plan</span>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
