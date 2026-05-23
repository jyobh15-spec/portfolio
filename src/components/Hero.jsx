import { ArrowDown, Download, Briefcase } from 'lucide-react'

const credentials = ['PMP®', 'CSM®', 'Azure AI', 'ISB']

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-navy flex flex-col justify-center px-6 pt-20"
    >
      <div className="max-w-5xl mx-auto w-full py-20">
        <div className="flex flex-wrap gap-2 mb-6">
          {credentials.map((c) => (
            <span
              key={c}
              className="text-xs font-semibold tracking-widest uppercase border border-steel/60 text-steel px-3 py-1 rounded-full"
            >
              {c}
            </span>
          ))}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Jyoti Bhatt
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-steel mb-6">
          Commercial Operations &amp; AI Integration Leader
        </h2>

        <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
          17 years bridging corporate governance and next-generation digital
          execution — from pricing architecture to AI-powered commercial
          strategy. I turn operational complexity into measurable business
          growth.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-steel text-white font-semibold px-6 py-3 rounded-md hover:bg-steel/80 transition-colors"
          >
            <Briefcase size={18} />
            View My Work
          </a>
          <a
            href="/Resume - Jyoti Bhatt.pdf"
            download
            className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-md hover:border-white hover:bg-white/5 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full pb-8 flex justify-start">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={24} className="text-white/40 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
