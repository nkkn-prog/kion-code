'use client';

import { Container, Paper, Title, TextInput, PasswordInput, Button, Text, Anchor, Box } from '@mantine/core';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const signupSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  password: z.string().min(8, 'パスワードは8文字以上で入力してください'),
  confirmPassword: z.string().min(8, 'パスワードは8文字以上で入力してください'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'パスワードが一致しません',
  path: ['confirmPassword'],
});

type SignupFormData = z.infer<typeof signupSchema>;

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });
  
  const onSubmit = (data: SignupFormData) => {
    console.log('Signup data:', data);
  };
  return (
    <Container size={420} my={40}>
      <Title ta="center" order={2} mb={30}>
        新規登録
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput 
            label="お名前" 
            placeholder="山田 太郎" 
            {...register('name')}
            error={errors.name?.message}
            mb="md"
          />
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
            mb="md"
          />
          <PasswordInput 
            label="パスワード（確認）" 
            placeholder="パスワードを再入力" 
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
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

          <Button fullWidth size="md" color="sunsetOrange" type="submit">
            アカウントを作成
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default SignupPage;