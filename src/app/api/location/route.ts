import { NextRequest, NextResponse } from 'next/server';

// GET - 位置情報を取得
export async function GET(request: NextRequest) {
  try {
    // TODO: Prismaクライアントを使用してLocationデータを取得
    // const locations = await prisma.location.findMany({
    //   where: { user_uuid: userUuid }
    // });
    
    return NextResponse.json({
      success: true,
      data: [], // TODO: 実際のデータを返す
      message: '位置情報を正常に取得しました'
    });
  } catch (error) {
    console.error('位置情報取得エラー:', error);
    return NextResponse.json(
      { success: false, message: '位置情報の取得に失敗しました' },
      { status: 500 }
    );
  }
}

// POST - 新しい位置情報を作成
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { current, destination } = body;

    // バリデーション
    if (!current || !destination) {
      return NextResponse.json(
        { success: false, message: '現在地と目的地は必須です' },
        { status: 400 }
      );
    }

    // TODO: Prismaクライアントを使用してLocationを作成
    // const location = await prisma.location.create({
    //   data: {
    //     user_uuid: userUuid,
    //     current,
    //     destination,
    //   }
    // });

    return NextResponse.json({
      success: true,
      data: { current, destination }, // TODO: 実際の作成されたデータを返す
      message: '位置情報を正常に作成しました'
    }, { status: 201 });
  } catch (error) {
    console.error('位置情報作成エラー:', error);
    return NextResponse.json(
      { success: false, message: '位置情報の作成に失敗しました' },
      { status: 500 }
    );
  }
}

// PUT - 位置情報を更新
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, current, destination } = body;

    // バリデーション
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'ID は必須です' },
        { status: 400 }
      );
    }

    // TODO: Prismaクライアントを使用してLocationを更新
    // const location = await prisma.location.update({
    //   where: { id },
    //   data: {
    //     current,
    //     destination,
    //     updated_at: new Date(),
    //   }
    // });

    return NextResponse.json({
      success: true,
      data: { id, current, destination }, // TODO: 実際の更新されたデータを返す
      message: '位置情報を正常に更新しました'
    });
  } catch (error) {
    console.error('位置情報更新エラー:', error);
    return NextResponse.json(
      { success: false, message: '位置情報の更新に失敗しました' },
      { status: 500 }
    );
  }
}

// DELETE - 位置情報を削除
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

    // TODO: Prismaクライアントを使用してLocationを削除（論理削除）
    // const location = await prisma.location.update({
    //   where: { id },
    //   data: {
    //     deleted_at: new Date(),
    //   }
    // });

    return NextResponse.json({
      success: true,
      message: '位置情報を正常に削除しました'
    });
  } catch (error) {
    console.error('位置情報削除エラー:', error);
    return NextResponse.json(
      { success: false, message: '位置情報の削除に失敗しました' },
      { status: 500 }
    );
  }
}