'use client';

import { Container, Title, Text, Button, Group, Stack, Grid, Card, Box, Badge, ThemeIcon, BackgroundImage, Overlay } from '@mantine/core';
import { IconCloudRain, IconMapPin, IconShirt, IconSparkles, IconArrowRight, IconSun, IconWind, IconTemperature } from '@tabler/icons-react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      {/* ヒーローセクション */}
      <Box style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #fff5f3 0%, #fff 100%)' }}>
        <Container size="xl">
          <Grid align="center" gutter={60}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Badge color="sunsetOrange" variant="light" size="lg" radius="xl">
                  AIが提案する最適な服装
                </Badge>
                
                <Title order={1} size="48" fw={800} style={{ lineHeight: 1.2 }}>
                  天気に合わせた
                  <Text span color="sunsetOrange" inherit>
                    完璧な服装
                  </Text>
                  をAIが提案
                </Title>
                
                <Text size="xl" c="dimmed" maw={500}>
                  現在地と目的地の天気情報から、その日の移動に最適な服装をAIが瞬時に提案。もう服選びに迷うことはありません。
                </Text>
                
                <Group gap="md">
                  <Button 
                    size="lg" 
                    color="sunsetOrange"
                    rightSection={<IconArrowRight size={20} />}
                    component={Link}
                    href="/signup"
                  >
                    無料で始める
                  </Button>
                  <Button 
                    size="lg" 
                    variant="default"
                    component={Link}
                    href="/login"
                  >
                    ログイン
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box style={{ position: 'relative', padding: '2rem' }}>
                {/* デモ動画のプレースホルダー */}
                <Card shadow="xl" radius="lg" withBorder style={{ aspectRatio: '16/9', background: '#f8f9fa', position: 'relative', overflow: 'hidden' }}>
                  <Stack align="center" justify="center" h="100%">
                    <ThemeIcon size={80} radius="xl" color="sunsetOrange" variant="light">
                      <IconSun size={50} />
                    </ThemeIcon>
                    <Text size="lg" fw={500}>デモ動画エリア</Text>
                    <Text size="sm" c="dimmed">実際の使用イメージをご覧いただけます</Text>
                  </Stack>
                </Card>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* 機能紹介セクション */}
      <Container size="xl" py={80}>
        <Stack gap={60}>
          <Stack align="center" gap="md">
            <Title order={2} size="36" ta="center">
              きおんコーデの
              <Text span color="sunsetOrange" inherit>
                3つの特徴
              </Text>
            </Title>
            <Text size="lg" c="dimmed" ta="center" maw={600}>
              天気に応じた服装選びを、よりスマートに、より簡単に。
            </Text>
          </Stack>
          
          <Grid gutter={40}>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card h="100%" shadow="sm" radius="lg" withBorder p="xl">
                <Stack gap="md">
                  <ThemeIcon size={60} radius="xl" color="sunsetOrange" variant="light">
                    <IconCloudRain size={35} />
                  </ThemeIcon>
                  <Title order={3} size="24">リアルタイム天気情報</Title>
                  <Text c="dimmed">
                    現在地と目的地の最新の天気情報を取得。気温、降水確率、風速などを総合的に分析します。
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card h="100%" shadow="sm" radius="lg" withBorder p="xl">
                <Stack gap="md">
                  <ThemeIcon size={60} radius="xl" color="amberGlow" variant="light">
                    <IconSparkles size={35} />
                  </ThemeIcon>
                  <Title order={3} size="24">AI服装提案</Title>
                  <Text c="dimmed">
                    最新のAI技術により、天気と移動に最適な服装を瞬時に提案。体感温度の好みも考慮します。
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card h="100%" shadow="sm" radius="lg" withBorder p="xl">
                <Stack gap="md">
                  <ThemeIcon size={60} radius="xl" color="sunsetOrange" variant="light">
                    <IconShirt size={35} />
                  </ThemeIcon>
                  <Title order={3} size="24">服装登録機能</Title>
                  <Text c="dimmed">
                    お持ちの服を登録することで、より具体的で実用的な提案が可能に。イラスト化機能も搭載。
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>

      {/* 使い方セクション */}
      <Box py={80} style={{ background: '#f8f9fa' }}>
        <Container size="xl">
          <Stack gap={60}>
            <Stack align="center" gap="md">
              <Title order={2} size="36" ta="center">
                かんたん3ステップ
              </Title>
              <Text size="lg" c="dimmed" ta="center">
                すぐに使い始められます
              </Text>
            </Stack>
            
            <Grid gutter={40}>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Stack align="center" gap="md">
                  <Box style={{ position: 'relative' }}>
                    <ThemeIcon size={80} radius="xl" color="sunsetOrange" variant="filled">
                      <Text size="32" fw={700}>1</Text>
                    </ThemeIcon>
                  </Box>
                  <Title order={4} ta="center">地点を設定</Title>
                  <Text c="dimmed" ta="center">
                    現在地と目的地を入力するだけ
                  </Text>
                </Stack>
              </Grid.Col>
              
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Stack align="center" gap="md">
                  <Box style={{ position: 'relative' }}>
                    <ThemeIcon size={80} radius="xl" color="amberGlow" variant="filled">
                      <Text size="32" fw={700}>2</Text>
                    </ThemeIcon>
                  </Box>
                  <Title order={4} ta="center">天気を確認</Title>
                  <Text c="dimmed" ta="center">
                    両地点の天気情報を自動取得
                  </Text>
                </Stack>
              </Grid.Col>
              
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Stack align="center" gap="md">
                  <Box style={{ position: 'relative' }}>
                    <ThemeIcon size={80} radius="xl" color="sunsetOrange" variant="filled">
                      <Text size="32" fw={700}>3</Text>
                    </ThemeIcon>
                  </Box>
                  <Title order={4} ta="center">AIの提案を確認</Title>
                  <Text c="dimmed" ta="center">
                    最適な服装の提案が即座に表示
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA セクション */}
      <Container size="xl" py={80}>
        <Card radius="xl" p={60} style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}>
          <Stack align="center" gap="xl">
            <Title order={2} size="40" c="white" ta="center">
              今すぐ始めよう
            </Title>
            <Text size="xl" c="white" ta="center" maw={600} style={{ opacity: 0.95 }}>
              天気に合わせた完璧な服装選びを、AIがサポート。
              無料で始められます。
            </Text>
            <Button 
              size="xl" 
              variant="white" 
              color="dark"
              rightSection={<IconArrowRight size={20} />}
              component={Link}
              href="/signup"
            >
              無料アカウントを作成
            </Button>
          </Stack>
        </Card>
      </Container>
    </>
  );
}

export default HomePage;