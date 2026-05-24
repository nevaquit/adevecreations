import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#0B0D17]">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 border-b border-white/5">
          <div className="container grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-[#06B6D4] mb-4">Procurement Ready Supplier</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                ADEVE Creations Supplies and Services
              </h1>
              <p className="text-white/70 text-lg mb-8 max-w-xl">
                Owned by Rutendo Jenkins, ADEVE Creations provides supplies and services for government,
                embassy, and institutional procurement with a strong focus on reliability, compliance, and
                responsive delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/capability-statement.pdf" className="glow-btn text-white px-6 py-3 rounded-lg font-semibold">
                  Download Capability Statement
                </a>
                <a href="#tax-certificates" className="px-6 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 transition-colors">
                  View Tax Certificates
                </a>
                <a href="#contact" className="px-6 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 transition-colors">
                  Contact Procurement Desk
                </a>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-7">
              <h2 className="text-xl font-semibold text-white mb-4">Vendor Readiness Status</h2>
              <div className="space-y-4 text-sm">
                {[
                  "ZIMRA TIN Certificate - Active",
                  "ZIMRA ITF263 Tax Clearance - Active",
                  "SAM.gov Registration - Planned",
                  "Company Profile Dossier - In Preparation",
                ].map((item) => (
                  <div key={item} className="flex items-center justify-between border border-white/10 rounded-lg px-4 py-3">
                    <span className="text-white/75">{item.split(" - ")[0]}</span>
                    <span className="text-[#06B6D4] font-medium">{item.split(" - ")[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about-legal" className="py-18">
          <div className="container">
            <h2 className="text-3xl font-bold text-white mb-6">About and Legal Status</h2>
            <p className="text-white/70 mb-6 max-w-4xl">
              ADEVE Creations is operated by Rutendo Jenkins and maintains supplier documentation needed
              for procurement due diligence, including tax registration and tax clearance records.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                "Primary owner and procurement lead: Rutendo Jenkins",
                "Zimbabwe operating presence with local accountability",
                "Controlled records for procurement and compliance review",
              ].map((point) => (
                <div key={point} className="glass-card rounded-xl p-5 text-white/75">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-18 border-y border-white/5 bg-[#0E1225]/40">
          <div className="container">
            <h2 className="text-3xl font-bold text-white mb-6">Services Aligned to Embassy Procurement</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                "Office supplies and administrative consumables",
                "General procurement supplies for operational needs",
                "Cleaning and facility support services",
                "Service coordination and local sourcing support",
              ].map((service) => (
                <div key={service} className="glass-card rounded-xl p-6">
                  <p className="text-white/85 font-medium">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-18">
          <div className="container grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
              <p className="text-white/70 mb-4">
                The business maintains evidence of multi-year operational experience and can provide references relevant to requested
                categories and delivery standards.
              </p>
              <ul className="space-y-3 text-white/75">
                <li>Minimum three-year experience narrative prepared for supplier dossier</li>
                <li>Reference contacts and project summaries available on request</li>
                <li>Delivery, quality, and communication standards documented internally</li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl text-white font-semibold mb-4">Evidence Pack Components</h3>
              <ul className="space-y-3 text-white/70">
                <li>Company profile and legal status documents</li>
                <li>Relevant project summaries and client references</li>
                <li>Service category mapping to procurement opportunities</li>
                <li>Risk and quality control approach for service delivery</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="compliance" className="py-18 border-y border-white/5 bg-[#0E1225]/40">
          <div className="container">
            <h2 className="text-3xl font-bold text-white mb-6">Compliance</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg text-white font-semibold mb-2">Regulatory Alignment</h3>
                <p className="text-white/70">
                  ADEVE Creations maintains Zimbabwe tax registration and tax clearance documentation and
                  supports procurement audit traceability.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg text-white font-semibold mb-2">Embassy Procurement Notes</h3>
                <p className="text-white/70">
                  Supplier declarations include prohibited telecommunications equipment compliance and acknowledgement
                  that U.S. Government purchases are zero-rated for VAT where applicable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tax-certificates" className="py-18">
          <div className="container">
            <h2 className="text-3xl font-bold text-white mb-6">Tax Certificates</h2>
            <p className="text-white/70 mb-8 max-w-4xl">
              Public compliance details from ZIMRA certificates for ADEVE CREATIONS.
            </p>
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="glass-card rounded-xl p-6 text-white/75 space-y-2">
                <h3 className="text-lg text-white font-semibold mb-2">TIN Certificate</h3>
                <p>TIN: 2002497923</p>
                <p>Taxpayer Name: ADEVE CREATIONS</p>
                <p>Registration Date: 11/05/2026 13:30</p>
                <p>Issued On: 12/05/2026</p>
                <p>Authentication Code: 49264602</p>
              </div>
              <div className="glass-card rounded-xl p-6 text-white/75 space-y-2">
                <h3 className="text-lg text-white font-semibold mb-2">Tax Clearance Certificate (ITF263)</h3>
                <p>TIN: 2002497923</p>
                <p>Taxpayer Name: ADEVE CREATIONS</p>
                <p>Issued On: 12/05/2026</p>
                <p>Validity: 12 May 2026 - 12 June 2026</p>
                <p>Authentication Code: 49267269</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <a href="/compliance/zimra-tin-certificate.png" target="_blank" rel="noreferrer" className="block glass-card rounded-xl p-3">
                <img
                  src="/compliance/zimra-tin-certificate.png"
                  alt="ZIMRA TIN certificate for ADEVE CREATIONS"
                  className="rounded-lg w-full h-auto"
                />
              </a>
              <a href="/compliance/zimra-tax-clearance-itf263.png" target="_blank" rel="noreferrer" className="block glass-card rounded-xl p-3">
                <img
                  src="/compliance/zimra-tax-clearance-itf263.png"
                  alt="ZIMRA ITF263 tax clearance certificate for ADEVE CREATIONS"
                  className="rounded-lg w-full h-auto"
                />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-18">
          <div className="container grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
              <p className="text-white/70 mb-6">
                For procurement introductions, document requests, or supplier capability review, contact Rutendo Jenkins at ADEVE Creations.
              </p>
              <div className="space-y-3 text-white/80">
                <p>Email: <a className="text-[#06B6D4]" href="mailto:procurement@adevecreations.com">procurement@adevecreations.com</a></p>
                <p>Phone: +263 00 000 0000</p>
                <p>Location: Harare, Zimbabwe</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg text-white font-semibold mb-2">Owner and Embassy Submission Contact</h3>
              <p className="text-white/70 mb-3">Owner: Rutendo Jenkins</p>
              <p className="text-white/70 mb-4">
                The final company profile package for U.S. Embassy Zimbabwe should be submitted to:
              </p>
              <p className="text-[#06B6D4] font-medium">HarareGSOProcurement@state.gov</p>
              <p className="text-white/60 text-sm mt-4">
                Include a concise cover email, capability statement, and supporting legal/compliance references.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
