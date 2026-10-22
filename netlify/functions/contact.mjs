// Netlify Function: お問い合わせを Slack incoming webhook に中継する。
// SLACK_API_CODE はサーバーサイドでのみ参照し、ブラウザに公開しない。
//
// Netlify Functions v2 (Web標準) API を使用: (Request) => Response

const json = (status, obj) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })

export default async function handler(req) {
  if (req.method !== 'POST') {
    return json(405, { error: 'Method Not Allowed' })
  }

  try {
    const { company = '', name = '', email = '', tel = '', message = '' } =
      await req.json()

    const code = process.env.SLACK_API_CODE || ''
    if (!code) {
      return json(500, { error: 'SLACK_API_CODE not configured' })
    }

    const text = `会社・組織：${company}\n名前：${name}\nEメール：${email}\n電話番号：${tel}\nメッセージ：${message}\n`

    const slackRes = await fetch(`https://hooks.slack.com/services/${code}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })

    if (!slackRes.ok) {
      const body = await slackRes.text()
      return json(502, { error: `Slack returned ${slackRes.status}: ${body}` })
    }

    return json(200, { ok: true })
  } catch (err) {
    return json(400, { error: String(err) })
  }
}
