import { useEffect } from 'react';
import { pageView } from '@/lib/ga';
import Router from 'next/router';

export function useGoogleAnalytics() {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [Router.events]);
}
