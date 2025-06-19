'use client';

import { Container, Paper, Title, TextInput, PasswordInput, Button, Text, Anchor, Box } from '@mantine/core';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <Container size={420} my={40}>
      <Title ta="center" order={2} mb={30}>
        新規登録
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput 
          label="お名前" 
          placeholder="山田 太郎" 
          required 
          mb="md"
        />
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
          mb="md"
        />
        <PasswordInput 
          label="パスワード（確認）" 
          placeholder="パスワードを再入力" 
          required 
          mb="lg"
        />
        
        <Box mb="lg">
          <Text size="sm">
            すでにアカウントをお持ちの方は{' '}
            <Anchor component={Link} href="/login" size="sm">
              ログイン
            </Anchor>
          </Text>
        </Box>

        <Button fullWidth size="md" color="sunsetOrange">
          アカウントを作成
        </Button>
      </Paper>
    </Container>
  );
}

export default SignupPage;