import { Star, TrendingUp, Cpu, Award, Users } from 'lucide-react'

const cards = [
  {
    icon: Star,
    title: 'Rare Hybrid Executive',
    body: 'Bridges structured corporate governance with next-generation digital execution — equally fluent in boardrooms and data science sprints.',
  },
  {
    icon: TrendingUp,
    title: '17 Years of Proven Commercial Impact',
    body: 'Delivered measurable revenue recovery, margin expansion, and pricing accuracy improvements at enterprise scale across global operations.',
  },
  {
    icon: Cpu,
    title: 'AI & Automation Practitioner',
    body: 'Not just a concept adopter — built rule engines and propensity models that are live in production and generating real ROI.',
  },
  {
    icon: Award,
    title: 'Certified & Credentialed',
    body: 'PMP®, CSM®, Azure AI, and ISB executive education — backed by top-tier credentials from globally recognized professional bodies.',
  },
  {
    icon: Users,
    title: 'Leader Who Builds Teams',
    body: 'Trained and mentored commercial analysts, driving adoption of analytics-driven decision-making and fostering autonomous team performance.',
  },
]

export default function WhyHireMe() {
  return (
    <section className="bg-[#F5F7FA] section-padding">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-navy mb-2">Why Hire Me</h2>
        <div className="w-12 h-1 bg-steel mb-10 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#DEE2E8] hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                <Icon size={20} className="text-navy" />
              </div>
              <h3 className="font-bold text-navy text-base mb-2">{title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
