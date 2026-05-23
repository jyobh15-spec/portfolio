import { Mail } from 'lucide-react'

function GithubIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function LinkedinIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const links = [
  {
    icon: Mail,
    label: 'Email',
    display: 'jyo.bh15@gmail.com',
    href: 'mailto:jyo.bh15@gmail.com',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    display: 'linkedin.com/in/jyoti-bhatt',
    href: 'https://www.linkedin.com/in/jyoti-bhatt-pmp%C2%AE-csm%C2%AE-azure-ai-5ba8631a6',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    display: 'github.com/jyobh15-spec',
    href: 'https://github.com/jyobh15-spec',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-navy section-padding">
      <div className="container-max text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="w-12 h-1 bg-steel mb-6 rounded-full mx-auto" />
        <p className="text-white/60 text-base max-w-xl mx-auto mb-12">
          Open to new opportunities. Whether you have a role in mind or just want to connect,
          feel free to reach out through any of the channels below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {links.map(({ icon: Icon, label, display, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-xl transition-colors min-w-[220px] justify-center"
            >
              <Icon size={20} className="text-steel flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{label}</p>
                <p className="text-sm font-medium">{display}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
