/**
 * Structured content for STM MACHINERY.
 *
 * All copy here is rewritten from the verified content of the current website
 * (stm-machinery.ae). No technical specifications, model numbers, certifications,
 * client names or unverified claims are included. STM's role is described as a
 * supplier that sources, supplies, coordinates installation and provides
 * after-sales support — not as a manufacturer or in-house engineering firm.
 *
 * See CONTENT_REVIEW.md for the full audit of what was changed and why.
 */

export type ProductCategory = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  items: string[];
  applications: string[];
  industries: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "cnc-and-precision-machinery",
    name: "CNC & Precision Machinery",
    tagline: "Precision machining for modern manufacturing",
    intro:
      "We supply CNC and precision machining equipment for workshops and production facilities that need accuracy, repeatability and higher throughput. We help clients identify machines suited to their parts, tolerances and volumes, and coordinate supply from established manufacturers.",
    items: [
      "CNC turning machines",
      "CNC milling machines",
      "Vertical and horizontal machining centres",
      "3-axis, 4-axis and 5-axis machines",
      "Turn-mill and multi-tasking machines",
      "Grinding, cutting and finishing machines",
      "Production automation and robotic systems",
      "Tooling, fixtures and machine accessories",
    ],
    applications: [
      "High-precision component production",
      "Complex geometry and multi-face machining",
      "Higher-volume and automated production",
      "Consistent, repeatable output",
    ],
    industries: ["Manufacturing & fabrication", "Automotive", "Aerospace", "Engineering & contracting"],
  },
  {
    slug: "power-generation-and-distribution",
    name: "Power Generation & Distribution Equipment",
    tagline: "Reliable power for industrial applications",
    intro:
      "We supply equipment for power generation, transmission and distribution in industrial settings. We assist clients in identifying suitable equipment for their capacity and site requirements and coordinate procurement.",
    items: [
      "Industrial generators",
      "Transformers",
      "Switchgear systems",
      "Transmission and distribution components",
      "Electrical testing equipment",
      "Energy monitoring and safety devices",
    ],
    applications: [
      "On-site power generation",
      "Power transmission and distribution",
      "Electrical safety and monitoring",
    ],
    industries: ["Energy & power generation", "Oil & gas", "Industrial plants", "Government & infrastructure"],
  },
  {
    slug: "oil-gas-and-drilling-equipment",
    name: "Oil, Gas & Drilling Equipment",
    tagline: "Machinery for demanding oilfield operations",
    intro:
      "We supply and source machinery and equipment for oil and gas operations, including drilling and related field equipment. We support procurement for demanding operating environments and coordinate supply of spare parts and consumables.",
    items: [
      "Drilling rigs and components",
      "Downhole tools",
      "Pumps, compressors and engines",
      "High-pressure valves",
      "Explosion-proof equipment",
      "Rig spare parts and consumables",
    ],
    applications: [
      "Drilling and field operations",
      "High-pressure and hazardous-area equipment",
      "Rig maintenance and spares",
    ],
    industries: ["Oil & gas", "Energy & power generation", "Industrial plants"],
  },
  {
    slug: "pumps-valves-and-engines",
    name: "Pumps, Valves & Engines",
    tagline: "Mechanical components for continuous operations",
    intro:
      "We supply a wide range of mechanical components essential to industrial plants and process operations. We source pumps, valves, engines and related parts to match client duty and service requirements.",
    // NOTE: original site duplicated the Power Generation list here in error.
    // Corrected to the products this category actually covers.
    items: [
      "Industrial pumps",
      "Process and control valves",
      "High-pressure valves",
      "Industrial engines",
      "Compressors",
      "Seals, gaskets and mechanical spares",
    ],
    applications: [
      "Fluid handling and process operations",
      "Continuous and heavy-duty service",
      "Replacement and maintenance parts",
    ],
    industries: ["Oil & gas", "Industrial plants", "Manufacturing & fabrication", "Energy & power generation"],
  },
  {
    slug: "medical-and-surgical-equipment",
    name: "Medical & Surgical Equipment",
    tagline: "Equipment for healthcare facilities",
    intro:
      "We supply medical and surgical equipment sourced from established manufacturers, supporting healthcare facilities and laboratories in identifying and procuring suitable equipment.",
    items: [
      "Surgical instruments",
      "Medical imaging technology",
      "Hospital machinery",
      "Laboratory equipment",
    ],
    applications: [
      "Hospital and clinic equipping",
      "Diagnostic and imaging facilities",
      "Laboratory setup",
    ],
    industries: ["Medical & healthcare", "Government & infrastructure"],
  },
  {
    slug: "agricultural-machinery",
    name: "Agricultural Machinery",
    tagline: "Machinery and parts for agricultural operations",
    intro:
      "We supply machinery and spare parts for agricultural operations, from field equipment to farm engines, and support clients in sourcing replacement parts.",
    items: [
      "Tractors",
      "Harvesting machines",
      "Soil preparation equipment",
      "Farm engines and spare parts",
    ],
    applications: [
      "Field cultivation and harvesting",
      "Farm mechanisation",
      "Equipment maintenance and spares",
    ],
    industries: ["Agriculture & food production", "Industrial plants"],
  },
  {
    slug: "industrial-plant-equipment",
    name: "Industrial Plant Equipment",
    tagline: "Equipment for factories and production lines",
    intro:
      "We supply machinery and equipment for industrial plants and production lines, and help clients specify and source equipment for new or expanding facilities.",
    items: [
      "Conveyor systems",
      "Production lines",
      "Packaging machines",
      "Material handling equipment",
      "Press and cutting machines",
    ],
    applications: [
      "Production line setup and expansion",
      "Material handling and logistics",
      "Packaging and finishing",
    ],
    industries: ["Manufacturing & fabrication", "Construction materials", "Industrial plants", "Agriculture & food production"],
  },
  {
    slug: "spare-parts",
    name: "Machinery & Engine Spare Parts",
    tagline: "Parts to keep equipment running",
    intro:
      "We source and supply machinery and engine spare parts across the categories we serve. Share the make, model or part reference and we will help identify and procure the right components.",
    items: [
      "Machinery spare parts",
      "Engine spare parts",
      "Consumables and wear parts",
      "Seals, bearings and fittings",
    ],
    applications: [
      "Planned maintenance and repairs",
      "Breakdown and replacement parts",
      "Consumables resupply",
    ],
    industries: ["All sectors we serve"],
  },
];

export type Industry = {
  slug: string;
  name: string;
};

export const industries: Industry[] = [
  { slug: "aerospace", name: "Aerospace" },
  { slug: "automotive", name: "Automotive" },
  { slug: "oil-and-gas", name: "Oil & Gas" },
  { slug: "energy-power-generation", name: "Energy & Power Generation" },
  { slug: "medical-healthcare", name: "Medical & Healthcare" },
  { slug: "agriculture-food", name: "Agriculture & Food Production" },
  { slug: "manufacturing-fabrication", name: "Manufacturing & Fabrication" },
  { slug: "engineering-contracting", name: "Engineering & Contracting" },
  { slug: "construction-materials", name: "Construction Materials" },
  { slug: "industrial-plants", name: "Industrial Plants" },
  { slug: "trading-companies", name: "Trading Companies" },
  { slug: "government-infrastructure", name: "Government & Infrastructure" },
];

export type FactoryStage = {
  step: string;
  name: string;
  description: string;
};

// "Factory From A–Z" — worded as procurement and coordination support.
// STM supplies, sources, coordinates installation and provides after-sales;
// regulated engineering/design/commissioning is described as coordinated,
// partner-supported and subject to project scope.
export const factoryStages: FactoryStage[] = [
  {
    step: "01",
    name: "Requirement assessment",
    description:
      "We work with you to understand your production goals, capacity needs and site constraints before any equipment is specified.",
  },
  {
    step: "02",
    name: "Equipment identification",
    description:
      "We help identify the machinery and equipment suited to your process, tolerances and output targets.",
  },
  {
    step: "03",
    name: "Supplier sourcing",
    description:
      "We source equipment from established manufacturers and coordinate commercial and technical details on your behalf.",
  },
  {
    step: "04",
    name: "Machinery & spare-parts procurement",
    description:
      "We coordinate procurement of machinery and the spare parts needed to keep it running from day one.",
  },
  {
    step: "05",
    name: "Shipment & documentation",
    description:
      "We coordinate shipment and supporting documentation to move equipment to your site.",
  },
  {
    step: "06",
    name: "Installation coordination",
    description:
      "We coordinate installation and, where required, work with specialist partners for integration, subject to project scope.",
  },
  {
    step: "07",
    name: "After-sales support",
    description:
      "We support you after delivery with spare parts, maintenance planning and technical coordination.",
  },
];

export type Service = {
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "Spare-parts supply",
    description: "Sourcing and supply of machinery and engine spare parts, consumables and wear parts.",
  },
  {
    name: "Preventive maintenance",
    description: "Planned maintenance coordination to reduce unplanned downtime and extend equipment life.",
  },
  {
    name: "Installation coordination",
    description: "Coordination of mechanical installation and integration, with specialist partners where required.",
  },
  {
    name: "Troubleshooting & diagnostics",
    description: "Support in diagnosing issues and identifying the parts or intervention needed.",
  },
  {
    name: "Machine upgrades & retrofitting",
    description: "Coordination of upgrades and retrofits to improve capability or extend service life.",
  },
  {
    name: "Technical support",
    description: "On-site and remote technical support coordination, subject to scope and availability.",
  },
];

// Reasons to work with STM — grounded, no unverifiable superlatives.
export const whyStm: { title: string; description: string }[] = [
  {
    title: "One supplier, many sectors",
    description:
      "A single point of contact for machinery and equipment across manufacturing, energy, oil & gas, medical, agriculture and more.",
  },
  {
    title: "Procurement-focused approach",
    description:
      "We help you specify, source and procure the right equipment rather than pushing a fixed catalogue.",
  },
  {
    title: "Factory from A–Z",
    description:
      "Support across the full journey — from requirement assessment to installation coordination and after-sales.",
  },
  {
    title: "After-sales & spares",
    description:
      "Ongoing support with spare parts, maintenance planning and technical coordination after delivery.",
  },
];
