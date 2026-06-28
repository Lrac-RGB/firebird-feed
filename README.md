# The Firebird Feed

A community events aggregator for **Phoenixville, PA** — borough meetings, First Fridays, the Colonial Theatre marquee, the Saturday farmers' market, live music and taprooms, and the town's signature annual festivals, gathered into one filterable view.

It's a single, self-contained `index.html` file: no build step, no dependencies, no backend. Open it in a browser and it runs.

## Features

- **Filter by source** — Borough of Phoenixville, The Colonial Theatre, Farmers' Market, Steel City Coffeehouse, Reads & Co. / Library, Festivals, and Taprooms & Live Music.
- **Live search** across event titles, venues, and descriptions.
- **Weekly happenings** strip for recurring events (market, music series, First Friday, open mic).
- **Chronological calendar** of dated events, grouped by month.
- **Signature annual festivals** (Firebird Festival, Dogwood, Blobfest).
- **Colonial marquee** of touring acts whose dates live at the box office.
- **Live-music venue directory** with addresses and links.
- Responsive, keyboard-accessible, and respects `prefers-reduced-motion`.

## Running locally

Just open the file:

```bash
open index.html        # macOS
# or double-click it in your file manager
```

Or serve it over HTTP:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Because it's one static file, it works on any static host. Drag `index.html` (or this folder) into **Netlify**, **Cloudflare Pages**, **Vercel**, or commit it to **GitHub Pages**. Each will give you a URL and let you attach a custom domain; the host then walks you through the DNS records.

## Editing events

All listings live in plain JavaScript arrays near the bottom of `index.html`:

- `RECURRING` — weekly happenings
- `EVENTS` / `CIVIC` — dated calendar entries
- `ANNUAL` — yearly festivals
- `MARQUEE` — Colonial acts without a fixed public date
- `VENUES` — the live-music / taproom directory
- `SOURCES` — the source list, colors, and links that drive the filter chips

Add an object to the relevant array and it appears on the page. Each entry links back to the source it came from.

## Data & accuracy

Listings are compiled by hand from publicly posted calendars (the borough's official calendar, venue sites, and organizers) and reflect what those sources had published at the time. Always confirm dates, times, and tickets with the source before heading out. Not affiliated with the Borough of Phoenixville.

## Roadmap

- Auto-refresh from the borough's iCalendar / RSS feeds and venue calendars via a scheduled job.
- Split listings into a separate data file (JSON) so updates don't touch markup.
- "Submit an event" flow.

## License

MIT — see [LICENSE](LICENSE).
