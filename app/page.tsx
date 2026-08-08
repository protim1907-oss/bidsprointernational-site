export default function BidsProInternationalWebsite() {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
      title: "Product & MVP Development",
      desc: "End-to-end product definition and build leadership — from first sketch to a working MVP your users can actually try.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
        </svg>
      ),
      title: "Discovery, Scope & Roadmap",
      desc: "Structured discovery workshops that turn a raw idea into a clear scope, user journeys, platform architecture, and a phased build roadmap.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
        </svg>
      ),
      title: "Hands-On Build Leadership",
      desc: "Senior-led oversight that keeps engineering, design, and stakeholders moving together — with milestone tracking and transparent reporting along the way.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      title: "Launch & Iteration Support",
      desc: "Getting your MVP into the world, then using real user feedback to plan what gets built next — for startups, civic platforms, and growing organisations across the US and Europe.",
    },
  ];

  const sectors = [
    { label: "Civic Tech & Public-Interest Platforms", icon: "🏛️" },
    { label: "Startups & Early-Stage Products", icon: "💡" },
    { label: "Digital Transformation Initiatives", icon: "🔄" },
    { label: "SaaS & Product-Led Businesses", icon: "🚀" },
    { label: "Consulting & Professional-Services Platforms", icon: "💼" },
    { label: "Cross-Border Product Teams (US & EU)", icon: "🌐" },
  ];

  const differentiators = [
    { num: "01", title: "Product-First", desc: "Everything starts with the product: what you're building, who it's for, and what \"launched\" looks like for version one." },
    { num: "02", title: "Senior-Led", desc: "Direct involvement from experienced product and delivery leaders in every workshop, decision, and milestone — no hand-offs to junior teams." },
    { num: "03", title: "Built for Momentum", desc: "Practical, hands-on support for early-stage products and MVP builds that keeps the work moving instead of stalling." },
    { num: "04", title: "Structured, Not Bureaucratic", desc: "Just enough planning, reporting, and governance to keep a build on track — without slowing it down." },
  ];

  const capabilities = [
    "MVP and product definition: scope, user journeys, architecture, and roadmap",
    "Hands-on delivery leadership from first sprint through launch",
    "Stakeholder alignment, milestone tracking, and transparent reporting",
    "Ongoing iteration support as your product grows after launch",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}}>

      {/* ── NAV ── */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white shadow-md" style={{background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)"}}>
              B
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-slate-900">BidsPro International</div>
              <div className="text-xs text-slate-400">Product Development • MVP Delivery • Idea to Launch</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-medium text-slate-500 md:flex">
            {[["#services","What We Build"],["#sectors","Industries"],["#why-us","Why Us"],["#case-studies","Case Studies"],["#insights","Insights"],["#contact","Start a Project"]].map(([href, label]) => (
              <a key={href} href={href} className="transition hover:text-slate-900">{label}</a>
            ))}
          </nav>
          <a href="#contact" className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90" style={{background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"}}>
            Start Your Product
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden" style={{background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"}}>
          <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(99,102,241,0.1) 0%, transparent 40%)"}} />
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.3) 80px, rgba(255,255,255,0.3) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.3) 80px, rgba(255,255,255,0.3) 81px)"}} />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Serving clients across Europe and the U.S.
              </div>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                We Build Digital Products —{" "}
                <span style={{background: "linear-gradient(90deg, #60a5fa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
                  From Idea to Launch
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                BidsPro International is a product development partner for startups, civic-tech teams, and growing organisations. We take your idea from concept to a working MVP — and bring the structure, technical direction, and senior leadership real products need to actually reach launch.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90" style={{background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)"}}>
                  Start Your Product
                </a>
                <a href="#case-studies" className="rounded-2xl border border-slate-600 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition hover:bg-white/10 hover:border-slate-400">
                  See What We've Built
                </a>
              </div>
              <div className="mt-12 grid max-w-xl gap-4 sm:grid-cols-3">
                {[
                  ["Built to Launch", "MVPs that reach real users — not plans that sit on a shelf"],
                  ["Senior-Led Craft", "Direct involvement from experienced product leaders"],
                  ["Structured Momentum", "Clear roadmaps and milestones that keep builds on track"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-4 backdrop-blur">
                    <div className="text-sm font-semibold text-white">{title}</div>
                    <div className="mt-1.5 text-xs leading-5 text-slate-400">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-3xl border border-slate-700/60 bg-slate-800/50 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-2xl p-5 text-white" style={{background: "linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%)"}}>
                  <div className="text-xs font-semibold uppercase tracking-widest text-blue-200">Core Focus</div>
                  <div className="mt-2 text-xl font-semibold leading-7">Helping founders and teams turn ideas into working products — with the structure, technical direction, and delivery discipline that takes an MVP from concept to launch, and beyond.</div>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">Capabilities</div>
                    {capabilities.map((item) => (
                      <div key={item} className="mt-2 flex items-start gap-2 text-xs text-slate-300">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">Typical Engagements</div>
                    <div className="mt-2 text-xs leading-6 text-slate-300">
                      MVP builds, digital product launches, civic-tech platforms, founder-led product roadmaps, and post-launch iteration support.
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-dashed border-slate-600 p-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">Build Style</div>
                  <div className="mt-2 text-xs leading-6 text-slate-300">
                    Practical, collaborative, and launch-focused — tailored to the scale, urgency, and complexity of each product.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">What We Build</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Product &amp; MVP development built for launch</h2>
            <p className="mt-4 text-lg leading-8 text-slate-500">From first idea to a working product in users' hands — with the structure, technical direction, and senior leadership it takes to actually ship.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>
                <div className="mt-5 text-base font-bold tracking-tight text-slate-900">{service.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTORS ── */}
        <section id="sectors" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">Industries</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Industries we build products for</h2>
                <p className="mt-4 text-lg leading-8 text-slate-400">
                  We partner with founders and teams building digital products across these spaces — wherever your product needs to launch and grow.
                </p>
                <a href="#contact" className="mt-8 inline-flex rounded-2xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90" style={{background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)"}}>
                  Start Your Product
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {sectors.map((sector) => (
                  <div key={sector.label} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 transition hover:border-slate-700 hover:bg-slate-800/60">
                    <span className="text-2xl">{sector.icon}</span>
                    <span className="text-sm font-medium text-slate-300">{sector.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section id="why-us" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">Why BidsPro</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">A product partner, not just a service provider</h2>
            <p className="mt-4 text-lg leading-8 text-slate-500">BidsPro International exists to help founders and teams turn ideas into working products — combining hands-on product development with the planning discipline that keeps ambitious builds on track, without the overhead of a large agency.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.num} className="group flex gap-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                <div className="shrink-0 text-3xl font-black text-slate-100 transition group-hover:text-blue-100">{item.num}</div>
                <div>
                  <div className="text-base font-bold text-slate-900">{item.title}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section id="case-studies" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">Case Studies</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Delivery in practice</h2>
              <p className="mt-4 text-lg leading-8 text-slate-500">How BidsPro International helps clients move from idea to execution.</p>
            </div>
            <div className="mt-14 space-y-8">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="p-8 pb-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full px-4 py-1.5 text-xs font-bold text-white" style={{background: "linear-gradient(135deg, #3b82f6, #6366f1)"}}>Civix250</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600">Eboriko Support LLC</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600">MVP Planning &amp; Execution</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">Building Civix250 from the Ground Up</h3>
                </div>
                <div className="mt-6 overflow-hidden" style={{aspectRatio: "16/9"}}>
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
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="border-t border-slate-100 p-8 lg:border-r">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400">The Problem</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      Eboriko Support LLC had a clear vision for Civix250 — a civic technology platform — but no structured foundation to bring it to life. The client lacked a defined product scope, a delivery roadmap, or a prioritised set of features. Without these, the initiative risked stalling before any meaningful progress could be made.
                    </p>
                  </div>
                  <div className="border-t border-slate-100 p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400">The Solution</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      BidsPro International led end-to-end MVP planning and execution for Civix250. We ran structured discovery sessions, mapped user journeys, defined platform modules, and built a phased delivery roadmap with clear milestones. We stayed through execution — tracking progress, managing stakeholders, and keeping the build on schedule from day one.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="p-8 pb-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full px-4 py-1.5 text-xs font-bold text-white" style={{background: "linear-gradient(135deg, #3b82f6, #6366f1)"}}>Website Redesign</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600">Global Semiconductor Company</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600">UI/UX &amp; Frontend</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">Website Redesign for a Global Semiconductor Company</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    How BidsPro International helped a global semiconductor manufacturer revamp its website to better reflect its supply-chain vision and improve UI — achieving 40% growth in engaged sessions.
                  </p>
                </div>
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="border-t border-slate-100 p-8 lg:border-r">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400">The Problem</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      The client — a global semiconductor manufacturer evolving from a memory supplier into a “Full Stack AI Memory Creator” — needed a more user-friendly, visually engaging website to reflect its AI-driven mission and growing influence in the semiconductor space. The goals: a modern, intuitive frontend; seamless navigation and clear communication for users, enterprise partners, and the broader industry; and stronger site performance and engagement.
                    </p>
                  </div>
                  <div className="border-t border-slate-100 p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400">The Solution</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      BidsPro International delivered an end-to-end redesign. After a kickoff and discovery phase to align on goals and scope, our design team crafted a visually appealing, functional layout reflecting the client&apos;s AI-driven, tech-forward ethos. We built the site on Drupal 10 — with Tailwind CSS and TypeScript — integrating cleanly with the client&apos;s existing backend and streamlining content workflows for rapid component delivery.
                    </p>
                  </div>
                </div>
                <div className="border-t border-slate-100 p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">The Solution in practice</div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <figure className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                      <img src="/case-studies/semiconductor-layout.png" alt="Redesigned website layout — streamlined navigation, clear hero messaging, and modular content blocks" className="block w-full" />
                      <figcaption className="px-4 py-3 text-xs leading-5 text-slate-500">New site layout — streamlined navigation, clear hero messaging, and modular content blocks.</figcaption>
                    </figure>
                    <figure className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                      <img src="/case-studies/semiconductor-hero.png" alt="Redesigned AI-memory hero banner" className="block w-full" />
                      <figcaption className="px-4 py-3 text-xs leading-5 text-slate-500">Refreshed hero reflecting the client&apos;s AI-driven, semiconductor-forward brand.</figcaption>
                    </figure>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-100 bg-slate-50 px-8 py-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Results</div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-700">
                    <span><span className="text-green-600">+40%</span> engaged sessions</span>
                    <span><span className="text-green-600">+24%</span> sessions</span>
                    <span><span className="text-green-600">+54%</span> event count</span>
                    <span><span className="text-green-600">+24%</span> events / session</span>
                  </div>
                  <a
                    href="/case-studies/website-redesign-semiconductor.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download case study (PDF)
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="p-8 pb-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full px-4 py-1.5 text-xs font-bold text-white" style={{background: "linear-gradient(135deg, #3b82f6, #6366f1)"}}>KYC Compliance</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600">New Jersey Fintech</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600">Mobile &amp; Backend Engineering</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">Building a Compliant KYC Experience for a Growing New Jersey Fintech</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    How a multi-layered identity-verification framework helped a fast-growing consumer finance app scale onboarding across new U.S. states without compromising on regulatory compliance.
                  </p>
                </div>
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="border-t border-slate-100 p-8 lg:border-r">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400">The Problem</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      A digital-first lender serving underbanked households crossed a million active customers in under a year — and its single-market verification setup couldn&apos;t keep up with multi-state expansion. Verification vendors returned inconsistent match confidence, mismatched ID, address, and phone records forced legitimate users into manual-review queues and abandoned sign-ups, and every new state added its own identity-proofing, disclosure, and recordkeeping rules amid constantly shifting AML and data-protection standards.
                    </p>
                  </div>
                  <div className="border-t border-slate-100 p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400">The Solution</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      BidsPro International rebuilt the identity layer as a flexible, multi-provider framework. We combined liveness-checked facial recognition with automated government-ID scanning, cross-checked Social Security records, address history, and phone-number ownership, and added an orchestration layer that routes each verification to the right vendor based on the customer&apos;s home state — so new regional providers plug in without touching core app code. The stack pairs a React Native mobile app with a modular NestJS backend and field-level AES-256 encryption on AWS, keeping verification logic decoupled from the app&apos;s release cycle.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-100 bg-slate-50 px-8 py-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Results</div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-700">
                    <span><span className="text-green-600">&lt; 6 weeks</span> to onboard a new regional provider</span>
                    <span><span className="text-green-600">1M+</span> active customers supported</span>
                    <span><span className="text-green-600">Multi-state</span> compliant launches</span>
                    <span><span className="text-green-600">9/10</span> client satisfaction</span>
                  </div>
                  <a
                    href="/case-studies/kyc-compliance-new-jersey-fintech.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download case study (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── APPROACH ── */}
        <section style={{background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"}}>
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
              <div>
                <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">How We Build</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">A structured path from concept to launch</h2>
                <p className="mt-4 text-lg leading-8 text-slate-400">
                  Most products don't fail because the idea was wrong — they fail because no one carried the plan through to launch. Here's how we keep that from happening to yours.
                </p>
              </div>
              <div className="grid gap-3">
                {[
                  ["01", "Discover — stakeholder workshops and scope alignment"],
                  ["02", "Define — roadmap planning, user journeys, and milestones"],
                  ["03", "Build — hands-on execution, tracking, and reporting"],
                  ["04", "Launch & Grow — coordination through launch and beyond"],
                ].map(([num, item]) => (
                  <div key={num} className="flex items-center gap-4 rounded-2xl border border-slate-700/60 bg-slate-800/50 px-6 py-4">
                    <span className="text-xs font-black text-blue-500">{num}</span>
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INSIGHTS ── */}
        <section id="insights" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">Insights</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">From the field</h2>
          </div>
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-base font-bold text-white shadow-md" style={{background: "linear-gradient(135deg, #3b82f6, #6366f1)"}}>B</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">BidsPro International</div>
                  <div className="text-xs text-slate-400">IT Management • Program Delivery • MVP Advisory</div>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <p className="text-base font-bold text-slate-900">Most MVPs don't fail because of bad ideas — they fail because of poor delivery structure.</p>
                <p>When Eboriko Support LLC came to us, they had a clear vision for Civix250, a civic technology platform built to make a real difference. What they didn't have was a structured path to get there. No defined scope, no delivery roadmap, no process for turning ideas into an MVP.</p>
                <p>That's where BidsPro International stepped in.</p>
                <p>We ran structured discovery sessions, mapped user journeys, defined platform modules, and built a phased roadmap with clear milestones and ownership. Then we stayed through execution — tracking progress, managing stakeholders, and keeping the build focused and on schedule.</p>
                <p>Civix250 went from concept to delivered MVP.</p>
                <p className="font-semibold text-slate-800">If you're building a digital platform and need structured delivery support, let's talk.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["#MVPDelivery", "#CivicTech", "#ITManagement", "#ProductDelivery"].map((tag) => (
                  <span key={tag} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">{tag}</span>
                ))}
              </div>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <a href="#contact" className="text-sm font-bold text-blue-600 transition hover:text-blue-700">Get in touch →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">Start a Project</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Have a product idea? Let's build it.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-500">
                  Whether you're starting from a sketch on a napkin or a half-built platform that's lost momentum, BidsPro International can help you define it, plan it, and bring it to launch. Tell us what you're building.
                </p>
                <div className="mt-8 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2"><span className="font-semibold text-slate-800">Website:</span> bidsprointernational.com</div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800">Email:</span>
                    <a href="mailto:protimghosh@bidsprointernational.com" className="text-blue-600 hover:underline">protimghosh@bidsprointernational.com</a>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                    <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                    <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100" placeholder="you@company.com" />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">How can we help?</label>
                  <textarea className="mt-2 h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100" placeholder="Tell us about the product or MVP you want to build." />
                </div>
                <button className="mt-5 w-full rounded-2xl py-3.5 text-sm font-bold text-white shadow-md transition hover:opacity-90" style={{background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)"}}>
                  Tell Us About Your Product
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer style={{background: "#0f172a"}}>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} BidsPro International. All rights reserved.</div>
          <div>Product development, MVP delivery, and launch support for Europe and the U.S.</div>
        </div>
      </footer>

    </div>
  );
}
