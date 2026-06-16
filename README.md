# alcente — deployment guide

> a century of peers · alcente.xyz

---

## Files

```
alcente/
├── index.html        ← homepage (QR destination)
├── covenant.html     ← the vow + join form
├── library.html      ← practices commons
├── contribute.html   ← submit a practice
├── style.css         ← complete design system
├── app.js            ← library filtering + data
└── README.md         ← this file
```

---

## 1. Set up Formspree (email forms)

You need **two forms** — one for covenant sign-ups, one for practice submissions.

1. Go to [formspree.io](https://formspree.io) → create a free account
2. Create Form 1: name it **"alcente — circle"**
   - Copy the endpoint: `https://formspree.io/f/XXXXXXXX`
   - Open `covenant.html` and replace `YOUR_FORMSPREE_ENDPOINT` with it
3. Create Form 2: name it **"alcente — contributions"**
   - Copy the endpoint
   - Open `contribute.html` and replace `YOUR_FORMSPREE_CONTRIBUTIONS_ENDPOINT` with it

Formspree free tier: 50 submissions/month. Upgrade at $8/mo for unlimited.

---

## 2. Deploy to Cloudflare Pages (free, fast)

### One-time setup

1. Push this folder to a GitHub repo (can be private):
   ```
   git init
   git add .
   git commit -m "alcente launch"
   gh repo create alcente --private --source=. --push
   ```

2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Connect GitHub account
   - Select your `alcente` repo
   - Build settings: **none** (this is plain HTML)
   - Deploy

3. Cloudflare gives you a `*.pages.dev` URL immediately.

### Connect your domain (alcente.xyz)

1. In Cloudflare Pages → Custom Domains → Add `alcente.xyz`
2. If your DNS is already on Cloudflare: it connects automatically
3. If DNS is elsewhere (Namecheap, GoDaddy, etc.):
   - Add a CNAME record: `alcente.xyz → your-project.pages.dev`
   - Or transfer DNS to Cloudflare for easier management

---

## 3. Generate the QR code

1. Go to [qr.io](https://qr.io) or [qr-code-generator.com](https://www.qr-code-generator.com)
2. URL: `https://alcente.xyz`
3. Style: choose something minimal — dark on cream, or all black
4. Download as SVG or high-res PNG
5. **Important:** Use a QR service that lets you update the URL later (dynamic QR), so if you ever move the site you don't need to reprint

**Recommended QR services with dynamic codes (free tier):**
- [QR Tiger](https://www.qrcode-tiger.com) — good free tier
- [Beaconstac](https://www.beaconstac.com) — very clean UI

### Apply to the disk

Options (roughly easiest → most permanent):
- **Waterslide decal paper** — print at home, apply like a sticker, very clean result
- **Vinyl sticker** — any local print shop, weatherproof, cheap
- **Laser engraving** — for a premium disk you want to keep forever (local makerspace or Etsy)

---

## 4. Set up email dispatches (the circle layer)

When someone takes the vow, their name/email arrives in your Formspree inbox.
To send dispatches, use one of these:

| Tool | Free tier | Notes |
|---|---|---|
| [Buttondown](https://buttondown.email) | 100 subscribers free | Simple, beautiful, writer-friendly |
| [Substack](https://substack.com) | Free | Familiar, discoverable, has a following feature |
| [Mailchimp](https://mailchimp.com) | 500 subscribers free | More complex, industry standard |

**Recommended: Buttondown.** It's the most elegant option for a small, intentional list.

Monthly dispatch cadence: the first of each month or whenever something is genuinely worth sharing — new practices, stories from the circle, upcoming gatherings, field notes.

---

## 5. Add more practices to the library

Open `app.js` and add entries to the `PRACTICES` array at the top.
Each practice follows this structure:

```javascript
{
  id: 13,                            // next sequential number
  name: "Practice Name",
  scale: ["dyad", "pod"],            // any of: dyad, pod, circle, gathering, community
  type: "conversation",              // game | conversation | ritual | embodied | song | story
  time: "20–30 min",
  tagline: "Short compelling line.",
  description: "What it is and why it works. 2–3 sentences.",
  steps: [
    "Step one.",
    "Step two.",
    "Step three."
  ],
  when: "When to use it.",
  source: "Who taught you this / where it comes from."
}
```

Redeploy (or if using Cloudflare Pages with GitHub: just `git push`).

---

## Roadmap (season two)

These are explicitly not week-one problems:

- **Airtable embed** — move practices out of the JS array and into Airtable for easier community editing
- **Tally embed** — replace raw HTML form with Tally for fancier submission flow
- **Recorded conversations** — the oral history layer: short audio/transcripts with circle members
- **Circle archive** — a private or semi-private archive of past dispatches
- **Seasonal gathering page** — event listings for the circle

---

## Week-one checklist

- [ ] Replace `YOUR_FORMSPREE_ENDPOINT` in `covenant.html`
- [ ] Replace `YOUR_FORMSPREE_CONTRIBUTIONS_ENDPOINT` in `contribute.html`
- [ ] Push to GitHub repo
- [ ] Deploy to Cloudflare Pages
- [ ] Connect `alcente.xyz` domain
- [ ] Generate QR code (dynamic)
- [ ] Apply QR to frisbee
- [ ] Test the full flow on mobile (scan → homepage → covenant → join)
- [ ] Set up Buttondown (or Substack) for dispatches
- [ ] Seed 2–3 more practices from your own knowledge

---

*built for vibecamp 2026 · carry the disk · pass it on*
