'use client';

import { Container, Title, Grid, Card, Image, Text, Button, Group, ActionIcon, Badge, Stack, FileInput, TextInput, Select, Modal } from '@mantine/core';
import { IconPlus, IconEdit, IconTrash, IconUpload } from '@tabler/icons-react';
import { useState } from 'react';

const ClothesPage = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Container size="lg" py="xl">
      <Group justify="space-between" mb="xl">
        <Title order={1}>服装登録</Title>
        <Button leftSection={<IconPlus size={16} />} color="sunsetOrange" onClick={() => setOpened(true)}>
          新規登録
        </Button>
      </Group>
      
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="/api/placeholder/300/200"
                height={200}
                alt="服の画像"
              />
            </Card.Section>

            <Stack gap="xs" mt="md">
              <Badge color="amberGlow" variant="light">トップス</Badge>
              <Text fw={500}>白いTシャツ</Text>
              <Text size="sm" c="dimmed">
                春・夏用のカジュアルウェア
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
        
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ minHeight: 350 }}>
            <Stack align="center" justify="center" h="100%">
              <IconPlus size={48} color="var(--mantine-color-gray-5)" />
              <Text c="dimmed">無料プランでは1つまで登録可能です</Text>
              <Button variant="light" color="sunsetOrange" size="sm">
                プランをアップグレード
              </Button>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>

      <Modal opened={opened} onClose={() => setOpened(false)} title="服装を登録" size="md">
        <Stack>
          <FileInput
            label="服の画像"
            placeholder="画像を選択"
            leftSection={<IconUpload size={14} />}
            accept="image/*"
            required
          />
          
          <TextInput
            label="名称"
            placeholder="例: 白いTシャツ"
            required
          />
          
          <Select
            label="カテゴリー"
            placeholder="選択してください"
            data={[
              { value: 'innerwear', label: 'インナー' },
              { value: 'tops', label: 'トップス' },
              { value: 'bottoms', label: 'ボトムス' },
              { value: 'outerwear', label: 'アウター' },
              { value: 'shoes', label: '靴' },
              { value: 'accessories', label: 'アクセサリー' },
            ]}
            required
          />
          
          <TextInput
            label="説明"
            placeholder="例: 春・夏用のカジュアルウェア"
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

export default ClothesPage;