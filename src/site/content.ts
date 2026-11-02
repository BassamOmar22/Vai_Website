type Card = { title: string; body: string };
type Hero = { eyebrow: string; heading: string; body: string; primaryCta: string; secondaryCta?: string };

export const metadata = {
  home: { title: 'VAI | Practical AI and Business Intelligence for Operating Teams', description: 'VAI helps operating teams turn complex business activity into clearer decisions, structured workflows, and governed intelligence systems.' },
  solutions: { title: 'Solutions | VAI', description: 'Explore VAI solution areas across retail, construction, FMCG, automotive, and hospitality.' },
  retail: { title: 'Retail Intelligence Solutions | VAI', description: 'VAI helps retail teams improve visibility across trading activity, demand, inventory, customer behavior, and operating workflows.' },
  construction: { title: 'Construction Intelligence Solutions | VAI', description: 'VAI supports construction teams with intelligence for planning, progress visibility, commercial control, coordination, and risk-aware decisions.' },
  fmcg: { title: 'FMCG Intelligence Solutions | VAI', description: 'VAI helps FMCG teams connect sales execution, market movement, distribution signals, and category performance into clearer workflows.' },
  automotive: { title: 'Automotive Intelligence Solutions | VAI', description: 'VAI helps automotive teams structure demand, inventory, dealer performance, aftersales, and customer journey signals into clearer intelligence.' },
  hospitality: { title: 'Hospitality Intelligence Solutions | VAI', description: 'VAI helps hospitality teams improve service visibility, guest experience workflows, operating consistency, and performance rhythm.' },
  vaiInPractice: { title: 'VAI in Practice | Evidence and Application', description: 'See how VAI frames practical intelligence work through evidence boundaries, operating workflows, and usable outputs.' },
  architectureGovernance: { title: 'Architecture & Governance | VAI', description: 'VAI structures intelligence work around business context, data boundaries, workflow design, review points, and governance.' },
  about: { title: 'About VAI | Practical Intelligence for Business Teams', description: 'VAI works at the intersection of commercial understanding, technical delivery, AI workflows, and governed business intelligence.' },
  contact: { title: 'Contact VAI | Start a Conversation', description: 'Contact VAI to discuss an AI, business intelligence, workflow, or governance opportunity.' },
  privacy: { title: 'Privacy | VAI', description: 'Privacy information for the VAI website and enquiry process.' },
  terms: { title: 'Terms | VAI', description: 'Terms information for use of the VAI website.' },
  thankYou: { title: 'Thank You | VAI', description: 'Your enquiry has been received.' },
};

export const industries = [
  { key: 'retail', label: 'Retail', path: '/solutions/retail', code: 'R', body: 'Improve visibility across demand, trading activity, stock movement, customer behavior, and store or channel performance.' },
  { key: 'construction', label: 'Construction', path: '/solutions/construction', code: 'C', body: 'Support planning, progress visibility, commercial control, resource coordination, and risk-aware project decisions.' },
  { key: 'fmcg', label: 'FMCG', path: '/solutions/fmcg', code: 'F', body: 'Connect market movement, sales execution, distribution signals, category performance, and supply-side realities.' },
  { key: 'automotive', label: 'Automotive', path: '/solutions/automotive', code: 'A', body: 'Structure intelligence around demand, inventory, aftersales, customer journeys, dealer performance, and commercial planning.' },
  { key: 'hospitality', label: 'Hospitality', path: '/solutions/hospitality', code: 'HOSP', body: 'Improve service visibility, guest experience workflows, operational consistency, and performance rhythm across teams.' },
] as const;

export type Industry = (typeof industries)[number];
type IndustryKey = Industry['key'];

export const home = {
  hero: { eyebrow: 'VAI', heading: 'Practical intelligence for teams running complex businesses.', body: 'VAI helps companies turn commercial, operational, and data complexity into clearer decisions, sharper workflows, and AI-supported execution systems.', primaryCta: 'Start a conversation', secondaryCta: 'Explore solutions' },
  output: { eyebrow: 'Illustrative output', heading: 'From scattered activity to usable operating intelligence.', body: 'VAI is built around practical outputs: the views, workflows, signals, and decision structures that help teams act with more clarity.', cards: [
    { title: 'Decision views', body: 'Turn disconnected inputs into focused views that help leaders see what matters, where action is needed, and what changed.' },
    { title: 'Workflow intelligence', body: 'Shape repeatable workflows around business logic, team responsibilities, and the decisions that need to happen on time.' },
    { title: 'Governance-ready systems', body: 'Keep intelligence work grounded in ownership, review points, data boundaries, and operational accountability.' },
  ] },
  method: { eyebrow: 'Method', heading: 'A practical path from business question to working system.', body: 'VAI\'s work is structured around the real operating environment: what the team needs to decide, what information exists, and how the output will be used.', steps: [
    { title: 'Understand the operating question', body: 'Define the decision, workflow, or business pressure the system needs to support.' },
    { title: 'Map the available signals', body: 'Identify the data, processes, teams, and context already shaping the answer.' },
    { title: 'Design the working output', body: 'Create the view, workflow, model, or interface that turns complexity into usable action.' },
    { title: 'Govern and improve', body: 'Build review points, ownership, and feedback loops so the system stays useful as the business changes.' },
  ] },
  evidence: { eyebrow: 'Evidence boundaries', heading: 'Credibility without exaggerated claims.', body: 'VAI communicates practical capability without relying on invented proof, inflated numbers, or unsupported case studies.', cards: [
    { title: 'Clear use cases', body: 'Each solution shows where intelligence can support decisions, workflows, and operating discipline.' },
    { title: 'Responsible proof', body: 'Evidence should be tied to approved examples, verified results, and business facts that can be confidently defended.' },
    { title: 'Actionable outputs', body: 'The focus is not abstract AI. It is the practical output a team can use, review, and improve.' },
  ] },
  architecture: { eyebrow: 'Architecture', heading: 'Intelligence needs structure, not just models.', body: 'VAI connects business context, data inputs, workflow design, and governance so AI-supported outputs can be used responsibly.', labels: ['Business context', 'Data inputs', 'Intelligence layer', 'Workflow output', 'Governance loop'] },
  engagement: { eyebrow: 'Engagement', heading: 'Start with one valuable workflow, then build from there.', body: 'VAI engagements begin with a focused operating problem, prove usefulness through a practical output, and expand only when the structure is working.', steps: [
    { title: 'Focus', body: 'Select a business area where better intelligence can quickly improve clarity or execution.' },
    { title: 'Build', body: 'Create the first working output with the right data, logic, workflow, and ownership.' },
    { title: 'Review', body: 'Test the output with the people who will use it and refine the system around real decisions.' },
    { title: 'Scale', body: 'Extend the approach into adjacent workflows once the foundation is reliable.' },
  ] },
  final: { eyebrow: 'About VAI', heading: 'A practical partner for business intelligence, AI workflows, and governed execution.', body: 'VAI works at the intersection of commercial understanding and technical delivery, helping teams build intelligence systems that fit the way their business actually runs.' },
};

export const solutions = {
  hero: { eyebrow: 'Solutions', heading: 'Intelligence solutions shaped around operating reality.', body: 'VAI organizes AI and business intelligence work around the decisions, workflows, and sector pressures that teams deal with every day.', primaryCta: 'Talk to VAI' },
  areas: { eyebrow: 'Solution areas', heading: 'Five sectors, one disciplined intelligence approach.', body: 'Each solution page shows how VAI can support clearer visibility, better workflows, and more governed decision-making in a specific industry.' },
  final: { heading: 'Choose the workflow where better intelligence would change the operating rhythm.', body: 'Start with a focused business problem. VAI can help shape it into a practical intelligence system.', action: 'Start a conversation' },
};

type IndustryContent = { hero: Hero; capabilities: Card[]; workflow: Card[]; architecture: { heading: string; body: string; labels: string[] }; cta: { heading: string; body: string; action: string } };

export const industryContent: Record<IndustryKey, IndustryContent> = {
  retail: { hero: { eyebrow: 'Retail', heading: 'Retail intelligence for faster, clearer commercial decisions.', body: 'VAI helps retail teams connect trading signals, customer movement, stock realities, and execution workflows into practical decision systems.', primaryCta: 'Discuss a retail workflow' }, capabilities: [{ title: 'Trading visibility', body: 'Bring together demand, sales movement, margin pressure, stock position, and channel activity into clearer commercial views.' }, { title: 'Store and channel rhythm', body: 'Support operating teams with workflows that highlight what changed, what needs attention, and where action should happen.' }, { title: 'Customer and category signals', body: 'Structure customer, product, and category information into useful signals for planning, execution, and review.' }], workflow: [{ title: 'Define the trading question', body: 'Identify the commercial decision or operating pressure that needs clearer intelligence.' }, { title: 'Connect retail signals', body: 'Map the available inputs across sales, stock, product, channel, and customer activity.' }, { title: 'Build the decision view', body: 'Design a practical output that helps teams review performance and act with confidence.' }, { title: 'Improve the rhythm', body: 'Add ownership, review cycles, and feedback so the intelligence stays useful.' }], architecture: { heading: 'Built for retail operating cadence.', body: 'Retail teams need intelligence that moves with trading cycles. VAI structures outputs around fast review, clear accountability, and repeatable commercial action.', labels: ['Trading signals', 'Stock and channel data', 'Decision view', 'Team workflow', 'Review cadence'] }, cta: { heading: 'Build the first retail intelligence workflow.', body: 'Start with one high-value trading, category, stock, or customer decision and turn it into a working system.', action: 'Start with retail' } },
  construction: { hero: { eyebrow: 'Construction', heading: 'Construction intelligence for projects, progress, and control.', body: 'VAI helps construction teams structure project information, commercial pressure, progress signals, and operational workflows into clearer decision systems.', primaryCta: 'Discuss a construction workflow' }, capabilities: [{ title: 'Project visibility', body: 'Create clearer views of progress, blockers, responsibilities, milestones, and the information teams need to act.' }, { title: 'Commercial control', body: 'Support cost, variation, resource, procurement, and delivery discussions with structured intelligence.' }, { title: 'Risk-aware coordination', body: 'Help teams identify pressure points earlier and coordinate action across project, site, and commercial stakeholders.' }], workflow: [{ title: 'Identify the project pressure', body: 'Define where visibility, coordination, or commercial control is currently difficult.' }, { title: 'Map project signals', body: 'Connect the updates, documents, data points, and team inputs shaping the decision.' }, { title: 'Build the control view', body: 'Create a practical operating view for review, escalation, and action.' }, { title: 'Govern the cadence', body: 'Add ownership, review cycles, and decision rules so the workflow stays reliable.' }], architecture: { heading: 'Designed for multi-stakeholder delivery.', body: 'Construction work depends on coordination. VAI structures intelligence around the people, milestones, risks, and commercial realities that shape delivery.', labels: ['Project updates', 'Commercial signals', 'Risk indicators', 'Coordination workflow', 'Review and escalation'] }, cta: { heading: 'Bring project intelligence into a clearer rhythm.', body: 'Start with one construction workflow where better visibility would improve coordination or control.', action: 'Start with construction' } },
  fmcg: { hero: { eyebrow: 'FMCG', heading: 'FMCG intelligence for market movement and execution.', body: 'VAI helps FMCG teams structure commercial, category, distribution, and execution signals into practical intelligence for faster review and action.', primaryCta: 'Discuss an FMCG workflow' }, capabilities: [{ title: 'Category and market visibility', body: 'Connect performance signals across products, categories, channels, and market conditions.' }, { title: 'Distribution and execution signals', body: 'Support teams with clearer views of availability, coverage, movement, and execution gaps.' }, { title: 'Commercial planning support', body: 'Turn scattered commercial inputs into structured views for planning, review, and action.' }], workflow: [{ title: 'Select the commercial question', body: 'Define the category, channel, distribution, or execution decision that needs better intelligence.' }, { title: 'Map performance signals', body: 'Bring together internal and external indicators that shape the answer.' }, { title: 'Create the review view', body: 'Build a practical output for commercial teams to use in planning and operating reviews.' }, { title: 'Refine with feedback', body: 'Improve the workflow as teams use it and new business questions emerge.' }], architecture: { heading: 'Structured for fast-moving commercial environments.', body: 'FMCG teams need intelligence that keeps pace with market movement. VAI helps organize signals into workflows that can support repeated commercial decisions.', labels: ['Market signals', 'Sales execution', 'Distribution view', 'Category workflow', 'Commercial review'] }, cta: { heading: 'Turn FMCG signals into operating intelligence.', body: 'Start with one category, channel, or execution workflow where clarity would improve action.', action: 'Start with FMCG' } },
  automotive: { hero: { eyebrow: 'Automotive', heading: 'Automotive intelligence for demand, inventory, and customer journeys.', body: 'VAI helps automotive teams connect commercial planning, inventory realities, dealer activity, aftersales signals, and customer journeys into clearer decision workflows.', primaryCta: 'Discuss an automotive workflow' }, capabilities: [{ title: 'Demand and inventory clarity', body: 'Structure demand signals, stock position, availability, and planning inputs into clearer views.' }, { title: 'Dealer and channel performance', body: 'Help teams review activity, execution, and commercial movement across dealer or channel environments.' }, { title: 'Aftersales and customer journey signals', body: 'Connect customer and service activity into intelligence that supports follow-up, planning, and experience improvement.' }], workflow: [{ title: 'Define the decision area', body: 'Select the demand, inventory, dealer, aftersales, or customer workflow that needs clarity.' }, { title: 'Connect operating signals', body: 'Map the data and context that influence the decision.' }, { title: 'Build the intelligence view', body: 'Create a practical output that helps teams review and act.' }, { title: 'Improve operating discipline', body: 'Add review rhythm, ownership, and feedback to keep the workflow useful.' }], architecture: { heading: 'Built for connected commercial and service journeys.', body: 'Automotive decisions often sit across inventory, channels, service, and customer activity. VAI structures those signals into usable operating intelligence.', labels: ['Demand', 'Inventory', 'Dealer activity', 'Aftersales', 'Customer journey'] }, cta: { heading: 'Build clearer automotive operating intelligence.', body: 'Start with one demand, inventory, dealer, or customer workflow where intelligence can improve action.', action: 'Start with automotive' } },
  hospitality: { hero: { eyebrow: 'Hospitality', heading: 'Hospitality intelligence for service, experience, and operating rhythm.', body: 'VAI helps hospitality teams turn service activity, guest signals, team workflows, and performance reviews into clearer operating intelligence.', primaryCta: 'Discuss a hospitality workflow' }, capabilities: [{ title: 'Guest experience signals', body: 'Structure guest feedback, service moments, preferences, and operational indicators into useful intelligence.' }, { title: 'Service workflow clarity', body: 'Help teams coordinate repeated service actions, follow-ups, and quality checks with clearer ownership.' }, { title: 'Operating consistency', body: 'Support managers with views that make performance, exceptions, and improvement areas easier to review.' }], workflow: [{ title: 'Observe the service moment', body: 'Identify the guest, team, or operational moment where better intelligence would improve consistency.' }, { title: 'Capture the signal', body: 'Connect the information that describes what happened, what changed, and what needs attention.' }, { title: 'Guide the follow-up', body: 'Shape the next action, owner, timing, and review point into a clear workflow.' }, { title: 'Learn from the pattern', body: 'Use repeated signals to improve service design, staffing rhythm, and operating standards.' }], architecture: { heading: 'Designed around service moments and follow-through.', body: 'Hospitality intelligence must support real-time service, consistent follow-up, and management review without slowing teams down.', labels: ['Guest signal', 'Service moment', 'Team workflow', 'Follow-up action', 'Experience review'] }, cta: { heading: 'Make service intelligence easier to act on.', body: 'Start with one service, guest experience, or operating workflow where better visibility would improve consistency.', action: 'Start with hospitality' } },
};

export const practice = { hero: { eyebrow: 'VAI in Practice', heading: 'How VAI turns intelligence into practical work.', body: 'VAI\'s value is clearest when intelligence becomes something teams can use: a view, a workflow, a review rhythm, or a governed decision process.', primaryCta: 'Explore a practical workflow' }, evidence: { eyebrow: 'Evidence boundaries', heading: 'Practical proof should be specific, responsible, and usable.', body: 'VAI avoids inflated claims. Evidence should be connected to approved examples, clear business context, and outputs that teams can actually review.', cards: [{ title: 'No invented proof', body: 'The website should not rely on unapproved client names, numbers, logos, or case studies.' }, { title: 'Clear operating context', body: 'Each example should explain the business question, the workflow, and the decision it supports.' }, { title: 'Reviewable outputs', body: 'Evidence should show how intelligence becomes a practical artifact: a dashboard, workflow, model, or decision view.' }] }, application: { eyebrow: 'Practical application', heading: 'From business pressure to working intelligence.', body: 'A useful intelligence system begins with a real operating question and becomes stronger through use, review, and governance.', steps: [{ title: 'Frame the pressure', body: 'Define what the team needs to understand, decide, or improve.' }, { title: 'Shape the signals', body: 'Identify the data, process, people, and business context that influence the answer.' }, { title: 'Build the output', body: 'Turn those signals into a view, workflow, or decision tool the team can use.' }, { title: 'Review and improve', body: 'Add ownership and feedback so the system evolves with the business.' }] }, cta: { heading: 'Bring one use case into practice.', body: 'Share the workflow or decision area where VAI can help create clearer intelligence.', action: 'Start the discussion' } };

export const governance = { hero: { eyebrow: 'Architecture & Governance', heading: 'Intelligence systems need architecture, ownership, and review.', body: 'VAI approaches AI and business intelligence as operating systems, not isolated tools. The work must connect business context, data inputs, workflow design, and governance.', primaryCta: 'Discuss governance' }, principles: { eyebrow: 'Governance principles', heading: 'Designed to stay useful, accountable, and understandable.', body: 'The strongest intelligence systems are built around clear ownership, responsible data use, and practical review.', cards: [{ title: 'Business-first architecture', body: 'The system starts from the operating decision, not from technology for its own sake.' }, { title: 'Clear ownership', body: 'Outputs should have owners, review points, and a defined role in the working rhythm.' }, { title: 'Responsible boundaries', body: 'Data, automation, and AI-supported outputs should be used within clear business and governance limits.' }] }, model: { eyebrow: 'Architecture model', heading: 'From context to governed output.', body: 'VAI connects business questions, data signals, intelligence logic, workflow design, and governance into one practical operating structure.', labels: ['Business question', 'Source signals', 'Intelligence logic', 'Workflow output', 'Human review', 'Governance loop'] }, controls: { eyebrow: 'Controls', heading: 'Control points keep intelligence work grounded.', body: 'VAI systems should be reviewed for accuracy, usefulness, data boundaries, workflow fit, and business accountability.', cards: [{ title: 'Data boundaries', body: 'Define what information is used, why it matters, and where limits apply.' }, { title: 'Human review', body: 'Keep decision ownership clear and avoid treating automation as unchecked authority.' }, { title: 'Continuous improvement', body: 'Update outputs as teams learn, workflows change, and new questions emerge.' }] }, cta: { heading: 'Build intelligence with the right controls.', body: 'Start with the workflow, decision, or data environment where structure and governance matter most.', action: 'Talk about architecture' } };

export const about = {
  hero: {
    eyebrow: 'ABOUT VAI',
    heading: 'Commercial understanding and technical delivery in one practical approach.',
    body: 'VAI helps teams build intelligence systems that match how their business operates: the decisions they make, the workflows they run, and the responsibilities they carry.',
    primaryCta: 'Contact VAI',
  },
  positioning: {
    eyebrow: 'Positioning',
    paragraphs: [
      'Every business generates information. Far fewer have the intelligence to anticipate what is coming, understand the consequences of their choices, and consistently make better decisions.',
      'VAI Solutions is an Enterprise Decision Intelligence company built to close that gap.',
      'We transform complex business information into clear, actionable decisions by bringing together advanced AI, predictive intelligence, scenario simulation, and governed decision-making in one connected system.',
      'Positioned above existing ERP, BI, and operational platforms, VAI doesn’t replace the technology businesses already rely on. We make that technology considerably more intelligent, more predictive, and more valuable to the people making decisions.',
      'Our philosophy is simple: Intelligence should not end with understanding what happened. It should help determine what happens next.',
    ],
    cards: [
      { title: 'Commercially grounded', body: 'VAI starts from business pressure, operating reality, and the decisions teams need to improve.' },
      { title: 'Technically structured', body: 'VAI designs intelligence around data signals, workflow logic, governance, and maintainable delivery.' },
      { title: 'Built for use', body: 'The output must fit the working rhythm of the team, not sit apart from daily operations.' },
    ],
  },
  overview: [
    { number: '01', title: 'Understand', body: 'Uncover business drivers, risks and opportunities.', href: '#understand' },
    { number: '02', title: 'Predict & Simulate', body: 'Forecast outcomes and compare alternative decisions.', href: '#predict-simulate' },
    { number: '03', title: 'Decide & Govern', body: 'Act on evidence with human oversight and control.', href: '#decide-govern' },
  ],
  pillars: [
    {
      id: 'understand',
      number: '01',
      heading: 'Understand the Business Behind the Numbers',
      emphasis: 'From fragmented data to meaningful business intelligence.',
      paragraphs: [
        'VAI connects commercial, financial, and operational signals to uncover performance drivers, emerging risks, hidden inefficiencies, and opportunities that traditional reporting can overlook.',
        'Through specialized AI agents and structured decision reasoning, we move beyond presenting information to understanding what is changing, why it matters, and which decisions deserve attention.',
      ],
    },
    {
      id: 'predict-simulate',
      number: '02',
      heading: 'Predict the Future. Simulate the Possibilities.',
      emphasis: 'From reacting to events to anticipating their consequences.',
      paragraphs: [
        'Our predictive AI models forecast business developments, while scenario simulation allows leaders to explore alternative decisions before committing resources.',
        'What happens if prices change? Demand falls? Inventory accumulates? Project schedules slip? Operational capacity becomes constrained?',
        'VAI evaluates possible outcomes, exposes trade-offs, and quantifies potential business impact—helping leaders distinguish between what is likely, what is possible, and what is worth doing.',
      ],
    },
    {
      id: 'decide-govern',
      number: '03',
      heading: 'Turn Intelligence Into Decisions You Can Trust',
      emphasis: 'From sophisticated analysis to accountable business action.',
      paragraphs: [
        'VAI brings predictions, simulations, business rules, and specialized AI reasoning together into a structured Decision Intelligence Pack.',
        'Each decision is supported by its underlying evidence, expected impact, confidence, risks, and alternatives.',
        'Human oversight, defined approval authority, and governance remain central to the process. Intelligence supports the decision. People retain control.',
        'The result is a more disciplined, repeatable way to make high-stakes business decisions—and evaluate their outcomes over time.',
      ],
    },
  ],
  differentiators: [
    { title: 'A new intelligence layer', body: 'VAI operates above existing business systems rather than competing with ERP and BI.' },
    { title: 'Specialized AI intelligence', body: 'We combine data signals, agentic reasoning, and business context.' },
    { title: 'Predictive and simulation capabilities', body: "We don't merely analyze the past. We help businesses anticipate and evaluate different futures." },
    { title: 'Governed decisions', body: 'Our recommendations are supported by evidence, confidence, risk assessment, and human authority.' },
    { title: 'Cross-industry applicability', body: 'Our core approach can be applied to different business functions and sectors without positioning VAI as a generic software provider.' },
  ],
  closing: {
    heading: 'Built Around Real Business Decisions',
    body: 'From commercial performance, pricing, and profitability to demand, inventory, project execution, hospitality operations, and supply chains, VAI applies one powerful principle across industries:',
    principle: 'Predict what matters. Simulate what is possible. Decide with confidence and control.',
    conviction: "VAI isn't selling AI for the sake of AI. We are building the intelligence that helps businesses make better decisions, before the consequences of those decisions become reality.",
    signoff: 'VAI Solutions — Decision acceleration with control.',
  },
  cta: { heading: 'Work with VAI on a focused intelligence workflow.', body: 'Start with the operating question that matters most, then build the structure around it.', action: 'Start a conversation' },
};

export const contactCopy = { hero: { eyebrow: 'Contact', heading: 'Start with the workflow or decision that needs more clarity.', body: 'Tell VAI what the team is trying to understand, improve, or automate. The first step is to frame the business question clearly.', primaryCta: 'Go to enquiry form' }, form: { eyebrow: 'Enquiry', heading: 'Share the operating problem.', body: 'Use the form to describe the business area, industry, and workflow where better intelligence would help.', consent: 'I agree that VAI may use the information submitted in this form to review and respond to my enquiry.', submit: 'Send enquiry', sending: 'Sending enquiry...', backendError: 'The enquiry could not be sent.', backendErrorBody: 'Please try again. If the issue continues, contact VAI directly through your usual channel.' } };

export const legalPages = {
  privacy: { title: 'Privacy', intro: 'This page explains how information submitted through the VAI website may be used to respond to enquiries and operate the website.', sections: [{ title: 'Information you submit', body: 'When you contact VAI through the website, you may provide your name, work email, company, role, industry, and enquiry details. This information is used to understand and respond to your request.' }, { title: 'Website and analytics information', body: 'The website may use basic analytics or event information to understand page usage and improve the site experience. Analytics should only run where the applicable consent setting allows it.' }, { title: 'How information is used', body: 'Submitted information is used to review enquiries, communicate with the person who contacted VAI, and improve the relevance of future conversations.' }, { title: 'Sharing and access', body: 'Access to enquiry information should be limited to people who need it to review, respond to, or support the enquiry.' }, { title: 'Review before launch', body: 'This privacy page should be reviewed before production launch to confirm the final legal wording, applicable jurisdiction, retention approach, analytics configuration, and contact details.' }] },
  terms: { title: 'Terms', intro: 'This page provides general terms for use of the VAI website. It should be reviewed before production launch.', sections: [{ title: 'Website use', body: 'The VAI website is provided to share information about VAI\'s services, approach, and areas of work. Visitors should use the website responsibly and avoid interfering with its operation.' }, { title: 'Website content', body: 'Website content is provided for general information. It should not be treated as a final proposal, legal advice, technical guarantee, or binding commitment unless confirmed separately in writing.' }, { title: 'Enquiries', body: 'Submitting an enquiry does not create a contract or guarantee that VAI will provide services. Any engagement should be confirmed through a separate written agreement.' }, { title: 'External services', body: 'The website may rely on hosting, analytics, forms, or other service providers. Final production configuration should be reviewed before launch.' }, { title: 'Review before launch', body: 'These terms should be reviewed before production launch to confirm final legal wording, ownership statements, governing law, liability language, and contact details.' }] },
};

export const redirects: { from: string; to: string }[] = [];
