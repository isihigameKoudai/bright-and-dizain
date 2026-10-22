# Bright&dizain (Astro SSG)

Nuxt.js 2 + Netlify（SSR）で運用していた bright &dizain のサイトを、**見た目を一切変えずに** Astro（SSG）へフルリプレイスしたプロジェクト。

- フレームワーク: [Astro](https://astro.build)（静的出力 `output: 'static'`）
- ホスティング: Netlify（既存サイトを流用 → ドメイン `www.brightanddizain.com` はそのまま）
- クライアントJS: バニラ（Vue/Vuex/jQuery を撤去）

## コマンド

```bash
npm install
npm run dev        # 開発サーバー (localhost:4321)
npm run build      # SSG ビルド → dist/
npm run preview    # ビルド結果のプレビュー
```

## 構成

```
src/
  layouts/Layout.astro       # <head> / ハンバーガー / モーダル / 共通スクリプト
  components/                # 原子コンポーネント (BaseButton など) と TheDefaultView
  pages/                     # index / profile / portfolio / plan / contact / 404
  styles/global.scss         # 旧 reset/style/util/animation + 全コンポーネントのSCSSを統合
  scripts/site.js            # モーダル・パララックス・reveal・お問い合わせ送信
  data/portfolio.ts          # ポートフォリオ画像一覧
public/                      # 静的アセット (img/svg/portfolio, manifest, sw.js)
netlify/functions/contact.mjs # お問い合わせ → Slack Webhook 中継
netlify.toml                 # ビルド設定 / publish dir / functions / wwwリダイレクト
```

## 環境変数（Netlify で設定）

| 変数 | 用途 | 備考 |
|---|---|---|
| `SLACK_API_CODE` | お問い合わせ送信先 Slack Webhook | 既存の設定がそのまま使える（functions が実行時に参照） |
| `GA` または `PUBLIC_GA` | Google Analytics 測定ID | 設定時のみ gtag スニペットを注入 |

## デプロイ（Netlify・同一ドメイン引継ぎ）

既存の Netlify サイトにこのリポジトリを接続すれば、**カスタムドメインとルート→www リダイレクトは Netlify 側の設定としてそのまま残る**ため、DNS変更なしで `www.brightanddizain.com` を引き継げる。

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`（`netlify.toml` に記載済み）

## 注意点（現行サイトからの挙動を忠実に再現）

1. **plan ページの「各種料金」見出しが非表示** — 旧コードでは `appear-up` クラスが付いているのに reveal の IntersectionObserver が plan ページにだけ無く、`opacity:0` のまま表示されない状態でした。この挙動を忠実に再現しています（`site.js` は index/profile でのみ reveal を実行）。修正する場合は plan にも reveal を適用してください。
2. **お問い合わせの Slack 送信をサーバーサイド化** — 旧実装はブラウザから Webhook URL を直接 POST しており URL が漏洩していました。今回は Netlify Function 経由に変更し、`SLACK_API_CODE` はサーバー内に留めています（見た目・送信内容は同一）。
3. **ページ内文言は旧のまま** — 「Vue.js,Nuxt.jsなどを取り入れた」「skills: Vue.js / jQuery」等の記述は、見た目を変えない方針のため書き換えていません。必要なら別途コンテンツ更新してください。
