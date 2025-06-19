'use client';

import { Container, Title, Paper, TextInput, Button, Avatar, Group, Stack, FileInput, Text } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';

const ProfilePage = () => {
  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="xl">プロフィール設定</Title>
      
      <Paper shadow="sm" radius="md" p="xl" withBorder>
        <Stack>
          <Group>
            <Avatar size={120} radius="md" color="sunsetOrange">
              YT
            </Avatar>
            <Stack>
              <FileInput
                label="プロフィール画像"
                placeholder="画像を選択"
                icon={<IconUpload size={14} />}
                accept="image/*"
              />
              <Text size="xs" c="dimmed">
                推奨: 正方形の画像 (最大 5MB)
              </Text>
            </Stack>
          </Group>
          
          <TextInput
            label="お名前"
            placeholder="山田 太郎"
            required
          />
          
          <TextInput
            label="メールアドレス"
            placeholder="your@email.com"
            required
          />
          
          <Group justify="flex-end" mt="md">
            <Button variant="default">
              キャンセル
            </Button>
            <Button color="sunsetOrange">
              保存
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
}

export default ProfilePage;