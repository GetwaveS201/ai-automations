# Deployment

## Platform: Render.com

We deploy `sales-followup` as a **Web Service** on [Render](https://render.com).

**Why Render:** Free tier, auto-deploy from GitHub on push to `main`, zero infra management. Handles `$PORT` binding automatically.

## Setup Steps

1. Connect this repo to Render (New → Web Service → connect GitHub)
2. Configure the service:
   - **Root Directory:** `sales-followup`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
3. Add environment variable in Render dashboard:
   - `ANTHROPIC_API_KEY` = your Anthropic API key
4. Deploy — Render sets `$PORT` automatically; the app reads it via `process.env.PORT`

## Auto-Deploy

Once connected, every push to `main` triggers a new deploy. No manual steps needed.

## Cost

- **Free tier:** Suitable for MVP / demo (spins down after inactivity, ~30s cold start)
- **Starter ($7/mo):** Always-on once we have paying customers
