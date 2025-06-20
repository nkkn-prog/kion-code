'use client';

import { Container, Title, Grid, Card, Text, Button, Group, ActionIcon, Badge, Stack, TextInput, Modal } from '@mantine/core';
import { IconPlus, IconEdit, IconTrash, IconMapPin, IconHome } from '@tabler/icons-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const locationSchema = z.object({
  currentLocation: z.string().min(1, '現在地を入力してください'),
  currentLocationDetail: z.string().optional(),
  destinationLocation: z.string().min(1, '目的地を入力してください'),
  destinationLocationDetail: z.string().optional(),
});

type LocationFormData = z.infer<typeof locationSchema>;

const LocationPage = () => {
  const [opened, setOpened] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LocationFormData>({
    resolver: zodResolver(locationSchema),
  });
  
  const onSubmit = (data: LocationFormData) => {
    console.log('Location data:', data);
    reset();
    setOpened(false);
  };

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

      <Modal opened={opened} onClose={() => setOpened(false)} title="地点セットを登録" size="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Text size="sm" c="dimmed" mb="md">
              現在地と目的地をセットで登録します
            </Text>
            
            <Stack gap="xl">
              <Stack gap="xs">
                <Group>
                  <IconHome size={20} color="var(--color-primary)" />
                  <Text fw={500}>現在地</Text>
                </Group>
                <TextInput
                  placeholder="例: 東京"
                  {...register('currentLocation')}
                  error={errors.currentLocation?.message}
                />
                <TextInput
                  placeholder="詳細（任意）例: 東京都千代田区"
                  {...register('currentLocationDetail')}
                />
              </Stack>
              
              <Stack gap="xs">
                <Group>
                  <IconMapPin size={20} color="var(--color-secondary)" />
                  <Text fw={500}>目的地</Text>
                </Group>
                <TextInput
                  placeholder="例: 大阪"
                  {...register('destinationLocation')}
                  error={errors.destinationLocation?.message}
                />
                <TextInput
                  placeholder="詳細（任意）例: 大阪府大阪市"
                  {...register('destinationLocationDetail')}
                />
              </Stack>
            </Stack>
            
            <Group justify="flex-end" mt="xl">
              <Button 
                variant="default" 
                onClick={() => {
                  reset();
                  setOpened(false);
                }}
              >
                キャンセル
              </Button>
              <Button color="sunsetOrange" type="submit">
                登録
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </Container>
  );
}

export default LocationPage;