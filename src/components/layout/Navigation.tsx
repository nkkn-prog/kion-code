'use client';

import { AppShell, NavLink } from '@mantine/core';
import { IconHome, IconShirt, IconMapPin, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'ダッシュボード', icon: IconHome, href: '/dashboard' },
  { label: '服装登録', icon: IconShirt, href: '/clothes' },
  { label: '地点登録', icon: IconMapPin, href: '/location' },
  { label: 'プロフィール', icon: IconUser, href: '/profile' },
];

interface NavigationProps {
  onNavigate?: () => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const pathname = usePathname();

  return (
    <AppShell.Navbar p="md">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          component={Link}
          href={item.href}
          label={item.label}
          leftSection={<item.icon size={20} />}
          active={pathname === item.href}
          variant="subtle"
          style={{ borderRadius: 'var(--radius-md)', marginBottom: '0.5rem' }}
          onClick={onNavigate}
        />
      ))}
    </AppShell.Navbar>
  );
}