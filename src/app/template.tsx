'use client';

import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';

export default function Template({ children }: { children: React.ReactNode }) {
  useGoogleAnalytics();

  return <>{children}</>;
}
