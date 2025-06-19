import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '@/styles/theme';
import { AppLayout } from '@/components/layout/AppLayout';
import "./globals.css";

export const metadata: Metadata = {
  title: "きおんコーデ",
  description: "現在地と目的地の天気情報を用いて、最適な服の種類をAIが提案するアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications />
          <AppLayout>
            {children}
          </AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}