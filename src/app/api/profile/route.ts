import { NextRequest, NextResponse } from 'next/server';

// POST - 新しいプロフィール情報を作成
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sensible_temperature, outfit, imageUrl } = body;

    // バリデーション
    if (!sensible_temperature || !outfit) {
      return NextResponse.json(
        { success: false, message: '体感温度と普段の服装は必須です' },
        { status: 400 }
      );
    }

    // TODO: Prismaクライアントを使用してProfileを作成
    // const profile = await prisma.profile.create({
    //   data: {
    //     user_uuid: userUuid,
    //     sensible_tempreture: sensible_temperature,
    //     outfit,
    //     imageUrl,
    //   }
    // });

    return NextResponse.json({
      success: true,
      data: { sensible_temperature, outfit, imageUrl }, // TODO: 実際の作成されたデータを返す
      message: 'プロフィール情報を正常に作成しました'
    }, { status: 201 });
  } catch (error) {
    console.error('プロフィール作成エラー:', error);
    return NextResponse.json(
      { success: false, message: 'プロフィール情報の作成に失敗しました' },
      { status: 500 }
    );
  }
}

// PUT - プロフィール情報を更新
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, sensible_temperature, outfit, imageUrl } = body;

    // バリデーション
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'ID は必須です' },
        { status: 400 }
      );
    }

    // TODO: Prismaクライアントを使用してProfileを更新
    // const profile = await prisma.profile.update({
    //   where: { id },
    //   data: {
    //     sensible_tempreture: sensible_temperature,
    //     outfit,
    //     imageUrl,
    //     updated_at: new Date(),
    //   }
    // });

    return NextResponse.json({
      success: true,
      data: { id, sensible_temperature, outfit, imageUrl }, // TODO: 実際の更新されたデータを返す
      message: 'プロフィール情報を正常に更新しました'
    });
  } catch (error) {
    console.error('プロフィール更新エラー:', error);
    return NextResponse.json(
      { success: false, message: 'プロフィール情報の更新に失敗しました' },
      { status: 500 }
    );
  }
}