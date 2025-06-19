'use client';

import { Container, Title, Stepper, Button, Group, TextInput, Select, Radio, Stack, Paper, Text } from '@mantine/core';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SetupPage = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();
  
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const handleComplete = () => {
    router.push('/dashboard');
  };

  return (
    <Container size="md" py="xl">
      <Title order={1} mb="xl">初期設定</Title>
      
      <Paper shadow="sm" radius="md" p="xl" withBorder>
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step label="地点設定" description="現在地と目的地">
            <Stack mt="xl">
              <TextInput 
                label="現在地" 
                placeholder="例: 東京" 
                required 
              />
              <TextInput 
                label="よく行く目的地" 
                placeholder="例: 大阪" 
                required 
              />
            </Stack>
          </Stepper.Step>
          
          <Stepper.Step label="体感温度" description="温度の感じ方">
            <Stack mt="xl">
              <Text>普段の体感温度はどちらに近いですか？</Text>
              <Radio.Group>
                <Stack>
                  <Radio value="cold" label="寒がり（人より厚着することが多い）" />
                  <Radio value="normal" label="普通" />
                  <Radio value="hot" label="暑がり（人より薄着することが多い）" />
                </Stack>
              </Radio.Group>
            </Stack>
          </Stepper.Step>
          
          <Stepper.Step label="服装スタイル" description="普段の服装">
            <Stack mt="xl">
              <Text>普段の服装スタイルを教えてください</Text>
              <Select
                label="スタイル"
                placeholder="選択してください"
                data={[
                  { value: 'casual', label: 'カジュアル' },
                  { value: 'business', label: 'ビジネス' },
                  { value: 'formal', label: 'フォーマル' },
                  { value: 'sporty', label: 'スポーティー' },
                ]}
              />
            </Stack>
          </Stepper.Step>
        </Stepper>

        <Group justify="space-between" mt="xl">
          <Button variant="default" onClick={prevStep} disabled={active === 0}>
            戻る
          </Button>
          {active < 2 ? (
            <Button onClick={nextStep} color="sunsetOrange">
              次へ
            </Button>
          ) : (
            <Button onClick={handleComplete} color="sunsetOrange">
              設定を完了
            </Button>
          )}
        </Group>
      </Paper>
    </Container>
  );
}

export default SetupPage;