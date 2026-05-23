const jobs = [
  {
    title: 'Pricing Manager — Commercial Function',
    company: 'Clarivate',
    location: 'Noida, India',
    period: 'April 2011 – January 2026',
    bullets: [
      'Maintained comprehensive fee architectures across multiple Clarivate entities with 100% accuracy across agent fees, patent office fees, and margin realizations.',
      'Created bespoke client charging profiles through deep-dive contract analysis, aligning system configurations with complex revised service agreements.',
      'Identified and mitigated revenue leakage through rigorous data analytics and pricing reviews, delivering immediate margin recovery.',
      'Collaborated with Deals and SAM teams to provide precision pricing data for high-stakes quotes, ensuring seamless implementation of agreed commercial terms.',
      'Spearheaded digital transformation by migrating legacy email workflows to JIRA; designed custom project templates that standardized intake and increased operational transparency.',
      'Leveraged JIRA as a core PMO tool to manage diverse commercial projects, optimizing resource allocation and cross-departmental collaboration.',
      'Implemented Revenue Protection initiatives identifying untapped opportunities for supplemental revenue generation.',
      'Orchestrated end-to-end renewal and recordal payment cycles, managing vendor account settlements and complex client billing reconciliations.',
      'Managed high-value deposit accounts with global Patent Offices, performing monthly reconciliations and ensuring continuous IP filing coverage.',
      'Trained and mentored a team of commercial analysts, accelerating capability and transitioning the team toward autonomous, analytics-driven decision-making.',
      'Conducted weekly internal audit framework to validate system changes against source inputs, maintaining high-fidelity data and reducing manual error rates.',
    ],
  },
  {
    title: 'Team Member — Direct Billing & Payments',
    company: 'Aon Hewitt',
    location: 'Noida, India',
    period: 'February 2009 – April 2011',
    bullets: [
      'Directed issue resolution workflow and implemented corrective actions to drive continuous process improvement and service accuracy.',
      'Maintained high-quality standards for project documentation, work instructions, and operational records, ensuring regulatory compliance and data integrity.',
      'Provided comprehensive operational support for the Direct Billing & Payments process, ensuring accuracy and timeliness of all related activities.',
      'Supported Absence Management program phases including indexing, manual correspondence, acknowledgement processing, and internal audits.',
      'Assisted in developing and formalizing Standard Operating Procedures (SOPs) to standardize workflows and improve efficiency.',
      'Executed internal, external, and targeted audits to assess process quality, identify gaps, and define robust remediation plans.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-white section-padding">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-navy mb-2">Work Experience</h2>
        <div className="w-12 h-1 bg-steel mb-12 rounded-full" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#DEE2E8] ml-[7px] hidden sm:block" />

          <div className="space-y-12">
            {jobs.map((job) => (
              <div key={job.title} className="sm:pl-10 relative">
                {/* Timeline dot */}
                <div className="hidden sm:block absolute left-0 top-1.5 w-4 h-4 rounded-full bg-steel border-2 border-white shadow" />

                <div className="bg-[#F5F7FA] rounded-xl p-6 border border-[#DEE2E8]">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-navy text-lg">{job.title}</h3>
                    <span className="text-xs font-medium text-white bg-navy px-3 py-1 rounded-full whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-steel font-semibold text-sm mb-4">
                    {job.company} &middot; {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-sm text-charcoal/75 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-steel flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
