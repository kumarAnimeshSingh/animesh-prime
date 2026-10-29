import {
  BusinessSolution,
  Differentiator,
  Industry,
  ProcessStep,
  ServiceCategory,
  TechStackGroup,
} from '../models/services.models';

export const SERVICE_CATEGORIES: readonly ServiceCategory[] = [
  {
    id: 'enterprise',
    name: 'Enterprise Software',
    tagline: 'Business-critical systems engineered for scale',
    summary:
      'We design and build secure enterprise platforms that model complex operations, connect departments, and stay maintainable for years.',
    icon: 'building',
    outcomes: [
      'Unified, role-based business platforms',
      'Fewer manual hand-offs between teams',
      'Architecture that scales with the organisation',
    ],
    technologies: ['.NET', 'C#', 'ASP.NET Core', 'SQL Server', 'Azure', 'Microservices'],
    services: [
      {
        id: 'enterprise-applications',
        name: 'Enterprise Application Development',
        description:
          'Large-scale, role-based applications built around your operations, with clean architecture, audit trails, and room to grow.',
        icon: 'building',
        technologies: ['.NET', 'ASP.NET Core', 'SQL Server', 'Angular'],
      },
      {
        id: 'business-process-automation',
        name: 'Business Process Automation',
        description:
          'Digitise approvals, workflows, and repetitive tasks to shorten turnaround times and remove error-prone manual steps.',
        icon: 'workflow',
        technologies: ['Workflow Automation', '.NET', 'Azure Functions', 'SQL Server'],
      },
      {
        id: 'custom-software',
        name: 'Custom Software Solutions',
        description:
          "Purpose-built software for requirements off-the-shelf products can't meet, designed with your users from day one.",
        icon: 'layers',
        technologies: ['C#', 'TypeScript', 'Angular', 'REST APIs'],
      },
      {
        id: 'enterprise-integration',
        name: 'Enterprise System Integration',
        description:
          'Connect ERP, CRM, finance, and legacy systems through reliable APIs and messaging so data flows where it is needed.',
        icon: 'link',
        technologies: ['REST APIs', 'Web API', 'Azure Service Bus', 'Microservices'],
      },
    ],
  },
  {
    id: 'web',
    name: 'Web & Full-Stack Development',
    tagline: 'Modern web platforms, from database to interface',
    summary:
      'Full-stack engineering on the Microsoft stack and leading front-end frameworks — fast, accessible, and built for long-term maintainability.',
    icon: 'code',
    outcomes: [
      'Responsive, accessible user experiences',
      'Well-documented, versioned APIs',
      'Codebases your team can confidently extend',
    ],
    technologies: ['.NET', 'ASP.NET Core', 'Angular', 'React', 'TypeScript', 'REST APIs'],
    services: [
      {
        id: 'dotnet-development',
        name: '.NET Development',
        description:
          'Robust, high-performance back-end services and applications built with modern .NET and proven C# engineering practices.',
        icon: 'server',
        technologies: ['.NET', 'C#', 'Entity Framework', 'LINQ'],
      },
      {
        id: 'aspnet-core',
        name: 'ASP.NET Core',
        description:
          'Secure, cross-platform web applications and services with authentication, caching, and observability built in.',
        icon: 'globe',
        technologies: ['ASP.NET Core', 'Identity', 'SignalR', 'App Service'],
      },
      {
        id: 'angular-development',
        name: 'Angular Development',
        description:
          'Enterprise-grade single-page applications with modular architecture, strong typing, and reusable component libraries.',
        icon: 'browser',
        technologies: ['Angular', 'TypeScript', 'RxJS', 'Signals'],
      },
      {
        id: 'react-development',
        name: 'React Development',
        description:
          'Fast, interactive, component-driven interfaces that deliver a polished experience on every screen size.',
        icon: 'atom',
        technologies: ['React', 'TypeScript', 'JavaScript', 'CSS3'],
      },
      {
        id: 'rest-api-development',
        name: 'RESTful API Development',
        description:
          'Well-designed, versioned, and documented APIs that securely power web, mobile, and partner integrations.',
        icon: 'braces',
        technologies: ['Web API', 'OpenAPI', 'OAuth 2.0', 'JWT'],
      },
      {
        id: 'full-stack-development',
        name: 'Full-Stack Application Development',
        description:
          'End-to-end delivery of complete applications — data model, APIs, UI, testing, and deployment — by one accountable team.',
        icon: 'stack',
        technologies: ['.NET', 'Angular', 'SQL Server', 'Azure'],
      },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Intelligent Solutions',
    tagline: 'Practical AI that improves real workflows',
    summary:
      'We integrate generative AI and intelligent automation into products and processes — grounded in your data, governed, and measured against business outcomes.',
    icon: 'sparkles',
    outcomes: [
      'Faster decisions with AI-assisted insight',
      'Automation of document-heavy, repetitive work',
      'Responsible AI with security and governance built in',
    ],
    technologies: ['AI', 'LLMs', 'OpenAI APIs', 'Azure OpenAI', '.NET', 'Python'],
    services: [
      {
        id: 'ai-application-development',
        name: 'AI Application Development',
        description:
          'Applications with intelligence at their core — classification, prediction, semantic search, and recommendations tailored to your domain.',
        icon: 'cpu',
        technologies: ['Python', '.NET', 'Azure AI', 'ML Models'],
      },
      {
        id: 'generative-ai',
        name: 'Generative AI Solutions',
        description:
          'Summarisation, content generation, and knowledge assistants that turn organisational data into usable answers.',
        icon: 'sparkles',
        technologies: ['Generative AI', 'RAG', 'Vector Search', 'OpenAI APIs'],
      },
      {
        id: 'llm-integration',
        name: 'LLM Integration',
        description:
          'Securely embed large language models into existing systems with grounding, prompt engineering, evaluation, and cost controls.',
        icon: 'nodes',
        technologies: ['LLMs', 'Azure OpenAI', 'Semantic Kernel', 'REST APIs'],
      },
      {
        id: 'ai-business-automation',
        name: 'AI-powered Business Automation',
        description:
          'Combine AI with workflow automation to triage requests, route tasks, and complete routine work end to end.',
        icon: 'zap',
        technologies: ['AI Agents', 'Workflow Automation', '.NET', 'Azure Functions'],
      },
      {
        id: 'intelligent-document-processing',
        name: 'Intelligent Document Processing',
        description:
          'Extract, validate, and classify data from invoices, forms, and records to eliminate manual data entry.',
        icon: 'document',
        technologies: ['OCR', 'Document Intelligence', 'LLMs', 'Python'],
      },
      {
        id: 'ai-chatbots',
        name: 'AI Chatbots & Assistants',
        description:
          'Conversational assistants for customers and staff, connected to your knowledge base and business systems.',
        icon: 'chat',
        technologies: ['Conversational AI', 'OpenAI APIs', 'RAG', 'Bot Service'],
      },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    tagline: 'Reliable delivery on modern cloud infrastructure',
    summary:
      'We build, migrate, and operate applications on Microsoft Azure with automated pipelines, containers, and monitoring that keep releases predictable.',
    icon: 'cloud',
    outcomes: [
      'Repeatable, automated releases',
      'Elastic infrastructure with controlled costs',
      'Clear visibility into performance and health',
    ],
    technologies: ['Microsoft Azure', 'Docker', 'CI/CD', 'Azure DevOps', 'Git', 'Monitoring'],
    services: [
      {
        id: 'microsoft-azure',
        name: 'Microsoft Azure',
        description:
          'Architecture, provisioning, and governance of Azure environments designed for security, resilience, and cost efficiency.',
        icon: 'cloud',
        technologies: ['App Service', 'Azure SQL', 'Key Vault', 'Bicep'],
      },
      {
        id: 'cloud-application-development',
        name: 'Cloud Application Development',
        description:
          'Cloud-native applications that scale on demand using managed services, serverless functions, and event-driven design.',
        icon: 'server',
        technologies: ['Azure Functions', 'Service Bus', 'Cosmos DB', '.NET'],
      },
      {
        id: 'cicd-automation',
        name: 'CI/CD Automation',
        description:
          'Automated build, test, and release pipelines that ship changes safely and frequently, with full traceability.',
        icon: 'infinity',
        technologies: ['Azure DevOps', 'GitHub Actions', 'YAML Pipelines', 'Git'],
      },
      {
        id: 'docker-containerization',
        name: 'Docker & Containerization',
        description:
          'Package applications into portable containers for consistent environments from developer laptop to production.',
        icon: 'box',
        technologies: ['Docker', 'Kubernetes', 'AKS', 'Container Registry'],
      },
      {
        id: 'cloud-migration',
        name: 'Cloud Migration',
        description:
          'Assess, plan, and move on-premises workloads to Azure with minimal disruption and a clear modernisation path.',
        icon: 'upload',
        technologies: ['Azure Migrate', 'Azure SQL', 'Infrastructure as Code', 'Modernisation'],
      },
      {
        id: 'monitoring-performance',
        name: 'Monitoring & Performance Optimization',
        description:
          'Proactive monitoring, alerting, and tuning so issues are found and fixed before users notice them.',
        icon: 'activity',
        technologies: ['Application Insights', 'Azure Monitor', 'Log Analytics', 'Profiling'],
      },
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare Technology',
    tagline: 'Digital systems for modern care delivery',
    summary:
      'Domain-aware healthcare software that streamlines clinical and administrative workflows while protecting sensitive patient data.',
    icon: 'heart',
    outcomes: [
      'Connected clinical and administrative workflows',
      'Accurate billing and reduced revenue leakage',
      'Secure, role-based handling of patient information',
    ],
    technologies: ['.NET', 'Angular', 'SQL Server', 'HL7 / FHIR', 'Azure', 'Role-based Security'],
    services: [
      {
        id: 'hospital-management',
        name: 'Hospital Management Systems',
        description:
          'Integrated platforms covering registration, admissions, clinical records, inventory, and reporting across departments.',
        icon: 'hospital',
        technologies: ['.NET', 'SQL Server', 'Angular', 'Reporting'],
      },
      {
        id: 'healthcare-applications',
        name: 'Healthcare Applications',
        description:
          'Patient- and clinician-facing applications for appointments, records access, and care coordination.',
        icon: 'heart',
        technologies: ['Angular', 'React', 'REST APIs', 'FHIR'],
      },
      {
        id: 'opd-ipd-management',
        name: 'OPD / IPD Management',
        description:
          'Outpatient and inpatient workflows — appointments, consultations, bed management, and discharge — in one system.',
        icon: 'clipboard',
        technologies: ['Workflow Design', '.NET', 'SQL Server', 'Angular'],
      },
      {
        id: 'laboratory-management',
        name: 'Laboratory Management',
        description:
          'Sample tracking, test orders, result validation, and instrument integration with complete audit trails.',
        icon: 'flask',
        technologies: ['LIS', 'HL7', 'Instrument Integration', '.NET'],
      },
      {
        id: 'pharmacy-management',
        name: 'Pharmacy Management',
        description:
          'Stock control, prescriptions, dispensing, and expiry tracking connected to clinical and billing modules.',
        icon: 'pill',
        technologies: ['Inventory', 'Barcoding', 'SQL Server', '.NET'],
      },
      {
        id: 'billing-revenue-cycle',
        name: 'Billing & Revenue Cycle Solutions',
        description:
          'Charge capture, insurance claims, and payment reconciliation that reduce leakage and speed up collections.',
        icon: 'receipt',
        technologies: ['Claims Processing', 'Insurance Integration', 'Reporting', 'SQL Server'],
      },
      {
        id: 'healthcare-workflow-automation',
        name: 'Healthcare Workflow Automation',
        description:
          'Automate referrals, notifications, approvals, and reporting so clinical teams spend more time on patient care.',
        icon: 'workflow',
        technologies: ['Workflow Automation', 'AI', 'Notifications', 'Azure'],
      },
    ],
  },
  {
    id: 'support',
    name: 'Support & Maintenance',
    tagline: 'Keeping critical systems healthy and evolving',
    summary:
      'Dependable post-launch engineering — from production support and security patching to upgrades and expert advice — so your software keeps delivering value.',
    icon: 'lifebuoy',
    outcomes: [
      'Stable, secure production environments',
      'Structured, predictable incident response',
      'A clear roadmap for upgrades and improvements',
    ],
    technologies: ['Monitoring', 'Azure DevOps', '.NET Upgrades', 'Security Patching', 'SQL Tuning', 'Documentation'],
    services: [
      {
        id: 'application-maintenance',
        name: 'Application Maintenance',
        description:
          'Ongoing fixes, enhancements, and refactoring that keep applications reliable and aligned with changing needs.',
        icon: 'wrench',
        technologies: ['Bug Fixing', 'Enhancements', 'Refactoring', 'Code Reviews'],
      },
      {
        id: 'production-support',
        name: 'Production Support',
        description:
          'Structured incident management and root-cause analysis to keep business-critical systems running.',
        icon: 'lifebuoy',
        technologies: ['Incident Management', 'Root-Cause Analysis', 'SLAs', 'Monitoring'],
      },
      {
        id: 'performance-optimization',
        name: 'Performance Optimization',
        description:
          'Profile and tune applications, queries, and infrastructure to improve speed, throughput, and running cost.',
        icon: 'zap',
        technologies: ['Profiling', 'SQL Tuning', 'Caching', 'Load Testing'],
      },
      {
        id: 'security-updates',
        name: 'Security Updates',
        description:
          'Regular patching, dependency upgrades, and vulnerability remediation to reduce risk and support compliance.',
        icon: 'shield',
        technologies: ['Patching', 'OWASP', 'Dependency Scanning', 'Key Vault'],
      },
      {
        id: 'system-upgrades',
        name: 'System Upgrades',
        description:
          'Move legacy .NET Framework and front-end stacks to modern, supported versions with minimal disruption.',
        icon: 'refresh',
        technologies: ['.NET Framework → .NET', 'Angular Upgrades', 'Data Migration', 'Testing'],
      },
      {
        id: 'technical-consulting',
        name: 'Technical Consulting',
        description:
          'Independent architecture reviews, technology selection, and roadmap planning from experienced engineers.',
        icon: 'bulb',
        technologies: ['Architecture Review', 'Technology Strategy', 'Code Audits', 'Roadmaps'],
      },
    ],
  },
];

export const TECH_STACK: readonly TechStackGroup[] = [
  {
    id: 'backend',
    name: 'Backend',
    description: 'High-performance services and business logic.',
    icon: 'server',
    items: ['.NET', 'C#', 'ASP.NET Core', 'Web API', 'Entity Framework'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Accessible, responsive user interfaces.',
    icon: 'browser',
    items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Reliable relational and document data stores.',
    icon: 'database',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    description: 'Automated delivery and cloud operations.',
    icon: 'cloud',
    items: ['Microsoft Azure', 'Docker', 'CI/CD', 'Git', 'Azure DevOps'],
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    description: 'Intelligent features and automated workflows.',
    icon: 'sparkles',
    items: ['AI', 'Generative AI', 'LLMs', 'OpenAI APIs', 'Intelligent Automation'],
  },
  {
    id: 'architecture',
    name: 'Architecture',
    description: 'Patterns that keep systems scalable and evolvable.',
    icon: 'nodes',
    items: ['REST APIs', 'Microservices', 'Cloud Architecture', 'Enterprise Architecture'],
  },
];

export const BUSINESS_SOLUTIONS: readonly BusinessSolution[] = [
  {
    title: 'Digital Transformation',
    description: 'Modernize legacy systems and move business processes to scalable digital platforms.',
    outcome: 'Lower maintenance cost and faster change',
    icon: 'refresh',
  },
  {
    title: 'Business Automation',
    description: 'Reduce manual processes through workflow automation and intelligent systems.',
    outcome: 'More throughput with the same team',
    icon: 'workflow',
  },
  {
    title: 'Enterprise Applications',
    description: 'Build secure, scalable applications designed around complex business operations.',
    outcome: 'One reliable source of operational truth',
    icon: 'building',
  },
  {
    title: 'AI Transformation',
    description: 'Integrate AI and intelligent automation into existing applications and business workflows.',
    outcome: 'Smarter decisions, less repetitive work',
    icon: 'sparkles',
  },
  {
    title: 'Cloud Transformation',
    description: 'Build, migrate, and optimize applications using Microsoft Azure and cloud-native technologies.',
    outcome: 'Elastic scale with predictable releases',
    icon: 'cloud',
  },
];

export const INDUSTRIES: readonly Industry[] = [
  {
    name: 'Healthcare',
    description: 'Hospital, clinic, lab, and pharmacy systems that connect care teams and protect patient data.',
    icon: 'heart',
  },
  {
    name: 'Finance',
    description: 'Secure transaction, reporting, and compliance platforms with full auditability.',
    icon: 'landmark',
  },
  {
    name: 'Retail',
    description: 'Commerce, inventory, and customer-engagement solutions that keep stock and sales in sync.',
    icon: 'bag',
  },
  {
    name: 'Logistics',
    description: 'Shipment tracking, fleet, and warehouse systems with real-time operational visibility.',
    icon: 'truck',
  },
  {
    name: 'Education',
    description: 'Learning, admissions, and administration platforms for institutions of every size.',
    icon: 'cap',
  },
  {
    name: 'Professional Services',
    description: 'Client portals, project tracking, and billing tools for service-driven firms.',
    icon: 'briefcase',
  },
  {
    name: 'Enterprise Operations',
    description: 'Internal platforms for HR, procurement, approvals, and cross-department reporting.',
    icon: 'dashboard',
  },
];

export const DIFFERENTIATORS: readonly Differentiator[] = [
  {
    title: 'End-to-End Development',
    description: 'One team from discovery and design through build, deployment, and support.',
    icon: 'target',
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems designed to grow in users, data, and features without costly rewrites.',
    icon: 'nodes',
  },
  {
    title: 'AI & Modern Technology',
    description: 'Practical use of AI, LLMs, and current frameworks where they add real value.',
    icon: 'sparkles',
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Secure coding, role-based access, and data protection built in from the start.',
    icon: 'shield',
  },
  {
    title: 'Cloud-Ready Solutions',
    description: 'Applications engineered for Azure, containers, and automated delivery.',
    icon: 'cloud',
  },
  {
    title: 'Long-Term Technical Support',
    description: 'Maintenance, upgrades, and production support long after go-live.',
    icon: 'lifebuoy',
  },
  {
    title: 'Experienced Engineering Team',
    description: '15+ years of delivering business-critical systems on Microsoft technologies.',
    icon: 'users',
  },
  {
    title: 'Business-Focused Development',
    description: 'Every technical decision is tied back to measurable business outcomes.',
    icon: 'trending',
  },
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand business requirements, users, constraints, and objectives.',
    icon: 'search',
    deliverables: ['Requirements brief', 'Scope & priorities'],
  },
  {
    step: '02',
    title: 'Architect',
    description: 'Define the technical architecture, technology stack, and solution strategy.',
    icon: 'compass',
    deliverables: ['Solution architecture', 'Delivery roadmap'],
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Build scalable, secure, and maintainable applications in iterative releases.',
    icon: 'code',
    deliverables: ['Working increments', 'Automated tests'],
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'Release applications using modern cloud and DevOps practices.',
    icon: 'rocket',
    deliverables: ['CI/CD pipelines', 'Production launch'],
  },
  {
    step: '05',
    title: 'Support & Evolve',
    description: 'Continuously improve, maintain, optimize, and expand the solution.',
    icon: 'refresh',
    deliverables: ['Monitoring & support', 'Enhancement roadmap'],
  },
];
