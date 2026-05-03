export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Zoom + Invoicing
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Convert Zoom calls into<br />
          <span className="text-[#58a6ff]">billable time entries</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically extract meeting attendees, duration, and project context from Zoom.
          Match clients to billing rates and export invoice line items in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to connect Zoom. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔗", title: "Zoom OAuth", desc: "One-click connect. Meetings sync automatically after each call." },
            { icon: "💰", title: "Client Billing Rates", desc: "Map attendees to clients and set custom hourly rates per project." },
            { icon: "📤", title: "Export Anywhere", desc: "Download CSV or push line items to your invoicing tool instantly." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Zoom meeting imports",
              "Unlimited client billing profiles",
              "CSV & invoicing tool export",
              "Attendee-to-client auto-matching",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "How does the Zoom integration work?",
              a: "You authenticate with your Zoom account via OAuth. We fetch your meeting history including participants, duration, and timestamps — no manual entry needed."
            },
            {
              q: "Can I set different rates for different clients?",
              a: "Yes. You configure a billing profile per client, mapping their email domain or specific attendees to a custom hourly rate and project code."
            },
            {
              q: "What invoicing tools can I export to?",
              a: "You can export a universal CSV compatible with FreshBooks, QuickBooks, Wave, and more. Direct integrations are on the roadmap."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Zoom Meeting Invoice Tracker. All rights reserved.
      </footer>
    </main>
  );
}
