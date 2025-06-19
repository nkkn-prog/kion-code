'use client';

import { AppShell, Group, Button, Text, Menu, Avatar, UnstyledButton, Burger } from '@mantine/core';
import { IconLogout, IconUser, IconSettings, IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  opened?: boolean;
  toggle?: () => void;
  showNavigation?: boolean;
}

export function Header({ opened, toggle, showNavigation }: HeaderProps) {
  const pathname = usePathname();
  const isAuthenticated = pathname !== '/' && pathname !== '/login' && pathname !== '/signup';

  return (
    <AppShell.Header>
      <Group justify="space-between" h={60} px="md">
        <Group gap="sm">
          {showNavigation && (
            <Burger
              opened={opened || false}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          )}
          <Text size="xl" fw={700} component={Link} href={isAuthenticated ? '/dashboard' : '/'} style={{ textDecoration: 'none', color: 'var(--color-primary)' }}>
            きおんコーデ
          </Text>
        </Group>
        
        {isAuthenticated ? (
          <Menu shadow="md" width={200} position="bottom-end">
            <Menu.Target>
              <UnstyledButton>
                <Group gap="xs">
                  <Avatar radius="xl" size={30} color="sunsetOrange">
                    YT
                  </Avatar>
                  <Text size="sm">山田 太郎</Text>
                  <IconChevronDown size={16} />
                </Group>
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconUser size={14} />}
                component={Link}
                href="/profile"
              >
                プロフィール
              </Menu.Item>
              <Menu.Item
                leftSection={<IconSettings size={14} />}
                component={Link}
                href="/setup"
              >
                設定
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                color="red"
                leftSection={<IconLogout size={14} />}
                onClick={() => {}}
              >
                ログアウト
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ) : (
          <Group gap="sm">
            <Button variant="default" component={Link} href="/login" size="sm">
              ログイン
            </Button>
            <Button color="sunsetOrange" component={Link} href="/signup" size="sm">
              新規登録
            </Button>
          </Group>
        )}
      </Group>
    </AppShell.Header>
  );
}