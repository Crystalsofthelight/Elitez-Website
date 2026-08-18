export const site = {
  name: "Elitez",
  url: "https://elitez.xyz",
  tagline: "A creator-driven world of music, culture, and play.",
  description:
    "Elitez is a creator-led ecosystem on Base: original music across major platforms, the $ELITE token, Elitez Chip ($ELTZ), and Dream Crafter — a wallet-connected arcade and creator app.",
};

export const contract = {
  chain: "Base",
  symbol: "ELITE",
  name: "Elite",
  address: "0xeb9d07e8a5e1f8a2dbc5abc84d91aaa0301829e3",
  pair: "0x6ba94ddbc082d0f73d9c5484ab7b9fa695bec479",
  decimals: 18,
  holders: "2,848+",
  icon: "/brand/duck.png",
};

export const eltz = {
  chain: "Base",
  symbol: "ELTZ",
  name: "Elitez Chip",
  standard: "B20",
  address: "0xB200000000000000000000B34597aFF8EA532A60",
  decimals: 18,
  holders: "45",
  supply: "1,000,000",
  icon: "/brand/eltz-token-icon.gif",
  dexscreener:
    "https://dexscreener.com/base/0x1d16828013717afd3867415642bd8b4ad9ebe0d1f0e08276ccb23f7b0c1280c2",
  basescan:
    "https://basescan.org/token/0xB200000000000000000000B34597aFF8EA532A60",
  uniswap: `https://app.uniswap.org/explore/tokens/base/0xB200000000000000000000B34597aFF8EA532A60`,
  staking: "https://elitez.app/staking",
  launchpad: "https://elitez.app/b20",
};

export const links = {
  app: "https://elitez.app",
  playStore:
    "https://play.google.com/store/apps/details?id=app.Elitez&hl=en_US",
  privacy: "https://elitez.app/privacy-policy",
  deleteData: "https://elitez.app/delete-data",
  uniswap: `https://app.uniswap.org/explore/tokens/base/${contract.address}`,
  basescan: `https://basescan.org/token/${contract.address}`,
  dextools: `https://www.dextools.io/app/en/base/pair-explorer/${contract.pair}`,
  dexscreener: `https://dexscreener.com/base/${contract.pair}`,
  geckoterminal: `https://www.geckoterminal.com/base/pools/${contract.pair}`,
  coingeckoSearch: `https://www.coingecko.com/en/search?query=${contract.address}`,
  spotifyArtist:
    "https://open.spotify.com/artist/2vKgjhjw9P5VFf1PxPYyzw?si=BHuVvB1_Qs6NqNDYXk7pxg",
  youtubeMusic:
    "https://music.youtube.com/channel/UCqd8kDNfsRNsLyABVeBQdeg",
  youtube: "https://www.youtube.com/@ElitezOfficial",
  amazonMusic:
    "https://music.amazon.com/artists/B0FD8L749Y/elitez?marketplaceId=ATVPDKIKX0DER&musicTerritory=US",
  appleMusic: "https://music.apple.com/us/artist/elitez/1820701341",
  tiktok: "https://www.tiktok.com/@elite_token",
  facebook: "https://www.facebook.com/elitetokens/",
  facebookGroup: "https://www.facebook.com/groups/elitetoken/",
  facebookChat:
    "https://m.me/j/AbbDRBV5E5Jul1Ws/?send_source=gc%3Acopy_invite_link_c",
  flyer: "/Elitez-Flyer-Printable.pdf",
  marketplace: "https://www.facebook.com/groups/elitemarketplace",
  xTeam: "https://x.com/elitebasetoken",
  xFounder: "https://x.com/DerekOMalley3",
  xNft: "https://x.com/NFT_Rares",
  telegram: "https://t.me/elitezofficial",
  supportEmail: "mailto:elite@elitez.xyz",
  supportEmailAlt: "mailto:CrystalsoftheLight333@gmail.com",
};

export const nav = [
  { href: "/dream-crafter", label: "Dream Crafter" },
  { href: "/music", label: "Music" },
  { href: "/elite", label: "$ELITE" },
  { href: "/eltz", label: "$ELTZ" },
  { href: "/swap", label: "Swap" },
  { href: "/white-paper", label: "White Paper" },
  { href: "/community", label: "Community" },
];

export const pillars = [
  {
    href: "/music",
    kicker: "Elitez Music",
    title: "Original records, worldwide.",
    body: "Hip hop, R&B, soul, and indie — written to connect. The catalog lives on Spotify, Apple Music, Amazon Music, YouTube, and inside social content libraries.",
    image: "/brand/artist.jpg",
    cta: "Listen",
  },
  {
    href: "/token",
    kicker: "$ELITE and $ELTZ",
    title: "Two tokens. Two pages.",
    body: "$ELITE is the creator-led token on Base. $ELTZ — Elitez Chip — is a native B20 token used for play inside Dream Crafter. Each has its own page.",
    image: "/brand/duck.png",
    cta: "Choose a token",
  },
  {
    href: "/dream-crafter",
    kicker: "Dream Crafter",
    title: "The playable Elitez world.",
    body: "A wallet-connected Base app for live games, custom reels, collectible minting, staking, and onchain rewards — with $ELITE and $ELTZ as playable tokens.",
    image: "/brand/play-icon.png",
    cta: "Explore the app",
  },
];

export const dreamFeatures = [
  {
    title: "Live Slots",
    href: "https://elitez.app/slots",
    image: "/brand/dc-slots.jpg",
    body: "Wallet-connected slot play on Base with multi-token support, including $ELITE and $ELTZ.",
  },
  {
    title: "ELTZ Staking",
    href: "https://elitez.app/staking",
    image: "/brand/dc-staking.jpg",
    body: "Stake Elitez Chip ($ELTZ), a native B20 token on Base, inside the Dream Crafter economy.",
  },
  {
    title: "Blackjack",
    href: "https://elitez.app/blackjack",
    image: "/brand/dc-blackjack.jpg",
    body: "Table play against the house with the same wallet, network, and token flow as the rest of the arcade.",
  },
  {
    title: "Reel Builder",
    href: "https://elitez.app/reel-builder",
    image: "/brand/dc-reels.jpg",
    body: "Design custom reel machines, publish them socially, and turn them into playable creator objects.",
  },
  {
    title: "Neon Trail",
    href: "https://elitez.app/free-spin-quest",
    image: "/brand/dc-neon.jpg",
    body: "A themed challenge path with quest credits, session rewards, and onchain progression.",
  },
  {
    title: "Reel Gallery",
    href: "https://elitez.app/reel-gallery",
    image: "/brand/dc-gallery.jpg",
    body: "Browse, play, and discover machines built by the community.",
  },
  {
    title: "Mint Page",
    href: "https://elitez.app/reel-builder/mint",
    image: "/brand/dc-mint.jpg",
    body: "Mint custom reels as Base collectibles and carry them as onchain artifacts.",
  },
  {
    title: "Leaderboard",
    href: "https://elitez.app/leaderboard",
    image: "/brand/dc-leaderboard.jpg",
    body: "Compete through profile identity and gallery rankings.",
  },
  {
    title: "Texas Hold-Em",
    href: "https://elitez.app/texas-holdem",
    image: "/brand/dc-holdem.jpg",
    body: "Wallet-connected poker inside the same Base entertainment suite.",
  },
  {
    title: "Pinball",
    href: "https://elitez.app/pinball",
    image: "/brand/dc-pinball.jpg",
    body: "Arcade pinball as a hybrid game mode alongside the card and reel tables.",
  },
  {
    title: "B20 Launchpad",
    href: "https://elitez.app/b20",
    image: "/brand/dc-b20.jpg",
    body: "A launch surface for B20 tokens — Base’s protocol-level token standard — including $ELTZ.",
  },
  {
    title: "Elitez Music",
    href: "https://elitez.app",
    image: "/brand/dc-music.jpg",
    body: "The Elitez catalog plays inside the app, tying the music world to the arcade floor.",
  },
];

export const albums = [
  {
    title: "Ghosted By My Dreams",
    year: "2026",
    type: "Latest release",
    href: "https://open.spotify.com/album/0bSiuknISUoRFv9GNmm0VB",
    image: "/brand/album-ghosted.jpg",
  },
  {
    title: "My Promise",
    year: "2025",
    type: "Album",
    href: "https://open.spotify.com/album/3ixAP3jDtB17DvC4236uPW",
    image: "/brand/album-promise.jpg",
  },
  {
    title: "Unfinished Conversations",
    year: "2025",
    type: "Album",
    href: "https://open.spotify.com/album/4QakWHlpPUKm05dlbF2wD7",
    image: "/brand/album-unfinished.jpg",
  },
  {
    title: "No Time For A Cheater",
    year: "2026",
    type: "Album",
    href: "https://open.spotify.com/album/3Feksoxgdn5561qTgpiwvz",
    image: "/brand/album-cheater.jpg",
  },
  {
    title: "Healing Stone",
    year: "2025",
    type: "Album",
    href: "https://open.spotify.com/album/0GHSnyLU2JHztNMtixub3g",
    image: "/brand/album-healing.jpg",
  },
  {
    title: "All Day Long",
    year: "2025",
    type: "Album",
    href: "https://open.spotify.com/album/25G3ey758LaSO8y6Uga0Ug",
    image: "/brand/album-allday.jpg",
  },
];

export const tracks = [
  {
    title: "Unfinished Conversations",
    href: "https://open.spotify.com/track/3L4l2qwYWELyAtU0JjNA7s",
  },
  {
    title: "My Promise",
    href: "https://open.spotify.com/track/6ex2qu0zoz1JLVHf0YgGD6",
  },
  {
    title: "Ghosted By My Dreams",
    href: "https://open.spotify.com/track/16nT8IBcdBukh5FXCcPXJu",
  },
  {
    title: "Group 7",
    href: "https://open.spotify.com/track/6wSMxRwEZs56Mqnn5xmfY4",
  },
  {
    title: "Just Believe",
    href: "https://open.spotify.com/track/5gVRxVIWvVZrq13mrkMKMA",
  },
  {
    title: "Live Free",
    href: "https://open.spotify.com/track/5dHeT40NwQek8nSK6EdZjD",
  },
  {
    title: "Peace in the Air",
    href: "https://open.spotify.com/track/0m3xBmWJRjj0M8efr4oKDr",
  },
  {
    title: "Middle Finger",
    href: "https://open.spotify.com/track/4jygMNyPve2drakPzCi9On",
  },
  {
    title: "Elite Christmas",
    href: "https://open.spotify.com/track/26UrenD4ymIkXlJhr7pMVb",
  },
  {
    title: "Talk to the Hand",
    href: "https://open.spotify.com/track/3ocbgmKLYRjnwR61L4f0pB",
  },
  {
    title: "Scars",
    href: "https://open.spotify.com/track/7M7nEoDp1y9emfH8r4lJIC",
  },
  {
    title: "Lil Bit",
    href: "https://open.spotify.com/track/16pjY4elfn1DNWIjKEAOHU",
  },
  {
    title: "Elite Dreams",
    href: "https://open.spotify.com/track/08UV5BEC4V9mE9RRyb6KDr",
  },
  {
    title: "We Up",
    href: "https://open.spotify.com/track/0RL6NV7VN95CL8oZZP0EJh",
  },
  {
    title: "Hustler",
    href: "https://open.spotify.com/track/0T3hTZiCGz8jeTtr4vVPnj",
  },
  {
    title: "Bounce Back",
    href: "https://open.spotify.com/track/31DB70fZHYYZ4xZlkTPncY",
  },
  {
    title: "Too Hot",
    href: "https://open.spotify.com/track/6My6FiuA6NZ9qiAQueLewV",
  },
  {
    title: "My Whole Life",
    href: "https://open.spotify.com/track/3jCl6DZ59LgW5S5qz1Q6zS",
  },
  {
    title: "Be Kind",
    href: "https://open.spotify.com/track/32ovtJB9Yfx8M1oEph8PS2",
  },
  {
    title: "Haze",
    href: "https://open.spotify.com/track/4qTcvQTXcF4v1JIfeguKlP",
  },
  {
    title: "My Other",
    href: "https://open.spotify.com/track/4EVjRTvPswULZw0LfQ5lFR",
  },
];

export const platforms = [
  { label: "Spotify", href: links.spotifyArtist },
  { label: "Apple Music", href: links.appleMusic },
  { label: "YouTube Music", href: links.youtubeMusic },
  { label: "YouTube", href: links.youtube },
  { label: "Amazon Music", href: links.amazonMusic },
  { label: "TikTok", href: links.tiktok },
];

export const tokenomics = {
  startingSupply: "1,000,000,000,000",
  year1Burn: "500,000,000,000",
  year2Burn: "250,000,000,000",
  lockedTotal: "396,452,690,820",
  lockedRelease: "146,452,690,820",
  year1Circulating: "103,547,309,180",
  afterYear1: "500,000,000,000",
  afterYear2: "250,000,000,000",
  year1: [
    { label: "Burnt", value: "50.0%", tone: "gold" as const },
    { label: "Unreleased", value: "39.7%", tone: "teal" as const },
    { label: "In circulation", value: "10.3%", tone: "sky" as const },
  ],
  year2: [
    { label: "Burnt", value: "75.0%", tone: "gold" as const },
    { label: "In circulation", value: "25.0%", tone: "sky" as const },
    { label: "Unreleased", value: "0.0%", tone: "teal" as const },
  ],
};

export const allocation = [
  {
    pct: "50%",
    title: "Liquidity support",
    body: "Up to half of allocated creative revenue may be directed toward liquidity initiatives.",
  },
  {
    pct: "30%",
    title: "Taxes and compliance",
    body: "Approximately thirty percent is reserved for taxes and compliance obligations.",
  },
  {
    pct: "20%",
    title: "Creation and brand",
    body: "Approximately twenty percent is reinvested into music, marketing, and expansion.",
  },
];

export const socials = [
  { label: "Facebook", href: links.facebook, note: "Official team page" },
  { label: "Facebook Group", href: links.facebookGroup, note: "Community" },
  {
    label: "Facebook Community Chat",
    href: links.facebookChat,
    note: "Join the Messenger group chat",
  },
  {
    label: "Elite Marketplace",
    href: links.marketplace,
    note: "Buy and sell with the community",
  },
  { label: "X / Team", href: links.xTeam, note: "@elitebasetoken" },
  { label: "X / Founder", href: links.xFounder, note: "@DerekOMalley3" },
  { label: "Telegram", href: links.telegram, note: "Elitez Official" },
  { label: "TikTok", href: links.tiktok, note: "@elite_token" },
  { label: "YouTube", href: links.youtube, note: "@ElitezOfficial" },
];

export const markets = [
  {
    label: "Uniswap",
    href: links.uniswap,
    body: "Buy and sell $ELITE on Base.",
  },
  {
    label: "DEXTools",
    href: links.dextools,
    body: "Live pair explorer, charts, and wallet-connected trading tools.",
  },
  {
    label: "DEX Screener",
    href: links.dexscreener,
    body: "Price, volume, and on-chain prints for the Base / $ELITE pair.",
  },
  {
    label: "GeckoTerminal",
    href: links.geckoterminal,
    body: "Elite / WETH pool data on Uniswap V2 (Base).",
  },
  {
    label: "BaseScan",
    href: links.basescan,
    body: "Verified contract, holders, and transfers.",
  },
  {
    label: "CoinGecko",
    href: links.coingeckoSearch,
    body: "Search the official $ELITE contract for listing alerts and market pages.",
  },
];

export const eltzMarkets = [
  {
    label: "BaseScan",
    href: eltz.basescan,
    body: "Official Elitez Chip (ELTZ) contract, holders, and transfers on Base.",
  },
  {
    label: "DEX Screener",
    href: eltz.dexscreener,
    body: "ELTZ / ETH pair on Base.",
  },
  {
    label: "Uniswap",
    href: eltz.uniswap,
    body: "Buy and sell $ELTZ on Base.",
  },
  {
    label: "B20 Launchpad",
    href: eltz.launchpad,
    body: "Dream Crafter’s launch surface for B20 tokens, including $ELTZ.",
  },
];
