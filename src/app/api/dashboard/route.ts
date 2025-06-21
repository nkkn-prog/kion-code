import { NextRequest, NextResponse } from 'next/server';

// GET - ダッシュボード情報を取得（天気情報とAI提案）
export async function GET(request: NextRequest) {
  try {
    // TODO: ユーザーの現在地と目的地を取得
    // const userLocation = await prisma.location.findFirst({
    //   where: { 
    //     user_uuid: userUuid,
    //     deleted_at: null
    //   }
    // });

    // TODO: 天気情報を取得（OpenWeatherMap API）
    // const weatherData = await fetchWeatherData(userLocation);

    // TODO: ユーザーのプロフィール情報を取得
    // const userProfile = await prisma.profile.findFirst({
    //   where: { user_uuid: userUuid }
    // });

    // TODO: AI提案を生成（OpenAI API）
    // const aiSuggestion = await generateClothingSuggestion(weatherData, userProfile);

    // TODO: 過去のアドバイスを保存
    // const advice = await prisma.advice.create({
    //   data: {
    //     user_uuid: userUuid,
    //     advice: aiSuggestion,
    //   }
    // });

    const mockDashboardData = {
      weather: {
        current: {
          location: '東京',
          temperature: 22,
          condition: '晴れ',
          humidity: 65,
          windSpeed: 8
        },
        destination: {
          location: '渋谷',
          temperature: 24,
          condition: '曇り',
          humidity: 70,
          windSpeed: 6
        }
      },
      aiSuggestion: {
        recommendation: '軽いカーディガンとジーンズがおすすめです。',
        reason: '現在地と目的地の気温差があるため、脱ぎ着しやすい服装を選びましょう。',
        items: ['カーディガン', 'Tシャツ', 'ジーンズ', 'スニーカー']
      }
    };

    return NextResponse.json({
      success: true,
      data: mockDashboardData,
      message: 'ダッシュボード情報を正常に取得しました'
    });
  } catch (error) {
    console.error('ダッシュボード情報取得エラー:', error);
    return NextResponse.json(
      { success: false, message: 'ダッシュボード情報の取得に失敗しました' },
      { status: 500 }
    );
  }
}