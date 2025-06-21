import { NextRequest, NextResponse } from 'next/server';

// GET - 服装情報を取得
export async function GET(request: NextRequest) {
  try {
    // TODO: Prismaクライアントを使用してClothesデータを取得
    // const clothes = await prisma.clothes.findMany({
    //   where: { 
    //     user_uuid: userUuid,
    //     deleted_at: null
    //   }
    // });
    
    return NextResponse.json({
      success: true,
      data: [], // TODO: 実際のデータを返す
      message: '服装情報を正常に取得しました'
    });
  } catch (error) {
    console.error('服装情報取得エラー:', error);
    return NextResponse.json(
      { success: false, message: '服装情報の取得に失敗しました' },
      { status: 500 }
    );
  }
}

// POST - 新しい服装情報を作成
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { clothes_type, image_url } = body;

    // バリデーション
    if (!clothes_type) {
      return NextResponse.json(
        { success: false, message: '服の種類は必須です' },
        { status: 400 }
      );
    }

    // TODO: Prismaクライアントを使用してClothesを作成
    // const clothes = await prisma.clothes.create({
    //   data: {
    //     user_uuid: userUuid,
    //     clothes_type,
    //     image_url,
    //   }
    // });

    return NextResponse.json({
      success: true,
      data: { clothes_type, image_url }, // TODO: 実際の作成されたデータを返す
      message: '服装情報を正常に作成しました'
    }, { status: 201 });
  } catch (error) {
    console.error('服装情報作成エラー:', error);
    return NextResponse.json(
      { success: false, message: '服装情報の作成に失敗しました' },
      { status: 500 }
    );
  }
}

// PUT - 服装情報を更新
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, clothes_type, image_url } = body;

    // バリデーション
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'ID は必須です' },
        { status: 400 }
      );
    }

    // TODO: Prismaクライアントを使用してClothesを更新
    // const clothes = await prisma.clothes.update({
    //   where: { id },
    //   data: {
    //     clothes_type,
    //     image_url,
    //     updated_at: new Date(),
    //   }
    // });

    return NextResponse.json({
      success: true,
      data: { id, clothes_type, image_url }, // TODO: 実際の更新されたデータを返す
      message: '服装情報を正常に更新しました'
    });
  } catch (error) {
    console.error('服装情報更新エラー:', error);
    return NextResponse.json(
      { success: false, message: '服装情報の更新に失敗しました' },
      { status: 500 }
    );
  }
}

// DELETE - 服装情報を削除
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // バリデーション
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'ID は必須です' },
        { status: 400 }
      );
    }

    // TODO: Prismaクライアントを使用してClothesを削除（論理削除）
    // const clothes = await prisma.clothes.update({
    //   where: { id },
    //   data: {
    //     deleted_at: new Date(),
    //   }
    // });

    return NextResponse.json({
      success: true,
      message: '服装情報を正常に削除しました'
    });
  } catch (error) {
    console.error('服装情報削除エラー:', error);
    return NextResponse.json(
      { success: false, message: '服装情報の削除に失敗しました' },
      { status: 500 }
    );
  }
}