export type WhitepaperBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "status"; items: { title: string; text: string }[] }
  | { kind: "phases"; items: { title: string; items: string[] }[] };

export type WhitepaperSection = {
  id: string;
  number: string;
  title: string;
  blocks: WhitepaperBlock[];
};

export const whitepaperMeta = {
  kicker: "Official paper · Version 2026",
  title: "Whitepaper and project disclosure.",
  lede: "Creator · Music · Gaming · Digital Community. This is the official $ELITE whitepaper.",
  description:
    "Elite Token ($ELITE) is a creator-led blockchain ecosystem on Base connecting music, gaming, digital entertainment, collectibles, merchandise, and community participation.",
};

export const whitepaperFacts = [
  ["Token name", "Elite Token"],
  ["Ticker", "$ELITE"],
  ["Network", "Base"],
  ["Token standard", "ERC-20"],
  ["Original minted supply", "1,000,000,000,000 ELITE"],
  ["Sent to burn address", "750,000,000,000 ELITE"],
  ["Non-burned supply", "250,000,000,000 ELITE"],
] as const;

export const whitepaperSections: WhitepaperSection[] = [
  {
    id: "purpose",
    number: "1",
    title: "Purpose of this document",
    blocks: [
      {
        kind: "p",
        text: "This whitepaper provides information about Elite Token ($ELITE), its technology, token structure, ecosystem, current and planned utility, project activities, risks, and relationship to the broader Elitez creator ecosystem.",
      },
      {
        kind: "p",
        text: "The purpose of this document is transparency.",
      },
      {
        kind: "p",
        text: "It is intended to help users, exchanges, data providers, regulators, service providers, and other interested parties understand how $ELITE and the associated ecosystem operate.",
      },
      {
        kind: "p",
        text: "This document is not an offer to sell securities, a promise of investment returns, or financial, investment, tax, or legal advice.",
      },
      {
        kind: "p",
        text: "Blockchain technology and digital-asset regulation continue to evolve. The project intends to update its public disclosures when material changes occur.",
      },
    ],
  },
  {
    id: "abstract",
    number: "2",
    title: "Abstract",
    blocks: [
      {
        kind: "p",
        text: "Elite Token ($ELITE) is a creator-led blockchain ecosystem built on Base that connects blockchain technology with music, gaming, digital entertainment, digital collectibles, merchandise, and community participation.",
      },
      {
        kind: "p",
        text: "The ELITE ecosystem is intended to develop practical and entertainment-oriented uses for blockchain technology rather than relying solely on speculative token trading.",
      },
      {
        kind: "p",
        text: "The ecosystem includes Elitez Music, a catalog of original music distributed through major digital music services and social-media music libraries.",
      },
      {
        kind: "p",
        text: "The ecosystem also includes Dream Crafter, a wallet-connected application designed around gaming, digital entertainment, collectibles, staking functionality where available, and supported blockchain assets including $ELITE.",
      },
      {
        kind: "p",
        text: "Independent creator activities associated with the Elitez brand may generate revenue.",
      },
      {
        kind: "p",
        text: "At the project’s discretion, portions of available project or creator resources may be used for activities such as software development, content production, marketing, operations, ecosystem expansion, or decentralized-exchange liquidity.",
      },
      {
        kind: "p",
        text: "These decisions are discretionary.",
      },
      {
        kind: "p",
        text: "Ownership of $ELITE does not provide ownership of Elitez, equity in a company, ownership of the Elitez music catalog, contractual profit-sharing rights, music royalty rights, dividends, or a guaranteed entitlement to project revenue.",
      },
      {
        kind: "p",
        text: "No increase in the market price, liquidity, adoption, or value of $ELITE is promised or guaranteed.",
      },
    ],
  },
  {
    id: "vision",
    number: "3",
    title: "Vision",
    blocks: [
      {
        kind: "p",
        text: "The vision of ELITE is to create a creator-driven digital ecosystem where music, gaming, art, entertainment, community participation, and blockchain technology can operate together.",
      },
      {
        kind: "p",
        text: "Rather than depending upon one use case, ELITE seeks to create an expanding entertainment ecosystem in which blockchain technology provides additional ways for users, creators, gamers, and community members to interact.",
      },
    ],
  },
  {
    id: "mission",
    number: "4",
    title: "Mission",
    blocks: [
      {
        kind: "p",
        text: "The mission of ELITE is to combine creative content and blockchain-enabled applications into an accessible digital ecosystem.",
      },
      {
        kind: "p",
        text: "Development is focused on areas including:",
      },
      {
        kind: "list",
        items: [
          "Original music and digital entertainment",
          "Blockchain-enabled gaming",
          "Interactive community experiences",
          "Digital collectibles",
          "Creator content",
          "Merchandise",
          "Wallet-connected applications",
          "Responsible expansion of $ELITE utility",
        ],
      },
      {
        kind: "p",
        text: "The ecosystem is intended to encourage participation and use rather than create expectations of passive financial returns.",
      },
    ],
  },
  {
    id: "blockchain",
    number: "5",
    title: "Blockchain and token information",
    blocks: [
      {
        kind: "p",
        text: "Elite Token is an ERC-20 token deployed on Base.",
      },
      {
        kind: "p",
        text: "Base provides an Ethereum-compatible blockchain environment supporting smart contracts and decentralized applications.",
      },
      {
        kind: "p",
        text: "Blockchain transactions involving $ELITE are publicly verifiable.",
      },
      {
        kind: "p",
        text: "Users should independently confirm the official contract address before purchasing, transferring, trading, or otherwise interacting with $ELITE.",
      },
    ],
  },
  {
    id: "supply",
    number: "6",
    title: "Token supply",
    blocks: [
      {
        kind: "list",
        items: [
          "Original Minted Supply: 1,000,000,000,000 ELITE",
          "Tokens Permanently Sent to Burn Address: 750,000,000,000 ELITE",
          "Non-Burned Supply: 250,000,000,000 ELITE",
        ],
      },
      {
        kind: "p",
        text: "A total of 750 billion ELITE, representing 75% of the original one-trillion-token supply, was permanently transferred to an inaccessible burn address.",
      },
      {
        kind: "p",
        text: "Following these burns, 250 billion ELITE remain outside the burn address.",
      },
      {
        kind: "p",
        text: "Because the burns were performed by transferring tokens to an inaccessible address rather than necessarily reducing the ERC-20 contract’s totalSupply() value, some third-party data providers may continue to display the original minted supply. Other market-data providers, including DEXTools, currently recognize a 250 billion supply after accounting for burned tokens.",
      },
      {
        kind: "p",
        text: "The project does not represent that reducing the available supply will cause an increase in the price, demand, liquidity, or value of ELITE.",
      },
    ],
  },
  {
    id: "distribution",
    number: "7",
    title: "Token distribution and affiliated holdings",
    blocks: [
      {
        kind: "p",
        text: "Transparency concerning token ownership and distribution is important to the ELITE project.",
      },
      {
        kind: "p",
        text: "Tokens may be held by project founders, developers, contributors, community members, liquidity providers, independent purchasers, application users, and other unaffiliated parties.",
      },
      {
        kind: "p",
        text: "The project intends to disclose material project-controlled or affiliated token holdings when appropriate and maintain accurate information concerning material allocations.",
      },
      {
        kind: "p",
        text: "Blockchain wallet balances can change as tokens are transferred, used, sold, purchased, distributed, burned, or supplied to liquidity.",
      },
      {
        kind: "p",
        text: "Project-controlled or affiliated holdings do not provide holders with a guarantee concerning future market activity.",
      },
      {
        kind: "p",
        text: "No representation is made that affiliated persons will permanently retain any particular quantity of tokens unless such restriction is separately and expressly documented.",
      },
      {
        kind: "p",
        text: "Material project-controlled token transactions should be evaluated together with publicly available blockchain records.",
      },
    ],
  },
  {
    id: "control",
    number: "8",
    title: "Project control and affiliated persons",
    blocks: [
      {
        kind: "p",
        text: "The ELITE ecosystem is creator-led.",
      },
      {
        kind: "p",
        text: "Project founders, developers, administrators, contractors, contributors, or other affiliated persons may have influence over portions of the project’s development, marketing, applications, websites, liquidity decisions, treasury resources, partnerships, or other ecosystem activities.",
      },
      {
        kind: "p",
        text: "This should not be interpreted as a representation that the ecosystem is fully decentralized.",
      },
      {
        kind: "p",
        text: "Certain blockchain components may operate through decentralized smart contracts while websites, applications, creative assets, development decisions, and other project functions may remain managed by project participants.",
      },
      {
        kind: "p",
        text: "The project intends to accurately disclose material control relationships rather than represent centralized components as decentralized.",
      },
    ],
  },
  {
    id: "smart-contract",
    number: "9",
    title: "Smart contract and technical disclosure",
    blocks: [
      {
        kind: "p",
        text: "$ELITE operates through an ERC-20 smart contract deployed on Base.",
      },
      {
        kind: "p",
        text: "Users should independently review available blockchain information and smart-contract data before interacting with the token.",
      },
      {
        kind: "p",
        text: "Where applicable, project disclosures should identify material administrative privileges or smart-contract capabilities that could affect token holders.",
      },
      {
        kind: "p",
        text: "Blockchain applications can contain vulnerabilities.",
      },
      {
        kind: "p",
        text: "No smart contract, blockchain, wallet, bridge, decentralized exchange, third-party application, or other blockchain technology should be considered completely free from technical risk.",
      },
      {
        kind: "p",
        text: "The project does not guarantee uninterrupted operation of Base, decentralized exchanges, wallets, applications, or third-party infrastructure.",
      },
    ],
  },
  {
    id: "dream-crafter",
    number: "10",
    title: "Dream Crafter",
    blocks: [
      {
        kind: "p",
        text: "Dream Crafter represents an application layer within the ELITE ecosystem.",
      },
      {
        kind: "p",
        text: "Dream Crafter is designed as a wallet-connected entertainment platform involving games and blockchain-enabled experiences.",
      },
      {
        kind: "p",
        text: "The ecosystem may include functionality involving:",
      },
      {
        kind: "list",
        items: [
          "Wallet-connected games",
          "$ELITE integration",
          "Supported multi-token experiences",
          "Digital collectibles",
          "Custom digital and reel content",
          "Staking functionality where available",
          "Other entertainment applications",
        ],
      },
      {
        kind: "p",
        text: "Not every feature described as part of the project’s development plans should be interpreted as currently operational.",
      },
      {
        kind: "p",
        text: "Official project materials should distinguish between:",
      },
      {
        kind: "status",
        items: [
          {
            title: "Live features",
            text: "Functionality currently available to users.",
          },
          {
            title: "Development features",
            text: "Functionality actively being built or tested.",
          },
          {
            title: "Roadmap features",
            text: "Functionality being considered or planned for future development.",
          },
        ],
      },
      {
        kind: "p",
        text: "Roadmap functionality is not guaranteed.",
      },
    ],
  },
  {
    id: "music",
    number: "11",
    title: "Elitez Music",
    blocks: [
      {
        kind: "p",
        text: "Music is an important component of the broader ELITE ecosystem.",
      },
      {
        kind: "p",
        text: "Elitez Music consists of original music distributed through digital music services that may include:",
      },
      {
        kind: "list",
        items: [
          "Spotify",
          "Apple Music",
          "Amazon Music",
          "YouTube Music",
          "iTunes",
          "iHeartRadio",
          "Other supported digital distribution services",
        ],
      },
      {
        kind: "p",
        text: "Elitez music may also be available through music or content libraries used by platforms such as Facebook, Instagram, TikTok, and YouTube.",
      },
      {
        kind: "p",
        text: "This music activity exists independently from secondary-market trading of $ELITE.",
      },
      {
        kind: "p",
        text: "Revenue generated from music belongs to the applicable creator or project entity.",
      },
      {
        kind: "p",
        text: "The project or creator may voluntarily use available resources generated from creative activities for ecosystem development.",
      },
      {
        kind: "p",
        text: "This does not create a contractual claim on music revenue for $ELITE holders.",
      },
      {
        kind: "p",
        text: "Holding $ELITE does not provide ownership of songs, masters, publishing rights, streaming revenue, royalties, copyrights, or other intellectual property unless a separate written agreement expressly provides otherwise.",
      },
    ],
  },
  {
    id: "revenue",
    number: "12",
    title: "Creator and ecosystem revenue",
    blocks: [
      {
        kind: "p",
        text: "Activities associated with the broader Elitez ecosystem may generate revenue from sources including:",
      },
      {
        kind: "list",
        items: [
          "Music",
          "Merchandise",
          "Social-media monetization",
          "Digital content",
          "Creator activities",
          "Digital products",
          "Applications",
          "Other commercial activities",
        ],
      },
      {
        kind: "p",
        text: "Available project resources may voluntarily be used for purposes including:",
      },
      {
        kind: "list",
        items: [
          "Software development",
          "Application infrastructure",
          "Music production",
          "Content production",
          "Marketing",
          "Community development",
          "Operating expenses",
          "Digital products",
          "Liquidity provisioning",
          "Future ecosystem development",
        ],
      },
      {
        kind: "p",
        text: "The amount and timing of any allocation are discretionary and may change.",
      },
      {
        kind: "p",
        text: "No particular contribution, percentage, schedule, liquidity amount, or financial result is guaranteed.",
      },
      {
        kind: "p",
        text: "$ELITE holders do not receive an automatic contractual right to revenue generated by these activities.",
      },
    ],
  },
  {
    id: "liquidity",
    number: "13",
    title: "Liquidity",
    blocks: [
      {
        kind: "p",
        text: "$ELITE may be traded through decentralized exchanges operating on Base.",
      },
      {
        kind: "p",
        text: "Liquidity pools enable decentralized exchanges between supported digital assets according to the applicable smart-contract rules.",
      },
      {
        kind: "p",
        text: "Liquidity may be supplied by:",
      },
      {
        kind: "list",
        items: [
          "Project participants",
          "Token holders",
          "Independent liquidity providers",
          "Other third parties",
        ],
      },
      {
        kind: "p",
        text: "Third parties may establish liquidity positions without project control or authorization.",
      },
      {
        kind: "p",
        text: "The project may voluntarily contribute assets to liquidity pools.",
      },
      {
        kind: "p",
        text: "Such contributions are discretionary unless expressly documented otherwise.",
      },
      {
        kind: "p",
        text: "The project does not guarantee:",
      },
      {
        kind: "list",
        items: [
          "Minimum liquidity",
          "Permanent liquidity",
          "Minimum trading volume",
          "A minimum token price",
          "Future market demand",
          "Ability to sell tokens at a particular price",
          "Appreciation of $ELITE",
          "Availability of any particular trading venue",
        ],
      },
      {
        kind: "p",
        text: "Decentralized trading involves risks including volatility, slippage, smart-contract vulnerabilities, impermanent loss, liquidity changes, and transaction costs.",
      },
    ],
  },
  {
    id: "market",
    number: "14",
    title: "Market activity",
    blocks: [
      {
        kind: "p",
        text: "The market price of $ELITE is determined by market participants and available liquidity.",
      },
      {
        kind: "p",
        text: "The ELITE project does not guarantee or control the secondary-market price of the token.",
      },
      {
        kind: "p",
        text: "Public statements concerning development, ecosystem growth, music, applications, token burns, partnerships, or other project activities should not be interpreted as promises that $ELITE will increase in value.",
      },
      {
        kind: "p",
        text: "Past market prices or trading activity do not predict future results.",
      },
    ],
  },
  {
    id: "nfts",
    number: "15",
    title: "Digital collectibles and NFTs",
    blocks: [
      {
        kind: "p",
        text: "The ELITE ecosystem may include NFTs or other blockchain-based digital collectibles.",
      },
      {
        kind: "p",
        text: "These assets are intended primarily for creative, entertainment, collectible, gaming, or community purposes.",
      },
      {
        kind: "p",
        text: "Ownership of an ELITE-related digital collectible does not automatically provide:",
      },
      {
        kind: "list",
        items: [
          "Equity",
          "Ownership of the ELITE project",
          "Music royalties",
          "Profit-sharing rights",
          "Dividends",
          "Guaranteed resale value",
        ],
      },
      {
        kind: "p",
        text: "Any additional rights associated with a particular digital collectible should be separately disclosed.",
      },
    ],
  },
  {
    id: "merchandise",
    number: "16",
    title: "Merchandise",
    blocks: [
      {
        kind: "p",
        text: "ELITE-branded merchandise may be offered through online marketplaces and other retail channels.",
      },
      {
        kind: "p",
        text: "Merchandise provides a physical connection between the digital community and the broader Elitez creator ecosystem.",
      },
      {
        kind: "p",
        text: "Revenue from merchandise belongs to the applicable creator or project entity.",
      },
      {
        kind: "p",
        text: "Available resources may be voluntarily reinvested into creator or ecosystem activities at the project’s discretion.",
      },
      {
        kind: "p",
        text: "Purchasing merchandise does not create ownership or investment rights in $ELITE or the ELITE project.",
      },
    ],
  },
  {
    id: "community",
    number: "17",
    title: "Social and community ecosystem",
    blocks: [
      {
        kind: "p",
        text: "The Elitez brand maintains social-media and digital-content channels used for entertainment, music distribution, community engagement, and project communication.",
      },
      {
        kind: "p",
        text: "Community members may participate by:",
      },
      {
        kind: "list",
        items: [
          "Listening to music",
          "Playing available games",
          "Using project applications",
          "Interacting with content",
          "Sharing creative content",
          "Collecting supported digital items",
          "Using $ELITE where supported",
          "Participating in blockchain experiences",
        ],
      },
      {
        kind: "p",
        text: "Community participation does not create an employment, partnership, fiduciary, investment-management, or ownership relationship with the project.",
      },
    ],
  },
  {
    id: "conflicts",
    number: "18",
    title: "Conflicts of interest",
    blocks: [
      {
        kind: "p",
        text: "Project founders, affiliated persons, developers, contributors, or other participants may own $ELITE.",
      },
      {
        kind: "p",
        text: "These persons may therefore have economic interests that differ from those of other token holders.",
      },
      {
        kind: "p",
        text: "Project participants may also receive revenue from activities including music, merchandise, applications, content, or other commercial operations.",
      },
      {
        kind: "p",
        text: "These circumstances may create actual or potential conflicts of interest.",
      },
      {
        kind: "p",
        text: "The project intends to provide reasonable transparency concerning material relationships, holdings, transactions, or conflicts when appropriate.",
      },
      {
        kind: "p",
        text: "Users should independently consider these relationships when evaluating participation in the ecosystem.",
      },
    ],
  },
  {
    id: "transfers",
    number: "19",
    title: "Token sales and transfers",
    blocks: [
      {
        kind: "p",
        text: "Tokens held by project participants or affiliated persons may potentially be transferred, used, supplied to liquidity, distributed, sold, burned, or otherwise disposed of unless subject to a separately disclosed restriction.",
      },
      {
        kind: "p",
        text: "Such transactions can affect circulating supply, liquidity, and market conditions.",
      },
      {
        kind: "p",
        text: "Public blockchain records provide an additional method for users to evaluate token transfers.",
      },
      {
        kind: "p",
        text: "No user should assume that an affiliated wallet balance will remain unchanged indefinitely.",
      },
    ],
  },
  {
    id: "roadmap",
    number: "20",
    title: "Roadmap",
    blocks: [
      {
        kind: "phases",
        items: [
          {
            title: "Phase 1 — Foundation",
            items: [
              "Deploy $ELITE on Base",
              "Establish decentralized trading",
              "Develop the Elitez music catalog",
              "Expand music distribution",
              "Develop merchandise and creator content",
              "Establish social-media presence",
              "Build the project’s initial blockchain ecosystem",
            ],
          },
          {
            title: "Phase 2 — Utility and engagement",
            items: [
              "Develop blockchain-enabled gaming experiences",
              "Integrate $ELITE into Dream Crafter",
              "Develop wallet-connected functionality",
              "Expand digital collectibles",
              "Expand creator collaborations",
              "Continue releasing original music",
              "Develop additional interactive entertainment features",
            ],
          },
          {
            title: "Phase 3 — Ecosystem expansion",
            items: [
              "Expand Dream Crafter functionality",
              "Increase gaming and entertainment options",
              "Expand the Elitez music catalog",
              "Develop additional creator partnerships",
              "Explore additional practical uses for $ELITE",
              "Increase project transparency and documentation",
              "Pursue appropriate cryptocurrency data-platform integrations",
              "Pursue appropriate exchange integrations where available",
            ],
          },
        ],
      },
      {
        kind: "p",
        text: "The roadmap describes objectives.",
      },
      {
        kind: "p",
        text: "It does not constitute a promise that any particular feature, partnership, integration, exchange listing, price, liquidity level, or timeline will occur.",
      },
      {
        kind: "p",
        text: "Development priorities may change.",
      },
    ],
  },
  {
    id: "transparency",
    number: "21",
    title: "Transparency and public disclosure",
    blocks: [
      {
        kind: "p",
        text: "The ELITE project intends to make material information about the ecosystem reasonably accessible.",
      },
      {
        kind: "p",
        text: "Where applicable, public information may include:",
      },
      {
        kind: "list",
        items: [
          "Official token contract address",
          "Token supply information",
          "Token burn information",
          "Relevant blockchain transactions",
          "Material project-controlled token holdings",
          "Token economics",
          "Official project websites",
          "Current token utility",
          "Roadmap information",
          "Official social-media channels",
          "Material changes to ecosystem functionality",
        ],
      },
      {
        kind: "p",
        text: "Blockchain information should be independently verifiable whenever possible.",
      },
      {
        kind: "p",
        text: "The project intends to update disclosures when material information changes.",
      },
    ],
  },
  {
    id: "source-code",
    number: "22",
    title: "Source code and blockchain verification",
    blocks: [
      {
        kind: "p",
        text: "Blockchain information concerning $ELITE can be independently examined through public Base blockchain explorers and other blockchain-data services.",
      },
      {
        kind: "p",
        text: "Where project-controlled software or smart-contract source code is publicly available or verified, users should rely on official links to identify the applicable code.",
      },
      {
        kind: "p",
        text: "Third-party applications, wallets, exchanges, blockchain explorers, and analytics platforms are independently operated and are not controlled by the ELITE project unless expressly stated otherwise.",
      },
    ],
  },
  {
    id: "no-ownership",
    number: "23",
    title: "No ownership or profit rights",
    blocks: [
      {
        kind: "p",
        text: "Unless separately established through an express written agreement, ownership of $ELITE does not provide:",
      },
      {
        kind: "list",
        items: [
          "Equity in Elitez",
          "Ownership of a company",
          "Ownership of project assets",
          "Ownership of music",
          "Music royalty rights",
          "Publishing rights",
          "Revenue-sharing rights",
          "Dividends",
          "Guaranteed staking returns",
          "Guaranteed rewards",
          "Guaranteed liquidity",
          "Guaranteed market appreciation",
          "A contractual claim against project revenue",
        ],
      },
      {
        kind: "p",
        text: "$ELITE should not be purchased or held based upon an expectation that the project will guarantee financial returns.",
      },
    ],
  },
  {
    id: "regulatory",
    number: "24",
    title: "Regulatory disclosure",
    blocks: [
      {
        kind: "p",
        text: "Digital-asset regulation is evolving in the United States and internationally.",
      },
      {
        kind: "p",
        text: "Federal and state laws, regulations, regulatory interpretations, court decisions, and future legislation may affect $ELITE, its applications, exchanges, liquidity providers, developers, project participants, or users.",
      },
      {
        kind: "p",
        text: "Proposed legislation or regulatory frameworks may change before becoming effective.",
      },
      {
        kind: "p",
        text: "The ELITE project intends to evaluate material regulatory developments and update its practices and disclosures where appropriate.",
      },
      {
        kind: "p",
        text: "Nothing in this document represents a legal determination that $ELITE has any particular regulatory classification.",
      },
      {
        kind: "p",
        text: "Regulatory classification depends upon applicable law and the relevant facts and circumstances.",
      },
    ],
  },
  {
    id: "risk",
    number: "25",
    title: "Risk disclosure",
    blocks: [
      {
        kind: "p",
        text: "Cryptocurrency and blockchain applications involve substantial risks.",
      },
      {
        kind: "p",
        text: "Risks may include:",
      },
      {
        kind: "list",
        items: [
          "Extreme price volatility",
          "Loss of some or all token value",
          "Limited liquidity",
          "Smart-contract vulnerabilities",
          "Blockchain failures",
          "Application failures",
          "Wallet compromise",
          "Fraud or phishing by unrelated third parties",
          "Regulatory changes",
          "Tax consequences",
          "Decentralized-exchange risks",
          "Changes in ecosystem development",
          "Loss of access to wallets or private keys",
          "Third-party platform failures",
          "Changes in trading venues",
          "Cybersecurity risks",
        ],
      },
      {
        kind: "p",
        text: "No person should acquire or use $ELITE without understanding these risks.",
      },
      {
        kind: "p",
        text: "Users are responsible for protecting their own wallets, private keys, recovery phrases, and account credentials.",
      },
    ],
  },
  {
    id: "listings",
    number: "26",
    title: "No guarantee of exchange or data-platform listings",
    blocks: [
      {
        kind: "p",
        text: "The ELITE project may apply to cryptocurrency exchanges, market-data providers, wallets, applications, or other third-party platforms.",
      },
      {
        kind: "p",
        text: "Submitting an application does not guarantee acceptance.",
      },
      {
        kind: "p",
        text: "No representation is made that $ELITE will be listed by Coinbase, CoinGecko, CoinMarketCap, or any other particular platform.",
      },
      {
        kind: "p",
        text: "Third parties independently determine whether to support or list digital assets.",
      },
    ],
  },
  {
    id: "forward-looking",
    number: "27",
    title: "Forward-looking information",
    blocks: [
      {
        kind: "p",
        text: "This document contains statements concerning plans, goals, development objectives, and future functionality.",
      },
      {
        kind: "p",
        text: "These statements are forward-looking and involve uncertainty.",
      },
      {
        kind: "p",
        text: "Actual development, adoption, partnerships, functionality, regulatory requirements, market conditions, and timelines may differ materially from current expectations.",
      },
      {
        kind: "p",
        text: "Roadmap statements should not be interpreted as guarantees.",
      },
    ],
  },
  {
    id: "legal",
    number: "28",
    title: "Legal disclaimer",
    blocks: [
      {
        kind: "p",
        text: "This document is provided for informational and transparency purposes.",
      },
      {
        kind: "p",
        text: "Nothing in this whitepaper constitutes financial, investment, legal, accounting, or tax advice.",
      },
      {
        kind: "p",
        text: "Nothing in this document constitutes a promise of profit or a guarantee concerning the future value of $ELITE.",
      },
      {
        kind: "p",
        text: "Nothing in this document should be interpreted as a representation that purchasing $ELITE will generate income or financial returns.",
      },
      {
        kind: "p",
        text: "Digital assets involve substantial risk.",
      },
      {
        kind: "p",
        text: "Users should conduct their own research and obtain independent professional advice where appropriate.",
      },
      {
        kind: "p",
        text: "The legal and regulatory treatment of digital assets varies by jurisdiction and may change.",
      },
      {
        kind: "p",
        text: "The project may revise this whitepaper to reflect changes in technology, project development, token economics, applicable law, or the ecosystem.",
      },
    ],
  },
  {
    id: "official-token",
    number: "29",
    title: "Official token information",
    blocks: [
      {
        kind: "p",
        text: "Users should always verify the contract address using official project resources before interacting with $ELITE.",
      },
    ],
  },
  {
    id: "maintenance",
    number: "30",
    title: "Document maintenance",
    blocks: [
      {
        kind: "p",
        text: "This whitepaper is intended to be a living project disclosure.",
      },
      {
        kind: "p",
        text: "As ELITE develops, material changes involving token utility, supply, applications, project control, affiliated holdings, technical functionality, or other significant matters may require updates to this document.",
      },
      {
        kind: "p",
        text: "The current version should be made publicly accessible through the official ELITE website.",
      },
    ],
  },
];
