# インストラクション
以下の**アプリ概要**に従って、Webアプリケーションを作成して。
学習し、ひらめきを得て、素晴らしいコードを書き進めてください。
以下の**考慮事項**も学習し、しっかり考慮して、開発を行ってください。

## 考慮事項
### **技術スタック**について
- それぞれの分野において、記載している言語やフレームワーク、ライブラリを使用すること。

### **パス構成**について
- "a : b : c"というように文字が並んでおり、それは意味を成す。
- 「aの条件下で、bは、cというパスで構成されます」という意味。
- 例えば、"未ログイン: トップ画面 : /" の場合は、「未ログイン時の条件下で、トップ画面は、/というパスで構成される」という意味になる。
- また、"a : b : c : d"のようになる場合がある。
- 例えば、"ログイン済: ダッシュボード画面 : /dashboard : 天気情報&AI提案情報を出す"の場合は、「ログイン時の条件下で、ダッシュボード画面は、/dashboardというパスで構成される。この画面では天気情報とAI提案情報を出す。」という意味になる。すなわち補足情報である

---

#アプリ概要
## アプリ名
きおんコーデ
　
## 概要
- 現在地と目的地の天気情報を用いて、最適な服の種類をAIが提案するアプリ

## 機能
### コア機能
- 現在地と目的地の取得
 - GPSでの取得ではなく、APIで地名を取得
- 現在地と目的地の天気情報の取得
 - OpenWhetherMap APIから取得
- 天気情報から服の種類を提案
 - 使用するAIモデル: OpenAI o3

### サブ機能
- 現在地と目的地の保存、複数選択と複数保存
- 所持している服の登録と服装の提案
- 所持している洋服写真のイラスト化


## 技術スタック
### フロントエンド
- Next.js: フレームワーク, App Router
- TypeScript: 言語, LTSを使用
- Mantine UI: UIライブラリ, LTSを使用
- Zustand: 状態管理ライブラリ, LTSを使用
- zod: validationライブラリ, LTSを使用
- react-form-hook: フォームライブラリ, LTSを使用

### バックエンド
Next.jsのAPIルーティングを活用する。
- Next.js: フレームワーク, App Router
- TypeScript: 言語, LTSを使用
- Prisma: 最新

### データベース設計
- PostgreSQL: LTSを使用
- Supabase

### 認証 
- Supabase


## パス構成
- 未ログイン: トップ画面 : /
- 未ログイン: ログイン画面 : /login : パスはSupabase仕様に合わせる
- 未ログイン: 新規登録画面 : /signup: パスはSupabase仕様に合わせる
- ログイン済: ダッシュボード画面 : /dashboard : 天気情報&AI提案情報を出す
- ログイン済: 初期設定 : /setup : 現在地と目的地の設定, パーソナル設定(体感温度の傾向, 普段の服装)
- ログイン済: プロフィール設定 : /profile : 名前、メアド、プロフィール画像設定
- ログイン済: 服装登録: /clothes : 身に着ける洋服や靴などを登録、更新、削除する。無料ユーザーは1つのみ登録可能。
- ログイン済: 地点登録 : /location : 現在地と目的地を登録、更新、削除する。無料ユーザーは1つのみ登録可能。


## カラーパレット
太陽| 役割                 | 名称            | HEX         | RGB         | ニュアンス & 用途例       |
| ------------------ | ------------- | ----------- | ----------- | ----------------- |
| **Primary**        | Sunset Orange | **#FF7043** | 255 112 67  | CTAボタン・警告・強調ラベル   |
| **Secondary**      | Amber Glow    | **#FFC85C** | 255 200 92  | バッジ・プログレスバー・ハイライト |
| **Neutral / Base** | Snow White    | **#FFFFFF** | 255 255 255 | 背景・カード・余白         |

---

## データベース設計
### テーブル
- User(id, uuid, name, email, isSubscribed, created_at, updated_at, deleted_at, subscribed_at, cancelled_at)
- Profile(id, uuid, user_uuid, sensible_tempreture ,outfit, imageUrl, created_at, updated_at)
- Clothes(id, uuid, user_uuid, clothes_type, image_url, created_at, updated_at, deleted_at)
- Location(id, uuid, user_uuid, current, destination, created_at, updated_at, deleted_at)
- Advice(id, uuid, user_uuid, advice, created_at, updated_at, deleted_at)