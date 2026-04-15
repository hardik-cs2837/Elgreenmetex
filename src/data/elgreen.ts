import {
  Atom,
  BatteryCharging,
  CircleDashed,
  Factory,
  FlaskConical,
  Gauge,
  Leaf,
  Recycle,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#technology", label: "Technology" },
  { href: "#impact", label: "Impact" },
  { href: "#business", label: "Business Model" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export const heroStats = [
  { label: "Material Recovery", value: 95, suffix: "%" },
  { label: "Water Savings", value: 97, suffix: "%" },
  { label: "CO2 Reduction", value: 5, suffix: "X" },
];

export const timelineData = [
  { year: "2021", title: "Waste Challenge Identified", text: "Scale of battery waste and mineral insecurity became impossible to ignore." },
  { year: "2022", title: "Elgreen Metex Founded", text: "Built to close the battery loop with science-led recycling and recovery." },
  { year: "2024", title: "Technology Pilot Validation", text: "Validated high-yield recovery and low-emission process engineering." },
  { year: "2026", title: "Hub & Spoke Expansion", text: "Scaling regional collection and centralized recovery to serve India’s EV transition." },
];

export const ecosystemSteps = [
  { title: "Raw Material Extraction", text: "Primary ores fuel battery supply but strain resources.", icon: Atom },
  { title: "Refining", text: "Critical metals are refined into battery-grade compounds.", icon: FlaskConical },
  { title: "Manufacturing", text: "Cell manufacturers produce packs for mobility and storage.", icon: Factory },
  { title: "Usage", text: "Batteries power EVs and energy systems across their first life.", icon: BatteryCharging },
  { title: "Collection", text: "Used and end-of-life batteries are aggregated through partners.", icon: Truck },
  { title: "Sorting", text: "Chemistry and health diagnostics route batteries correctly.", icon: CircleDashed },
  { title: "Recycling", text: "Advanced process recovers high-value critical materials.", icon: Recycle },
  { title: "Second Life", text: "Recovered materials and viable packs return to productive use.", icon: Zap },
];

export const processPipeline = [
  "Discharging",
  "Mechanical Separation",
  "Hydrometallurgy",
  "High-Purity Extraction",
];

export const materialComposition = [
  { name: "Lithium", value: 22 },
  { name: "Nickel", value: 26 },
  { name: "Cobalt", value: 15 },
  { name: "Manganese", value: 14 },
  { name: "Graphite", value: 18 },
  { name: "Others", value: 5 },
];

export const impactMetrics = [
  { label: "Water Reduction", value: 97, suffix: "%" },
  { label: "CO2 Saved per kWh", value: 52, suffix: "kg" },
  { label: "Reuse CO2 Savings", value: 200, suffix: "kg" },
];

export const impactTrend = [
  { phase: "Collection", savings: 12 },
  { phase: "Sorting", savings: 21 },
  { phase: "Recovery", savings: 38 },
  { phase: "Reuse", savings: 57 },
  { phase: "Closed Loop", savings: 76 },
];

export const businessFlow = [
  { title: "Collection", text: "Distributed spoke network aggregates spent batteries.", icon: Truck },
  { title: "Processing", text: "Central hubs execute diagnostics and chemistry-based processing.", icon: Gauge },
  { title: "Recovery", text: "Critical minerals are recovered and purified for battery reuse.", icon: ShieldCheck },
  { title: "Resale", text: "Recovered materials re-enter battery and clean-tech manufacturing.", icon: Leaf },
];

export const teamMembers = [
  { role: "Chief Executive Officer", name: "Aarav Menon", focus: "Circular strategy, partnerships, and growth execution." },
  { role: "Chief Operating Officer", name: "Niharika Rao", focus: "Operations architecture, process quality, and scale readiness." },
  { role: "Head of Finance", name: "Ritvik Sharma", focus: "Capital planning, investor governance, and unit economics." },
  { role: "Head of Operations", name: "Devansh Iyer", focus: "Collection, logistics orchestration, and throughput optimization." },
];
