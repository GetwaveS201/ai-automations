# Product Spec: AI Sales Follow-up Generator

**Version:** 1.0 — 2026-04-19

## What It Does

Paste raw meeting notes or a call transcript → get back:
1. A structured meeting summary (attendees, topics, decisions)
2. Numbered action items with owners
3. A ready-to-send follow-up email (professional, warm, specific)

One click. Under 10 seconds. No editing required.

## Who Pays For It

**Primary buyer:** B2B sales reps and account executives  
**Secondary:** Consultants, customer success managers, business development reps

**Pain:** After every call, reps spend 10–20 minutes writing follow-up emails. It's the lowest-leverage task in their day. Bad notes = lost deals.

**Budget signal:** Sales tools are the highest-spend software category. Reps pay out of pocket when their company won't. $29/mo is below the "need approval" threshold.

## How It Works

1. User pastes meeting notes or transcript into a text box
2. (Optional) User fills in: their name, company, recipient name
3. Clicks "Generate"
4. App calls Claude API with a structured prompt
5. Returns: summary, action items, and email — all in one response
6. User copies the email with one click and sends it

## Pricing

| Plan | Price | What You Get |
|------|-------|--------------|
| Free | $0 | 3 generations/day |
| Pro | $29/mo | Unlimited, custom tone, email history |
| Team | $99/mo | Everything + 10 seats, shared templates |

MVP ships Free tier only. Billing added after first 10 paying customers.

## Tech Stack

- **Frontend:** Single HTML page (vanilla JS, no build step)
- **Backend:** Node.js + Express (one file, ~100 lines)
- **AI:** Anthropic Claude API (claude-sonnet-4-6)
- **Hosting:** Node server, deployable to any VPS or Render.com

## Time to First Demo

- **Build time:** ~2 hours
- **Demo time:** 30 seconds (paste notes, click button, watch it work)

## Why This Wins

- Immediate ROI: one good follow-up email can save or close a deal
- No workflow change: works on top of what reps already do
- Demo is visceral — the output is real, useful, ready to send
- $29/mo is impulse-buy pricing for anyone in sales
