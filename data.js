/* Shared data — loaded by index.html and today.html */

const SOURCES = {
  borough:      {label:"Borough of Phoenixville",      color:"#4f95c0", url:"https://www.phoenixville.org/Calendar.aspx"},
  colonial:     {label:"The Colonial Theatre",          color:"#ff6a2c", url:"https://thecolonialtheatre.com/events/"},
  market:       {label:"Phoenixville Farmers' Market",  color:"#7bbf6a", url:"https://www.phoenixvillefarmersmarket.org/"},
  steel:        {label:"Steel City Coffeehouse",        color:"#ff7eb6", url:"https://www.steelcityphx.com/concerts-and-events"},
  library:      {label:"Reads & Co. / Library",         color:"#f4c95d", url:"https://phoenixvillelibrary.org/"},
  festival:     {label:"Festivals & Street Fairs",      color:"#ff4d6d", url:"https://www.phoenixville.org/Calendar.aspx"},
  taproom:      {label:"Taprooms & Live Music",         color:"#c77dff", url:"https://phoenixville.online/10-breweries-in-phoenixville-area-and-1-distillery/"},
  happy:        {label:"Happy Hours",                   color:"#f7c040", url:"https://phoenixville.info/hours.html"}
};

const RECURRING = [
  {cadence:"Saturdays · 9am–12pm", title:"Phoenixville Farmers' Market", src:"market",
   text:"Producer-only market along French Creek under the Gay Street Bridge — local produce, baked goods, weekly live music and a kids' play area."},
  {cadence:"Sundays · 4–6pm", title:"Phoenixville Music Series", src:"borough",
   text:"Free outdoor live-music sessions downtown through the summer, organized on the borough's community events calendar."},
  {cadence:"First Friday · 5:30–8:30pm", title:"First Friday", src:"borough",
   text:"Monthly evening stroll along Bridge Street — shops, galleries and restaurants open late with sidewalk happenings."},
  {cadence:"Thursdays · evening", title:"Live Music at Steel City", src:"steel",
   text:"The Bridge Street coffeehouse & brewery runs an original-music lineup, with the kitchen and taps open late on show nights."},
  {cadence:"Weekly · open mic", title:"Open Mic & Listening Room", src:"steel",
   text:"Steel City's award-winning listening room hosts open-mic nights for songwriters and players — sign up, plug in, and take the room."},
  {cadence:"Thu & Sat · ~9:30pm", title:"Live Music at Bistro on Bridge", src:"taproom",
   text:"Bands take the upstairs Analog Bar Room most Thursday and Saturday nights — 30+ taps below, beer garden overlooking downtown, and room to dance."},
  {cadence:"Tuesdays · evening", title:"Trivia Night at Twelve78", src:"taproom",
   text:"The family-owned brewery behind 35 Bridge St runs its weekly trivia night — pet-friendly, easy parking in Lot #7, fresh craft beer all night."},
  {cadence:"Fri eve & weekend afternoons", title:"Live Music & Music Bingo at Twelve78", src:"taproom",
   text:"Twelve78 packs the calendar with live bands (Friday evenings, Saturday & Sunday afternoons), Friday Music Bingo, food trucks, line dancing and more."},
  {cadence:"Weekends & First Fridays · ~6–9pm", title:"Live Music at The Boardroom", src:"taproom",
   text:"The Boardroom Restaurant & Bottle Shop hosts acoustic singer-songwriters most weekends and on First Fridays, with Boardroom Spirits cocktails and a full food menu."},
  {cadence:"Fridays · evening", title:"Cocktail Tastings & Live Music at Bluebird Distilling", src:"taproom",
   text:"Bluebird Distilling on 100 Bridge St pours their award-winning craft spirits — vodka, whiskey, rum and seasonal cocktails — with live music and tastings most Friday evenings."},
  {cadence:"Weekends", title:"Tap Room Events at The Rec Room", src:"taproom",
   text:"Conshohocken Brewing's Rec Room at 230 Bridge St runs weekend events in the lively tap-room event space — live music, themed nights, and the full Conshohocken tap list."},
  {cadence:"Tue & Thu · evening", title:"Trivia & Pub Nights at Molly Maguire's", src:"taproom",
   text:"Molly Maguire's Irish Restaurant & Pub (197 Bridge St) hosts nightly specials, pub quiz nights, and live music on the rooftop deck overlooking downtown."},
  {cadence:"Weekends · afternoon & evening", title:"Live Music at Root Down Brewing", src:"taproom",
   text:"Root Down Brewing's big timber-beamed taproom at 1 N. Main St books local acts on weekends — craft beer, a full food menu, and room for the whole crew."},
  {cadence:"Thursdays · evening", title:"Events at Rebel Hill Brewing", src:"taproom",
   text:"Rebel Hill Brewing (242 Bridge St) runs a regular lineup of tap room events — trivia, themed nights, and live music — alongside their rotating craft beer menu and full kitchen."},
  {cadence:"Weekends", title:"Patio Events at Sly Fox Brewhouse", src:"taproom",
   text:"One of the region's pioneering craft breweries (est. 1995) runs weekend events and seasonal tap takeovers on their patio — classic Sly Fox brews and rotating specials."},
  {cadence:"Fri & Sat · evening", title:"Live Music at Stable 12 Brewing", src:"taproom",
   text:"Stable 12 hosts live local acts on Friday and Saturday evenings, with their full food menu, craft beers and an easy-going taproom vibe."},
  {cadence:"Last Sunday of each month", title:"Punk Rock Flea Market at Root Down", src:"taproom",
   text:"Root Down Brewing's monthly market on 1 N. Main St packs the taproom with vendors selling one-of-a-kind goods alongside live DJs and fresh pints. No cover."},
  {cadence:"First Tuesdays · evening", title:"Science On Tap at Root Down", src:"taproom",
   text:"Community science conversations hosted by professionals in the back room at Root Down Brewing — family-friendly, thought-provoking, and free with your beer."},
  {cadence:"Weekends · varying times", title:"Live Irish Sessions at Molly Maguire's", src:"taproom",
   text:"Traditional Irish trad sessions upstairs at 197 Bridge St — fiddles, bouzouki, bodhráns and voices. Check their music calendar for dates and set times."},
  {cadence:"Fri & Sat · evenings", title:"Live Music at Iron Hill Brewery", src:"taproom",
   text:"Iron Hill Brewery (130 Bridge St) hosts live music on weekend evenings alongside their award-winning craft beers and full kitchen. Check their events page for the lineup."},
  {cadence:"Tuesdays · 7–9pm", title:"Trivia Night at Bistro on Bridge", src:"taproom",
   text:"Weekly pub trivia on the second floor of Bistro on Bridge (212 Bridge St) — rounds of questions, 30+ taps below, and happy hour prices until 6pm."},
  {cadence:"Sundays · 11am–2pm", title:"Sunday Brunch at Rivertown Taps", src:"taproom",
   text:"Rivertown Taps (226 Bridge St) — Phoenixville's self-pour tap wall gastropub — serves brunch every Sunday from 11am to 2pm with seasonal, locally sourced plates."},
  {cadence:"Mon–Fri · 4–6pm", title:"Happy Hour — Sedona Taphouse", src:"happy",
   text:"131 Bridge St — ½ off craft bottles & cans, $7 house wine. Tues: $7.90 wine & $9.90 select classics. Wed: ½ off all wine bottles. Giant phoenix mural, great patio."},
  {cadence:"Mon–Fri · 4–6pm", title:"Happy Hour — Great American Pub", src:"happy",
   text:"148 Bridge St — $3 Miller Lite draft, $5 select beers, $8 cocktails. Neighborhood anchor with full bar, classic pub fare, and game-day screens."},
  {cadence:"Mon–Fri · 4–6pm", title:"Happy Hour — Bistro on Bridge", src:"happy",
   text:"212 Bridge St — $5 craft beer, $8 wine, $9 cocktails, $1 oysters, $6 fries, $9 apps. 30+ taps, beer garden upstairs, weekly trivia Tuesdays."},
  {cadence:"Mon–Thu · 4–6:30pm | Sun · 8–10pm", title:"Happy Hour — Bluebird Distilling", src:"happy",
   text:"100 Bridge St — $3 off all house cocktails, $9 spirit flights. Award-winning grain-to-glass craft spirits — vodka, whiskey, rum and seasonal cocktails."},
  {cadence:"Sun–Thu · 4–6pm", title:"Happy Hour — The Boardroom", src:"happy",
   text:"101 Bridge St — $3 lager, $9 wine, $8 cocktails, $4–10 food specials. Boardroom Spirits cocktails and a full food menu in a downtown bottle shop."},
  {cadence:"Tue–Thu · 5–7pm", title:"Happy Hour — Rebel Hill Brewing", src:"happy",
   text:"242 Bridge St — $5 select drafts, $10 cocktails, $3 off appetizers. Downtown brewpub with a rotating craft beer menu and full kitchen."},
  {cadence:"Mon–Fri · 5–7pm", title:"Happy Hour — Molly Maguire's", src:"happy",
   text:"197 Bridge St — $5 house wine & beer, $4 well drinks, $7 apps. Rooftop deck overlooking Bridge Street, live music weekends."},
  {cadence:"Mon–Fri · 4–6pm", title:"Happy Hour — Root Down Brewing", src:"happy",
   text:"1 N. Main St — $2 off select drafts, $8 appetizers. Big timber-beamed taproom with craft beer, full food menu, and monthly Punk Rock Flea Market."},
  {cadence:"Tue–Fri · 4–6pm", title:"Happy Hour — Rec Room", src:"happy",
   text:"230 Bridge St — $4 lager, $6 cocktails, ½ off wings. Conshohocken Brewing's lively taproom event space with regular themed nights and live music."},
  {cadence:"Wed–Fri · 4–6pm", title:"Happy Hour — Rivertown Taps", src:"happy",
   text:"226 Bridge St — 20% off all draft pours, $10 wine & cocktails. Phoenixville's self-pour tap wall gastropub with Sunday brunch 11am–2pm."},
  {cadence:"Mon–Fri · 4–6pm | Sat–Sun · 12–3pm", title:"Happy Hour — La Patrona", src:"happy",
   text:"400 Bridge St — $4 draft beer, $7 margaritas, $6 apps. Mexican kitchen with a weekend lunchtime happy hour too."},
  {cadence:"Tue–Fri · 4–6pm", title:"Happy Hour — Vintner's Table", src:"happy",
   text:"135 Bridge St — $12 Folino spritz & sangria, $5 canned wine, $15 bottle flights. Wine bar and bottle shop."},
  {cadence:"Tue–Fri · 4–6pm", title:"Happy Hour — Tai Me Up", src:"happy",
   text:"301 Bridge St — $2 off signature cocktails, $6 mixer drinks, $2 off wine. Thai-inspired bar and kitchen."},
  {cadence:"Mon–Fri · 4:30–6:30pm | Sat–Sun · 3–5pm", title:"Happy Hour — Il Granaio", src:"happy",
   text:"184 Bridge St — Weekday and weekend happy hours with rotating drink specials. Check in for current deals at this Italian kitchen and bar."},
  {cadence:"Rotating weekly specials", title:"Happy Hour — Fitzwater Station", src:"happy",
   text:"264 Canal St — $2.50 Coronas & Modelos on Tuesdays, ½ off apps and burgers on select days. Check their Facebook for the weekly schedule."},
  {cadence:"Thu–Sat · 5–7pm", title:"Happy Hour — The Fenix Bar & Lounge", src:"happy",
   text:"193 Bridge St — ½ off all martinis. Downtown cocktail bar and lounge."},
  {cadence:"Mon–Thu · 5–7pm", title:"Happy Hour — Fun Dungeon Brewcade", src:"happy",
   text:"119 S. Main St — ½ off all draft beers, $15 unlimited arcade games. Craft beer and retro arcade — the most fun happy hour in Phoenixville."},
  {cadence:"Mon–Fri · 3–6pm | Sun · 1–5pm", title:"Happy Hour — Sly Fox Brewhouse", src:"happy",
   text:"520 Kimberton Rd — $1.50 off any of 18 draft pours, $8 pint + wings combo. One of the region's pioneering craft breweries, est. 1995."},
  {cadence:"Mon–Fri · 3–6pm", title:"Happy Hour — Lock 29", src:"happy",
   text:"127 Bridge St, Mont Clare — Beat the clock: $2 well spirits 3–4pm, $4 at 4pm, $5 at 5pm. Select beers $4–5 from 4pm on."},
  {cadence:"Tue–Fri · 3–5pm", title:"Happy Hour — Stone House Grille", src:"happy",
   text:"1300 Hares Hill Rd — $1 off select draft beers and all wine pours. Neighborhood grille near Phoenixville."},
  {cadence:"Mon–Fri · 4–6pm", title:"Happy Hour — Liberty Union Bar & Grill", src:"happy",
   text:"Near downtown — $1 off all 12 draft beers, $8 cocktails, $6–10 bar bites. Casual neighborhood bar & grill."}
];

const EVENTS = [
  {date:"2026-07-02", time:"6:00pm", title:"Dungeons & Drafts", venue:"Twelve78 Brewing Co., behind 35 Bridge St", src:"taproom",
   blurb:"Bring your character — battle monsters and complete quests at tabletop gaming night while enjoying Twelve78 craft beer. Tickets at dungeonsndrafts.com.", url:"https://www.twelve78brewing.com/event-calendar/"},
  {date:"2026-07-03", time:"Evening", title:"Leading Zero (Live Music)", venue:"Molly Maguire's, 197 Bridge St", src:"taproom",
   blurb:"Live band performance at Molly Maguire's as part of the America 250th Celebration weekend. Rooftop deck open.", url:"https://mollymaguiresphoenixville.com/music/"},
  {date:"2026-07-04", time:"Evening", title:"Cosmic Kittens (Live Music)", venue:"Molly Maguire's, 197 Bridge St", src:"taproom",
   blurb:"Fourth of July live music at Molly Maguire's. Part of the America 250th weekend celebration on Bridge Street.", url:"https://mollymaguiresphoenixville.com/music/"},
  {date:"2026-07-01", end:"2026-07-12", time:"Daily", title:"Shorty's Short Film Contest", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"The Colonial's carnival-themed short-film showcase runs across nearly two weeks on the historic screens.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-07-11", time:"All day", title:"BlobFest Street Fair (Camp Blobfest)", venue:"Bridge St & The Colonial Theatre", src:"festival",
   blurb:"Phoenixville's beloved tribute to the 1958 film 'The Blob' — street fair, vendors and the famous run-out from the Colonial.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-07-16", time:"7:00pm", title:"Country Line Dance Night", venue:"Twelve78 Brewing Co., behind 35 Bridge St", src:"taproom",
   blurb:"Beginner-friendly line dance instruction starts at 7pm with instructor Johanna, dancing until 9pm. $15 — grab a pint and learn some new moves.", url:"https://www.twelve78brewing.com/event-calendar/"},
  {date:"2026-07-18", time:"6:00–9:00pm", title:"Philly Grass (Live Bluegrass)", venue:"Twelve78 Brewing Co., behind 35 Bridge St", src:"taproom",
   blurb:"Authentic live bluegrass — guitar, banjo, bass and more — on a summer Saturday evening at Twelve78.", url:"https://www.twelve78brewing.com/event-calendar/"},
  {date:"2026-07-17", time:"7:00pm", title:"Emily McIntire · 'Forsaking Midnight'", venue:"The Colonial Theatre (w/ Reads & Company)", src:"library",
   blurb:"Reads & Company hosts the bestselling author for a launch event across the street at the Colonial.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-07-18", time:"8:00pm", title:"Stewart Copeland", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"The Police co-founder, film composer and Rock & Roll Hall of Famer live on the main stage.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-07-25", time:"8:00pm", title:"Winslow — An Evening of the Eagles", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Tribute night running the catalog of the Eagles in full.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-08-22", time:"All day", title:"Colonial Gardens Butterfly Festival", venue:"Phoenixville", src:"festival",
   blurb:"Late-summer family festival celebrating pollinators and gardens.", url:"https://www.phoenixville.org/Calendar.aspx"},
  {date:"2026-09-05", time:"All day", title:"Phoenixville Blues Festival", venue:"Downtown Phoenixville", src:"festival",
   blurb:"Annual blues festival bringing live acts to the heart of town.", url:"https://www.phoenixville.org/Calendar.aspx"},
  {date:"2026-10-07", time:"7:30pm", title:"The Buena Vista Orchestra", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Cuban-rooted big-band sound on the Colonial's main stage.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-11-19", time:"6:00–9:00pm", title:"Jill Baldassari (Live)", venue:"The Boardroom, 101 Bridge St", src:"taproom",
   blurb:"An evening of live acoustic music at The Boardroom Restaurant & Bottle Shop.", url:"https://www.theboardroompxv.com/"},
  {date:"2026-07-09", time:"Evening", title:"Improv Fundamentals Workshop — Series Begins", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"A seven-week introduction to theatrical improvisation led by Paul Deichmann. This first session kicks off the summer workshop series.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-07-10", time:"Evening", title:"Blob Ball", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"BlobFest's signature evening gala — live music and carnival entertainment on the eve of the 1958 Blob's most famous scene.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-07-12", time:"Morning", title:"BlobFest 5K / 10K / Half Marathon", venue:"Downtown Phoenixville", src:"festival",
   blurb:"Race weekend hosted by Runegades with proceeds benefiting the Colonial Theatre. Routes wind through downtown Phoenixville.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-07-12", time:"Evening", title:"Dinner en Blob", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"A new BlobFest tradition inspired by Dinner en Blanc — guests gather for a red-themed outdoor dinner in the spirit of the 1958 film.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-07-16", time:"Evening", title:"Improv Fundamentals Showcase", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"The summer improv troupe takes the stage — pay-what-you-wish seating, all skill levels in the audience.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-07-24", time:"Evening", title:"Unforgettable Fire — U2 Tribute", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"One of America's first U2 tribute acts runs the full catalog at the Colonial — 25 years of performing at prestigious venues.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-07-24", time:"Evening", title:"Stage Door Series: It's Sondheim, Diva!", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Opens the Colonial's Stage Door Series — Walnut Street Theatre alumni deliver powerhouse Stephen Sondheim performances.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-08-05", time:"Evening", title:"AJ Croce — Croce Plays Croce", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"50 years of Jim Croce's music performed by his son, piano virtuoso AJ Croce — a rare intergenerational tribute.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-08-08", time:"Evening", title:"The Garcia Project — Jerry Garcia Band Time Machine", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Nationally touring ensemble celebrates Jerry Garcia's Days Between, the annual late-summer tradition, on the Colonial stage.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-08-26", time:"Evening", title:"The Parlour Reading Series: A Room with a View", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Theatrical adaptation of E.M. Forster's novel — Lucy Honeychurch's romantic journey from Florence to England, beautifully staged.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-08-28", time:"Evening", title:"Larry & Joe", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Venezuelan llanera legend Larry Bellorín teams with GRAMMY-nominated bluegrass musician Joe Troop for a singular cross-cultural night.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-09-11", time:"Evening", title:"Mamma Mania! — ABBA Tribute", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"New York City's premier ABBA tribute act performs all the classic 1970s hits on the Colonial's main stage.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-09-18", time:"Evening", title:"Pet Sounds Live!", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"The Beach Boys' landmark Brian Wilson masterpiece performed start to finish — a tribute to one of rock's most celebrated records.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-09-25", end:"2026-09-27", time:"Evening", title:"Just Another Day (Comedy)", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Dan Lauria and Patty McCormack star as two strangers who meet on a park bench — a warm, witty three-show comedy run.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-09-25", time:"Evening", title:"Friends of the Brothers — Allman Brothers Celebration", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Endorsed by founding Allman Brother Jaimoe, this tribute digs deep into the catalog of classic southern rock.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-10-01", time:"Evening", title:"Oleanna", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"David Mamet's charged two-hander on gender, authority, and education — one of theatre's most debated modern plays.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-10-28", time:"Evening", title:"Haunted Halloween Shorts — Parlour Reading Series", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Local writers share brief theatrical ghost stories around a bonfire — the Colonial's beloved spooky autumn literary tradition.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-10-29", time:"Evening", title:"Watsky — X Infinity 10th Anniversary Tour", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Rapper Watsky celebrates a decade of his genre-bending album with a live screening and anniversary performance.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-11-06", time:"Evening", title:"RAEL — Genesis & Peter Gabriel Experience", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Meticulously staged tribute to early Genesis live performances — for fans of the prog-rock golden era.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2026-11-07", time:"Evening", title:"The Longest Johns", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"Chart-topping British folk group performs rollicking sea shanties and folk anthems live on the Colonial stage.", url:"https://thecolonialtheatre.com/events/"},
  {date:"2027-01-23", time:"Evening", title:"High Noon — Lynyrd Skynyrd & Southern Rock Tribute", venue:"The Colonial Theatre, 227 Bridge St", src:"colonial",
   blurb:"The East Coast's premier southern rock tribute band plays all the 1970s classics live.", url:"https://thecolonialtheatre.com/events/"}
];

const CIVIC = [
  {date:"recurring", time:"2nd Tuesday · 7–9pm", title:"Borough Council Meeting (Hybrid)", venue:"Borough Hall Council Chambers, 351 Bridge St", src:"borough",
   blurb:"Regular council session, in person and online. Committee, Planning, Zoning and board meetings also run monthly — see the borough calendar for exact dates.", url:"https://www.phoenixville.org/Calendar.aspx"}
];

const MARQUEE = [
  {title:"Total Mass Retain", note:"A tribute to Yes — art rock and prog perfection on the Colonial stage.", src:"colonial"},
  {title:"Magical Mystery Doors", note:"Beatles / Led Zeppelin / Doors tribute night — three bands, one epic evening.", src:"colonial"},
  {title:"The Rocky Horror Picture Show", note:"The cult classic on the big screen — bring your toast and your fishnets.", src:"colonial"}
];

/* Logo art pulled by domain via Google's favicon service — no local files or API keys to manage */
function logo(domain) { return domain ? `https://www.google.com/s2/favicons?sz=128&domain=${domain}` : null; }
function domainOf(url) { try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return null; } }

const VENUES = [
  {name:"Steel City Coffeehouse & Brewery", kind:"Listening room · open mic · brewery", addr:"203 Bridge St", src:"steel", url:"https://www.steelcityphx.com/concerts-and-events", logo:logo("steelcityphx.com")},
  {name:"Sly Fox Brewhouse & Eatery", kind:"Pioneering brewpub (est. 1995) · live music", addr:"Phoenixville (just off downtown)", src:"taproom", url:"https://www.slyfoxbeer.com/phoenixville", logo:logo("slyfoxbeer.com")},
  {name:"Rebel Hill Brewing — Downtown", kind:"10-bbl brewpub · cocktails · full kitchen", addr:"242 Bridge St", src:"taproom", url:"https://www.rebelhillbrewing.com/", logo:logo("rebelhillbrewing.com")},
  {name:"Root Down Brewing Company", kind:"Big timber-beamed taproom · food & music", addr:"1 N. Main St", src:"taproom", url:"https://www.rootdownbrewing.com/", logo:logo("rootdownbrewing.com")},
  {name:"Stable 12 Brewing Company", kind:"Craft brewery · full food menu", addr:"368 Bridge St", src:"taproom", url:"https://www.stable12.com/", logo:logo("stable12.com")},
  {name:"Iron Hill Brewery & Restaurant", kind:"20+ years of craft beer & handcrafted food", addr:"130 Bridge St", src:"taproom", url:"https://www.ironhillbrewery.com/", logo:logo("ironhillbrewery.com")},
  {name:"The Boardroom Restaurant & Bottle Shop", kind:"Restaurant · bottle shop · Boardroom Spirits cocktails · live music", addr:"101 Bridge St", src:"taproom", url:"https://www.theboardroompxv.com/", logo:logo("theboardroompxv.com")},
  {name:"Twelve78 Brewing Co.", kind:"Family-owned brewery · live music · trivia · food trucks", addr:"Behind 35 Bridge St", src:"taproom", url:"https://www.twelve78brewing.com/event-calendar/", logo:logo("twelve78brewing.com")},
  {name:"Bluebird Distilling", kind:"Craft distillery & cocktail bar · events & tastings", addr:"100 Bridge St", src:"taproom", url:"https://www.bluebirddistilling.com/", logo:logo("bluebirddistilling.com")},
  {name:"Molly Maguire's Irish Restaurant & Pub", kind:"Irish pub · rooftop deck · nightly specials", addr:"197 Bridge St", src:"taproom", url:"https://mollymaguiresphoenixville.com/", logo:logo("mollymaguiresphoenixville.com")},
  {name:"The Rec Room", kind:"Conshohocken Brewing taproom · food · event space", addr:"230 Bridge St", src:"taproom", url:"https://conshohockenbrewing.com/recroommain", logo:logo("conshohockenbrewing.com")},
  {name:"Bistro on Bridge", kind:"30+ taps · beer garden · live music upstairs (Thu & Sat)", addr:"212 Bridge St", src:"taproom", url:"https://bistroonbridge.com/", logo:logo("bistroonbridge.com")},
  {name:"Sedona Taphouse", kind:"Craft beer & cocktails · Phoenix mural · patio", addr:"131 Bridge St #5", src:"taproom", url:"https://www.sedonataphouse.com/", logo:logo("sedonataphouse.com")},
  {name:"Rivertown Taps", kind:"Self-pour tap wall · gastropub · brunch · Wed–Sun", addr:"226 Bridge St", src:"taproom", url:"https://www.rivertowntaps.com/", logo:logo("rivertowntaps.com")},
  {name:"Great American Pub Bar & Grill", kind:"Classic American pub · full bar · game day", addr:"148 Bridge St", src:"taproom", url:"https://thegreatamericanpub.com/phoenixville/", logo:logo("thegreatamericanpub.com")},
  {name:"Van Horn's Restaurant & Bar", kind:"Restaurant with full bar · Bridge Street dining", addr:"106-108 Bridge St", src:"taproom", url:"https://www.vanhornsonbridgestreet.com/", logo:logo("vanhornsonbridgestreet.com")}
];

const ANNUAL = [
  {mon:"DEC", title:"Firebird Festival", when:"Early December", src:"festival",
   blurb:"The town's namesake tradition: a giant wooden phoenix is set ablaze at nightfall, with drumming, fire-spinning and food. Watch the borough calendar for the date.", url:"https://www.phoenixville.org/Calendar.aspx"},
  {mon:"APR", title:"Dogwood Festival", when:"Spring", src:"festival",
   blurb:"One of Phoenixville's longest-running traditions, celebrating the bloom of the dogwoods with community events around town.", url:"https://www.phoenixville.org/Calendar.aspx"},
  {mon:"JUL", title:"Blobfest", when:"Mid-July", src:"festival",
   blurb:"The legendary three-day tribute to 1958's 'The Blob' (filmed here) — street fair, screenings and the famous run-out from the Colonial.", url:"https://thecolonialtheatre.com/events/"}
];

/* Determines if a RECURRING cadence string applies to a given day-of-week number (0=Sun…6=Sat) */
function dayTest(cadence, dow) {
  const c = cadence.toLowerCase();
  if (/daily|rotating/i.test(c)) return true;
  if (/^weekly\s/.test(c)) return true;

  const D = {sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};
  const active = new Set();
  const inRange = new Set();

  const rangeRe = /(sun|mon|tue|wed|thu|fri|sat)[–\-](sun|mon|tue|wed|thu|fri|sat)/g;
  let m;
  while ((m = rangeRe.exec(c)) !== null) {
    const s = D[m[1]], e = D[m[2]];
    inRange.add(m[1]); inRange.add(m[2]);
    for (let i = 0; i < 7; i++) {
      if (s <= e ? (i >= s && i <= e) : (i >= s || i <= e)) active.add(i);
    }
  }

  if (c.includes('weekend')) { active.add(0); active.add(6); }

  for (const [k, v] of Object.entries(D)) {
    if (!inRange.has(k) && c.includes(k)) active.add(v);
  }

  return active.has(dow);
}
