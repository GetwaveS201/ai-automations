require('dotenv').config();
const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.post('/api/generate', async (req, res) => {
  const { notes, senderName, senderCompany, recipientName } = req.body;

  if (!notes || notes.trim().length < 20) {
    return res.status(400).json({ error: 'Please provide meeting notes (at least 20 characters).' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not set. See README.' });
  }

  const client = new Anthropic({ apiKey });

  const prompt = `You are a professional sales assistant. Given raw meeting notes or a call transcript, produce three things:

1. SUMMARY: A 2-4 sentence structured summary of the meeting (what was discussed, decisions made).
2. ACTION ITEMS: A numbered list of concrete next steps, each with an owner if determinable.
3. FOLLOW-UP EMAIL: A professional, warm, specific follow-up email ready to send. Use the sender/recipient info if provided. Keep it concise (under 200 words). Do not use generic filler phrases.

Format your response exactly like this:
---SUMMARY---
[summary here]

---ACTION ITEMS---
[numbered list here]

---EMAIL---
[email here, starting with Subject: line]

Meeting notes:
${notes.trim()}

${senderName ? `Sender: ${senderName}${senderCompany ? ` at ${senderCompany}` : ''}` : ''}
${recipientName ? `Recipient: ${recipientName}` : ''}`;

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    });

    const text = message.content[0].text;

    const summaryMatch = text.match(/---SUMMARY---([\s\S]*?)---ACTION ITEMS---/);
    const actionsMatch = text.match(/---ACTION ITEMS---([\s\S]*?)---EMAIL---/);
    const emailMatch = text.match(/---EMAIL---([\s\S]*?)$/);

    res.json({
      summary: summaryMatch ? summaryMatch[1].trim() : '',
      actionItems: actionsMatch ? actionsMatch[1].trim() : '',
      email: emailMatch ? emailMatch[1].trim() : '',
      raw: text,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Claude API error' });
  }
});

app.listen(PORT, () => {
  console.log(`Sales Follow-up Generator running at http://localhost:${PORT}`);
});
