'use client';

import { Container, Paper, Title, TextInput, PasswordInput, Button, Text, Anchor, Group } from '@mantine/core';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <Container size={420} my={40}>
      <Title ta="center" order={2} mb={30}>
        ログイン
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput 
          label="メールアドレス" 
          placeholder="your@email.com" 
          required 
          mb="md"
        />
        <PasswordInput 
          label="パスワード" 
          placeholder="パスワードを入力" 
          required 
          mb="lg"
        />
        
        <Group justify="space-between" mb="lg">
          <Text size="sm">
            アカウントをお持ちでない方は{' '}
            <Anchor component={Link} href="/signup" size="sm">
              新規登録
            </Anchor>
          </Text>
        </Group>

        <Button fullWidth size="md" color="sunsetOrange">
          ログイン
        </Button>
      </Paper>
    </Container>
  );
}

export default LoginPage;