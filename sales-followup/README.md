# AI Sales Follow-up Generator

Paste meeting notes → get a structured summary, action items, and a ready-to-send follow-up email. Powered by Claude.

## Quick Start

**Prerequisites:** Node.js 18+, an Anthropic API key

```bash
# 1. Install dependencies
npm install

# 2. Configure your API key
cp .env.example .env
# Edit .env and set ANTHROPIC_API_KEY=sk-ant-...

# 3. Start the server
npm start
# → http://localhost:3000
```

Open `http://localhost:3000` in your browser, paste some meeting notes, and click **Generate Follow-up**.

## Demo (curl)

```bash
curl -s -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "notes": "Met with Jordan at TechCorp. They need a CRM integration by Q3. Budget is around 50k. Decision maker is Jordan and their CTO Sarah. Next step: send proposal by Friday.",
    "senderName": "Alex Chen",
    "senderCompany": "Acme Inc.",
    "recipientName": "Jordan"
  }' | node -e "const d=require('fs').readFileSync('/dev/stdin','utf8'); const j=JSON.parse(d); console.log('EMAIL:\n'+j.email)"
```

## API

`POST /api/generate`

**Body:**
```json
{
  "notes": "string (required, min 20 chars)",
  "senderName": "string (optional)",
  "senderCompany": "string (optional)",
  "recipientName": "string (optional)"
}
```

**Response:**
```json
{
  "summary": "Meeting summary text",
  "actionItems": "1. Send proposal by Friday\n2. ...",
  "email": "Subject: Following up on our conversation\n\nHi Jordan, ..."
}
```

## Deployment

Any Node.js host works. On Render.com:
1. Connect your repo
2. Set `ANTHROPIC_API_KEY` as an environment variable
3. Build command: `npm install`
4. Start command: `npm start`

## Pricing Model

- **Free:** 3 generations/day
- **Pro:** $29/mo — unlimited
- **Team:** $99/mo — 10 seats

*(Rate limiting not yet implemented — add before going to production)*
