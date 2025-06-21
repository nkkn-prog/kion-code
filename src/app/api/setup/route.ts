import { NextRequest, NextResponse } from 'next/server';

// POST - 初期設定情報を保存
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      currentLocation, 
      destinationLocation, 
      sensibleTemperature, 
      usualOutfit 
    } = body;

    // バリデーション
    if (!currentLocation || !destinationLocation || !sensibleTemperature || !usualOutfit) {
      return NextResponse.json(
        { success: false, message: 'すべての設定項目は必須です' },
        { status: 400 }
      );
    }

    // TODO: 位置情報を保存
    // const location = await prisma.location.create({
    //   data: {
    //     user_uuid: userUuid,
    //     current: currentLocation,
    //     destination: destinationLocation,
    //   }
    // });

    // TODO: プロフィール情報を保存
    // const profile = await prisma.profile.create({
    //   data: {
    //     user_uuid: userUuid,
    //     sensible_tempreture: sensibleTemperature,
    //     outfit: usualOutfit,
    //   }
    // });

    return NextResponse.json({
      success: true,
      data: {
        location: { currentLocation, destinationLocation },
        profile: { sensibleTemperature, usualOutfit }
      },
      message: '初期設定を正常に保存しました'
    }, { status: 201 });
  } catch (error) {
    console.error('初期設定保存エラー:', error);
    return NextResponse.json(
      { success: false, message: '初期設定の保存に失敗しました' },
      { status: 500 }
    );
  }
}

// GET - 現在の設定情報を取得
export async function GET(request: NextRequest) {
  try {
    // TODO: ユーザーの位置情報を取得
    // const location = await prisma.location.findFirst({
    //   where: { 
    //     user_uuid: userUuid,
    //     deleted_at: null
    //   }
    // });

    // TODO: ユーザーのプロフィール情報を取得
    // const profile = await prisma.profile.findFirst({
    //   where: { user_uuid: userUuid }
    // });

    const mockSetupData = {
      location: {
        current: '東京駅',
        destination: '渋谷駅'
      },
      profile: {
        sensibleTemperature: 'normal',
        usualOutfit: 'casual'
      }
    };

    return NextResponse.json({
      success: true,
      data: mockSetupData,
      message: '設定情報を正常に取得しました'
    });
  } catch (error) {
    console.error('設定情報取得エラー:', error);
    return NextResponse.json(
      { success: false, message: '設定情報の取得に失敗しました' },
      { status: 500 }
    );
  }
}