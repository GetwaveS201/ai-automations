# AI Automations

Revenue-generating AI automation products.

## Products

| Product | Directory | Description |
|---------|-----------|-------------|
| Sales Follow-up Generator | `sales-followup/` | Paste meeting notes → get summary, action items, and a ready-to-send email |

See [PRODUCT_SPEC.md](PRODUCT_SPEC.md) for the roadmap.

## Running Locally

```bash
cd sales-followup
cp .env.example .env        # fill in ANTHROPIC_API_KEY
npm install
npm run dev                 # http://localhost:3000
```

## Deployment

See [DEPLOY.md](DEPLOY.md).
