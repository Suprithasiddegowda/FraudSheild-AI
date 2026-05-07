export interface FraudStats {
  overallRate: number;
  totalTraffic: number;
  validTraffic: number;
  invalidTraffic: number;
  revenueSaved: number;
}

export interface FraudTrend {
  date: string;
  fraudRate: number;
  totalClicks: number;
}

export interface FraudSource {
  source: string;
  value: number;
  color: string;
}

export interface RecentIncident {
  id: string;
  timestamp: string;
  source: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'blocked' | 'monitored' | 'allowed';
}

export interface IdentityVerification {
  id: string;
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  type: 'KYC' | 'Document' | 'Face Match';
  status: 'pending' | 'verified' | 'failed';
  timestamp: string;
  progress: number;
}

export interface UserStats {
  totalUsers: number;
  verifiedUsers: number;
  pendingUsers: number;
  failedUsers: number;
}
