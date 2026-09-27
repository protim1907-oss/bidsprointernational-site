import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";
import ScrollProgress from "./components/ScrollProgress";
import TechMarquee from "./components/TechMarquee";
import LaptopFrame from "./components/LaptopFrame";

export default function BidsProInternationalWebsite() {
  const stats = [
    { value: 1, suffix: "M+", decimals: 0, label: "Active users supported across delivered products" },
    { value: 40, prefix: "+", suffix: "%", decimals: 0, label: "Peak engagement lift from a product redesign" },
    { value: 6, prefix: "< ", suffix: " wks", decimals: 0, label: "To stand up a new market for a scaling fintech" },
    { value: 9, suffix: "/10", decimals: 0, label: "Client-reported satisfaction on delivery" },
  ];

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
      title: "AI-Powered MVPs & Prototypes",
      desc: "We use AI coding agents and automated workflows to turn your idea into a clickable prototype in days and a working MVP your users can try in weeks — not months.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
        </svg>
      ),
      title: "Custom Software Applications",
      desc: "Web, mobile, and internal tools built with AI-accelerated engineering — senior engineers direct the agents, review every change, and own the architecture.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
        </svg>
      ),
      title: "Software Configuration & Integration",
      desc: "Configuring and connecting the platforms you already run — CRMs, ERPs, accounting, and SaaS tools — with AI-assisted setup, data mapping, and testing.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      title: "AI Agents & Workflow Automation",
      desc: "Agentic features inside your product and automations around it — assistants, inbound triage, voice agents, and back-office workflows that run with humans in the loop.",
    },
  ];

  const sectors = [
    { label: "Civic Tech & Public-Interest Platforms", icon: "🏛️" },
    { label: "Startups & Early-Stage Products", icon: "💡" },
    { label: "AI Adoption & Digital Transformation", icon: "🤖" },
    { label: "SaaS & Product-Led Businesses", icon: "🚀" },
    { label: "Consulting & Professional-Services Platforms", icon: "💼" },
    { label: "Cross-Border Product Teams (US & EU)", icon: "🌐" },
  ];

  const differentiators = [
    { num: "01", title: "AI-Native Delivery", desc: "AI is built into how we work — research, specs, prototyping, coding, testing, and documentation — so you get more product for the same budget and time." },
    { num: "02", title: "Senior-Led, Human-Reviewed", desc: "Experienced product and engineering leaders steer the AI and review what it produces. Agents speed up the work; people stay accountable for quality and decisions." },
    { num: "03", title: "Speed Without Shortcuts", desc: "Faster iterations mean you see working software early, test it with real users, and change direction cheaply — without skipping security or code quality." },
    { num: "04", title: "Product-First, Not Hype-First", desc: "We use AI where it moves the product forward, not as a buzzword. Everything starts with what you're building, who it's for, and what launch looks like." },
  ];

  const capabilities = [
    "AI-accelerated MVPs and rapid prototypes",
    "Custom web, mobile, and internal software",
    "Software configuration and system integration",
    "AI agents and workflow automation, human-in-the-loop",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}}>

      <ScrollProgress />

      {/* ── NAV ── */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white shadow-md" style={{background: "linear-gradient(135deg, #16a34a 0%, #059669 100%)"}}>
              B
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-slate-900">BidsPro International</div>
              <div className="text-xs text-slate-400">AI-Powered MVPs • Custom Software • Automation</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-medium text-slate-500 md:flex">
            {[["#services","What We Build"],["#sectors","Industries"],["#why-us","Why Us"],["#case-studies","Case Studies"],["#insights","Insights"],["#contact","Start a Project"]].map(([href, label]) => (
              <a key={href} href={href} className="transition hover:text-slate-900">{label}</a>
            ))}
          </nav>
          <a href="#contact" className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90" style={{background: "linear-gradient(135deg, #16a34a 0%, #059669 100%)"}}>
            Start Your Product
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden" style={{background: "#ffffff"}}>
          <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.1) 0%, transparent 40%)"}} />
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(22,163,74,0.5) 80px, rgba(22,163,74,0.5) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(22,163,74,0.5) 80px, rgba(22,163,74,0.5) 81px)"}} />
          {/* floating gradient blobs */}
          <div className="bp-blob pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{background: "radial-gradient(circle, rgba(34,197,94,0.5), transparent 70%)"}} />
          <div className="bp-blob-slow pointer-events-none absolute -right-16 bottom-0 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl" style={{background: "radial-gradient(circle, rgba(16,185,129,0.5), transparent 70%)"}} />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
            <div>
              <div className="bp-enter bp-enter-1 mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-medium text-green-700">
                <span className="bp-pulse-dot h-1.5 w-1.5 rounded-full bg-green-400" />
                AI-native product studio · Europe &amp; the U.S.
              </div>
              <h1 className="bp-enter bp-enter-2 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-green-700 sm:text-5xl lg:text-6xl">
                We Build Software with AI —{" "}
                <span className="bp-gradient-text" style={{background: "linear-gradient(90deg, #22c55e, #10b981, #22c55e)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent"}}>
                  Idea to Launch, Faster
                </span>
              </h1>
              <p className="bp-enter bp-enter-3 mt-6 max-w-xl text-lg leading-8 text-slate-600">
                BidsPro International builds MVPs, prototypes, and custom software using AI agents and automated workflows — directed and reviewed by senior engineers. You get working software sooner, for less, with the structure and leadership it takes to actually reach launch.
              </p>
              <div className="bp-enter bp-enter-4 mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-green-500/30" style={{background: "linear-gradient(135deg, #16a34a 0%, #059669 100%)"}}>
                  Start Your Product
                </a>
                <a href="#case-studies" className="rounded-2xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-green-50 hover:border-green-300">
                  See What We've Built
                </a>
              </div>
              <div className="bp-enter bp-enter-5 mt-12 grid max-w-xl gap-4 sm:grid-cols-3">
                {[
                  ["AI-Accelerated", "Agentic workflows compress weeks of build into days"],
                  ["Senior-Led", "Experienced leaders steer the AI and own every decision"],
                  ["Built to Launch", "Working software in users' hands, not slideware"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-50">
                    <div className="text-sm font-semibold text-green-700">{title}</div>
                    <div className="mt-1.5 text-xs leading-5 text-slate-600">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bp-enter bp-enter-4 flex items-center">
              <LaptopFrame>
                <div className="rounded-2xl border border-green-200 bg-white p-5 text-green-700">
                  <div className="text-xs font-semibold uppercase tracking-widest text-green-700">Core Focus</div>
                  <div className="mt-2 text-xl font-semibold leading-7">Using AI agents and automated workflows to design, build, and ship MVPs and custom software — faster than a traditional team, with senior engineers accountable for every line.</div>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-widest text-slate-600">Capabilities</div>
                    {capabilities.map((item) => (
                      <div key={item} className="mt-2 flex items-start gap-2 text-xs text-slate-600">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-widest text-slate-600">Typical Engagements</div>
                    <div className="mt-2 text-xs leading-6 text-slate-600">
                      AI-built MVPs and prototypes, custom business applications, platform configuration and integrations, and AI agents embedded in existing products.
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-dashed border-slate-300 p-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-600">How We Work</div>
                  <div className="mt-2 text-xs leading-6 text-slate-600">
                    AI does the heavy lifting; people make the calls. Practical, collaborative, and launch-focused.
                  </div>
                </div>
              </LaptopFrame>
            </div>
          </div>
        </section>

        {/* ── TECH MARQUEE ── */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
              AI-native tooling on proven, production-grade stacks
            </div>
            <TechMarquee />
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <Reveal className="mx-auto max-w-2xl text-center">
              <div className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-600">By the numbers</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">Outcomes we&apos;ve delivered</h2>
              <p className="mt-4 text-lg leading-8 text-slate-500">Real results from products we&apos;ve helped take from idea to launch.</p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 90}>
                  <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
                    <div className="text-4xl font-black tracking-tight sm:text-5xl" style={{background: "linear-gradient(135deg, #16a34a, #059669)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent"}}>
                      <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
                    </div>
                    <div className="mt-3 text-sm leading-6 text-slate-500">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-600">What We Build</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">AI-accelerated software, built for launch</h2>
            <p className="mt-4 text-lg leading-8 text-slate-500">MVPs, custom applications, and software configuration — delivered with AI agents and automated workflows, and led by people who've shipped real products.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 90}>
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white group-hover:scale-110">
                    {service.icon}
                  </div>
                  <div className="mt-5 text-base font-bold tracking-tight text-slate-900">{service.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── SECTORS ── */}
        <section id="sectors" className="bg-white text-green-700">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-700">Industries</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">Industries we build products for</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  We partner with founders and teams across these spaces — bringing AI-accelerated delivery wherever your product needs to launch and grow.
                </p>
                <a href="#contact" className="mt-8 inline-flex rounded-2xl px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:opacity-90" style={{background: "linear-gradient(135deg, #16a34a 0%, #059669 100%)"}}>
                  Start Your Product
                </a>
              </Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                {sectors.map((sector, i) => (
                  <Reveal key={sector.label} delay={i * 70}>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 transition duration-200 hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-50">
                      <span className="text-2xl transition-transform duration-200 group-hover:scale-110">{sector.icon}</span>
                      <span className="text-sm font-medium text-slate-600">{sector.label}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section id="why-us" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-600">Why BidsPro</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">An AI-native product partner, not a traditional agency</h2>
            <p className="mt-4 text-lg leading-8 text-slate-500">BidsPro International combines AI-powered engineering with senior product leadership — so founders and teams get working software faster and more affordably, without the overhead of a large agency.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {differentiators.map((item, i) => (
              <Reveal key={item.num} delay={i * 90}>
                <div className="group flex h-full gap-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-md">
                  <div className="shrink-0 text-3xl font-black text-slate-100 transition duration-200 group-hover:text-green-200 group-hover:scale-110">{item.num}</div>
                  <div>
                    <div className="text-base font-bold text-slate-900">{item.title}</div>
                    <div className="mt-2 text-sm leading-7 text-slate-500">{item.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section id="case-studies" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <Reveal className="text-center max-w-2xl mx-auto">
              <div className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-600">Case Studies</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">Delivery in practice</h2>
              <p className="mt-4 text-lg leading-8 text-slate-500">Products we&apos;ve planned, built, and shipped — including our own AI-native software.</p>
            </Reveal>
            <div className="mt-14 space-y-8">
              <Reveal>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="p-8 pb-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full px-4 py-1.5 text-xs font-bold text-white" style={{background: "linear-gradient(135deg, #16a34a, #059669)"}}>Bump</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600">In-house SaaS Product</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600">AI Product Demo</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">Bump — An AI Accounts Receivable Collection Engine</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Built by BidsPro International: Bump prioritises who to chase, escalates across email and WhatsApp, tracks promises-to-pay and payment plans, and collects on autopilot. Watch the product demo below.
                  </p>
                </div>
                <div className="mt-6 overflow-hidden bg-slate-900" style={{aspectRatio: "16/9"}}>
                  <video
                    src="/videos/bump-product-demo.mp4#t=0.5"
                    controls
                    playsInline
                    preload="metadata"
                    className="block h-full w-full"
                    title="Bump product demo – BidsPro International"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-100 bg-slate-50 px-8 py-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Highlights</div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-700">
                    <span><span className="text-green-600">AI worklist</span> of who to chase today</span>
                    <span><span className="text-green-600">Email → WhatsApp</span> escalation</span>
                    <span><span className="text-green-600">Promise-to-pay</span> tracking</span>
                    <span><span className="text-green-600">Autonomy dial</span> with guardrails</span>
                  </div>
                  <a
                    href="https://bumppaid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-2 rounded-2xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
                  >
                    Visit bumppaid.com
                  </a>
                </div>
              </div>
              </Reveal>
              <Reveal>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="p-8 pb-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full px-4 py-1.5 text-xs font-bold text-white" style={{background: "linear-gradient(135deg, #16a34a, #059669)"}}>Civix250</span>
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
              </Reveal>

              <Reveal>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="p-8 pb-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full px-4 py-1.5 text-xs font-bold text-white" style={{background: "linear-gradient(135deg, #16a34a, #059669)"}}>Website Redesign</span>
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
                    className="ml-auto inline-flex items-center gap-2 rounded-2xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download case study (PDF)
                  </a>
                </div>
              </div>
              </Reveal>

              <Reveal>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="p-8 pb-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full px-4 py-1.5 text-xs font-bold text-white" style={{background: "linear-gradient(135deg, #16a34a, #059669)"}}>KYC Compliance</span>
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
                    className="ml-auto inline-flex items-center gap-2 rounded-2xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download case study (PDF)
                  </a>
                </div>
              </div>
              </Reveal>

              <Reveal>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="p-8 pb-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full px-4 py-1.5 text-xs font-bold text-white" style={{background: "linear-gradient(135deg, #16a34a, #059669)"}}>MVP Design &amp; Development</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600">Local Delivery &amp; Q-Commerce · Romania</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600">Product Strategy &amp; MVP Engineering</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">Building the MVP for a Local Delivery Platform in Romania</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    How a lean product engineering team took a local delivery concept from zero to a live, multi-sided marketplace in months, not years.
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
                      A founding team had validated a local delivery concept for Romania but had no product yet — no app, no backend, no courier network, and no internal engineering team. Launching meant designing for three users at once — customers who needed fast, trustworthy ordering; restaurants and shops who needed simple order management; and couriers who needed clear, real-time job assignments — all on a limited runway, with no existing payments, tracking, or dispatch infrastructure, and a foundation that would later have to scale to new cities without a rebuild.
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
                      BidsPro International designed and shipped the MVP as four connected modules on a shared backend, so a change in one — a new payment method or an updated dispatch rule — flows through the whole platform. We built a streamlined customer ordering app, a real-time courier dispatch engine with live-map tracking, a lightweight partner portal for restaurants and shops, and an internal admin &amp; analytics dashboard — moving at startup speed while making architecture decisions that support new cities and categories without a rebuild.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-100 bg-slate-50 px-8 py-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Results</div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-700">
                    <span><span className="text-green-600">Months, not years</span> to a live MVP</span>
                    <span><span className="text-green-600">3-sided</span> marketplace launched as one platform</span>
                    <span><span className="text-green-600">Live orders</span> validating the model</span>
                    <span><span className="text-green-600">Built to extend</span> — new cities, no rebuild</span>
                  </div>
                  <a
                    href="/case-studies/local-delivery-platform-mvp-romania.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-2 rounded-2xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download case study (PDF)
                  </a>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── APPROACH ── */}
        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
              <Reveal>
                <div className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-700">How We Build</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">An AI-accelerated path from concept to launch</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  AI agents do the repetitive work at every stage; senior people make the decisions and review the output. The result: shorter cycles, earlier feedback, and a clear path to launch.
                </p>
              </Reveal>
              <div className="grid gap-3">
                {[
                  ["01", "Discover — workshops plus AI-assisted research and requirements"],
                  ["02", "Prototype — AI-generated, clickable prototypes to validate early"],
                  ["03", "Build — agentic coding and automated testing, human-reviewed"],
                  ["04", "Launch & Grow — AI-powered monitoring, feedback, and iteration"],
                ].map(([num, item], i) => (
                  <Reveal key={num} delay={i * 90}>
                    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-green-500/40 hover:bg-green-50">
                      <span className="text-xs font-black text-green-500 transition-transform duration-200 group-hover:scale-125">{num}</span>
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INSIGHTS ── */}
        <section id="insights" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-600">Insights</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">From the field</h2>
          </Reveal>
          <Reveal className="mt-14 max-w-3xl mx-auto">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-base font-bold text-white shadow-md" style={{background: "linear-gradient(135deg, #16a34a, #059669)"}}>B</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">BidsPro International</div>
                  <div className="text-xs text-slate-400">AI Product Development • MVP Delivery • Custom Software</div>
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
                  <span key={tag} className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-medium text-green-600">{tag}</span>
                ))}
              </div>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <a href="#contact" className="text-sm font-bold text-green-600 transition hover:text-green-700">Get in touch →</a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-green-600">Start a Project</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">Have a product idea? Let's build it — with AI.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-500">
                  Whether you're starting from a sketch on a napkin, a half-built platform that's lost momentum, or software you need configured and automated, BidsPro International can prototype it, build it with AI, and bring it to launch. Tell us what you're building.
                </p>
                <div className="mt-8 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2"><span className="font-semibold text-slate-800">Website:</span> bidsprointernational.com</div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800">Email:</span>
                    <a href="mailto:protimghosh@bidsprointernational.com" className="text-green-600 hover:underline">protimghosh@bidsprointernational.com</a>
                  </div>
                </div>
              </Reveal>
              <Reveal>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                    <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-100" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                    <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-100" placeholder="you@company.com" />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">How can we help?</label>
                  <textarea className="mt-2 h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-100" placeholder="Tell us about the product or MVP you want to build." />
                </div>
                <button className="mt-5 w-full rounded-2xl py-3.5 text-sm font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90" style={{background: "linear-gradient(135deg, #16a34a 0%, #059669 100%)"}}>
                  Tell Us About Your Product
                </button>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} BidsPro International. All rights reserved.</div>
          <div>AI-powered MVPs, custom software, and automation for Europe and the U.S.</div>
        </div>
      </footer>

    </div>
  );
}
