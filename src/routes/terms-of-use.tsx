import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ShieldCheck, Building2, Mail, Scale, ArrowLeft, AlertTriangle, Globe, KeyRound, Copyright } from "lucide-react";
import honasaLogo from "@/assets/honasa-logo.png";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use : Honasa Consumer Limited" },
      {
        name: "description",
        content:
          "Official Terms of Use governing access, account registration, intellectual property, and services on the Honasa Consumer Limited website.",
      },
    ],
  }),
  component: TermsOfUsePage,
});

function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Editorial Header */}
      <div className="border-b border-border/70 bg-secondary/30 py-12 md:py-16 px-5 md:px-8">
        <div className="mx-auto max-w-4xl space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Ecosystem</span>
          </Link>

          <div className="flex items-center gap-4 pt-2">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay/10 px-3 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
                <FileText className="size-3" />
                Legal & Governance
              </span>
              <p className="text-xs text-muted-foreground mt-0.5">
                Honasa Consumer Limited · Digital Terms of Use
              </p>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Terms Of Use
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Please carefully read the following Terms of Use before using the www.honasa.in website.
            By accessing this Site, you agree to be bound by these Terms of Use.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-10 md:py-14 md:px-8">
        {/* Summary Highlights */}
        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2 shadow-xs">
            <div className="flex size-9 items-center justify-center rounded-xl bg-clay/15 text-clay">
              <Copyright className="size-4" />
            </div>
            <h2 className="font-display text-sm font-bold text-foreground">IP & Copyright</h2>
            <p className="text-xs text-muted-foreground">
              All content, compilation, and proprietary trademarks are protected under Indian
              copyright laws.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2 shadow-xs">
            <div className="flex size-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
              <KeyRound className="size-4" />
            </div>
            <h2 className="font-display text-sm font-bold text-foreground">Account Security</h2>
            <p className="text-xs text-muted-foreground">
              You are responsible for maintaining confidentiality of your passwords and all
              activities thereunder.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2 shadow-xs">
            <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
              <Globe className="size-4" />
            </div>
            <h2 className="font-display text-sm font-bold text-foreground">Applicable Law</h2>
            <p className="text-xs text-muted-foreground">
              Governed strictly in accordance with the laws of India without conflict of law
              principles.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          {/* Introductory Notice Card */}
          <div className="rounded-2xl border border-border/80 bg-secondary/40 p-6 space-y-3">
            <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed">
              Please carefully read the following Terms of Use before using the www.honasa.in web
              site (the "Site"). By accessing this Site, you agree to be bound by these Terms of
              Use. These Terms of Use may be updated from time to time. Accordingly, you should check
              the date of the Terms of Use (which appear at the end of this document) and review any
              changes since the last version. If at any time you do not agree to these Terms of Use,
              please do not use this Site.
            </p>
          </div>

          {/* Section 1: Copyright */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">COPYRIGHT</h2>
            <p>
              All content included in the Site, such as text, graphics, logos, button icons, images,
              audio clips and software, is the property of Honasa Consumer Limited or its content
              suppliers and protected by Indian copyright laws.
            </p>
            <p>
              The compilation (meaning the collection, arrangement and assembly) of all content on
              the Site is the exclusive property of Honasa Consumer Limited and protected by Indian
              copyright laws.
            </p>
          </section>

          {/* Section 2: Trademarks */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">TRADEMARKS</h2>
            <p>
              All trademarks, logos, service marks and trade names are proprietary to Honasa Consumer
              Limited or other respective owners that have granted the Site the right and license to
              use such intellectual property.
            </p>
          </section>

          {/* Section 3: Registration, Accounts and Passwords */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">
              REGISTRATION, ACCOUNTS AND PASSWORDS
            </h2>
            <p>
              If you register and create an account on the Site you agree to be responsible for: (i)
              maintaining the confidentiality of passwords or other account identifiers which you
              choose, and (ii) all activities that occur under such password or account identifiers.
            </p>
            <p>
              You agree to notify Honasa Consumer Limited of: (i) any loss of your password or other
              account identifiers and (ii) any unauthorized use of your password or other account
              identifiers. Honasa Consumer Limited shall not be responsible or liable, directly or
              indirectly, in any way for any loss or damage of any kind incurred as a result of, or in
              connection with, your failure to comply with this section of the Terms of Use.
            </p>
          </section>

          {/* Section 4: Disclaimer */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">DISCLAIMER</h2>
            <p>
              The information, services, products offered for sale and materials contained in and/or
              advertised on the Site, including, without limitation, text, graphics and links, are
              provided on an "As Is" basis with no warranty.
            </p>
            <p className="uppercase text-xs font-semibold text-foreground/90 tracking-wide">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, HONASA CONSUMER LIMITED AND ITS SUPPLIERS
              DISCLAIM ALL REPRESENTATIONS AND WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO SUCH
              INFORMATION, SERVICES, PRODUCTS AND MATERIALS, INCLUDING, BUT NOT LIMITED TO,
              WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, TITLE,
              NON-INFRINGEMENT, FREEDOM FROM COMPUTER VIRUS AND IMPLIED WARRANTIES ARISING FROM
              COURSE OF DEALING OR COURSE OF PERFORMANCE.
            </p>
            <p>
              In addition, Honasa Consumer Limited and its suppliers do not represent or warrant that
              the information accessible via the Site is accurate, complete or current. We are not
              responsible for typographical errors. Price and availability information is subject to
              change without notice.
            </p>
          </section>

          {/* Section 5: Links to Other Web Sites and Services */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">
              LINKS TO OTHER WEB SITES AND SERVICES
            </h2>
            <p>
              This Site may contain links to Web sites other than our own. Honasa Consumer Limited
              does not assume any responsibility for those sites and provides those links solely for
              the convenience of our visitors.
            </p>
            <p>
              Honasa Consumer Limited does not control the content of these sites and takes no
              responsibility for their content, nor should it be implied that Honasa Consumer Limited
              endorses or otherwise recommends such sites or the products or services offered.
            </p>
          </section>

          {/* Section 6: Limitation on Liability */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">LIMITATION ON LIABILITY</h2>
            <p className="uppercase text-xs font-semibold text-foreground/90 tracking-wide">
              IN NO EVENT SHALL HONASA CONSUMER LIMITED OR ANY OF ITS AFFILIATED ENTITIES OR
              SUPPLIERS BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL, EXEMPLARY OR
              CONSEQUENTIAL DAMAGES, EVEN IF HONASA CONSUMER LIMITED HAS BEEN PREVIOUSLY ADVISED OF
              THE POSSIBILITY OF SUCH DAMAGES, WHETHER IN AN ACTION, UNDER CONTRACTS, NEGLIGENCE OR
              ANY OTHER THEORY, ARISING OUT OF OR IN CONNECTION WITH THE USE, INABILITY TO USE OR
              PERFORMANCE OF THE INFORMATION, SERVICES, PRODUCTS AND MATERIALS AVAILABLE FROM THE
              SITE.
            </p>
            <p>
              These limitations shall apply notwithstanding any failure of essential purpose or the
              existence of any limited remedy. Because some jurisdictions do not allow limitations on
              how long an implied warranty lasts, or the exclusion or limitation of liability for
              consequential or incidental damages, the above limitations may not apply to you.
            </p>
          </section>

          {/* Section 7: Applicable Law */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">APPLICABLE LAW</h2>
            <p>
              The laws of India will govern these Terms of Use without giving effect to any
              principles of conflict of law.
            </p>
          </section>

          {/* Date Stamp & Versioning */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
            <span>Last Updated: {new Date().getFullYear()}</span>
            <span>Honasa Consumer Limited</span>
          </div>
        </div>

        {/* Support & Inquiries Footer Card */}
        <div className="mt-12 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
              Corporate Governance
            </span>
            <h3 className="font-display text-xl font-bold text-foreground mt-1">
              Questions regarding these Terms of Use?
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Reach our corporate compliance department for assistance.
            </p>
          </div>

          <a
            href="mailto:compliance@honasa.in"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer shadow-sm whitespace-nowrap"
          >
            <Mail className="size-3.5" />
            <span>Contact compliance@honasa.in</span>
          </a>
        </div>
      </div>
    </div>
  );
}
