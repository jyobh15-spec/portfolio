export default function About() {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-navy mb-2">About Me</h2>
        <div className="w-12 h-1 bg-steel mb-10 rounded-full" />

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-charcoal/80 text-base leading-relaxed">
            <p>
              Jyoti Bhatt is a hybrid executive with 17 years of experience at the intersection of commercial strategy,
              operational governance, and emerging technology. Starting in finance and operations at Aon Hewitt and
              spending over a decade as a Pricing Manager at Clarivate, Jyoti has built a career around translating
              complexity into clarity.
            </p>
            <p>
              Whether designing fee architectures for global IP portfolios, building AI-powered forecasting tools in
              partnership with data science teams, or leading cross-functional transformation programs end to end —
              the throughline is the same: make the complex work simply, at scale.
            </p>
            <p>
              What sets Jyoti apart is her diverse range of skills. The financial vocabulary to speak to CFOs. The technical fluency to
              collaborate with data scientists. The people leadership to bring sales teams along on the journey.
              Backed by credentials from ISB and global bodies including PMI and Scrum Alliance, Jyoti doesn't just
              manage operations — she builds the systems and strategies that make them scale.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-[#F5F7FA] rounded-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-steel mb-3">Location</p>
              <p className="text-charcoal font-medium">Noida, India</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-steel mb-3">Experience</p>
              <p className="text-charcoal font-medium">17 Years</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-steel mb-3">Credentials</p>
              <div className="flex flex-wrap gap-2">
                {['PMP®', 'CSM®', 'Azure AI', 'ISB'].map((c) => (
                  <span key={c} className="text-xs font-semibold bg-navy text-white px-2 py-1 rounded">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
