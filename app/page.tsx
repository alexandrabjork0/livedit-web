export default function Home() {
  return (
    <main className="bg-[#08080f] text-white overflow-x-hidden">

      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-50 bg-[#08080f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tight text-white">
            LivedIt
          </span>
          <a
            href="https://testflight.apple.com/join/placeholder"
            className="text-sm font-semibold px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-400 transition-colors"
          >
            Get Early Access
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        {/* Background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-pulse absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="glow-pulse absolute top-1/3 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl" style={{ animationDelay: "1s" }} />
          <div className="glow-pulse absolute bottom-1/3 left-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now in TestFlight — iOS only
          </div>

          <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-6">
            Your life,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
              actually lived.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            LivedIt is the social bucket list app where you save experiences you
            want to do, complete them with photos and stories, and share the
            memories with your people.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://testflight.apple.com/join/placeholder"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-pink-500 font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Join TestFlight
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-2xl border border-white/15 font-semibold text-white/70 hover:border-white/30 hover:text-white transition-all"
            >
              See how it works ↓
            </a>
          </div>
        </div>

        {/* Floating phone mockup */}
        <div className="relative z-10 mt-20 float">
          <div className="w-64 h-[520px] mx-auto rounded-[44px] bg-gradient-to-br from-white/10 to-white/5 border border-white/15 shadow-2xl shadow-blue-500/10 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-900/40 via-[#08080f] to-pink-900/30 flex flex-col items-center justify-center gap-4 p-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-2xl font-black shadow-lg">
                L
              </div>
              <div className="space-y-2 w-full">
                {["Skydiving in Dubai ✓", "Northern Lights 🌌", "Run a marathon"].map((item, i) => (
                  <div key={i} className={`px-3 py-2 rounded-xl text-sm font-semibold ${i === 0 ? "bg-blue-500/20 text-blue-300 border border-blue-500/30" : "bg-white/5 text-white/50"}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-blue-500/30 rounded-full blur-xl" />
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">How it works</p>
            <h2 className="text-4xl sm:text-5xl font-black">Three steps to a life well lived</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                color: "from-blue-500 to-blue-700",
                title: "Save experiences",
                desc: "Browse curated experiences or add your own. Save them to personal or shared collections with friends.",
              },
              {
                step: "02",
                color: "from-pink-500 to-pink-700",
                title: "Go live it",
                desc: "Get out there. When you're done, mark it complete — add photos, notes, and your story.",
              },
              {
                step: "03",
                color: "from-yellow-400 to-orange-500",
                title: "Share the memory",
                desc: "Your completed experience shows up in your friends' feeds. Inspire them to do the same.",
              },
            ].map(({ step, color, title, desc }) => (
              <div
                key={step}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-white/15 transition-all"
              >
                <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${color} items-center justify-center text-sm font-black mb-5 shadow-lg`}>
                  {step}
                </div>
                <h3 className="text-xl font-black mb-2">{title}</h3>
                <p className="text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-28 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-pink-400 font-bold uppercase tracking-widest text-sm mb-3">Features</p>
            <h2 className="text-4xl sm:text-5xl font-black">Everything you need</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: "🧭", title: "Explore", desc: "Discover curated experiences filtered by category, location, and what's trending near you." },
              { emoji: "👥", title: "Social Feed", desc: "See what your friends are completing. Like, comment, and get inspired by real people." },
              { emoji: "📋", title: "Collections", desc: "Build personal bucket lists or invite friends to shared collections and plan together." },
              { emoji: "📸", title: "Complete & Share", desc: "Mark experiences done with photos, notes, and ratings. Your story, your way." },
              { emoji: "📍", title: "Near You", desc: "GPS-powered discovery shows experiences happening close to where you are right now." },
              { emoji: "🔔", title: "Notifications", desc: "Stay in the loop with likes, comments, follows, and collection invites from friends." },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:bg-white/[0.06] transition-all">
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-blue-600/20 via-pink-600/10 to-yellow-500/10 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-pink-600/10 blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-black mb-4">
                Start living your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                  list.
                </span>
              </h2>
              <p className="text-white/55 mb-8 text-lg">
                Join the early testers building their bucket lists on LivedIt. Available on iOS.
              </p>
              <a
                href="https://testflight.apple.com/join/placeholder"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500 font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Join TestFlight
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/8 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/35">
          <span className="font-black text-base text-white">
            LivedIt
          </span>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="mailto:hello@livedit.app" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
          <span>© {new Date().getFullYear()} LivedIt. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
