import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Users2, Linkedin, X, Building2, ExternalLink, ShieldCheck, Award } from "lucide-react";
import honasaLogo from "@/assets/honasa-logo.png";
import varunPortrait from "@/assets/founders/varun-alagh.png";
import ghazalPortrait from "@/assets/founders/ghazal-alagh.png";
import namitaPortrait from "@/assets/board/namita-gupta.png";
import subramaniamPortrait from "@/assets/board/subramaniam-somasundaram.png";
import vivekPortrait from "@/assets/board/vivek-gambhir.png";
import ishaanPortrait from "@/assets/board/ishaan-mittal.png";
import ramanPortrait from "@/assets/executives/raman-preet-sohi.png";
import karanveerPortrait from "@/assets/executives/karanveer-bajwa.png";
import avinashPortrait from "@/assets/executives/avinash-dhagat.png";
import spoorthyPortrait from "@/assets/executives/spoorthy-shetty.png";
import vipulPortrait from "@/assets/executives/vipul-maheshwari.png";
import mohitPortrait from "@/assets/executives/mohit-shankar-srivastava.png";
import lokeshPortrait from "@/assets/executives/lokesh-chhaparwal.png";
import nishchayPortrait from "@/assets/executives/nishchay-bahl.png";
import nileshPortrait from "@/assets/executives/nilesh-kotalwar.png";
import tarunPortrait from "@/assets/executives/tarun-aggarwal.png";
import saahilPortrait from "@/assets/executives/saahil-nayar.png";
import dheerajPortrait from "@/assets/executives/dheeraj-nagpal.png";
import richaPortrait from "@/assets/executives/richa-gupta.png";
import shivangPortrait from "@/assets/executives/shivang-jain.png";
import akshatPortrait from "@/assets/executives/akshat-srivastava.png";
import madhurPortrait from "@/assets/executives/madhur-acharya.png";
import snigdhaPortrait from "@/assets/management/snigdha-anand.png";
import shuchiPortrait from "@/assets/management/shuchi-garg.png";
import ashutoshPortrait from "@/assets/management/ashutosh-mamgain.png";
import divyaPortrait from "@/assets/management/divya-gupta.png";
import kaustavPortrait from "@/assets/rd/kaustav-guha.png";
import rohiniPortrait from "@/assets/rd/rohini-manoj.png";

export const Route = createFileRoute("/leadership-team")({
  head: () => ({
    meta: [
      { title: "Our Founders, Board & Leadership Team : Honasa Consumer Limited" },
      {
        name: "description",
        content:
          "Meet the visionary founders, esteemed Board of Directors, and executive leaders steering governance, technology, and strategic growth across Honasa Consumer Limited.",
      },
    ],
  }),
  component: LeadershipTeamPage,
});

interface LeaderProfile {
  id: string;
  name: string;
  title: string;
  role: string;
  image: string;
  linkedinUrl?: string;
  bioParagraphs: string[];
  directorships: string[];
  showProfileLink?: boolean;
}

const FOUNDERS: LeaderProfile[] = [
  {
    id: "varun-alagh",
    name: "Varun Alagh",
    title: "Whole-Time Director & CEO",
    role: "Co-founder, Chairman, CEO & Whole Time Director",
    image: varunPortrait,
    linkedinUrl: "https://www.linkedin.com/in/varunalagh/",
    bioParagraphs: [
      "Mr. Varun Alagh is the Co-founder, Chairman, CEO & Whole Time Director of our Company. Since its inception in 2016, he has been instrumental in steering the company towards becoming a leading player in the beauty and personal care industry.",
      "Before founding Honasa, Mr. Varun Alagh accumulated over a decade of experience in the FMCG sector. He began his career at Hindustan Unilever Limited (HUL), where he held various roles, including Regional Brand Manager – South Asia. He then served as Senior Brand Manager at Diageo PLC, managing ATL, BTL, digital, and on-trade activations for Smirnoff across India. Subsequently, he worked at The Coca-Cola Company as Senior Brand Manager, playing a key role in launching Coke Zero in India.",
      "Mr. Varun Alagh holds a Bachelor's degree in Electrical Engineering from Delhi College of Engineering (now Delhi Technological University) and a PGDBM in Finance and Marketing from XLRI, Jamshedpur.",
    ],
    directorships: [
      "Bhabani Blunt Hair Dressing Private Limited",
      "Blunt Spratt Hairdressing Private Limited",
      "Honasa Consumer General Trading LLC",
      "PT Honasa Consumer Indonesia",
    ],
  },
  {
    id: "ghazal-alagh",
    name: "Ghazal Alagh",
    title: "Whole-Time Director & CIO",
    role: "Co-founder, Whole Time Director and Chief Innovation Officer",
    image: ghazalPortrait,
    linkedinUrl: "https://www.linkedin.com/in/ghazalalagh/",
    bioParagraphs: [
      "Ms. Ghazal Alagh is the Co-founder, Whole Time Director and Chief Innovation Officer of our Company, overseeing product innovation and brand strategy across the company’s brand portfolio.",
      "Prior to co-founding Honasa, Ms. Ghazal Alagh began her career as a Corporate Trainer at NIIT Limited, where she trained managers and engineers in coding languages and software. She later ventured into entrepreneurship with DietExpert.com, a personalized diet planning website.",
      "Ms. Ghazal Alagh holds a Bachelor's degree in Computer Applications from Panjab University and has a background in marketing and social entrepreneurship. She has also pursued art studies from the New York Academy of Art.",
    ],
    directorships: [
      "Bhabani Blunt Hair Dressing Private Limited",
      "Blunt Spratt Hairdressing Private Limited",
      "Honasa Consumer General Trading LLC",
      "PT Honasa Consumer Indonesia",
    ],
  },
];

const BOARD_OF_DIRECTORS: LeaderProfile[] = [
  {
    id: "namita-gupta",
    name: "Namita Gupta",
    title: "Independent Director",
    role: "Independent Director",
    image: namitaPortrait,
    bioParagraphs: [
      "Ms. Namita Gupta is an Independent Director of our Company. She is Founder and CEO of Airveda Technologies Private Limited. Previously, she has worked with Microsoft Corporation and spent over five years at Facebook Inc., where she last held the position of ‘Head Games Partner Engineering’. She has also served as Chief Product Officer at Zomato.",
      "Ms Namita Gupta holds a Master’s degree in Technology in Mathematics and Computing from the Indian Institute of Technology, Delhi.",
    ],
    directorships: [
      "Zomato Hyperpure Private Limited",
      "Airveda Technologies Private Limited",
      "Eternal Limited",
    ],
  },
  {
    id: "subramaniam-somasundaram",
    name: "Subramaniam Somasundaram",
    title: "Independent Director",
    role: "Independent Director",
    image: subramaniamPortrait,
    bioParagraphs: [
      "Mr. Subramaniam Somasundaram is an Independent Director of our Company. He was Chief Financial Officer (CFO) for Titan Company Limited for over a decade till his superannuation in June 2021. Currently he is an Independent Director on the Boards of listed and unlisted entities and chairs the Audit Company of all these companies.",
      "Before joining Titan, he was in the Telecom industry for over 11 years including stints as CFO for BPL Mobile Group and Chief Executive Officer for BPL Mobile operations in Mumbai. He started his career with ITC Limited in India and then had a stint in Doha, Qatar with Mannai Corporation.",
      "Mr. Subramaniam Somasundaram holds a Bachelor’s degree of Commerce from University of Madras, and is a Chartered Accountant and Cost Accountant.",
    ],
    directorships: [
      "Life Style International Private Limited",
      "United Breweries Limited",
      "Teamlease Services Limited",
      "Titan Commodity Trading Limited",
      "Avanti Finance Private Limited",
      "API Holding Limited",
      "Razorpay Software Limited",
    ],
  },
  {
    id: "vivek-gambhir",
    name: "Vivek Gambhir",
    title: "Independent Director",
    role: "Independent Director",
    image: vivekPortrait,
    bioParagraphs: [
      "Mr. Vivek Gambhir is an Independent Director of our Company. He has more than three decades of experience in operations and strategy. He is currently associated with Lightspeed India Ventures. His previous roles include leadership positions at Imagine Marketing Limited (boAt Lifestyle), Godrej Consumer Products Limited and Godrej Industries & Associate Companies. He was also a founding member of Bain & Company’s consulting operations in India, where he led the FMCG practice. He has previously been the co-chair of the Confederation of Indian Industry, National FMCG Committee and served as the president of the Harvard Business School Club of India.",
      "Mr. Vivek Gambhir holds bachelor’s degrees in Arts and Science from Lafayette College, Pennsylvania, and a Master’s degree in Business Administration from Harvard Business School, Massachusetts.",
    ],
    directorships: [
      "Imagine Marketing Limited",
      "Metropolis Healthcare Limited",
      "Kaha Technologies Private Limited",
      "HOB Ventures Private Limited",
      "Samast Technologies Private Limited",
      "Comfort Grid Technologies Private Limited",
      "Harvard Business School Club of India",
      "Kaha Pte. Ltd. Singapore",
    ],
  },
  {
    id: "ishaan-mittal",
    name: "Ishaan Mittal",
    title: "Non-Executive Director",
    role: "Non-executive Nominee Director",
    image: ishaanPortrait,
    bioParagraphs: [
      "Mr. Ishaan Mittal is a Non-executive Nominee Director of our Company. He is Managing Director at Peak XV, a leading venture capital firm in India and Southeast Asia, with over $9 billion of assets under management. Mr. Mittal has joined Peak XV in 2011 and focuses on sectors including consumer & consumer internet and fintech & financial services payments at Peak XV. Prior to joining Peak XV, he worked with The Boston Consulting Group.",
      "Mr. Ishaan Mittal holds a Bachelor's degree of Technology in Mechanical Engineering from the Indian Institute of Technology, Delhi, and a Master’s degree in business administration from Harvard Business School, Commonwealth of Massachusetts.",
    ],
    directorships: [
      "Finova Capital Private Limited",
      "Girnar Software Private Limited",
    ],
  },
];

const EXECUTIVE_TEAM: LeaderProfile[] = [
  {
    id: "raman-preet-sohi",
    name: "Raman Preet Sohi",
    title: "Chief Finance Officer",
    role: "Chief Finance Officer",
    image: ramanPortrait,
    linkedinUrl: "https://www.linkedin.com/in/ramanpreetsohi/",
    bioParagraphs: [
      "Raman Preet Sohi serves as the Chief Finance Officer of Honasa Consumer Limited, steering financial governance, capital allocation, investor relations, and strategic growth across the house of brands.",
      "With extensive leadership experience in financial strategy, treasury, and public company reporting, he plays a central role in driving sustainable profitability and financial discipline across all 8 operating verticals.",
    ],
    directorships: [],
  },
  {
    id: "karanveer-bajwa",
    name: "Karanveer Bajwa",
    title: "Chief Human Resources Officer",
    role: "Chief Human Resources Officer",
    image: karanveerPortrait,
    linkedinUrl: "https://www.linkedin.com/in/karanveerbajwa/",
    bioParagraphs: [
      "Karanveer Bajwa is the Chief Human Resources Officer at Honasa Consumer Limited, championing organizational culture, leadership talent acquisition, and people development across the ecosystem.",
      "He spearheads the institutionalization of GrowCode values across all teams, creating an agile, high-performance environment where entrepreneurial brand pods thrive.",
    ],
    directorships: [],
  },
  {
    id: "avinash-dhagat",
    name: "Avinash Dhagat",
    title: "Chief Supply Chain Officer",
    role: "Chief Supply Chain Officer",
    image: avinashPortrait,
    linkedinUrl: "https://www.linkedin.com/in/avinashdhagat/",
    bioParagraphs: [
      "Avinash Dhagat leads supply chain, procurement, manufacturing partnerships, and fulfillment operations as Chief Supply Chain Officer of Honasa Consumer Limited.",
      "He architects a high-velocity, pan-India distribution network ensuring product freshness, cold-chain integrity, and rapid fulfillment across digital channels, quick commerce, and offline retail touchpoints.",
    ],
    directorships: [],
  },
  {
    id: "spoorthy-shetty",
    name: "Spoorthy Shetty",
    title: "CEO BBLUNT Salons",
    role: "Chief Executive Officer · BBLUNT Salons",
    image: spoorthyPortrait,
    linkedinUrl: "https://www.linkedin.com/in/spoorthy-shetty/",
    bioParagraphs: [
      "Spoorthy Shetty serves as the CEO of BBLUNT Salons, spearheading the brand's premier salon chain, customer experience, and professional styling education across India.",
      "Under her leadership, BBLUNT Salons merges cutting-edge hair artistry with premium consumer salon services, creating a national benchmark for hair design and styling excellence.",
    ],
    directorships: [],
  },
  {
    id: "vipul-maheshwari",
    name: "Vipul Maheshwari",
    title: "Executive Vice President",
    role: "Executive Vice President",
    image: vipulPortrait,
    linkedinUrl: "https://www.linkedin.com/in/vipul-maheshwari/",
    bioParagraphs: [
      "Vipul Maheshwari serves as Executive Vice President at Honasa Consumer Limited, driving core strategic growth, business expansion, and cross-functional synergy across brand houses.",
      "His leadership focuses on operational excellence, new market acceleration, and scaling high-velocity business models.",
    ],
    directorships: [],
  },
  {
    id: "mohit-shankar-srivastava",
    name: "Mohit Shankar Srivastava",
    title: "EVP, IR & Corp Dev",
    role: "Executive Vice President · Investor Relations & Corporate Development",
    image: mohitPortrait,
    linkedinUrl: "https://www.linkedin.com/in/mohit-shankar-srivastava/",
    bioParagraphs: [
      "Mohit Shankar Srivastava is Executive Vice President of Investor Relations & Corporate Development at Honasa Consumer Limited, managing capital markets communication, investor partnerships, and corporate M&A.",
      "He plays a pivotal role in articulating Honasa's long-term value thesis to domestic and international institutional investors following its successful IPO on the BSE and NSE.",
    ],
    directorships: [],
  },
  {
    id: "lokesh-chhaparwal",
    name: "Lokesh Chhaparwal",
    title: "SVP, Technology & Engineering",
    role: "Senior Vice President · Technology & Engineering",
    image: lokeshPortrait,
    linkedinUrl: "https://www.linkedin.com/in/lokesh-chhaparwal/",
    bioParagraphs: [
      "Lokesh Chhaparwal is Senior Vice President of Technology & Engineering at Honasa Consumer Limited, heading product engineering, cloud infrastructure, AI platforms, and e-commerce tech stacks.",
      "He architects the consumer-facing technology products and data intelligence engines that decode 5M+ monthly signals into 45-day idea-to-shelf formulation velocity.",
    ],
    directorships: [],
  },
  {
    id: "nishchay-bahl",
    name: "Nishchay Bahl",
    title: "SVP, Offline Revenue",
    role: "Senior Vice President · Offline Revenue",
    image: nishchayPortrait,
    linkedinUrl: "https://www.linkedin.com/in/nishchay-bahl/",
    bioParagraphs: [
      "Nishchay Bahl leads offline revenue and omnichannel retail distribution as Senior Vice President of Offline Revenue at Honasa Consumer Limited.",
      "He directs national general trade expansion, modern trade partnerships, and exclusive brand outlets (EBOs), placing Honasa products into hundreds of thousands of retail touchpoints nationwide.",
    ],
    directorships: [],
  },
  {
    id: "nilesh-kotalwar",
    name: "Nilesh Kotalwar",
    title: "SVP, Online Revenue",
    role: "Senior Vice President · Online Revenue",
    image: nileshPortrait,
    linkedinUrl: "https://www.linkedin.com/in/nilesh-kotalwar/",
    bioParagraphs: [
      "Nilesh Kotalwar serves as Senior Vice President of Online Revenue at Honasa Consumer Limited, leading direct-to-consumer (D2C) growth, brand web stores, marketplace partnerships, and digital revenue streams across all 8 houses.",
      "His data-driven growth strategies optimize conversion funnels, customer retention, and digital media efficiencies at national scale.",
    ],
    directorships: [],
  },
  {
    id: "tarun-aggarwal",
    name: "Tarun Aggarwal",
    title: "SVP, International sales",
    role: "Senior Vice President · International Sales",
    image: tarunPortrait,
    linkedinUrl: "https://www.linkedin.com/in/tarun-aggarwal/",
    bioParagraphs: [
      "Tarun Aggarwal is Senior Vice President of International Sales at Honasa Consumer Limited, spearheading the company's global expansion across the GCC, Southeast Asia, and international export markets.",
      "He leads cross-border distribution partnerships, regional compliance, and localized go-to-market strategies that introduce India's clean beauty formulations to global consumers.",
    ],
    directorships: [],
  },
  {
    id: "saahil-nayar",
    name: "Saahil Nayar",
    title: "SVP, Colour Care and Prestige",
    role: "Senior Vice President · Colour Care and Prestige",
    image: saahilPortrait,
    linkedinUrl: "https://www.linkedin.com/in/saahil-nayar/",
    bioParagraphs: [
      "Saahil Nayar is Senior Vice President of Colour Care and Prestige at Honasa Consumer Limited, leading brand vision, high-performance cosmetic formulations, and premium consumer positioning for brands like Staze.",
      "With deep category expertise in prestige beauty and luxury retail, he accelerates innovation in sweat-proof, long-wear cosmetic technologies crafted for diverse undertones.",
    ],
    directorships: [],
  },
  {
    id: "dheeraj-nagpal",
    name: "Dheeraj Nagpal",
    title: "SVP, Honasa Health",
    role: "Senior Vice President · Honasa Health",
    image: dheerajPortrait,
    linkedinUrl: "https://www.linkedin.com/in/dheeraj-nagpal/",
    bioParagraphs: [
      "Dheeraj Nagpal serves as Senior Vice President of Honasa Health at Honasa Consumer Limited, spearheading preventative health, wellness supplements, and active nutritional formulations.",
      "He guides clinical formulation research, nutraceutical compliance, and preventative self-care portfolios that empower consumers to lead healthier, vibrant lives.",
    ],
    directorships: [],
  },
  {
    id: "richa-gupta",
    name: "Richa Gupta",
    title: "SVP, ECommerce",
    role: "Senior Vice President · ECommerce",
    image: richaPortrait,
    linkedinUrl: "https://www.linkedin.com/in/richagupta/",
    bioParagraphs: [
      "Richa Gupta serves as Senior Vice President of E-Commerce at Honasa Consumer Limited, managing digital storefronts, platform partnerships, and consumer acquisition funnels.",
      "She oversees high-performance digital commerce operations across India's largest e-marketplaces and brand platforms.",
    ],
    directorships: [],
  },
  {
    id: "shivang-jain",
    name: "Shivang Jain",
    title: "VP, CEO BTM Ventures",
    role: "Vice President · CEO BTM Ventures",
    image: shivangPortrait,
    linkedinUrl: "https://www.linkedin.com/in/shivang-jain/",
    bioParagraphs: [
      "Shivang Jain serves as Vice President and CEO of BTM Ventures at Honasa Consumer Limited, heading strategic business ventures, incubation, and category expansion.",
      "He accelerates new brand incubation and venture initiatives across beauty, wellness, and consumer personal care.",
    ],
    directorships: [],
  },
  {
    id: "akshat-srivastava",
    name: "Akshat Srivastava",
    title: "VP, Corporate Strategy & Chief-of-Staff",
    role: "Vice President · Corporate Strategy & Chief-of-Staff",
    image: akshatPortrait,
    linkedinUrl: "https://www.linkedin.com/in/akshat-srivastava/",
    bioParagraphs: [
      "Akshat Srivastava is Vice President of Corporate Strategy & Chief-of-Staff at Honasa Consumer Limited, orchestrating cross-functional strategic priorities directly alongside executive leadership.",
      "He drives corporate execution, special strategic projects, institutional alignment, and board governance operations.",
    ],
    directorships: [],
  },
  {
    id: "madhur-acharya",
    name: "Madhur Acharya",
    title: "VP, Fragrances",
    role: "Vice President · Fragrances",
    image: madhurPortrait,
    linkedinUrl: "https://www.linkedin.com/in/madhur-acharya/",
    bioParagraphs: [
      "Madhur Acharya serves as Vice President of Fragrances at Honasa Consumer Limited, spearheading the company's olfactory innovation, fragrance formulation architectures, and artisanal scent portfolios.",
      "He oversees fragrance brand development, sourcing of rare botanical scent notes, and multi-occasion fine fragrance launches across the ecosystem.",
    ],
    directorships: [],
  },
];

const SENIOR_MANAGEMENT: LeaderProfile[] = [
  {
    id: "snigdha-anand",
    name: "Snigdha Anand",
    title: "SVP, Marketing",
    role: "Senior Vice President · Marketing",
    image: snigdhaPortrait,
    linkedinUrl: "https://www.linkedin.com/in/snigdhaanand/",
    bioParagraphs: [
      "Snigdha Anand serves as Senior Vice President of Marketing at Honasa Consumer Limited, overseeing global brand positioning, integrated campaigns, consumer insight synthesis, and creative storytelling across all 8 brand worlds.",
      "She directs high-impact digital and mainstream media campaigns that connect consumers with certified clean, purposeful beauty formulations.",
    ],
    directorships: [],
  },
  {
    id: "shuchi-garg",
    name: "Shuchi Garg",
    title: "VP, Sales Strategy",
    role: "Vice President · Sales Strategy",
    image: shuchiPortrait,
    linkedinUrl: "https://www.linkedin.com/in/shuchi-garg/",
    bioParagraphs: [
      "Shuchi Garg is Vice President of Sales Strategy at Honasa Consumer Limited, formulating commercial strategy, trade marketing architecture, channel economics, and revenue acceleration across Indian retail markets.",
      "Her strategic focus aligns market demand forecasting with national offline expansion and trade partner relationships.",
    ],
    directorships: [],
  },
  {
    id: "ashutosh-mamgain",
    name: "Ashutosh Mamgain",
    title: "VP, New Product Development",
    role: "Vice President · New Product Development",
    image: ashutoshPortrait,
    linkedinUrl: "https://www.linkedin.com/in/ashutosh-mamgain/",
    bioParagraphs: [
      "Ashutosh Mamgain is Vice President of New Product Development (NPD) at Honasa Consumer Limited, leading laboratory formulation benchmarking, botanical extraction sciences, active ingredient stability, and the 45-day idea-to-shelf innovation engine.",
      "He collaborates closely with clinical dermatologists and green chemistry specialists to pioneer certified toxin-free skincare, haircare, and cosmetic innovations.",
    ],
    directorships: [],
  },
  {
    id: "divya-gupta",
    name: "Divya Gupta",
    title: "VP, Sales Online",
    role: "Vice President · Sales Online",
    image: divyaPortrait,
    linkedinUrl: "https://www.linkedin.com/in/divyagupta/",
    bioParagraphs: [
      "Divya Gupta serves as Vice President of Sales Online at Honasa Consumer Limited, driving marketplace partnerships, digital channel revenue, quick-commerce fulfillment, and direct platform growth.",
      "She scales high-velocity online sales models ensuring seamless product discovery and rapid delivery across India's premier digital commerce networks.",
    ],
    directorships: [],
  },
  {
    id: "dr-kaustav-guha",
    name: "Dr. Kaustav Guha",
    title: "VP, Research & Development",
    role: "Vice President · Research & Development",
    image: kaustavPortrait,
    linkedinUrl: "https://www.linkedin.com/in/drkaustavguha/",
    showProfileLink: true,
    bioParagraphs: [
      "Dr. Kaustav Guha is Vice President of Research & Development (R&D) at Honasa Consumer Limited, spearheading product innovation, technology development, and formula performance enhancement across the company's entire brand portfolio.",
      "With over a decade of domain leadership across global and national beauty giants including L'Oréal and Marico, he champions clean formulation standards, clinical efficacy testing, and next-generation cosmetic science.",
      "Dr. Guha is an alumnus of the Indian Institute of Technology (IIT) Kharagpur and Durham University, United Kingdom.",
    ],
    directorships: [],
  },
  {
    id: "rohini-manoj",
    name: "Rohini Manoj",
    title: "VP, Research & Development",
    role: "Vice President · Research & Development",
    image: rohiniPortrait,
    linkedinUrl: "https://www.linkedin.com/in/rohini-manoj/",
    showProfileLink: true,
    bioParagraphs: [
      "Rohini Manoj serves as Vice President of Research & Development (R&D) at Honasa Consumer Limited, collaborating directly with Co-founder & Chief Innovation Officer Ghazal Alagh to advance specialized formulation architectures.",
      "Prior to joining Honasa, she founded CosmoGenesis Labs, a premier cosmetic formulation and research company acquired by Honasa Consumer to significantly expand in-house laboratory capabilities and accelerate new formula delivery.",
      "She brings deep expertise in skin biology, delivery systems, active encapsulation technologies, and clean personal care formulation.",
    ],
    directorships: [],
  },
];

function LeadershipTeamPage() {
  const [activeModalLeader, setActiveModalLeader] = useState<LeaderProfile | null>(null);
  const [hoveredFounderId, setHoveredFounderId] = useState<string>("ghazal-alagh");

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-clay selection:text-white">
      {/* 1. Header Navigation */}
      <div className="border-b border-border/80 bg-linear-to-b from-secondary/30 via-background to-background py-12 md:py-16 px-5 md:px-8">
        <div className="mx-auto max-w-[1440px] space-y-6">
          <div className="flex items-center justify-between pb-6 border-b border-border/60">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors bg-secondary/80 hover:bg-secondary px-3.5 py-1.5 rounded-full"
            >
              <ArrowLeft className="size-3.5" />
              <span>Inside Honasa</span>
            </Link>

            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-clay">
              Governance & Leadership
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-clay/10 px-3.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-clay border border-clay/20">
                  Board & Executive Leadership
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Leadership Team
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed">
                Meet the founders, independent board directors, and executive operators steering
                governance, technology, and strategic scale across Honasa Consumer Limited.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-border bg-card p-2 shadow-xs text-xs font-semibold text-muted-foreground">
              <Building2 className="size-4 text-emerald-600 ml-2" />
              <span className="pr-3">BSE & NSE Listed · Corporate Governance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-12 md:py-16 md:px-8 space-y-16">
        {/* ========================================================================= */}
        {/* 2. "Our Founders" Section (Exact match to User Reference Screenshots) */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Our Founders
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              The visionary co-founders who pioneered India's clean beauty movement and built
              Honasa into a house of 8 specialized personal care brands.
            </p>
          </div>

          {/* Founders Grid Cards */}
          <div className="grid gap-8 sm:grid-cols-2 max-w-3xl">
            {FOUNDERS.map((founder) => {
              const isHovered = hoveredFounderId === founder.id;

              return (
                <div
                  key={founder.id}
                  onMouseEnter={() => setHoveredFounderId(founder.id)}
                  className={`group rounded-3xl p-5 border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isHovered
                      ? "border-emerald-400 bg-emerald-500/10 shadow-xl"
                      : "border-border/80 bg-card hover:border-emerald-400/60 hover:shadow-md"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Portrait Image Card */}
                    <div className="overflow-hidden rounded-2xl bg-white shadow-xs">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Name & Title */}
                    <div className="text-center space-y-1">
                      <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {founder.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                        {founder.title}
                      </p>
                    </div>
                  </div>

                  {/* View Profile Action Link */}
                  <div className="pt-4 text-center">
                    <button
                      onClick={() => setActiveModalLeader(founder)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400 hover:underline cursor-pointer transition-colors"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="size-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. "Board Of Directors" Section (Exact match to User Reference Screenshots) */}
        {/* ========================================================================= */}
        <section className="space-y-8 pt-6 border-t border-border/80">
          <div className="space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Board Of Directors
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Distinguished global business leaders, seasoned technology founders, and FMCG veterans
              guiding strategy, audit oversight, and risk governance.
            </p>
          </div>

          {/* 4-Column Board of Directors Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BOARD_OF_DIRECTORS.map((director) => (
              <div
                key={director.id}
                className="group rounded-3xl p-5 border border-border/80 bg-card hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Director Portrait */}
                  <div className="overflow-hidden rounded-2xl bg-white shadow-xs">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-72 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Director Name & Title */}
                  <div className="text-center space-y-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {director.name}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground">
                      {director.title}
                    </p>
                  </div>
                </div>

                {/* View Profile Action Link */}
                <div className="pt-4 text-center">
                  <button
                    onClick={() => setActiveModalLeader(director)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400 hover:underline cursor-pointer transition-colors"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="size-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. "Leadership Team" Section (Exact match to User Reference Screenshots) */}
        {/* ========================================================================= */}
        <section className="space-y-8 pt-6 border-t border-border/80">
          <div className="space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Leadership Team
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              The operational executives driving finance, human resources, supply chain, retail
              salons, corporate development, engineering, and national offline revenue across Honasa.
            </p>
          </div>

          {/* 4-Column Leadership Team Grid (8 Leaders, 2 rows of 4) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXECUTIVE_TEAM.map((leader) => (
              <div
                key={leader.id}
                className="group rounded-3xl p-5 border border-border/80 bg-card hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Executive Portrait */}
                  <div className="overflow-hidden rounded-2xl bg-white shadow-xs">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-72 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Executive Name & Title */}
                  <div className="text-center space-y-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground">
                      {leader.title}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Icon Button Centered (Matches Screenshot) */}
                <div className="pt-4 flex items-center justify-center gap-3">
                  {leader.linkedinUrl && (
                    <a
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-7 items-center justify-center rounded-lg bg-[#0077b5] text-white hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
                      title={`View ${leader.name}'s LinkedIn`}
                    >
                      <Linkedin className="size-4" />
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalLeader(leader)}
                    className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Bio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. "Senior Management" Section (Exact match to User Reference Screenshots) */}
        {/* ========================================================================= */}
        <section className="space-y-8 pt-6 border-t border-border/80">
          <div className="space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Senior Management
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Functional heads and domain specialists driving marketing, sales strategy, new product
              development, and digital commerce across Honasa.
            </p>
          </div>

          {/* 4-Column Senior Management Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SENIOR_MANAGEMENT.map((leader) => (
              <div
                key={leader.id}
                className="group rounded-3xl p-5 border border-border/80 bg-card hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Portrait */}
                  <div className="overflow-hidden rounded-2xl bg-white shadow-xs">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-72 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Name & Title */}
                  <div className="text-center space-y-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground">
                      {leader.title}
                    </p>
                  </div>
                </div>

                {/* Card Action: View Profile for R&D leaders (matching screenshot), or LinkedIn for others */}
                {leader.showProfileLink ? (
                  <div className="pt-4 text-center">
                    <button
                      onClick={() => setActiveModalLeader(leader)}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400 hover:underline cursor-pointer transition-colors"
                    >
                      <span>View Profile</span>
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 flex items-center justify-center gap-3">
                    {leader.linkedinUrl && (
                      <a
                        href={leader.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-7 items-center justify-center rounded-lg bg-[#0077b5] text-white hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
                        title={`View ${leader.name}'s LinkedIn`}
                      >
                        <Linkedin className="size-4" />
                      </a>
                    )}
                    <button
                      onClick={() => setActiveModalLeader(leader)}
                      className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      Bio
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 5. Navigation Footer to Other Pages */}
        <div className="pt-8 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/our-story"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Previous: The Journey of Honasa</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/about"
              className="rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              All About Honasa
            </Link>
            <Link
              to="/our-accomplishments"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
            >
              <span>Next: Our Accomplishments</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. MODAL DIALOG: Shared for Founders, Board & Leadership Team */}
      {/* ========================================================================= */}
      {activeModalLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button (X) */}
            <button
              onClick={() => setActiveModalLeader(null)}
              aria-label="Close profile modal"
              className="absolute top-5 right-5 rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>

            <div className="grid gap-8 md:grid-cols-[280px_1fr] items-start">
              {/* Left Column: Photo */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-border/60">
                  <img
                    src={activeModalLeader.image}
                    alt={activeModalLeader.name}
                    className="w-full h-80 object-cover object-top"
                  />
                </div>

                <div className="p-3 rounded-2xl bg-secondary/50 border border-border/70 text-center">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                    Corporate Role
                  </p>
                  <p className="text-xs font-semibold text-foreground mt-0.5">
                    {activeModalLeader.role}
                  </p>
                </div>
              </div>

              {/* Right Column: Complete Verbatim Bio and Directorships */}
              <div className="space-y-6">
                {/* Header Lockup */}
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                      {activeModalLeader.name}
                    </h3>
                    {activeModalLeader.linkedinUrl && (
                      <a
                        href={activeModalLeader.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-7 items-center justify-center rounded-lg bg-[#0077b5] text-white hover:opacity-90 transition-opacity"
                        title="View LinkedIn Profile"
                      >
                        <Linkedin className="size-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground mt-1">
                    {activeModalLeader.title}
                  </p>
                </div>

                {/* Biography Paragraphs */}
                <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {activeModalLeader.bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* List of Directorship of other Board (if any) */}
                {activeModalLeader.directorships.length > 0 && (
                  <div className="pt-2 border-t border-border/70 space-y-3">
                    <h4 className="font-display text-sm font-bold text-foreground">
                      List of Directorship of other Board:
                    </h4>
                    <ul className="space-y-1.5">
                      {activeModalLeader.directorships.map((d, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90 font-medium"
                        >
                          <span className="size-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
