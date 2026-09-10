// Project Data for Y2R HEIGHTS - Strictly verified factual information
import lowerGroundMap from '../assets/LowerGround.png';
import upperGroundMap from '../assets/UpperGround.png';
import firstFloorMap from '../assets/FirstFlor.png';
import secondFloorMap from '../assets/SecondFlor.png';
import serviceFloorMap from '../assets/ServiceFlor.png';
import studioFloorMap from '../assets/3to7.png';
import terraceFloorMap from '../assets/TericeFlor.png';

// Photographic Assets
import highStreetImg from '../assets/height Street retail.png';
import boutiqueImg from '../assets/Boutique1.jpg';
import commercialHallImg from '../assets/Commercial hall.jpg';
import banquetHallImg from '../assets/Banwuet hall.png';
import foodCourtImg from '../assets/Food&bal.png';
import studioImg from '../assets/Studio.jpg';
import parkingImg from '../assets/Parking.png';
import car18Img from '../assets/18Car.png';
import car22Img from '../assets/22Car.png';
import rooftopSpaceImg from '../assets/Rooftof Space.png';

export const PROJECT_INFO = {
  name: "Y2R HEIGHTS",
  tagline: "Where Vision Meets Value.",
  motto: "Rise Where the World Takes Notice.",
  positioning: "A landmark commercial tower crafted for businesses that demand more — more visibility, more functionality, more stature.",
  subtitle: "Premium Retail, Office, Studio Apartments & Food Court Spaces",
  locationShort: "Engineering College Crossing, Kursi Road | Jankipuram Extension, Lucknow",
  structure: "G+8 Structure (11-Storey Marvel with Double Basement)",
  elevators: "Six (6) High-Speed Elevators",
  launchDate: "29th Sep. 2025",
  reraNumber: "UPRERAPRJ428241/01/2026",
  reraWebsite: "www.up-rera.in/projects",
  tollFree: "1800 890 8351",
  phones: ["9235742750", "91947 06137"],
  email: "y2rheightspvt@gmail.com",
  website: "www.y2rheightspvt.in",
  siteOffice: "CP-02, Main Kursi Road, Lucknow – 226021",
  registeredOffice: "Jhaliyan Purva, Vineet Khand-2, Gomti Nagar, Lucknow – 226010",
  approvedBy: {
    name: "Canara Bank",
    badge: "Project Approved by Canara Bank"
  },
  bankAccount: {
    name: "Y2R Heights Pvt Ltd Collection Account",
    accountNumber: "120035648899",
    bank: "Canara Bank",
    branch: "Mohanlalganj",
    ifsc: "CNBR0018502",
    note: "All payment shall be deposited in the collection account only"
  }
};

export const SPACES_CATEGORIES = [
  {
    id: "retail",
    slug: "/retail",
    title: "Premium Retail Spaces",
    shortTitle: "Retail Spaces",
    tagline: "Made for Brands That Want to Be Seen.",
    description: "Premium retail spaces with efficient layouts, strong frontage and high visibility. From flagship stores and boutiques to cafés, restaurants, salons and wellness concepts, Y2R Heights offers spaces designed to strengthen your brand presence and simplify day-to-day operations.",
    highlight: "More Visibility. More Possibility.",
    features: [
      "High Frontage & Prominent Road Visibility (60M & 18M Roads)",
      "Lower Ground & Upper Ground Retail Levels",
      "Wide Pedestrian Walkways & Grand Arrival Promenade",
      "Dedicated Loading & Service Utility Provisions",
      "Ideal for Flagships, Boutiques, Salons & Dining"
    ],
    image: highStreetImg,
    badge: "LGF & UGF",
    ctaText: "Explore Retail Spaces",
    floorPlanSlug: "/floor-plans/ugf"
  },
  {
    id: "offices",
    slug: "/offices",
    title: "Boutique Offices",
    shortTitle: "Boutique Offices",
    tagline: "More Than Just an Office. A Statement.",
    description: "Workspaces designed around productivity, flexibility and a premium business experience. Y2R Heights offers flexible, self-contained office units complete with individual bathrooms, 100% Vastu compliance, and double-glazed glass façades—suited to founders, consultants, medical practitioners, family offices, and growing businesses.",
    highlight: "100% Vastu Compliant • Individual Bathrooms • Natural Light",
    features: [
      "Flexible Self-Contained Units with Individual Bathrooms",
      "100% Vastu Compliant Office Planning",
      "Double-Glazed Glass Façade with High-Clearance Ceilings",
      "Curated Valet Service & 24x7 Multi-Tier Security",
      "Ideal for Founders, Consultants, Clinics & Corporate Firms"
    ],
    image: boutiqueImg,
    badge: "1st & Commercial Floors",
    ctaText: "Explore Office Spaces",
    floorPlanSlug: "/floor-plans/1st"
  },
  {
    id: "studios",
    slug: "/studios",
    title: "Studio Apartments",
    shortTitle: "Studio Apartments",
    tagline: "Smart Spaces for Modern Living.",
    description: "Thoughtfully planned studio apartments combining contemporary design, functionality and everyday convenience. Situated on the 3rd to 7th floors, each self-contained suite includes private open balconies, modular kitchenettes, Grohe/Jaquar/Roca fittings, and dedicated access control.",
    highlight: "Contemporary Design • 3rd to 7th Floors • Prime Convenience",
    features: [
      "Located on 3rd to 7th Dedicated Residential Floors",
      "Smart Self-Contained Suites with Private Balconies",
      "Ideal for Urban Professionals, Executives & Travellers",
      "Panoramic Views of Jankipuram Extension Skyline",
      "Dedicated High-Speed Resident Elevators & Intercom"
    ],
    image: studioImg,
    badge: "3rd to 7th Floors",
    ctaText: "Explore Studio Apartments",
    floorPlanSlug: "/floor-plans/3to7"
  },
  {
    id: "food-court",
    slug: "/food-court",
    title: "Food Court & Dining",
    shortTitle: "Food Court",
    tagline: "Where Every Craving Finds Its Place.",
    description: "A vibrant culinary destination created for modern F&B brands. Generous counter frontage, planned circulation, dedicated kitchen exhaust shafts, grease traps, and communal seating create an environment designed to serve both customers and operators efficiently.",
    highlight: "QSR • Café • Desserts • Regional Cuisine • Dining Concepts",
    features: [
      "Generous Brand Counter Frontages & Dedicated Kitchen Stalls",
      "Heavy Exhaust Shafts & Specialized Kitchen Supply Risers",
      "4000mm Wide Spacious Communal Seating Concourse",
      "Direct Visual Link to Retail & Banquet Levels",
      "High-Turnaround Dining Hub for Shoppers & Executives"
    ],
    image: foodCourtImg,
    badge: "Service & Dining Floor",
    ctaText: "Explore F&B Spaces",
    floorPlanSlug: "/floor-plans/service"
  },
  {
    id: "banquet",
    slug: "/banquet",
    title: "Banquet & Commercial Spaces",
    shortTitle: "Banquet & Commercial",
    tagline: "Expansive Formats for Grand Milestones.",
    description: "Spanning 620.22 SQ.M. on the dedicated Second Floor, this expansive column-free banquet hall features a grand pre-function foyer, dedicated backstage catering access, and acoustic treatment for large corporate summits, celebrations, and hospitality ventures.",
    highlight: "620.22 SQ.M. • Column-Free • Second Floor • Hospitality Ready",
    features: [
      "Expansive 620.22 SQ.M. Column-Free Event Space",
      "Dedicated Pre-Function Welcome Foyer & Lounge",
      "Separate Backstage Catering & Service Entry",
      "Acoustic Ceiling Treatment & Decorative Gypsum Lighting",
      "VIP Arrival Staging & Dedicated Guest Elevators"
    ],
    image: banquetHallImg,
    badge: "2nd Floor (620.22 SQ.M.)",
    ctaText: "Explore Banquet Spaces",
    floorPlanSlug: "/floor-plans/2nd"
  },
  {
    id: "parking",
    slug: "/floor-plans",
    title: "Double Basement Parking",
    shortTitle: "Basement Parking",
    tagline: "Effortless Vehicular Arrival with 40+ Bays.",
    description: "Secure, dual subterranean ramps engineered for smooth two-way vehicular flow (18 bays in B1 and 22 bays in B2), EV charging provisions, and 24/7 CCTV surveillance.",
    highlight: "Dual Subterranean Tiers • 40+ Vehicle Bays • EV Charging",
    features: [
      "Dual Subterranean Ramps (B1 - 18 Cars, B2 - 22 Cars)",
      "Dedicated 40+ Vehicle Parking Bays",
      "Dedicated EV Charging Infrastructure",
      "24/7 CCTV Surveillance & Boom Barrier Ingress",
      "Direct High-Speed Elevator Lobby Access"
    ],
    image: parkingImg,
    badge: "B1 (18 Cars) & B2 (22 Cars)",
    ctaText: "Explore Parking Plan"
  }
];

export const CONNECTIVITY_DATA = [
  { destination: "Kursi Road", time: "0 Min", distance: "Direct Access", type: "Immediate" },
  { destination: "City Montessori School", time: "1 Min", distance: "0.5 km", type: "Education" },
  { destination: "Vikas Nagar", time: "2 Mins", distance: "1.2 km", type: "Neighbourhood" },
  { destination: "Sitapur Road", time: "5 Mins", distance: "3.5 km", type: "Arterial Corridor" },
  { destination: "Science City", time: "5 Mins", distance: "2.8 km", type: "Landmark" },
  { destination: "IET Engg. College", time: "5 Mins", distance: "3.0 km", type: "Institute" },
  { destination: "Community Health Centre", time: "5 Mins", distance: "2.5 km", type: "Healthcare" },
  { destination: "Savitri Trust Care Hospital", time: "5 Mins", distance: "3.2 km", type: "Hospital" },
  { destination: "Genesis Club", time: "5 Mins", distance: "3.0 km", type: "Hospitality" },
  { destination: "Outer Ring Road", time: "7 Mins", distance: "4.8 km", type: "Express Corridor" },
  { destination: "Sports College", time: "7 Mins", distance: "4.5 km", type: "Sports Hub" },
  { destination: "Indira Nagar", time: "10 Mins", distance: "6.5 km", type: "Commercial Hub" },
  { destination: "Integral University", time: "10 Mins", distance: "7.0 km", type: "University" },
  { destination: "Gomti Nagar", time: "15 Mins", distance: "9.5 km", type: "Prime City Centre" },
  { destination: "Radisson Hotel", time: "15 Mins", distance: "10 km", type: "5-Star Hotel" },
  { destination: "SS Grand", time: "15 Mins", distance: "10 km", type: "Hotel" },
  { destination: "Shaheed Path", time: "20 Mins", distance: "14 km", type: "Highway Ring" }
];

export const VICINITY_LANDMARKS = {
  connectivity: [
    { name: "Kursi Road", time: "0 Mins", type: "Immediate Arterial Frontage" },
    { name: "Vikas Nagar", time: "2 Mins", type: "Neighbourhood Commercial Hub" },
    { name: "Sitapur Road", time: "5 Mins", type: "Primary Highway Corridor" },
    { name: "Outer Ring Road", time: "7 Mins", type: "Express Bypass Highway" },
    { name: "Indira Nagar", time: "10 Mins", type: "Established Commercial District" },
    { name: "Gomti Nagar", time: "15 Mins", type: "Prime Central Business District" },
    { name: "Shaheed Path", time: "20 Mins", type: "Airport & Stadium Transit Ring" }
  ],
  education: [
    { name: "City Montessori School (CMS)", time: "1 Min", type: "Premier School" },
    { name: "Science City", time: "5 Mins", type: "Scientific & Educational Center" },
    { name: "IET Engineering College", time: "5 Mins", type: "Top Engineering Institute" },
    { name: "Guru Gobind Singh Sports College", time: "7 Mins", type: "State Sports Complex" },
    { name: "Integral University", time: "10 Mins", type: "Renowned University Campus" }
  ],
  hospitality: [
    { name: "Genesis Club", time: "5 Mins", type: "Exclusive Lifestyle Club" },
    { name: "Radisson Hotel", time: "15 Mins", type: "5-Star Luxury Hospitality" },
    { name: "SS Grand", time: "15 Mins", type: "Premium Banquet & Hotel" }
  ],
  healthcare: [
    { name: "Community Health Centre", time: "5 Mins", type: "Public Health Facility" },
    { name: "Savitri Trust Care Hospital", time: "5 Mins", type: "Multi-Specialty Healthcare" }
  ]
};

export const PROJECT_SPECIFICATIONS = {
  structure: {
    category: "Structure & Foundations",
    items: [
      { label: "Foundations", value: "RCC raft foundations at a depth of 1.5M with a bearing capacity of 1.391kg/cm². Pile foundation can be considered after carrying a load test of an 12M pile at the site." },
      { label: "Structure", value: "RCC column, beam, and shearwall framed structure confirming to BIS code for earthquake resistance." }
    ]
  },
  retail: {
    category: "Retail Floors (Ground & First Floors)",
    items: [
      { label: "Flooring", value: "Heavy-duty large format vitrified tiles or polished stone flooring suitable for high traffic retail use" },
      { label: "Walls", value: "Plastered finish, ready for tenant fit-out (Oil Bound Distemper or primer coat)" },
      { label: "Ceiling", value: "Exposed slab or simple plaster finish, ready for tenant fit-out (Oil Bound Distemper)" },
      { label: "Wet Points", value: "Provision for water inlet and outlet in designated areas" },
      { label: "Toilets", value: "Antiskid vitrified tiles on the floor, vitrified wall tiles up to false ceiling level. Premium quality sanitaryware" }
    ]
  },
  banquet: {
    category: "Banquet Floor (Second Floor)",
    area: "620.22 SQ.M.",
    items: [
      { label: "Main Hall Flooring", value: "Superior quality vitrified tiles of minimum 1200x600 size or marble" },
      { label: "Wall Finishes", value: "Acrylic emulsion on POP punning; Feature walls with textured paint or cladding" },
      { label: "Ceiling", value: "Decorative gypsum false ceiling with integrated lighting and acoustic treatment" },
      { label: "Service Areas", value: "Antiskid vitrified tiles, Acrylic emulsion paint on walls" },
      { label: "Toilets", value: "Granite counter, Premium quality sanitaryware and CP fittings (Grohe/Jaquar/Roca or equivalent). False ceiling with oil bound distemper" }
    ]
  },
  serviceApartments: {
    category: "Service Apartments (3rd to 7th Floors)",
    livingDining: [
      { label: "Flooring / Skirting", value: "Vitrified Tile - 1200x600" },
      { label: "Wall Finishes", value: "Acrylic emulsion on POP punning" },
      { label: "Ceiling", value: "Oil Bound Distemper" }
    ],
    toilet: [
      { label: "Toilet Finishes", value: "Antiskid vitrified tiles. Vitrified wall tiles up to false ceiling level. Granite counter, Oil bound distemper with false ceiling" },
      { label: "Sanitaryware & Fittings", value: "Premium quality range, Grohe/Jaquar/Roca or equivalent single lever fittings in all toilets" }
    ]
  },
  commonAreas: {
    category: "Common Areas",
    table: [
      { area: "Entrance Lobby (Ground Floor)", flooring: "Granite", wallFinish: "Acrylic emulsion paint and cladding of vitrified tiles", ceiling: "Gypsum false ceiling with acrylic emulsion paint" },
      { area: "Lift Lobby (Typical Floor)", flooring: "Granite", wallFinish: "Granite cladding", ceiling: "Armstrong false ceiling with acrylic emulsion paint" },
      { area: "Ramps & Basement", flooring: "Antiskid ceramic tiles, 12mm", wallFinish: "Oil bound distemper over punning", ceiling: "Cement plaster & white dry distemper" },
      { area: "Staircase (Main)", flooring: "Granite", wallFinish: "Acrylic emulsion paint", ceiling: "Oil bound distemper" },
      { area: "Staircase (Fire)", flooring: "Granite", wallFinish: "Acrylic emulsion paint", ceiling: "Oil bound distemper" }
    ],
    railing: "MS Railing (Staircase)",
    lifts: "Two (2) passengers lifts @ 10 passengers each"
  },
  doorsWindows: {
    category: "Doors & Windows",
    items: [
      { label: "Doors", value: "Engineered laminated frame (WPC) with laminated door shutters, 35MM thick commercial board with phenol formaldehyde" },
      { label: "Hardware", value: "Locks, handles, and knobs (mortise and cylindrical locks) from reputed makes and brands. High quality steel/brass hardware, Floor springs/hinges with ball bearings" },
      { label: "Windows", value: "Powder coated aluminium frame or UPVC frame windows with clear float glass" }
    ]
  },
  mep: {
    category: "Electrical & MEP",
    items: [
      { label: "Fixtures & Fittings", value: "ISI mark switches/sockets, distribution boxes, and circuit breakers from standard makes and brands" },
      { label: "Wiring", value: "ISI mark conduits PVC/Steel with copper wires concealed in RCC slabs" },
      { label: "Plumbing", value: "ISI mark CPVC water supply pipes with standard valves and accessories. C PVC pipes for external sewerage & waste water" },
      { label: "EV Charging", value: "Provision for EV charging" },
      { label: "Security System", value: "CCTV and electronic surveillance would be provided with internal communication system" }
    ]
  },
  disclaimer: "The above specifications are indicative and may be changed in consultation with the Architect. The company reserves the right to provide equivalent finishes/fittings and fixtures."
};

export const AMENITIES_LIST = [
  {
    icon: "DoorOpen",
    title: "Grand Entrance Lobby",
    description: "Triple-height arrival experience featuring polished architectural accents and reception desk.",
    image: "https://img.magnific.com/free-photo/modern-luxury-hotel-office-reception-lounge-with-meeting-room_105762-1772.jpg?semt=ais_hybrid&w=740&q=80",
    badge: "Triple Height",
    tag: "Arrival Foyer"
  },
  {
    icon: "Building2",
    title: "Modern Glass Façade",
    description: "Energy-efficient structural glazing offering panoramic sightlines and high aesthetic presence.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    badge: "Energy Rated",
    tag: "Façade"
  },
  {
    icon: "MoveUp",
    title: "High-Speed Elevators",
    description: "State-of-the-art vertical transit elevators for seamless connectivity between retail and residences.",
    image: "https://5.imimg.com/data5/MC/BJ/MY-10715304/high-speed-elevators.jpg",
    badge: "Rapid Transit",
    tag: "Vertical Access"
  },
  {
    icon: "Car",
    title: "Dedicated Parking",
    description: "Two dedicated basement parking tiers ensuring structured arrival for patrons and occupants.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800&auto=format&fit=crop",
    badge: "40+ Vehicles",
    tag: "Dual Basement"
  },
  {
    icon: "ShieldCheck",
    title: "24×7 Security",
    description: "Round-the-clock trained security personnel, access control points, and perimeter safety.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
    badge: "Manned 24/7",
    tag: "Access Control"
  },
  {
    icon: "Camera",
    title: "CCTV Surveillance",
    description: "Comprehensive high-definition digital surveillance covering all common zones and corridors.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop",
    badge: "HD Matrix",
    tag: "Surveillance"
  },
  {
    icon: "Zap",
    title: "EV Charging Provision",
    description: "Modern electric vehicle charging infrastructure ready for sustainable contemporary mobility.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop",
    badge: "Fast Charging",
    tag: "Green Tech"
  },
  {
    icon: "Sparkles",
    title: "Premium Common Areas",
    description: "Elegantly finished hallways, ambient lighting, high-spec washrooms and landscaped seating.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    badge: "Luxury Foyer",
    tag: "Public Spaces"
  }
];

export const ARRIVAL_FEATURES = [
  {
    id: "parking",
    level: "Convenient Parking",
    capacity: "Dual Basements (40+ Bays)",
    badge: "Basement 1 & 2",
    description: "Dedicated dual subterranean tiers with 40+ marked bays, EV charging docks, and automated boom barriers.",
    specs: ["40+ Marked Bays", "Dual Basements", "EV Ready"],
    image: parkingImg,
    icon: "car",
    slug: "/arrival/parking",
    tagline: "Effortless Subterranean Parking with 40+ Marked Bays & EV Infrastructure.",
    longDescription: "Engineered specifically to eliminate parking congestion along the bustling Kursi Road commercial corridor, Y2R Heights offers two full levels of secure, well-illuminated subterranean parking. With generous entry ramp gradients, dedicated marked bays for 40+ vehicles, and direct high-speed lift lobby connectivity, parking is swift and hassle-free for visitors and occupants alike.",
    highlights: [
      "Dedicated 40+ Marked Four-Wheeler Parking Bays Across 2 Levels",
      "Basement 1 (18 Bays) & Basement 2 (22 Bays) with Wide Aisle Clearance",
      "Dedicated EV Fast-Charging Stations for Modern Electric Vehicles",
      "24/7 Automated Boom Barriers & High-Definition CCTV Surveillance",
      "Direct High-Speed Elevator Lobby Connectivity to All Commercial Levels"
    ],
    techSpecs: [
      { label: "Total Capacity", value: "40+ Four-Wheeler Bays" },
      { label: "Parking Levels", value: "Basement 1 & Basement 2" },
      { label: "Ramp Ingress", value: "Two-Way Anti-Skid Slopes" },
      { label: "EV Infrastructure", value: "Dedicated Charging Points" },
      { label: "Security", value: "Automated Barrier & 24x7 CCTV" },
      { label: "Vertical Transit", value: "Direct Elevator Core Access" }
    ],
    floorPlanLink: "/floor-plans/b1"
  },
  {
    id: "pedestrian",
    level: "Easy Pedestrian Access",
    capacity: "Wide Walkway Promenade",
    badge: "Street Promenade",
    description: "Wide pedestrian-friendly boulevards connecting 60M and 18M main road frontages directly into the retail promenade.",
    specs: ["60M & 18M Frontage", "Barrier-Free", "Wide Boulevards"],
    image: foodCourtImg,
    icon: "footprints",
    slug: "/arrival/pedestrian",
    tagline: "Barrier-Free Promenades Connecting 60M & 18M Arterial Road Frontages.",
    longDescription: "Pedestrian circulation at Y2R Heights has been designed to maximize safety, footfall flow, and brand visibility. With wide, architecturally landscaped boulevards opening directly to Main Kursi Road and the 18M sector crossover, visitors enjoy zero-step, barrier-free walk-in access into double-height anchor showrooms, retail promenades, and the main arrival core.",
    highlights: [
      "Massive 3-Sides Open Corner Frontage on 60M & 18M Arterial Roads",
      "Wide Pedestrian Arrival Boulevards with Premium Architectural Paving",
      "Direct Barrier-Free Walk-In Access into Lower & Upper Ground Retail",
      "Dedicated Escalators & High-Capacity Elevators from Ground Level",
      "High-Visibility Streetfront Lighting & Illuminated Brand Signage"
    ],
    techSpecs: [
      { label: "Corner Orientation", value: "3-Sides Open Landmark Corner" },
      { label: "Road Widths", value: "60-Metre & 18-Metre Arterial Roads" },
      { label: "Walkway Format", value: "All-Weather Landscaped Concourse" },
      { label: "Retail Ingress", value: "Direct Double-Height Storefronts" },
      { label: "Accessibility", value: "100% Barrier-Free Ramps & Lifts" },
      { label: "Transit Links", value: "0 Min Kursi Rd | 8 Min Metro" }
    ],
    floorPlanLink: "/retail"
  },
  {
    id: "lobby",
    level: "Proper Lobby / Entrance",
    capacity: "6 High-Speed Elevators",
    badge: "Central Atrium",
    description: "Double-height welcome atrium featuring six high-speed elevators, 24/7 security reception, and smart access.",
    specs: ["6 High-Speed Lifts", "Grand Foyer", "Access Control"],
    image: rooftopSpaceImg,
    icon: "building",
    slug: "/arrival/lobby",
    tagline: "Stately Double-Height Atrium Powered by Six High-Speed Elevators.",
    longDescription: "The central arrival lobby at Y2R Heights sets an immediate tone of executive elegance and stature. Featuring a dramatic double-height ceiling, bespoke Italian marble flooring, and six dedicated high-speed elevators, vertical transit across all 11 floors is virtually instant, eliminating wait times during peak morning and evening commercial rush hours.",
    highlights: [
      "Grand Double-Height Welcome Foyer with Luxury Stone & Brass Finishes",
      "Six (6) Dedicated High-Speed Passenger & Service Elevators",
      "Dedicated Corporate Reception Desk & Concierge Visitor Management",
      "Smart Turnstile & Biometric Access Control for Commercial Suites",
      "Acoustically Insulated Double-Glazed Glass Façade for Quiet Ambience"
    ],
    techSpecs: [
      { label: "Elevator Fleet", value: "6 High-Speed Transit Lifts" },
      { label: "Atrium Ceiling", value: "Double-Height Grand Foyer" },
      { label: "Access Security", value: "Biometric & Visitor Management" },
      { label: "Finishes", value: "Italian Marble & Gold Accents" },
      { label: "Structure", value: "G+8 Commercial (11 Levels)" },
      { label: "Power Redundancy", value: "100% Full Heavy-Load DG Backup" }
    ],
    floorPlanLink: "/floor-plans"
  },
  {
    id: "circulation",
    level: "Well-Planned Driveway",
    capacity: "2-Way Smooth Ramps",
    badge: "Smooth Ingress",
    description: "Engineered dual-ramp vehicular driveway with generous turning radii, dedicated drop-off zone, and anti-skid slopes.",
    specs: ["Dual Ramps", "Dedicated Drop-Off", "Anti-Skid Slopes"],
    image: car22Img,
    icon: "route",
    slug: "/arrival/circulation",
    tagline: "Dual Two-Way Ramps Engineered for Zero-Bottleneck Vehicular Flow.",
    longDescription: "Traffic engineering at Y2R Heights ensures that vehicular arrival, valet drop-off, and subterranean parking operate with absolute efficiency. Wide turning radii, high ceiling clearances, and an isolated curbside drop-off porch allow executive cars, visitor cabs, and supply fleets to move seamlessly without interfering with pedestrian promenades.",
    highlights: [
      "Dual Ingress & Egress Ramps Engineered for Two-Way Vehicular Flow",
      "Dedicated VIP & Valet Curbside Drop-Off Porch at Main Frontage",
      "Graduated Anti-Skid Ramp Slopes with Generous Turning Geometry",
      "Direct Service Bay Access for Commercial Supply Fleets & Logistics",
      "Smart Digital Ingress Indicators & Parking Occupancy Guidance"
    ],
    techSpecs: [
      { label: "Vehicular Ingress", value: "Two-Way Dual Subterranean Ramps" },
      { label: "Turning Radii", value: "Engineered High-Clearance Curves" },
      { label: "Ramp Surface", value: "Heavy-Duty Grooved Anti-Skid" },
      { label: "Drop-Off Zone", value: "Dedicated Executive Covered Porch" },
      { label: "Supply Logistics", value: "Separate Loading/Unloading Bay" },
      { label: "Surveillance", value: "Multi-Angle Ingress/Egress CCTV" }
    ],
    floorPlanLink: "/floor-plans/b2"
  }
];

export const PARKING_LEVELS = ARRIVAL_FEATURES;

export const FLOOR_PLANS_DATA = [
  {
    id: "b1",
    floor: "Basement 1",
    purpose: "18 Car Parking",
    description: "Dedicated lower basement parking with wide entry ramps, 18 vehicle bays, and direct elevator connectivity.",
    longDescription: "Basement Level 1 at Y2R Heights is engineered for seamless vehicular access with generous ramp gradients, 18 dedicated four-wheeler bays, clear turning radii, EV charging docks, and direct access to the central high-speed lift lobby.",
    highlights: [
      "18 Dedicated Marked Four-Wheeler Parking Bays",
      "Direct High-Speed Elevator Lobby & Staircase Connectivity",
      "Smooth Two-Way Ingress/Egress Ramp Circulation",
      "Dedicated EV Charging Stations & Infrastructure",
      "24/7 Automated Boom Barriers & CCTV Security"
    ],
    blueprintUrl: car18Img,
    mapImage: car18Img,
    slabHeight: "12 Ft Subterranean Clearance",
    zoning: "Subterranean Vehicle Parking (B1)",
    ingress: "Wide Ingress Ramp from Main Kursi Road Boulevard",
    unitType: "Dedicated Parking Bays & EV Stations",
    frontage: "Ramp Ingress with Automated Boom Barrier",
    parkingInfo: "18 Dedicated Parking Bays in B1 Tier",
    powerBackup: "100% DG Redundancy for Lighting & Lifts",
    idealOccupants: "Building Occupants, Office Executives & Verified Retail Visitors",
    code: "Y2R-B1-PARK"
  },
  {
    id: "b2",
    floor: "Basement 2",
    purpose: "22 Car Parking",
    description: "Secondary subterranean tier accommodating 22 vehicle bays with optimal turnaround and fire safety systems.",
    longDescription: "Basement Level 2 delivers 22 additional secure four-wheeler parking bays, designed with anti-skid ramp finishes, automated ventilation exhaust systems, full sprinkler fire suppression, and dual high-speed elevator access to all retail and commercial upper floors.",
    highlights: [
      "22 Dedicated Marked Four-Wheeler Parking Bays",
      "Automated Mechanical Ventilation & Smoke Exhaust",
      "Direct Elevator Access to All Upper Floors (G+8)",
      "Anti-Skid Flooring & Heavy-Duty Ramp Gradients",
      "Integrated Fire Sprinklers & Hydrant Systems"
    ],
    blueprintUrl: car22Img,
    mapImage: car22Img,
    slabHeight: "12 Ft Subterranean Clearance",
    zoning: "Subterranean Vehicle Parking (B2)",
    ingress: "Two-Way Ramp Link from Basement 1",
    unitType: "Dedicated Parking Bays & Long-Stay Slots",
    frontage: "Internal Circulation Ramp Network",
    parkingInfo: "22 Dedicated Parking Bays in B2 Tier",
    powerBackup: "100% DG Redundancy for Emergency Systems",
    idealOccupants: "Studio Residents, Long-Stay Commercial Staff & Corporate Tenants",
    code: "Y2R-B2-PARK"
  },
  {
    id: "lgf",
    floor: "Lower Ground Floor",
    purpose: "High-Street Retail",
    description: "High-footfall anchor retail shops with direct access from entry concourse and basement connectivity.",
    longDescription: "The Lower Ground Floor at Y2R Heights is engineered for anchor department stores, lifestyle brands, and hypermarket concepts requiring expansive horizontal layouts. Featuring direct stair and lift links from the arrival plaza and subterranean parking, this level guarantees high patron conversion and fluid circulation.",
    highlights: [
      "Anchor Showroom Units with expansive frontages",
      "Direct Entry Escalators, Elevators & Wide Staircases",
      "Wide Customer Promenade & Circulation Aisles",
      "Subterranean Basement Parking Integration (40+ Vehicles)",
      "Dedicated Loading / Unloading Service Entry"
    ],
    blueprintUrl: highStreetImg,
    mapImage: lowerGroundMap,
    slabHeight: "14 Ft Slab-to-Slab",
    zoning: "Anchor Retail & High-Street Showrooms",
    ingress: "Direct Concourses & Dual High-Speed Lifts",
    unitType: "Double-Height Retail Showrooms",
    frontage: "Internal Retail Promenade + Concourse Access",
    parkingInfo: "Direct Link to Double Basement Parking (40+ Cars)",
    powerBackup: "100% DG Power Redundancy Provision",
    idealOccupants: "Supermarkets, Electronics Showrooms, Fashion Anchors, Lifestyle Boutiques",
    code: "Y2R-LGF-01"
  },
  {
    id: "ugf",
    floor: "Upper Ground Floor",
    purpose: "Boutique Office Suites",
    description: "Prime street-level retail frontage designed for flagship brands, high-visibility boutiques, and lifestyle cafés.",
    longDescription: "Commanding the most prominent visual position along Main Kursi Road, the Upper Ground Floor is Y2R Heights' flagship retail level. Designed with grand double-height structural glazing and immediate street-level ingress, it offers maximum pedestrian footfall and unmatched brand exposure.",
    highlights: [
      "Maximum Kursi Road & Sector-J Extension Visibility",
      "Double-Height Glass Glazing & High-Visibility Façade",
      "Grand Boulevard Walkway & Pedestrian Entrance",
      "Dedicated High-Visibility Brand Signage Zones",
      "Optimized for High-Ticket Retail & Lifestyle Cafés"
    ],
    blueprintUrl: boutiqueImg,
    mapImage: upperGroundMap,
    slabHeight: "14 Ft Slab-to-Slab",
    zoning: "Prime High-Street Retail",
    ingress: "Main Kursi Road Boulevard Entry",
    unitType: "Road-Facing Premium Stores",
    frontage: "Commanding Double-Height Road Frontage",
    parkingInfo: "Direct Plaza Drop-off & Basement Elevator Links",
    powerBackup: "100% DG Power Redundancy Provision",
    idealOccupants: "Flagship Apparel Brands, Jewellery Boutiques, Coffee Lounges, Premium Salons",
    code: "Y2R-UGF-02"
  },
  {
    id: "1st",
    floor: "First Floor",
    purpose: "Commercial Hall",
    description: "Flexible commercial layout designed for corporate firms, boutique offices, diagnostic centers, and corporate lounges.",
    longDescription: "The First Floor provides adaptable open-plan commercial floor plates designed to meet the rigorous demands of modern corporate offices, banking branches, medical clinics, and professional consulting firms. Featuring expansive windows and acoustic dampening, it delivers a quiet, productive business environment.",
    highlights: [
      "Continuous Column-Optimized Flexible Floor Plates",
      "Abundant Natural Daylight with Energy-Efficient Glazing",
      "Versatile Partitions for Private Cabins & Open Workstations",
      "High-Speed Dual Lift Cores with Executive Reception Lobby",
      "Independent Utility & Modern Washroom Facilities"
    ],
    blueprintUrl: commercialHallImg,
    mapImage: firstFloorMap,
    slabHeight: "12 Ft Slab-to-Slab",
    zoning: "Corporate Commercial & Workspaces",
    ingress: "Executive Elevator Lobby & Wide Stairwells",
    unitType: "Scalable Office Workspaces & Clinics",
    frontage: "Elevated Road-Facing Glass Glazing",
    parkingInfo: "Dedicated Staff & Executive Reserved Basement Bays",
    powerBackup: "100% DG Power Redundancy Provision",
    idealOccupants: "IT & Tech Firms, Financial Institutions, Legal & CA Consultancies, Diagnostic Labs",
    code: "Y2R-1ST-03"
  },
  {
    id: "2nd",
    floor: "Second Floor",
    purpose: "Banquet Hall",
    description: "Expansive column-free hall suitable for corporate summits, celebrations, grand banquets, and hospitality venues.",
    longDescription: "The Second Floor is exclusively reserved for grand banqueting and high-capacity hospitality events. Featuring high ceilings, a generous pre-function arrival foyer, and dedicated backstage catering service corridors, it is built to host memorable corporate conferences, social gatherings, and celebrations.",
    highlights: [
      "Expansive Column-Free Hall for High-Capacity Gatherings",
      "Dedicated Pre-Function Welcome Foyer & Guest Lounge",
      "Separate Backstage Catering & Service Staff Access",
      "Advanced Acoustic Insulation & Lighting Infrastructure",
      "Exclusive Guest Elevators with VIP Arrival Staging"
    ],
    blueprintUrl: banquetHallImg,
    mapImage: secondFloorMap,
    slabHeight: "14 Ft Clear Height",
    zoning: "Hospitality & Grand Events Concourse",
    ingress: "Dedicated Guest & Service High-Speed Lifts",
    unitType: "Column-Free Event Concourse",
    frontage: "Panoramic Kursi Road Window Walls",
    parkingInfo: "Valet Arrival & Dual Basement Parking Bays",
    powerBackup: "100% Full Heavy-Load DG Backup",
    idealOccupants: "Banquets, Corporate Event Organizers, Luxury Hospitality, Conference Venues",
    code: "Y2R-2ND-04"
  },
  {
    id: "service",
    floor: "Service Floor",
    purpose: "Food Court",
    description: "Centralized dining concourse featuring multiple national & regional F&B counters and expansive communal seating.",
    longDescription: "The Service Floor houses the bustling culinary epicentre of Y2R Heights. Planned with purpose-built heavy exhaust shafts, dedicated grease traps, and heavy plumbing risers, this floor accommodates top Quick Service Restaurants (QSRs), regional specialty kitchens, and casual dining brands with an expansive communal seating concourse.",
    highlights: [
      "Integrated Commercial Heavy Exhaust Ventilation Shafts",
      "Dedicated Kitchen Water Supply & Grease Trap Risers",
      "Expansive Communal Seating with Ambient Lighting",
      "High-Volume Footfall Hub Feeding Retail & Corporate Levels",
      "Easy Elevator Access for Dine-In Guests & Delivery Fleets"
    ],
    blueprintUrl: foodCourtImg,
    mapImage: serviceFloorMap,
    slabHeight: "12 Ft Clear Height",
    zoning: "Multi-Cuisine Culinary Concourse",
    ingress: "Central High-Speed Elevators & Service Lift",
    unitType: "QSR & Culinary Brand Bays",
    frontage: "Central High-Traffic Atrium Facing",
    parkingInfo: "Direct Basement & Visitor Surface Parking",
    powerBackup: "100% Kitchen Equipment DG Redundancy",
    idealOccupants: "National QSR Brands, Artisan Bakeries, Dessert Parlours, Regional Cuisine Outlets",
    code: "Y2R-SRV-05"
  },
  {
    id: "3to7",
    floor: "3rd–7th Floors",
    purpose: "Studio Apartments",
    description: "Smart, contemporary studio suites crafted for modern living, corporate visitors, and urban rental convenience.",
    longDescription: "Rising across the 3rd to 7th floors, these contemporary studio serviced apartments offer an elevated residential experience in North Lucknow. Each self-contained suite features private open-air balconies, modular kitchenettes, polished bathrooms, and dedicated access control, making them ideal for professionals, corporate travelers, and investors.",
    highlights: [
      "Smart Self-Contained Living Suites with Private Balconies",
      "Panoramic Views of Jankipuram Extension Skyline",
      "Quiet Upper Tiers with Controlled Residential Access",
      "Dedicated High-Speed Resident Elevators & Intercom",
      "Turnkey Rental Potential with High Yields for Investors"
    ],
    blueprintUrl: studioImg,
    mapImage: studioFloorMap,
    slabHeight: "11 Ft Ceiling Clearance",
    zoning: "Executive Serviced Studio Living",
    ingress: "Private Residential Access Lift Core",
    unitType: "Serviced Studio Residences",
    frontage: "Panoramic Open Skyline Balconies",
    parkingInfo: "Dedicated Resident Subterranean Parking Slots",
    powerBackup: "24/7 Essential Residential DG Backup",
    idealOccupants: "Young Corporate Professionals, Business Executives, University Faculty, Investors",
    code: "Y2R-STU-06"
  },
  {
    id: "terrace",
    floor: "Terrace",
    purpose: "Rooftop Space",
    description: "Open-to-sky rooftop terrace offering sweeping 360-degree vistas of the Jankipuram Extension and Kursi Road skyline.",
    longDescription: "The Terrace Floor caps Y2R Heights with an expansive open-to-sky vantage point. Designed to isolate building utilities and HVAC machinery into acoustically shielded enclosures, the remaining space provides a pristine rooftop lounge setting for relaxation, green landscaping, and starlit open-air events.",
    highlights: [
      "360° Open Sky Panoramic Vista Across North Lucknow",
      "Acoustically Isolated Utilities & Solar Ready Infrastructure",
      "Sky Lounge Potential with Green Landscaping Accents",
      "Secure Perimeter Glass Railings & Ambient Night Illumination",
      "Express Elevator Link & Dual Fire Stairwells"
    ],
    blueprintUrl: rooftopSpaceImg,
    mapImage: terraceFloorMap,
    slabHeight: "Open Sky Vantage",
    zoning: "Rooftop Open Lounge & Green Oasis",
    ingress: "Express Elevator Link & Fire Stairwells",
    unitType: "Open-Air Sky Terrace",
    frontage: "Unobstructed 360-Degree Horizon Views",
    parkingInfo: "Full Building Parking Access",
    powerBackup: "Emergency System Power Backup",
    idealOccupants: "Rooftop Lounge, Sky Café, Open-Air Recreation, Renewable Green Infrastructure",
    code: "Y2R-TER-07"
  }
];

export const WHY_Y2R_POINTS = [
  {
    id: "01",
    title: "Strategic Location",
    description: "Connected to established residential and commercial catchments across Lucknow's thriving northern corridor."
  },
  {
    id: "02",
    title: "Versatile Spaces",
    description: "Retail, office, studio, dining and hospitality formats integrated cohesively under one landmark destination."
  },
  {
    id: "03",
    title: "Premium Planning",
    description: "Modern architectural engineering backed by robust, future-ready infrastructure and dual basement parking."
  },
  {
    id: "04",
    title: "Business Visibility",
    description: "Commanding road frontage designed to help forward-thinking brands establish an unmistakable market presence."
  }
];

