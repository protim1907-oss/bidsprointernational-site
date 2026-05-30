export default function BidsProInternationalWebsite() {
  const services = [
    {
      title: "IT Program & Delivery Management",
      desc: "Senior-led oversight for technology initiatives, MVPs, digital platforms, and transformation programs from planning through execution.",
    },
    {
      title: "Product Architecture & MVP Planning",
      desc: "Structured definition of scope, user journeys, platform modules, delivery roadmap, and technical direction for new digital products.",
    },
    {
      title: "PMO, Governance & Client Reporting",
      desc: "Project tracking, milestone governance, stakeholder alignment, risk management, executive reporting, and delivery transparency.",
    },
    {
      title: "IT Management Support for US & Europe",
      desc: "Flexible technology leadership and program support for startups, SMBs, civic platforms, consulting firms, and growing organisations.",
    },
  ];

  const sectors = [
    "Civic Tech & Digital Platforms",
    "IT Services & Managed Services",
    "Digital Transformation Programs",
    "SaaS & Product-Led Businesses",
    "Consulting & Professional Services",
    "Cross-Border US & EU Delivery",
  ];

  const differentiators = [
    "Senior-led delivery with direct involvement in planning, execution, and stakeholder communication",
    "Strong blend of IT management, product structuring, and proposal discipline",
    "Practical support for early-stage products, MVP builds, and fast-moving delivery environments",
    "Responsive operating model designed for clients who need momentum, clarity, and accountability",
  ];

  const capabilities = [
    "Program leadership and delivery coordination",
    "MVP definition and execution planning",
    "Stakeholder workshops and requirements alignment",
    "Project tracking, governance, and milestone reporting",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white shadow-sm">
              B
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">BidsPro International</div>
              <div className="text-xs text-slate-500">IT Management • Program Delivery • MVP Advisory</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#sectors" className="hover:text-slate-900">Sectors</a>
            <a href="#why-us" className="hover:text-slate-900">Why Us</a>
            <a href="#case-studies" className="hover:text-slate-900">Case Studies</a>
            <a href="#insights" className="hover:text-slate-900">Insights</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            Book a Consultation
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
                Helping clients across Europe and the U.S. manage and deliver technology initiatives
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                IT management and delivery support for digital platforms, MVPs, and transformation initiatives.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                BidsPro International supports clients with structured IT management services including program leadership,
                MVP planning, stakeholder alignment, delivery governance, and execution support for projects across Europe and the United States.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Talk to Us
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                >
                  View Services
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                {[
                  ["Senior-Led", "Direct leadership involvement throughout the delivery lifecycle"],
                  ["Structured", "Clear planning, reporting, and governance for every engagement"],
                  ["Responsive", "Fast-moving support for clients who need progress and accountability"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">{title}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-slate-900 p-5 text-white">
                    <div className="text-sm font-medium text-slate-300">Core Focus</div>
                    <div className="mt-2 text-2xl font-semibold">Helping organisations plan, manage, and deliver technology initiatives with clarity and momentum.</div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 p-5">
                      <div className="text-sm font-medium text-slate-500">Capabilities</div>
                      {capabilities.map((item) => (
                        <div key={item} className="mt-2 text-sm font-semibold text-slate-900">{item}</div>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-5">
                      <div className="text-sm font-medium text-slate-500">Typical Engagements</div>
                      <div className="mt-2 text-sm leading-7 text-slate-700">
                        Digital product launches, civic platforms, MVP planning, client-facing IT programs, PMO support, and delivery management assignments.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-dashed border-slate-300 p-5">
                    <div className="text-sm font-medium text-slate-500">Delivery Style</div>
                    <div className="mt-2 text-sm leading-7 text-slate-700">
                      Practical, collaborative, and execution-focused support tailored to the scale, urgency, and complexity of each client engagement.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-18 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">IT management services focused on delivery, governance, and product execution</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We help clients move from concept to execution with strong project structure, stakeholder alignment, and disciplined delivery support.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="text-lg font-semibold tracking-tight">{service.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="sectors" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Markets</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Supporting clients in Europe and the U.S.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  BidsPro International is positioned to support organisations that need structured IT management services across cross-border, digital, and client-facing programs.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {sectors.map((sector) => (
                  <div key={sector} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700">
                    {sector}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="mx-auto max-w-7xl px-6 py-18 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Why BidsPro International</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Focused IT management support without the delays of a large delivery agency.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We combine strategic oversight with hands-on execution support, helping clients maintain momentum on technology initiatives that require ownership, responsiveness, and structure.
              </p>
            </div>
            <div className="grid gap-4">
              {differentiators.map((item, idx) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                    {idx + 1}
                  </div>
                  <div className="text-sm leading-7 text-slate-700">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="case-studies" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:py-24">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Case Studies</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Delivery in practice</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A look at how BidsPro International has helped clients move from idea to execution.
              </p>
            </div>
            <div className="mt-10">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white">Civix250</span>
                  <span className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-medium text-slate-600">Eboriko Support LLC</span>
                  <span className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-medium text-slate-600">MVP Planning &amp; Execution</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">Building Civix250 from the Ground Up</h3>
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm" style={{aspectRatio: "16/9"}}>
                  <iframe
                    src="https://player.vimeo.com/video/1196948602?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title="Civix250 – BidsPro International"
                    style={{display: "block"}}
                  />
                </div>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">The Problem</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      Eboriko Support LLC had a clear vision for Civix250 — a civic technology platform — but no structured foundation to bring it to life. The client lacked a defined product scope, a delivery roadmap, or a prioritised set of features to guide development. Without these building blocks, the initiative risked stalling before any meaningful progress could be made. There was no process for translating stakeholder ideas into a coherent MVP, and no ownership over the technical direction or sequencing of work.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">The Solution</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      BidsPro International led the end-to-end MVP planning and execution for Civix250. Working closely with Eboriko Support LLC, we ran structured discovery sessions to define user journeys, platform modules, and core feature priorities. We translated those inputs into a phased delivery roadmap with clear milestones, ownership, and sequencing. Throughout execution, we provided delivery governance, progress tracking, and stakeholder reporting — ensuring the build remained focused, on schedule, and aligned with the original product intent from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Approach</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A structured approach to managing technology initiatives.</h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                  Our engagements are designed to give clients stronger control over scope, delivery, stakeholder communication, and progress tracking.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  "Stakeholder workshops and scope alignment",
                  "Roadmap planning and milestone definition",
                  "Execution tracking, governance, and reporting",
                  "Client communication and delivery coordination",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-700 bg-slate-800/70 px-5 py-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:py-24">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Insights</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">From the field</h2>
            </div>
            <div className="mt-10 max-w-3xl">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">B</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">BidsPro International</div>
                    <div className="text-xs text-slate-500">IT Management • Program Delivery • MVP Advisory</div>
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                  <p className="text-base font-semibold text-slate-900">Most MVPs don't fail because of bad ideas — they fail because of poor delivery structure.</p>
                  <p>When Eboriko Support LLC came to us, they had a clear vision for Civix250, a civic technology platform built to make a real difference. What they didn't have was a structured path to get there. No defined scope, no delivery roadmap, no process for turning ideas into an MVP.</p>
                  <p>That's where BidsPro International stepped in.</p>
                  <p>We ran structured discovery sessions, mapped user journeys, defined platform modules, and built a phased roadmap with clear milestones and ownership. Then we stayed through execution — tracking progress, managing stakeholders, and keeping the build focused and on schedule.</p>
                  <p>Civix250 went from concept to delivered MVP.</p>
                  <p className="font-medium text-slate-800">If you're building a digital platform and need structured delivery support, let's talk.</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["#MVPDelivery", "#CivicTech", "#ITManagement", "#ProductDelivery"].map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">{tag}</span>
                  ))}
                </div>
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <a href="#contact" className="text-sm font-semibold text-slate-900 hover:underline">Get in touch →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-18 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Discuss your next IT management or MVP delivery need.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                If you need support managing a digital platform, shaping an MVP, or creating more structure around delivery and stakeholder communication, let’s talk.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-slate-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-slate-500" placeholder="you@company.com" />
                </div>
              </div>
              <div className="mt-5">
                <label className="text-sm font-medium text-slate-700">How can we help?</label>
                <textarea className="mt-2 h-36 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-slate-500" placeholder="Tell us about your IT management, MVP, delivery, or governance requirement." />
              </div>
              <button className="mt-5 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
                Submit Enquiry
              </button>
              <div className="mt-6 border-t border-slate-200 pt-5 text-sm leading-7 text-slate-600">
                <div><span className="font-medium text-slate-800">Website:</span> bidsprointernational.com</div>
                <div>
  <span className="font-medium text-slate-800">Email:</span>{" "}
  <a
    href="mailto:protim.ghosh@bidsprointernational.com"
    className="text-blue-600 hover:underline"
  >
    protim.ghosh@bidsprointernational.com
  </a>
</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} BidsPro International. All rights reserved.</div>
          <div>IT management, delivery oversight, and MVP advisory for Europe and the U.S.</div>
        </div>
      </footer>
    </div>
  );
}
