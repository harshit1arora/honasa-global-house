import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ShieldCheck, Building2, Mail, Scale, ArrowLeft, AlertTriangle, Globe, Lock } from "lucide-react";
import honasaLogo from "@/assets/honasa-logo.png";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions : Honasa Consumer Ltd." },
      {
        name: "description",
        content:
          "Official Terms and Conditions, corporate governance, and legal compliance policies for Honasa Consumer Ltd. and its house of brands.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
                <Scale className="size-3" />
                Legal & Compliance
              </span>
              <p className="text-xs text-muted-foreground mt-0.5">
                Honasa Consumer Ltd. · Corporate Governance
              </p>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Terms And Conditions
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Please read these terms carefully before continuing to use this website. Visitors to
            this website are bound by the following terms and conditions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-10 md:py-14 md:px-8">
        {/* Quick Highlights Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2 shadow-xs">
            <div className="flex size-9 items-center justify-center rounded-xl bg-clay/15 text-clay">
              <Scale className="size-4" />
            </div>
            <h2 className="font-display text-sm font-bold text-foreground">Binding Agreement</h2>
            <p className="text-xs text-muted-foreground">
              By browsing this site, you accept and agree to comply with all terms and conditions
              herein.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2 shadow-xs">
            <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
              <Globe className="size-4" />
            </div>
            <h2 className="font-display text-sm font-bold text-foreground">Indian Jurisdiction</h2>
            <p className="text-xs text-muted-foreground">
              Governed in accordance with laws of India; exclusive jurisdiction of courts at Delhi,
              India.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-2 shadow-xs">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="size-4" />
            </div>
            <h2 className="font-display text-sm font-bold text-foreground">Compliance Contact</h2>
            <p className="text-xs text-muted-foreground">
              Questions or queries? Write directly to{" "}
              <a
                href="mailto:compliance@honasa.in"
                className="font-semibold text-foreground underline hover:text-clay"
              >
                compliance@honasa.in
              </a>
            </p>
          </div>
        </div>

        {/* Detailed Legal Sections */}
        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          {/* Important Notice */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-xs uppercase tracking-wider">
              <AlertTriangle className="size-4" />
              <span>Important Notice to Visitors</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed">
              VISITORS TO THIS WEBSITE ARE BOUND BY THE FOLLOWING TERMS AND CONDITIONS ("TERMS") SO
              PLEASE READ THESE CAREFULLY BEFORE CONTINUING TO USE THIS SITE. IF YOU DO NOT AGREE
              WITH ANY OF THESE TERMS, PLEASE DO NOT USE THIS SITE. IF YOU HAVE ANY QUESTIONS ABOUT
              THESE TERMS, PLEASE CONTACT{" "}
              <a
                href="mailto:compliance@honasa.in"
                className="text-clay underline hover:text-clay/80"
              >
                compliance@honasa.in
              </a>
              .
            </p>
          </div>

          {/* Section 1: Information & Disclaimer */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">
              Information Accuracy & Investment Disclaimer
            </h2>
            <p>
              Honasa makes no commitment to update or correct any Information that appears on the
              Internet or on this web site. Information is supplied upon the condition that the
              persons receiving the same will make their own determination as to its suitability for
              their purposes prior to use or in connection with the making of any decision.
            </p>
            <p>
              No Information at this web site shall constitute an invitation to invest in Honasa or
              any affiliates. Any use of this website or the Information is at your own risk.
              Neither Honasa and affiliates, nor their officers, employees or agents shall be liable
              for any loss, damage or expense arising out of any access to, use of, or reliance
              upon, this website or the Information, or any website linked to this website.
            </p>
          </section>

          {/* Section 2: Patent & Formulation Notice */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">
              Patent & Formulation Notice
            </h2>
            <p>
              Nothing contained herein is to be construed as a recommendation to use any product,
              process, equipment or formulation, in conflict with any patent, or otherwise and Honasa
              makes no representation or warranty, express or implied that, the use thereof will not
              infringe any patent, or otherwise.
            </p>
          </section>

          {/* Section 3: Warranty & Limitation of Liability */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">
              Warranty Disclaimer ("As Is" & "Where-Is") & Limitation of Liability
            </h2>
            <p className="uppercase text-xs font-semibold text-foreground/90 tracking-wide">
              THIS WEBSITE IS PROVIDED TO YOU ON AN "AS IS" AND "WHERE-IS" BASIS, WITHOUT ANY
              WARRANTY. HONASA, FOR ITSELF AND ANY THIRD PARTY PROVIDING MATERIALS, SERVICES, OR
              CONTENT TO THIS WEBSITE, MAKES NO REPRESENTATIONS OR WARRANTIES, EITHER EXPRESS,
              IMPLIED, STATUTORY OR OTHERWISE OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT OF THIRD PARTY RIGHTS, WITH RESPECT TO THE WEBSITE, THE
              INFORMATION OR ANY PRODUCTS OR SERVICES TO WHICH THE INFORMATION REFERS.
            </p>
            <p className="uppercase text-xs font-semibold text-foreground/90 tracking-wide">
              HONASA WILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DAMAGES OF ANY KIND,
              INCLUDING BUT NOT LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE
              DAMAGES, ARISING FROM OR CONNECTED WITH THE SITE, INCLUDING BUT NOT LIMITED TO, YOUR
              USE OF THIS SITE OR YOUR INABILITY TO USE THE SITE, EVEN IF HONASA HAS PREVIOUSLY BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          {/* Section 4: Availability */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">Availability</h2>
            <p>
              Honasa controls and operates this web site from India and makes no representation that
              the materials are appropriate or will be available for use in other locations. If you
              use this web site from outside India, you are entirely responsible for compliance with
              all applicable local laws.
            </p>
            <p>
              Information that Honasa publishes on the website may contain references or cross
              references to Honasa’s products, programs and services that are not announced or
              available in your country. Such references do not imply that Honasa intends to announce
              such products, programs or services in your country. Consult your local Honasa
              business contact for information regarding the products, programs and services that
              may be available to you.
            </p>
          </section>

          {/* Section 5: Third Party Interaction */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">
              Third Party Interaction and Links to Third Party Sites
            </h2>
            <p>
              In your use of the web site, you may enter into correspondence with, purchase goods
              and/or services from, or participate in promotions of advertisers or sponsors of the
              web site. Unless otherwise stated, any such correspondence, advertisement, purchase or
              promotion, including the delivery of and the payment for goods and/or services, and any
              other term, condition, warranty or representation associated with such correspondence,
              purchase or promotion, is solely between you and the applicable third party. You agree
              that Honasa has no liability, obligation or responsibility for any such
              correspondence, purchase or promotion between you and any such third party.
            </p>
            <p>
              This website may be linked to other websites that are not under the control of or
              maintained by Honasa. Such links do not indicate any responsibility or endorsement on
              our part for the external website concerned, its contents or the links displayed on it.
              These links are provided only as a convenience, in order to help you find relevant
              websites, services and/or products that may be of interest to you, quickly and
              easily. It is your responsibility to decide whether any services and/or products
              available through any of these websites are suitable for your purposes. Honasa is not
              responsible for the owners or operators of these websites or for any goods or services
              they supply or for the content of their websites and does not give or enter into any
              conditions, warranties or other terms or representations in relation to any of these or
              accept any liability in relation to any of these (including any liability arising out
              of any claim that the content of any external web site to which this web site includes
              a link infringes the intellectual property rights of any third party).
            </p>
          </section>

          {/* Section 6: Copyrights */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">Copyrights</h2>
            <p>
              This web site contains material, including text, graphics and sound, which is
              protected by copyright and/or other intellectual property rights. All copyright and
              other intellectual property rights in this material are either owned by Honasa or have
              been licensed to Honasa by the owner(s) of those rights so that it can use this
              material as part of this web site. Honasa retains copyright on all Information,
              including text, graphics and sound and all trademarks displayed on this web site are
              owned by Honasa or used under licence by Honasa affiliates.
            </p>
            <div className="rounded-2xl bg-secondary/40 p-5 space-y-2">
              <h3 className="font-semibold text-foreground text-xs uppercase tracking-wider">
                You may:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>
                  Use and display the materials only on your personal computer only for personal use.
                  Honasa grants you a limited, personal, non-exclusive and non-transferable license
                  only for such use.
                </li>
                <li>
                  Print copies of the information on this site for your personal use and store the
                  files on your computer for personal use.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-secondary/40 p-5 space-y-2">
              <h3 className="font-semibold text-foreground text-xs uppercase tracking-wider">
                You may not:
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-xs">
                <li>
                  Copy (whether by printing off onto paper, storing on disk, downloading or in any
                  other way), distribute (including distributing copies), download, display, perform,
                  reproduce, distribute, modify, edit, alter, enhance, broadcast or tamper with in
                  any way or otherwise use any material contained in the web site except as set out
                  under "You may". These restrictions apply in relation to all or part of the
                  material on the web site.
                </li>
                <li>
                  Copy and distribute this information on any other server, or modify or re-use text
                  or graphics on this system or another system. No reproduction of any part of the web
                  site may be sold or distributed for commercial gain nor shall it be modified or
                  incorporated in any other work, publication or web site, whether in hard copy or
                  electronic format, including postings to any other web site.
                </li>
                <li>
                  Remove any copyright, trade mark or other intellectual property notices contained
                  in the original material from any material copied or printed off from the web site;
                  link to this web site; without our express written consent.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: Trademarks */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">Trademarks</h2>
            <p>
              Honasa and all products and logos denoted with TM are trademarks or registered
              trademarks of Honasa or its affiliates. Honasa trademarks may not be used in
              connection with any product or service that is not a Honasa product or service.
            </p>
          </section>

          {/* Section 8: General Terms and Conditions */}
          <section className="space-y-3 border-b border-border/70 pb-8">
            <h2 className="font-display text-lg font-bold text-foreground">
              General Terms and Conditions
            </h2>
            <p>
              Honasa does not routinely monitor your postings to the web site but reserves the right
              to do so. However, in our efforts to promote good citizenship within the Internet
              community, if Honasa becomes aware of inappropriate use of the web site or any of its
              Services, Honasa will respond in any way that, in its sole discretion, Honasa deems
              appropriate. You acknowledge that Honasa will have the right to report to law
              enforcement authorities any actions that may be considered illegal, as well as any
              information it receives of such illegal conduct. When requested, Honasa will co-operate
              fully with law enforcement agencies in any investigation of alleged illegal activity on
              the Internet.
            </p>
            <p>
              Unauthorised use of any materials contained on this web site may violate copyright
              laws, trademark laws, the laws of privacy and publicity, certain communications
              statutes and regulations and other applicable laws and regulations. You alone are
              responsible for your actions or the actions of any person using your user name and/or
              password. As such, you shall indemnify and hold Honasa and its officers, directors,
              employees, affiliates, agents, licensors, and business partners harmless from and
              against any and all loss, costs, damages, liabilities, and expenses (including
              attorneys' fees) incurred in relation to, arising from, or for the purpose of
              avoiding, any claim or demand from a third party that your use of the web site or the
              use of the web site by any person using your user name and/or password (including
              without limitation your participation in the posting areas) violates any applicable
              law or regulation, or the rights of any third party.
            </p>
            <p>
              Honasa reserves the right to terminate access to this web site at any time and without
              notice. Further this limited license terminates automatically, without notice to you,
              if you breach any of these Terms. Upon termination, you must immediately destroy any
              downloaded and printed materials.
            </p>
            <p>
              Honasa may change the terms and conditions and disclaimer set out above from time to
              time. By browsing this web site you are accepting that you are bound by the current
              terms and conditions and disclaimer and so you should check these each time you
              revisit the web site.
            </p>
            <p>Honasa may change the format and content of this web site at any time.</p>
            <p>
              Honasa may suspend the operation of this web site for support or maintenance work, in
              order to update the content or for any other reason.
            </p>
            <p>
              Personal details, if any provided to Honasa through this web site will only be used in
              accordance with our privacy policy. Please read this carefully before going on. By
              providing your personal details to us you are consenting to its use in accordance with
              our privacy policy.
            </p>
            <p>
              If you have a question or complaint, please contact us at{" "}
              <a
                href="mailto:compliance@honasa.in"
                className="text-clay font-semibold underline hover:text-clay/80"
              >
                compliance@honasa.in
              </a>
              .
            </p>
            <p>
              If, for any reason, a court of competent jurisdiction finds any provision of the
              agreement, or portion thereof, to be unenforceable, that provision shall be enforced to
              the maximum extent permissible so as to give effect to the intent of the parties as
              reflected by that provision.
            </p>
            <p className="font-semibold text-foreground">Honasa reserves all other rights.</p>
          </section>

          {/* Section 9: Applicable Law and Jurisdiction */}
          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-foreground">
              Applicable Law and Jurisdiction
            </h2>
            <p>
              These terms and conditions are governed by and to be interpreted in accordance with
              laws of India, without regard to the choice or conflicts of law provisions of any
              jurisdiction. You agree, in the event of any dispute arising in relation to these terms
              and conditions or any dispute arising in relation to the web site whether in contract
              or tort or otherwise, to submit to the exclusive jurisdiction of the courts located at
              Delhi, India for the resolution of all such disputes.
            </p>
          </section>
        </div>

        {/* Support & Contact Footer Card */}
        <div className="mt-12 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
              Compliance & Legal Inquiries
            </span>
            <h3 className="font-display text-xl font-bold text-foreground mt-1">
              Have questions regarding our terms?
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Our legal and compliance team is available to assist you.
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
