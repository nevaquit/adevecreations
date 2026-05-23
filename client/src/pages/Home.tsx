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
                ADEVE Creations for Embassy and Institutional Procurement
              </h1>
              <p className="text-white/70 text-lg mb-8 max-w-xl">
                ADEVE Creations is preparing to serve as a compliant vendor for the U.S. Embassy in Zimbabwe with documented
                legal status, supplier capability, and procurement-ready operating controls.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/capability-statement.pdf" className="glow-btn text-white px-6 py-3 rounded-lg font-semibold">
                  Download Capability Statement
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
                  "NCAGE Registration - In Progress",
                  "SAM.gov Registration - Planned",
                  "UEI Assignment - Pending SAM Completion",
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
              ADEVE Creations operates as a legally registered business and maintains the documentation required for supplier due diligence,
              including incorporation records and authorized representative details.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                "Current legal registration documentation maintained",
                "Zimbabwe operating presence and contact accountability",
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
                "Motor Vehicle Spares and Related Supply Support",
                "Office Supplies and Administrative Consumables",
                "Facility Cleaning and Site Maintenance Services",
                "Construction and Works Support Coordination",
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
                  ADEVE Creations maintains local regulatory and tax compliance records and supports procurement audit traceability.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg text-white font-semibold mb-2">NDAA and VAT Notes</h3>
                <p className="text-white/70">
                  Supplier declarations include prohibited telecommunications equipment compliance and acknowledgement that U.S.
                  Government purchases are zero-rated for VAT where applicable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-18">
          <div className="container grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
              <p className="text-white/70 mb-6">
                For procurement introductions, document requests, or supplier capability review, contact the ADEVE Creations procurement desk.
              </p>
              <div className="space-y-3 text-white/80">
                <p>Email: <a className="text-[#06B6D4]" href="mailto:procurement@adevecreations.com">procurement@adevecreations.com</a></p>
                <p>Phone: +263 00 000 0000</p>
                <p>Location: Harare, Zimbabwe</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg text-white font-semibold mb-2">Embassy Submission Contact</h3>
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
