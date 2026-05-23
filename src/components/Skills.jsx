const groups = [
  {
    label: 'Commercial & Strategy',
    tags: [
      'Pricing Architecture',
      'Revenue Management',
      'Commercial Strategy',
      'Contract Analysis',
      'Margin Optimization',
      'Revenue Leakage Detection',
    ],
  },
  {
    label: 'Project & Programme Management',
    tags: ['PMO Governance', 'Agile / Scrum', 'JIRA', 'Azure DevOps (ADO)', 'MS Project', 'Cross-functional Leadership'],
  },
  {
    label: 'Technology & AI',
    tags: [
      'Python',
      'SQL',
      'Azure',
      'Azure AI Services',
      'Cloud Computing',
      'AI / Machine Learning',
      'Data Science',
      'GitHub Copilot',
      'Lovable',
      'Replit',
    ],
  },
  {
    label: 'Tools & Platforms',
    tags: ['MS Excel', 'MS Office Suite', 'Confluence', 'Power BI'],
  },
  {
    label: 'Soft Skills',
    tags: [
      'Team Leadership & Mentoring',
      'Stakeholder Management',
      'Change Management',
      'Executive Communication',
      'Strategic Planning',
    ],
  },
  {
    label: 'Certifications',
    tags: [
      'PMP® — Project Management Professional',
      'CSM® — Certified Scrum Master',
      'Azure AI Fundamentals (Microsoft)',
      'ISB — Indian School of Business',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white section-padding">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-navy mb-2">Skills</h2>
        <div className="w-12 h-1 bg-steel mb-10 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-steel mb-4">{g.label}</h3>
              <div className="flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="text-sm font-medium bg-[#F5F7FA] text-charcoal border border-[#DEE2E8] px-3 py-1.5 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
