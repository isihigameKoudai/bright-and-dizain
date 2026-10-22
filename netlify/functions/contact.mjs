// Netlify Function: お問い合わせを Slack incoming webhook に中継する。
// SLACK_API_CODE はサーバーサイドでのみ参照し、ブラウザに公開しない。
export default async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    }
  }

  try {
    const { company = '', name = '', email = '', tel = '', message = '' } =
      JSON.parse(event.body || '{}')

    const code = process.env.SLACK_API_CODE || ''
    if (!code) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'SLACK_API_CODE not configured' }),
      }
    }

    const text = `会社・組織：${company}\n名前：${name}\nEメール：${email}\n電話番号：${tel}\nメッセージ：${message}\n`

    const slackRes = await fetch(`https://hooks.slack.com/services/${code}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })

    if (!slackRes.ok) {
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: `Slack returned ${slackRes.status}` }),
      }
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    }
  } catch (err) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: String(err) }),
    }
  }
}
