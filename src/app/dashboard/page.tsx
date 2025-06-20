'use client';

import { Container, Title, Grid, Card, Text, Group, Stack, Badge, Paper, Box } from '@mantine/core';
import { IconCloudRain, IconSun, IconWind } from '@tabler/icons-react';

const DashboardPage = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xl">ダッシュボード</Title>
      
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="xs">
              <Text fw={500} size="lg">現在地の天気</Text>
              <Badge color="sunsetOrange" variant="light">東京</Badge>
            </Group>
            
            <Group mt="md" mb="xs">
              <IconSun size={48} color="var(--color-secondary)" />
              <Stack gap={0}>
                <Text size="xl" fw={700}>25°C</Text>
                <Text size="sm" c="dimmed">晴れ</Text>
              </Stack>
            </Group>
            
            <Group gap="xl" mt="md">
              <Group gap="xs">
                <IconWind size={20} />
                <Text size="sm">風速: 3m/s</Text>
              </Group>
              <Group gap="xs">
                <IconCloudRain size={20} color="#4A90E2" />
                <Text size="sm">降水確率: 10%</Text>
              </Group>
            </Group>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="xs">
              <Text fw={500} size="lg">目的地の天気</Text>
              <Badge color="sunsetOrange" variant="light">大阪</Badge>
            </Group>
            
            <Group mt="md" mb="xs">
              <IconCloudRain size={48} color="#4A90E2" />
              <Stack gap={0}>
                <Text size="xl" fw={700}>22°C</Text>
                <Text size="sm" c="dimmed">小雨</Text>
              </Stack>
            </Group>
            
            <Group gap="xl" mt="md">
              <Group gap="xs">
                <IconWind size={20} />
                <Text size="sm">風速: 5m/s</Text>
              </Group>
              <Group gap="xs">
                <IconCloudRain size={20} color="#4A90E2" />
                <Text size="sm">降水確率: 60%</Text>
              </Group>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>
      
      <Paper shadow="sm" radius="md" p="lg" mt="xl" withBorder>
        <Title order={3} mb="md">AIからの服装提案</Title>
        <Box>
          <Text mb="sm">
            本日の東京から大阪への移動におすすめの服装：
          </Text>
          <Stack gap="xs">
            <Text>• 薄手の長袖シャツまたはカーディガン（温度調節のため）</Text>
            <Text>• 軽い撥水性のあるジャケット（大阪での小雨対策）</Text>
            <Text>• 歩きやすい靴（濡れても大丈夫なもの）</Text>
            <Text>• 折りたたみ傘を持参することをおすすめします</Text>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}

export default DashboardPage;