// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update the portfolio.
//  Everything on the page is generated from the object below.
//
//  Photos marked "unsplash:" are free photos from unsplash.com, loaded
//  straight from Unsplash's servers. To swap one, open a photo on
//  unsplash.com, copy the ID after "photo-" from its image address,
//  or use your own file, e.g. "images/my-photo.jpg".
// ─────────────────────────────────────────────────────────────
window.PORTFOLIO = {
  name: "Khalid Saifullah",
  initials: "KS",
  role: "Environmental Researcher · MEL Professional",
  location: "Dhaka, Bangladesh",

  // Hero — the words in `headlineEmphasis` are set in italic colour
  headline: "Turning field evidence into climate and water policy.",
  headlineEmphasis: "field evidence",
  intro:
    "Monitoring, evaluation and research for climate adaptation, with a focus on " +
    "locally led adaptation in the wetlands and rivers of the Bengal Delta.",
  heroImage: "unsplash:1723997014511-6cb608841628",

  // Numbers strip under the hero
  stats: [
    { value: "6", label: "Years in climate & environmental research" },
    { value: "2+", label: "Years in monitoring, evaluation & learning (MEL)" },
    { value: "5", label: "Institutional research reports" },
    { value: "5", label: "Funders & partners: FCDO, SIDA, IIED, REDAA, BELA" },
    { value: "5", label: "Field research sites across Bangladesh" },
  ],

  // About section
  // photo: a PNG with a transparent background looks best (shown in black & white).
  photo: "images/khalid.png",
  aboutEyebrow: "About me",
  aboutTagline: "Evidence from the field is the missing link between climate research and policy that works.",
  about: [
    "I'm an environmental researcher and development professional with six years of climate and " +
      "environmental research behind me, including more than two years in project monitoring, evaluation " +
      "and learning (MEL), climate-resilience research and evidence-based policy advocacy.",
    "At the River and Delta Research Centre I've contributed to UK FCDO- and SIDA-funded projects, " +
      "building data systems, writing bilingual reports and coordinating stakeholders from community " +
      "members to government officials.",
    "I hold an M.Sc. in Environmental Science from Bangladesh University of Professionals (BUP), " +
      "where my thesis research was funded by the National Science and Technology (NST) Fellowship.",
  ],
  partners: ["UK FCDO", "SIDA", "IIED", "REDAA", "RDRC", "BELA", "BUP"],

  // Research interests
  interests: [
    "Climate change adaptation",
    "Wetlands & river governance",
    "Water resource management",
    "Fishing communities & river livelihoods",
    "Environmental migration",
    "Human–environment geography",
    "GIS & remote sensing",
    "Forests & biodiversity",
    "Environmental policy",
  ],
  interestsImage: "unsplash:1636107315808-236577e87768",

  // Publications — the first one is shown large.
  // link: a web address, or a PDF in a "publications" folder. Empty = no button.
  projects: [
    {
      title: "Logging of Trees in Bangladesh (2025–26)",
      year: "Jun 2026",
      description: "Annual institutional report tracking tree logging across Bangladesh: where trees are felled, by whom, and at what cost.",
      publisher: "River and Delta Research Centre",
      link: "https://rdrc.info/publication-detail/logging-of-trees-in-bangladesh-2025-2026",
      image: "unsplash:1586400792375-d6b8f82db2e6",
    },
    {
      title: "Biodiversity Report of Haikkar Khal",
      year: "Mar 2026",
      description: "Biodiversity assessment of the Haikkar Khal waterway in Dhaka.",
      publisher: "River and Delta Research Centre",
      link: "https://rdrc.info/publication-detail/biodiversity-report-of-haikkar-khal",
      image: "unsplash:1706459671524-1b1184898708",
    },
    {
      title: "দূষিত তুরাগে জেলেদের জীবনযুদ্ধ",
      subtitle: "Fishers' struggle for survival on the polluted Turag",
      year: "",
      description:
        "How water pollution and river encroachment are deepening the livelihood crisis of fishing " +
        "communities on the Turag: income, drinking water, health, education and migration.",
      publisher: "River and Delta Research Centre",
      link: "https://rdrc.info/publication-detail/duussit-turaage-jeleder-jiibnyuddh",
      image: "unsplash:1649134799042-ccca78a3f9bf",
    },
    {
      title: "Logging of Trees in Bangladesh (2024–25)",
      year: "Jun 2025",
      description: "Co-authored report documenting tree logging incidents and their environmental impact.",
      publisher: "River and Delta Research Centre",
      link: "https://rdrc.info/publication-detail/logging-of-trees-in-bangladesh-2024-25",
      image: "unsplash:1567421259522-0b3ebf371905",
    },
    {
      title: "Dried Up Rivers of Bangladesh (2024–25)",
      year: "Mar 2025",
      description: "Co-authored report on river drying across Bangladesh.",
      publisher: "River and Delta Research Centre",
      link: "https://rdrc.info/publication-detail/dried-up-rivers-of-bangladesh-2024-2025",
      image: "unsplash:1653645981806-2a1dc51dd9df",
    },
    {
      title: "Water Logging Scenario in Bangladesh 2024",
      year: "Oct 2024",
      description: "Co-authored report on the extent and causes of waterlogging in 2024.",
      publisher: "River and Delta Research Centre",
      link: "",
      image: "unsplash:1709804820366-f18c8a8d2a8c",
    },
  ],

  // Full-width photo band with a quote
  quote:
    "Wetlands aren't restored from offices or spreadsheets. They're restored by the people who live " +
    "beside them, and by evidence that listens to them.",
  quoteImage: "unsplash:1706640254392-4648f5aac0d6",

  experience: [
    {
      when: "Sep 2024 — Now",
      title: "Monitoring, Evaluation and Learning (MEL) Officer",
      org: "Re-WET Project, River and Delta Research Centre",
      description:
        "Designed the project's M&E framework, led Kobo Toolbox data collection, prepared bilingual " +
        "donor reports for UK FCDO, and facilitated multi-stakeholder learning workshops.",
    },
    {
      when: "Jan 2025 — Jun 2025",
      title: "Research Assistant, River Rights Consultancy",
      org: "River and Delta Research Centre × BELA",
      description:
        "SIDA-funded work on legal frameworks for river rights in the Bengal Delta: evidence reviews, " +
        "stakeholder consultations and policy briefs for river governance reform.",
    },
    {
      when: "Sep 2024 — Now",
      title: "Research Assistant",
      org: "River and Delta Research Centre",
      description:
        "Fieldwork, data collection and literature synthesis; co-authored institutional reports on " +
        "tree logging, river drying and waterlogging.",
    },
  ],

  // Featured project — shown right after Experience
  featuredProject: {
    name: "Re-WET",
    title: "Restoring wetlands with the communities who depend on them",
    link: "https://rewet.info",
    linkLabel: "Visit the Re-WET website",
    description:
      "Re-WET is a research-to-action project restoring Korail lake, an ecologically critical urban " +
      "wetland in Dhaka, through community-led, nature-based solutions. It works alongside local urban " +
      "farmers, grassroots activists and slum dwellers to build an urban wetland stewardship model that " +
      "benefits nature, people and the climate. As MEL Officer, I designed the project's monitoring framework.",
    facts: [
      { label: "My role", value: "MEL Officer" },
      { label: "Since", value: "September 2024" },
      { label: "Site", value: "Korail lake, Dhaka" },
      { label: "Funded by", value: "UK FCDO · REDAA programme" },
      { label: "Managed by", value: "IIED" },
      { label: "Implemented by", value: "River and Delta Research Centre" },
    ],
    images: [
      { src: "images/rewet-site-2.jpg", caption: "Korail lake, Dhaka — the Re-WET site from above" },
      { src: "images/rewet-site-1.jpg", caption: "Bamboo structure on Korail lake" },
    ],
  },

  education: [
    {
      degree: "M.Sc. in Environmental Science",
      school: "Bangladesh University of Professionals (BUP)",
      when: "Graduated June 2023",
      thesis: "Environmental Migration and Peoples’ Adaptation in a New Scenario",
      supervisor: "Prof. Abdul Baqee, University of Dhaka",
      note: "Funded by the NST Fellowship",
    },
    {
      degree: "B.Sc. in Environmental Science",
      school: "Bangladesh University of Professionals (BUP)",
      when: "Graduated December 2021",
      thesis: "Agricultural Adaptation to Climate Change in Chapai Nawabganj District, Bangladesh",
      supervisor: "Asst. Prof. Alamgir Kabir, BUP",
    },
  ],

  awards: [
    {
      title: "National Science and Technology (NST) Fellowship",
      issuer: "Ministry of Science and Technology, Government of Bangladesh",
      when: "June 2022 — June 2023",
      description:
        "Awarded for M.Sc. thesis research on climate-induced migration and how displaced people adapt " +
        "to life in new settings.",
    },
  ],

  fieldwork: [
    { when: "2019", title: "Mangrove ecosystem, ecology & soil science study", place: "Sundarbans", image: "unsplash:1589556183130-530470785fab" },
    { when: "2021", title: "Coastal environment & marine water quality analysis", place: "Chittagong coastal belt", image: "unsplash:1625234143031-c983c2542cba" },
    { when: "2021", title: "Environmental pollution & industrial impact assessment", place: "Chittagong Export Processing Zone", image: "unsplash:1716388781968-e807f87fe910" },
    { when: "2019", title: "Socioeconomic survey on climate adaptation strategies", place: "Banishanta Village, Khulna", image: "unsplash:1661198656974-75a27e1daed9" },
    { when: "2018", title: "Environmental observation & baseline documentation", place: "Sitakunda, Chittagong", image: "unsplash:1574691966469-209649da8dcc" },
  ],

  email: "saifullahkhalid046@gmail.com",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/khalid-saifullah-448903162/" },
  ],
  contactImage: "unsplash:1723985465692-4dbe9cc85268",
};
