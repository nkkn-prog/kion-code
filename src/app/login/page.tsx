'use client';

import { Container, Paper, Title, TextInput, PasswordInput, Button, Text, Anchor, Group } from '@mantine/core';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('有効なメールアドレスを入力してください'),
  password: z.string().min(8, 'パスワードは8文字以上で入力してください'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  
  const onSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
  };
  return (
    <Container size={420} my={40}>
      <Title ta="center" order={2} mb={30}>
        ログイン
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput 
            label="メールアドレス" 
            placeholder="your@email.com" 
            {...register('email')}
            error={errors.email?.message}
            mb="md"
          />
          <PasswordInput 
            label="パスワード" 
            placeholder="パスワードを入力" 
            {...register('password')}
            error={errors.password?.message}
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

          <Button fullWidth size="md" color="sunsetOrange" type="submit">
            ログイン
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginPage;