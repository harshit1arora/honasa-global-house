import { useState } from "react";
import { Building2, Users, TrendingUp, FileText, Briefcase, ExternalLink, ShieldCheck, ArrowRight, Send } from "lucide-react";
import { leadershipMembers, careerRoles } from "@/data/content";
import honasaLogo from "@/assets/honasa-logo.png";

export function CorporateLayer() {
  const [activeCorporateTab, setActiveCorporateTab] = useState<"about" | "leadership" | "careers" | "investors">("about");
  const [selectedRoleDepartment, setSelectedRoleDepartment] = useState<string>("all");
  const [careerSubmitted, setCareerSubmitted] = useState(false);

  const filteredRoles = careerRoles.filter((r) => {
    if (selectedRoleDepartment === "all") return true;
    return r.department.toLowerCase().includes(selectedRoleDepartment.toLowerCase());
  });

  return (
    <section id="corporate-section" className="border-b border-border/80 bg-secondary/30 py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-2 text-clay">
            <span className="size-1.5 rounded-full bg-clay" />
            Corporate Credibility & Governance
          </p>
          <h2 className="display-lg mt-2 text-foreground font-semibold">
            Inside Honasa.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            The proof behind the vision. Public company governance, scientific leadership, and our
            ambition to build the next generation of consumer technology companies.
          </p>
        </div>

        {/* Corporate Navigation Tabs */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 border-b border-border/70 scrollbar-none">
          {[
            { id: "about", label: "About & Thesis" },
            { id: "leadership", label: "Leadership & R&D" },
            { id: "careers", label: "Careers: Build The Future" },
            { id: "investors", label: "Investor Relations & Governance" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCorporateTab(tab.id as any)}
              className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                activeCorporateTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: About & Thesis */}
        {activeCorporateTab === "about" && (
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
                  The House of Brands Thesis
                </span>
                <img
                  src={honasaLogo}
                  alt="Honasa Consumer"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                One Consumer. Infinite Needs. Multiple Specialized Brands.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Honasa was founded on a simple truth: no single brand can authentically serve every
                consumer stage. A mother seeking toxin-free baby care needs gentle oat botanicals; a
                working professional in high humidity needs clinical 2% salicylic acid; an evening
                ritual calls for restorative peptide creams.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By uniting specialized houses under one digital, intelligence, and supply layer, we
                eliminate FMCG overhead while delivering radical personalization.
              </p>
            </div>

            <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 space-y-4">
              <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
                Enterprise Foundations
              </span>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl bg-secondary/50 p-4 border border-border/60">
                  <span className="text-xs text-muted-foreground">Exchange Listing</span>
                  <p className="font-display text-lg font-bold text-foreground mt-1">
                    BSE & NSE Listed
                  </p>
                  <p className="text-[0.6875rem] text-muted-foreground">Public market governance</p>
                </div>
                <div className="rounded-2xl bg-secondary/50 p-4 border border-border/60">
                  <span className="text-xs text-muted-foreground">Global Ambition</span>
                  <p className="font-display text-lg font-bold text-foreground mt-1">
                    6+ Key Markets
                  </p>
                  <p className="text-[0.6875rem] text-muted-foreground">Multi-currency architecture</p>
                </div>
                <div className="rounded-2xl bg-secondary/50 p-4 border border-border/60">
                  <span className="text-xs text-muted-foreground">Formulation Standards</span>
                  <p className="font-display text-lg font-bold text-foreground mt-1">
                    100% Toxin-Free
                  </p>
                  <p className="text-[0.6875rem] text-muted-foreground">Certified cruelty-free</p>
                </div>
                <div className="rounded-2xl bg-secondary/50 p-4 border border-border/60">
                  <span className="text-xs text-muted-foreground">Consumer Flywheel</span>
                  <p className="font-display text-lg font-bold text-foreground mt-1">
                    Digital-Native DTC
                  </p>
                  <p className="text-[0.6875rem] text-muted-foreground">Omnichannel distribution</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Leadership & R&D */}
        {activeCorporateTab === "leadership" && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipMembers.map((lead) => (
              <div
                key={lead.name}
                className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm hover:border-clay/40 transition-all"
              >
                <div>
                  <span className="text-[0.625rem] font-bold uppercase tracking-wider text-clay">
                    Executive Leadership
                  </span>
                  <h3 className="font-display mt-1 text-lg font-bold text-foreground">
                    {lead.name}
                  </h3>
                  <p className="text-xs font-medium text-clay mt-0.5">{lead.role}</p>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                    {lead.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground block">
                    Strategic Mandate
                  </span>
                  <p className="text-xs text-foreground/90 mt-0.5">{lead.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: Careers: "BUILD THE FUTURE OF BEAUTY" */}
        {activeCorporateTab === "careers" && (
          <div className="mt-10 space-y-8">
            <div className="rounded-3xl border border-clay/30 bg-clay/5 p-6 sm:p-10">
              <div className="max-w-3xl">
                <span className="eyebrow text-clay">Talent & Culture</span>
                <h3 className="display-lg mt-1 text-2xl sm:text-3xl font-bold text-foreground">
                  What if the next generation of consumer companies were built like technology companies?
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  We are hiring engineers, cosmetic chemists, data scientists, and product designers
                  who want to reinvent global consumer beauty through intelligence, clean science,
                  and rapid experimentation.
                </p>
              </div>

              {/* Department Filter */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["all", "Engineering", "Science", "Product", "Brand"].map((dep) => (
                  <button
                    key={dep}
                    onClick={() => setSelectedRoleDepartment(dep)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition-all cursor-pointer ${
                      selectedRoleDepartment === dep
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "border border-border bg-background text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {dep}
                  </button>
                ))}
              </div>
            </div>

            {/* Roles List */}
            <div className="space-y-4">
              {filteredRoles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-clay/40 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[0.6875rem] font-bold text-clay">
                        {role.department}
                      </span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{role.location}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{role.type}</span>
                    </div>
                    <h4 className="font-display mt-1.5 text-base font-bold text-foreground">
                      {role.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground max-w-2xl leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setCareerSubmitted(true)}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {careerSubmitted && (
              <div className="rounded-2xl bg-emerald-500/10 p-4 border border-emerald-500/30 text-xs text-emerald-700 dark:text-emerald-300 flex items-center justify-between">
                <span>Application simulated! Thank you for expressing interest in Honasa Careers.</span>
                <button
                  onClick={() => setCareerSubmitted(false)}
                  className="underline font-bold ml-2"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: Investor Relations & Governance */}
        {activeCorporateTab === "investors" && (
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Annual Reports & Filings",
                desc: "Access verified statutory disclosures, annual filings, and quarterly earnings presentations.",
                action: "Download Reports" },
              {
                title: "Corporate Governance",
                desc: "Board committee charters, independent director frameworks, and audit committee oversight.",
                action: "View Governance Charter" },
              {
                title: "Shareholder Contacts",
                desc: "Registrar and share transfer agents, investor grievance redressals, and secretarial communications.",
                action: "Contact IR Team" },
            ].map((box) => (
              <div
                key={box.title}
                className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-display text-base font-bold text-foreground">
                    {box.title}
                  </h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {box.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-clay hover:underline cursor-pointer">
                    <span>{box.action}</span>
                    <ExternalLink className="size-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
