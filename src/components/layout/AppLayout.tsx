'use client';

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { usePathname } from 'next/navigation';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNavigation = pathname !== '/' && pathname !== '/login' && pathname !== '/signup';
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ 
        width: 250, 
        breakpoint: 'sm', 
        collapsed: { 
          mobile: !opened || !showNavigation, 
          desktop: !showNavigation 
        } 
      }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} showNavigation={showNavigation} />
      {showNavigation && <Navigation onNavigate={close} />}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}