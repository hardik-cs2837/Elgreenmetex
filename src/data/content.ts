import {
  Activity,
  ArrowDownToLine,
  BatteryCharging,
  Boxes,
  CircuitBoard,
  FlaskConical,
  Gauge,
  PackageOpen,
  Pickaxe,
  Recycle,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Truck,
  Waypoints,
} from "lucide-react";

export const siteContent = {
  seo: {
    title: "Elgreen Metex Private Limited | Circular Battery Materials Platform",
    description:
      "Elgreen Metex is building a circular supply chain of critical battery materials through advanced recycling, second-life systems, and high-purity extraction.",
    keywords: [
      "battery recycling",
      "critical battery materials",
      "lithium-ion lifecycle",
      "circular supply chain",
      "EV battery reuse",
      "Elgreen Metex",
      "clean tech India",
    ],
    url: "https://www.elgreenmetex.com",
  },
  brand: {
    name: "Elgreen Metex",
    legalName: "Elgreen Metex Private Limited",
    tagline: "Creating a circular supply chain of critical battery materials",
    mission:
      "Powering the next generation energy source for a sustainable world through closed-loop battery material intelligence.",
  },
  navigation: [
    { href: "#hero", label: "Home" },
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#materials", label: "Materials" },
    { href: "#technology", label: "Technology" },
    { href: "#business", label: "Business Process" },
    { href: "#impact", label: "ESG" },
    { href: "#future", label: "Future Vision" },
    { href: "#team", label: "Team" },
    { href: "#legal", label: "Legal" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Circular Battery Intelligence Platform",
    title: "Creating a Circular Supply Chain of Critical Battery Materials",
    description:
      "From collection and diagnostics to high-purity extraction and second-life deployment, Elgreen Metex delivers a full-stack circular battery ecosystem for the energy transition.",
    ctaPrimary: { label: "Explore Ecosystem", href: "#ecosystem" },
    ctaSecondary: { label: "Talk to Team", href: "#contact" },
    stats: [
      { label: "Recovery of valuable materials", value: 95, suffix: "%" },
      { label: "Water usage reduction", value: 97, suffix: "%" },
      { label: "Purity achieved for extracted materials", value: 99.3, suffix: "%" },
      { label: "CO2 reduction potential with recycled materials", value: 5, suffix: "X" },
    ],
  },
  ecosystem: {
    eyebrow: "Ecosystem Flow",
    title: "One Circular Loop Across Eight Strategic Battery Lifecycle Stages",
    description:
      "The Elgreen ecosystem play is built as a full-stack circular system from raw material extraction to second-life usage and closed-loop recycling.",
    flowLabel: "Interactive Circular Supply Chain",
    steps: [
      {
        title: "Raw Material",
        subtitle: "Extraction",
        text: "Battery production begins with extraction of lithium, cobalt, nickel, and manganese.",
        icon: Pickaxe,
      },
      {
        title: "Refining",
        subtitle: "Battery-grade compounds",
        text: "Raw materials are refined into lithium carbonate and nickel sulfate for cell manufacturing.",
        icon: FlaskConical,
      },
      {
        title: "Repair & Manufacture",
        subtitle: "Mechanify",
        text: "Components are assembled, tested, packaged, and supported by repair services.",
        icon: Settings2,
      },
      {
        title: "Usage",
        subtitle: "Intuions",
        text: "Batteries power mobility and electronics through their first-life operational cycle.",
        icon: BatteryCharging,
      },
      {
        title: "Collection",
        subtitle: "End-of-life retrieval",
        text: "At end of life, batteries are collected and transported to authorized facilities.",
        icon: Truck,
      },
      {
        title: "Sorting & Separating",
        subtitle: "Chemistry routeing",
        text: "Batteries are sorted by chemistry to optimize the downstream recycling pathway.",
        icon: ScanSearch,
      },
      {
        title: "Recycling",
        subtitle: "Material recovery",
        text: "Mechanical and chemical pathways separate lithium, cobalt, nickel, and other materials.",
        icon: Recycle,
      },
      {
        title: "Second Life",
        subtitle: "Circular economy",
        text: "Recovered materials and reusable assets return to productive applications.",
        icon: Waypoints,
      },
    ],
  },
  materials: {
    eyebrow: "Material Breakdown",
    title: "Inside a Lithium-Ion Cell: Critical Material Distribution",
    description:
      "Material composition from the deck shows where circular recovery drives the highest strategic value for clean-energy manufacturing.",
    chartLabel: "Critical battery minerals",
    minerals: [
      { name: "Graphite", value: 50 },
      { name: "Cobalt", value: 22 },
      { name: "Manganese", value: 14 },
      { name: "Nickel", value: 7 },
      { name: "Lithium", value: 7 },
    ],
    additionalComposition: [
      { name: "Copper", value: 8 },
      { name: "Aluminium", value: 9 },
      { name: "Steel", value: 10 },
      { name: "Black Mass", value: 50 },
      { name: "Others (Plastics, Electrolyte, etc.)", value: 22 },
    ],
  },
  technology: {
    eyebrow: "Indigenous Recycling Technology",
    title: "Integrated Mechanical + Hydrometallurgy Pipeline",
    description:
      "Elgreen's process pipeline combines controlled dismantling, mechanical treatment, and hydrometallurgical extraction for circular-grade output streams.",
    stages: [
      "Dismantling & Discharging",
      "Mechanical Treatment & Separation",
      "Leaching with mineral acids",
      "Precipitation of impurities",
      "Solvent extraction of Mn / Co / Ni",
      "Precipitation of Li salts",
    ],
    highlights: [
      "Zero hazardous air emissions through a non-pyro, no-burning process.",
      "Wet black mass extraction with zero material waste.",
      "Up to 99.3% purity for extracted lithium, cobalt, nickel, and manganese.",
      "Patent filed for proprietary process and machinery design.",
    ],
  },
  business: {
    eyebrow: "Business Process Map",
    title: "Hub & Spoke Operations with Software-Driven Traceability",
    description:
      "Collection, diagnostics, validation, regrouping, second-life, and recycling are orchestrated through an in-house asset-management platform.",
    sidePillars: [
      "Collection via HUB and SPOKE model in India",
      "Testing via in-house proprietary technology",
      "Process tracking on each step via in-house asset management software",
    ],
    steps: [
      { title: "Step 1", text: "Reverse logistics", icon: ArrowDownToLine },
      { title: "Step 2", text: "Incoming assessment", icon: Activity },
      { title: "Step 3", text: "Disassembly", icon: Boxes },
      { title: "Step 4", text: "Testing & validation", icon: ShieldCheck },
      { title: "Step 5", text: "Sorting and regrouping", icon: Gauge },
      { title: "Step 6", text: "2nd-life battery deployment", icon: PackageOpen },
      { title: "Step 7", text: "Recycling and metal extraction", icon: CircuitBoard },
    ],
  },
  impact: {
    eyebrow: "Elgreen ESG Impact",
    title: "Quantified Carbon and Water Advantages vs Traditional Systems",
    description:
      "Compared with traditional mining and refining, Elgreen's circular process can significantly reduce emissions and water usage per tonne of battery input.",
    metrics: [
      {
        label: "CO2 savings for material extraction",
        value: 52,
        suffix: "kg CO2e / kWh",
      },
      {
        label: "CO2 savings for battery reuse",
        value: 200,
        suffix: "kg CO2e / kWh",
      },
      {
        label: "Overall water reduction",
        value: 97,
        suffix: "%",
      },
    ],
    ghgComparison: [
      { name: "Mining baseline", value: 100 },
      { name: "Elgreen recycling", value: 46 },
    ],
    reuseComparison: [
      { name: "New pack baseline", value: 100 },
      { name: "Elgreen reuse", value: 3 },
    ],
  },
  future: {
    eyebrow: "Future Plans",
    title: "Cathode Manufacturing Pathway from Recycled Materials",
    description:
      "Elgreen's roadmap advances from recycling to cathode-grade integration, reducing cost dependency and delivering deep decarbonization in cell value chains.",
    comparisons: [
      {
        label: "Cell cost share from mined-material development",
        baseline: "61%",
        improved: "17%",
      },
      {
        label: "CO2 emissions from mining + electrode production",
        baseline: "55% of total CO2 footprint",
        improved: "Up to 5X reduction with sustainably recycled materials",
      },
    ],
    processLabels: ["Electrode Production", "Cell Assembly", "Formation & Finishing"],
  },
  team: {
    eyebrow: "Leadership & Team",
    title: "Experienced Operators Across Technology, Plant, and Finance",
    description:
      "Cross-functional leadership with deep expertise in lithium-ion technology, industrial operations, scale manufacturing, and finance.",
    members: [
      {
        name: "Ramneek Chopra",
        role: "CEO and Director",
        bio: "Serial entrepreneur with 20+ years building high-growth startups, and Director at Vertel Infotel.",
      },
      {
        name: "Dr. Krati Chopra",
        role: "COO",
        bio: "Expert in lithium-ion technology, cell development, advanced materials characterisation, and battery recycling material recovery.",
      },
      {
        name: "Prashant Pant",
        role: "General Manager, Plant Operations",
        bio: "13+ years of experience. Ex Thyssenkrupp, Ex M&M, Ex Tata Steel, Ex Jindal, Ex CK Birla Group.",
      },
      {
        name: "Pankaj Chaudhary",
        role: "General Manager, Finance",
        bio: "Seasoned finance professional with 17+ years across multimodal logistics, manufacturing, and real estate.",
      },
    ],
    teammates: "+15 Amazing Teammates",
  },
  legal: {
    eyebrow: "Company Legal Details",
    title: "Registered Entity Information",
    company: "Elgreen Metex Private Limited",
    incorporated: "20 October 2022",
    location: "Gautam Buddha Nagar, Uttar Pradesh",
    authorizedCapital: "₹1 Cr",
    paidUpCapital: "₹50 Lakhs",
    directors: ["Ramneek Mohan Chopra", "Jagdish Prashad Sharma"],
  },
  contact: {
    eyebrow: "Partnerships & Investor Conversations",
    title: "Build Circular Battery Infrastructure with Elgreen Metex",
    description:
      "Reach out for strategic partnerships, recycling collaboration, OEM integration, and long-term circular supply agreements.",
    buttonLabel: "Send Inquiry",
    successMessage: "Thanks for reaching out. The Elgreen team will contact you shortly.",
    errorMessage: "Something went wrong while sending your message. Please try again.",
  },
  footer: {
    statement: "If we don't recycle, it will be huge waste.",
    sdg: ["Climate Action", "Life on Land", "Sustainable Cities", "Affordable Clean Energy", "Responsible Consumption"],
  },
} as const;

