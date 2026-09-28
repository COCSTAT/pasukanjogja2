# Pasukan Jogja 2 — Clan War Stats

Live dashboard for **Pasukan Jogja 2 (#UGU0C8C)**.

**[cocstat.github.io/pasukanjogja2/](https://cocstat.github.io/pasukanjogja2/)**

---

## Features

### Overview
KPI strip, clan card, copy-tag button, war & capital league, join requirements.
A community card links straight to the clan Telegram and Discord bots.

### Members
Full roster with donations, net donations, trophies, TH, XP and role. Filter by
role, sort by league / trophies / TH / XP / donations, and pick **any past date**
to see who was in the clan that day and what they had.

### Wars
Every war on record with a per-player attack and defense breakdown: stars,
destruction, town-hall level, and who still has attacks left. Includes a live
win-probability estimate, a "cleanup needed" list (players who never attacked),
and a summary view for older wars.

### Raids
Capital raid weekends — attacks, defenses, districts destroyed and loot per
player, plus a district-by-district breakdown.

### Stats
War-stars trend line, top-25 star breakdown, conversion-rate bars across
finished wars, and **raid attendance** split into *attacks left unused* vs
*never raided*. Dormant alt accounts are identified separately, so the report
doesn't blame accounts that were never going to raid.

### Site
- **Night / day theme** — one palette contract, token names stay stable, no
  `dark:` variants anywhere. Follows the OS on first visit, then remembers your
  choice.
- **Responsive** — 236px sticky sidebar on desktop, scrollable top bar on
  mobile. Zero horizontal scroll at 360px.
- **Data-freshness chip** — shows the last successful sync in WIB, so a stale
  site is never mistaken for a live one.
- **No backend, no database, no API calls from the browser.**

---

## How it stays up to date

A Python scraper runs on GitHub Actions, commits JSON snapshots into `data/`,
and GitHub Pages serves the static frontend. The browser only ever reads
committed JSON — which is why the Supercell API token lives entirely in Actions
secrets and never ships to visitors.

| Workflow | Schedule | What |
|---|---|---|
| `update_war.yml` | every 15 min | live war snapshots |
| `update_raid.yml` | every 15 min | current raid weekend |
| `update_clan.yml` | daily | roster snapshot for the Members history |
| `tests.yml` | on push / PR | Node + Python suites, HTML structure check |
| `health.yml` | every 2 h | alerts if data or scheduled runs go stale |

**War history starts from install day.** The CoC API only exposes full
per-player attack data while a war is live; older wars come back as results
only, so they appear in the list marked _summary only_.

---

## Tests

```bash
node js/*.test.mjs                  # XSS, war-state, raid stats, module imports
python3 scrapers/*_test.py          # scraper, retry, retention
python3 scripts/check_html.py       # index.html div balance + section nesting
```

All of it runs in CI on every push and PR.

---


