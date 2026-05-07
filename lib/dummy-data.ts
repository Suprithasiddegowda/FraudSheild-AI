import { FraudStats, FraudTrend, FraudSource, RecentIncident, IdentityVerification } from "@/types";

export const fraudStats: FraudStats = {
  overallRate: 12.4,
  totalTraffic: 1250000,
  validTraffic: 1095000,
  invalidTraffic: 155000,
  revenueSaved: 45200,
};

export const fraudTrend: FraudTrend[] = [
  { date: '2024-05-01', fraudRate: 8.2, totalClicks: 42000 },
  { date: '2024-05-02', fraudRate: 9.5, totalClicks: 45000 },
  { date: '2024-05-03', fraudRate: 12.1, totalClicks: 48000 },
  { date: '2024-05-04', fraudRate: 15.4, totalClicks: 52000 },
  { date: '2024-05-05', fraudRate: 11.2, totalClicks: 49000 },
  { date: '2024-05-06', fraudRate: 10.8, totalClicks: 46000 },
  { date: '2024-05-07', fraudRate: 12.4, totalClicks: 50000 },
];

export const fraudSources: FraudSource[] = [
  { source: 'Direct Traffic', value: 35, color: '#10b981' },
  { source: 'Paid Search', value: 25, color: '#3b82f6' },
  { source: 'Social Media', value: 20, color: '#8b5cf6' },
  { source: 'Affiliates', value: 15, color: '#f59e0b' },
  { source: 'Other', value: 5, color: '#64748b' },
];

export const recentIncidents: RecentIncident[] = [
  { id: '1', timestamp: '2 mins ago', source: '84.23.12.98', type: 'Click Bot', severity: 'high', status: 'blocked' },
  { id: '2', timestamp: '15 mins ago', source: 'Social Ad Campaign', type: 'Geofencing Bypass', severity: 'medium', status: 'monitored' },
  { id: '3', timestamp: '45 mins ago', source: 'Affiliate ID: 892', type: 'Incentivized Clicks', severity: 'critical', status: 'blocked' },
  { id: '4', timestamp: '1 hour ago', source: '210.45.67.12', type: 'Browser Emulation', severity: 'low', status: 'allowed' },
  { id: '5', timestamp: '2 hours ago', source: 'Search Network', type: 'IP Spoofing', severity: 'high', status: 'blocked' },
];

export const identityVerifications: IdentityVerification[] = [
  {
    id: 'V-1024',
    user: { name: 'Alex Rivera', email: 'alex@example.com', avatar: 'https://i.pravatar.cc/150?u=alex' },
    type: 'Document',
    status: 'verified',
    timestamp: '10 mins ago',
    progress: 100,
  },
  {
    id: 'V-1025',
    user: { name: 'Sarah Chen', email: 'sarah@example.com', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    type: 'Face Match',
    status: 'pending',
    timestamp: '25 mins ago',
    progress: 65,
  },
  {
    id: 'V-1026',
    user: { name: 'Michael Ross', email: 'mike@example.com', avatar: 'https://i.pravatar.cc/150?u=mike' },
    type: 'KYC',
    status: 'failed',
    timestamp: '1 hour ago',
    progress: 40,
  },
  {
    id: 'V-1027',
    user: { name: 'Elena Gilbert', email: 'elena@example.com', avatar: 'https://i.pravatar.cc/150?u=elena' },
    type: 'Document',
    status: 'verified',
    timestamp: '3 hours ago',
    progress: 100,
  },
];

export const userStatusDistribution = [
  { name: 'Verified', value: 75, color: '#10b981' },
  { name: 'Pending', value: 15, color: '#f59e0b' },
  { name: 'Failed', value: 10, color: '#ef4444' },
];
