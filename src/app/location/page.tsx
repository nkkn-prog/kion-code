'use client';

import { Container, Title, Paper, Grid, Card, Text, Button, Group, ActionIcon, Badge, Stack, TextInput, Modal, Radio } from '@mantine/core';
import { IconPlus, IconEdit, IconTrash, IconMapPin, IconHome } from '@tabler/icons-react';
import { useState } from 'react';

const LocationPage = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Container size="lg" py="xl">
      <Group justify="space-between" mb="xl">
        <Title order={1}>地点登録</Title>
        <Button leftSection={<IconPlus size={16} />} color="sunsetOrange" onClick={() => setOpened(true)}>
          新規登録
        </Button>
      </Group>
      
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Group>
                <IconHome size={24} color="var(--color-primary)" />
                <Text fw={500} size="lg">現在地</Text>
              </Group>
              <Badge color="sunsetOrange" variant="light">デフォルト</Badge>
            </Group>
            
            <Stack gap="xs">
              <Text size="xl" fw={700}>東京</Text>
              <Text size="sm" c="dimmed">
                東京都
              </Text>
            </Stack>

            <Group mt="md">
              <ActionIcon variant="light" color="blue" size="lg">
                <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon variant="light" color="red" size="lg" disabled>
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Group>
                <IconMapPin size={24} color="var(--color-secondary)" />
                <Text fw={500} size="lg">目的地</Text>
              </Group>
              <Badge color="amberGlow" variant="light">よく行く</Badge>
            </Group>
            
            <Stack gap="xs">
              <Text size="xl" fw={700}>大阪</Text>
              <Text size="sm" c="dimmed">
                大阪府
              </Text>
            </Stack>

            <Group mt="md">
              <ActionIcon variant="light" color="blue" size="lg">
                <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon variant="light" color="red" size="lg">
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          </Card>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ minHeight: 200 }}>
            <Stack align="center" justify="center" h="100%">
              <IconPlus size={48} color="var(--mantine-color-gray-5)" />
              <Text c="dimmed">無料プランでは1セットまで登録可能です</Text>
              <Button variant="light" color="sunsetOrange" size="sm">
                プランをアップグレード
              </Button>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>

      <Modal opened={opened} onClose={() => setOpened(false)} title="地点を登録" size="md">
        <Stack>
          <Radio.Group label="地点タイプ" required>
            <Stack mt="xs">
              <Radio value="current" label="現在地" />
              <Radio value="destination" label="目的地" />
            </Stack>
          </Radio.Group>
          
          <TextInput
            label="地名"
            placeholder="例: 東京、大阪"
            required
          />
          
          <TextInput
            label="詳細（任意）"
            placeholder="例: 東京都千代田区"
          />
          
          <Group justify="flex-end" mt="md">
            <Button variant="default" onClick={() => setOpened(false)}>
              キャンセル
            </Button>
            <Button color="sunsetOrange">
              登録
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Container>
  );
}

export default LocationPage;