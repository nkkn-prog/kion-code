'use client';

import { AppShell } from '@mantine/core';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { usePathname } from 'next/navigation';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNavigation = pathname !== '/' && pathname !== '/login' && pathname !== '/signup';

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !showNavigation, desktop: !showNavigation } }}
      padding="md"
    >
      <Header />
      {showNavigation && <Navigation />}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}