const projects = [
  {
    title: 'Pricing Automation Suite',
    type: 'Internal Tool / Business Transformation',
    problem:
      'Pricing was manual and fragmented. As volumes scaled, quote turnaround slowed, inconsistencies increased, and sales teams over-relied on the core pricing team.',
    built:
      'Built a Dynamic Rule Engine that auto-applies pricing logic when a region and product are entered, and an AI Forecasting Module using a Propensity Model to predict the highest price a customer would likely accept — replacing manual annual markup reviews.',
    outcome:
      'Quote turnaround dropped significantly. Pricing accuracy improved. Leadership gained real-time dashboard visibility. Pricing shifted from a bottleneck to a strategic business enabler.',
    tags: ['Python', 'AI/ML', 'Propensity Modelling', 'Azure', 'Data Science', 'JIRA'],
  },
  {
    title: 'The Leakage Locator (Pricing Audit AI)',
    type: 'Internal AI Tool',
    problem:
      'Manual audits covered only ~5% of monthly transactions, leaving 95% of revenue unverified and pricing errors undetected.',
    built:
      'A Python-based automated audit scanner connecting SQL databases to compare Contracted Price vs. Invoiced Price across 100% of transactions. The model distinguishes between legitimate variances and true billing errors. Delivered in 3 phases over 12 weeks using Scrum.',
    outcome:
      'Audit coverage increased from 5% to 100%. Real-time revenue leakage identification. Recovery rate tracked via a Value Realization Tracker. False-positive rate managed through data governance checks.',
    tags: ['Python', 'SQL', 'Azure', 'AI/ML', 'Scrum', 'Confluence', 'Data Governance'],
  },
  {
    title: 'AI & Data Science Integration',
    type: 'Strategic Initiative',
    problem:
      'Clarivate wanted to shift from reactive pricing to predictive, insight-driven commercial strategy — but AI adoption across business teams was limited.',
    built:
      'Acted as the bridge between commercial teams and Data Science. Translated business problems into data requirements; integrated AI models into renewal forecasting, client portfolio assessment, and discount strategy workflows.',
    outcome:
      'AI insights became embedded in everyday pricing decisions. Forecast accuracy improved. Leadership proactively managed renewals, margins, and client risk.',
    tags: ['AI/ML', 'Azure AI', 'Data Science', 'Commercial Strategy', 'Stakeholder Management'],
  },
  {
    title: 'Sales Enablement & Change Adoption',
    type: 'Change Management / Enablement',
    problem:
      'New pricing tools consistently failed to gain adoption — sales teams ignored or worked around them, negating the investment.',
    built:
      'Designed and delivered structured sales enablement programs including training sessions, documentation, and ongoing advisory support. Repositioned pricing tools as business enablers rather than controls.',
    outcome:
      'Sales adoption increased significantly. Pricing compliance improved. Sales teams quoted faster and more confidently, leading to better customer experience and shorter deal cycles.',
    tags: ['Change Management', 'Training & Enablement', 'JIRA', 'PMO', 'Agile'],
  },
  {
    title: 'Cross-Functional Commercial PMO',
    type: 'Programme Management',
    problem:
      'Multiple commercial initiatives ran in parallel across Sales, Finance, Product, IT, and Data Science — creating dependency risks, resource conflicts, and poor visibility.',
    built:
      'Applied PMO governance and Agile practices using JIRA, Azure DevOps, and MS Project. Facilitated cross-functional alignment, tracked risks, enforced ownership, and managed delivery timelines end to end.',
    outcome:
      'Projects delivered on schedule with fewer escalations. Stakeholders had clear visibility. Commercial initiatives aligned more closely with pricing strategy and growth targets.',
    tags: ['PMO', 'Agile', 'JIRA', 'ADO', 'MS Project', 'Cross-functional Leadership'],
  },
  {
    title: 'QA & Audit Leadership',
    type: 'Quality Assurance / Compliance · Aon Hewitt',
    problem:
      'In Direct Billing & Payments, accuracy and compliance were critical — but process gaps created audit risk and threatened client satisfaction.',
    built:
      'Managed QA workflows end to end. Executed internal and external audits, identified process gaps, developed corrective action plans, and formalized SOPs to standardize operations.',
    outcome:
      'Process accuracy improved. Audit findings reduced. Team consistently met compliance benchmarks. Resulted in client appreciation and multiple internal recognition awards.',
    tags: ['QA', 'Audit', 'SOP Development', 'Compliance', 'Process Improvement'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-[#F5F7FA] section-padding">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-navy mb-2">Projects</h2>
        <div className="w-12 h-1 bg-steel mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl p-6 border border-[#DEE2E8] shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-steel mb-2">{p.type}</p>
              <h3 className="font-bold text-navy text-lg mb-4">{p.title}</h3>

              <div className="space-y-3 text-sm text-charcoal/75 leading-relaxed flex-1">
                <div>
                  <span className="font-semibold text-charcoal">Problem: </span>
                  {p.problem}
                </div>
                <div>
                  <span className="font-semibold text-charcoal">What was built: </span>
                  {p.built}
                </div>
                <div>
                  <span className="font-semibold text-charcoal">Outcome: </span>
                  {p.outcome}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-navy/8 text-navy px-2.5 py-1 rounded-full border border-navy/15"
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
