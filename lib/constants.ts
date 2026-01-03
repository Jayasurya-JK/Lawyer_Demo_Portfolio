import { LawyerProfile, PracticeArea, Testimonial, BlogPost } from '@/types'

export const SITE_CONFIG = {
  name: 'Advocate Rajesh Kumar',
  title: 'Advocate | Legal Consultant',
  url: 'https://advocaterajeshkumar.com',
  description: 'Expert legal advisor for businesses, startups, and corporate matters. Professional legal consultation services in contract drafting, compliance, and corporate law.',
  keywords: [
    'legal advisor for business',
    'corporate legal consultant',
    'contract drafting lawyer',
    'startup legal advisor',
    'business law consultant India',
    'legal services for MSME',
    'advocate Rajesh Kumar',
  ],
  contact: {
    email: 'contact@advocaterajeshkumar.com',
    phone: '+91 98765 43210',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM IST',
  },
}

export const LAWYER_PROFILE: LawyerProfile = {
  name: 'Advocate Rajesh Kumar',
  title: 'Advocate & Legal Consultant',
  tagline: 'Empowering Businesses Through Expert Legal Guidance',
  experience: 15,
  education: [
    'LL.B. (Bachelor of Laws) - National Law School, Bangalore',
    'B.Com (Honours) - Delhi University',
    'Advanced Certificate in Corporate Law',
  ],
  certifications: [
    'Certified Corporate Legal Advisor',
    'Registered with Bar Council of India',
    'Member, International Bar Association',
  ],
  memberships: [
    'Bar Council of India',
    'Indian Corporate Lawyers Association',
    'International Bar Association',
  ],
  philosophy: 'I believe in providing practical, business-oriented legal solutions that protect my clients\' interests while enabling growth. My approach combines deep legal expertise with an understanding of business realities.',
  specializations: [
    'Business & Corporate Law',
    'Contract Drafting & Review',
    'Property & Asset Legal Advisory',
    'Startup & MSME Legal Support',
    'Compliance & Documentation',
  ],
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'business-corporate-law',
    title: 'Business & Corporate Law',
    description: 'Comprehensive legal support for businesses, from formation to complex corporate transactions.',
    icon: '⚖️',
    details: 'Navigate the complexities of corporate law with expert guidance. I assist businesses in structuring, compliance, mergers, acquisitions, and corporate governance to ensure legal soundness and strategic growth.',
    process: [
      'Initial consultation to understand your business structure and needs',
      'Legal audit and risk assessment',
      'Strategy development and implementation',
      'Ongoing compliance and advisory support',
    ],
  },
  {
    id: 'contract-drafting-review',
    title: 'Contract Drafting & Review',
    description: 'Meticulous drafting and review of contracts to protect your interests and prevent disputes.',
    icon: '📝',
    details: 'Every agreement needs precision. I draft and review contracts with attention to detail, ensuring your rights are protected, obligations are clear, and potential disputes are minimized through well-crafted legal documents.',
    process: [
      'Understanding the transaction and parties involved',
      'Drafting comprehensive, clear contract terms',
      'Detailed review and risk identification',
      'Negotiation support and finalization',
    ],
  },
  {
    id: 'property-asset-advisory',
    title: 'Property & Asset Legal Advisory',
    description: 'Expert guidance on property transactions, due diligence, and asset protection strategies.',
    icon: '🏢',
    details: 'Property transactions involve significant investments and complex legalities. I provide thorough due diligence, title verification, documentation review, and advisory for seamless property acquisitions and transfers.',
    process: [
      'Property title search and verification',
      'Due diligence and legal audit',
      'Documentation preparation and review',
      'Transaction execution and registration support',
    ],
  },
  {
    id: 'startup-msme-support',
    title: 'Startup & MSME Legal Support',
    description: 'Specialized legal services for startups and small businesses, from incorporation to scaling.',
    icon: '🚀',
    details: 'Startups and MSMEs have unique legal needs. I provide end-to-end legal support including business incorporation, founder agreements, funding documentation, IP protection, and compliance to help your venture grow securely.',
    process: [
      'Business structure consultation and incorporation',
      'Founder and shareholder agreements',
      'Funding and investment documentation',
      'Ongoing compliance and growth advisory',
    ],
  },
  {
    id: 'compliance-documentation',
    title: 'Compliance & Documentation',
    description: 'Ensuring your business stays compliant with all regulatory requirements and maintains proper documentation.',
    icon: '📋',
    details: 'Regulatory compliance is crucial for business continuity. I help businesses navigate complex compliance requirements, maintain proper documentation, and implement systems to ensure ongoing adherence to legal standards.',
    process: [
      'Compliance audit and gap analysis',
      'Development of compliance frameworks',
      'Documentation and record management',
      'Regular updates and monitoring',
    ],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Founder, TechVenture Solutions',
    content: 'Advocate Rajesh Kumar provided invaluable guidance during our company\'s incorporation and first funding round. His attention to detail and business understanding made the entire process smooth.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Amit Patel',
    role: 'CEO, Manufacturing Co.',
    content: 'We have been working with Rajesh for over 5 years on various corporate matters. His expertise in contract law has saved us from potential disputes multiple times.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Neha Reddy',
    role: 'Director, Real Estate Group',
    content: 'The property due diligence and legal advisory provided was thorough and professional. Highly recommended for any business legal needs.',
    rating: 5,
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'why-every-business-needs-legal-advisor',
    title: 'Why Every Business Needs a Legal Advisor',
    excerpt: 'Understanding the critical role of legal advisors in protecting your business interests and enabling growth.',
    content: `# Why Every Business Needs a Legal Advisor

In today's complex business environment, legal challenges can arise at any moment. From contract disputes to regulatory compliance, businesses face numerous legal risks that can impact their operations and profitability.

## The Cost of Not Having Legal Support

Many businesses, especially startups and SMEs, delay engaging legal advisors to save costs. However, this approach often proves more expensive when legal issues arise. A single poorly drafted contract or compliance violation can result in:

- Financial losses from disputes
- Penalties from regulatory authorities
- Damage to business reputation
- Loss of business opportunities

## Preventive Legal Care

Just as preventive healthcare is more effective than treating diseases, preventive legal care helps businesses avoid problems before they occur. A legal advisor:

- Reviews and drafts contracts to protect your interests
- Ensures compliance with changing regulations
- Provides strategic advice on business decisions
- Identifies and mitigates legal risks early

## Strategic Business Partner

A good legal advisor is not just someone you call when problems arise. They become a strategic partner who:

- Understands your business and industry
- Provides practical, business-oriented solutions
- Helps in negotiations and deals
- Enables growth while managing risks

## Conclusion

Investing in legal advisory services is not an expense—it's an investment in your business's future. The right legal support can save costs, prevent problems, and enable confident business decisions.`,
    author: 'Advocate Rajesh Kumar',
    publishedAt: '2026-01-01',
    category: 'Business Law',
    tags: ['legal advisor', 'business law', 'corporate counsel'],
    readTime: '5 min read',
  },
  {
    id: '2',
    slug: 'common-contract-mistakes-businesses-make',
    title: 'Common Contract Mistakes Businesses Make',
    excerpt: 'Avoid these common pitfalls in contract drafting and negotiation that can lead to costly disputes.',
    content: `# Common Contract Mistakes Businesses Make

Contracts form the foundation of business relationships. Yet, many businesses make avoidable mistakes that lead to disputes, losses, and legal complications. Here are the most common contract mistakes and how to avoid them.

## 1. Using Generic Templates Without Customization

While contract templates can be a starting point, using them without proper customization is risky. Every business relationship is unique and requires specific terms tailored to the situation.

**Solution:** Have every contract reviewed and customized by a legal professional who understands your business needs.

## 2. Ambiguous or Vague Language

Unclear terms lead to different interpretations, which often result in disputes. Phrases like "reasonable time," "best efforts," or "as soon as possible" can mean different things to different parties.

**Solution:** Define all key terms clearly. Specify exact timelines, performance standards, and obligations.

## 3. Missing Termination Clauses

Many contracts don't adequately address how and when the agreement can be terminated. This can lock parties into unfavorable relationships.

**Solution:** Include clear termination provisions with notice periods, conditions for termination, and consequences.

## 4. Inadequate Payment Terms

Payment disputes are among the most common contract issues. Unclear payment schedules, terms, and consequences for late payment create problems.

**Solution:** Specify exact payment amounts, schedules, methods, and late payment penalties.

## 5. No Dispute Resolution Mechanism

When disputes arise without a predetermined resolution mechanism, parties often end up in expensive litigation.

**Solution:** Include arbitration or mediation clauses to resolve disputes efficiently and cost-effectively.

## 6. Ignoring Intellectual Property Rights

Contracts often fail to address who owns intellectual property created during the business relationship.

**Solution:** Clearly define ownership, usage rights, and restrictions on intellectual property.

## 7. Missing Liability and Indemnity Clauses

Without proper liability limitations and indemnity provisions, businesses expose themselves to unlimited risks.

**Solution:** Include appropriate limitation of liability and indemnity clauses to protect your interests.

## Conclusion

Well-drafted contracts are your first line of defense in business. Invest time and resources in getting them right, and you'll save significantly on dispute resolution later.`,
    author: 'Advocate Rajesh Kumar',
    publishedAt: '2025-12-28',
    category: 'Contract Law',
    tags: ['contracts', 'legal mistakes', 'business agreements'],
    readTime: '7 min read',
  },
  {
    id: '3',
    slug: 'legal-protection-for-startups-in-india',
    title: 'Legal Protection for Startups in India',
    excerpt: 'Essential legal safeguards every startup founder should implement from day one.',
    content: `# Legal Protection for Startups in India

Starting a business in India is exciting, but founders often overlook critical legal protections in their rush to launch. Here's what every startup needs to protect itself legally.

## 1. Proper Business Structure

Choosing the right business structure is foundational. Options include:

- **Sole Proprietorship:** Simple but offers no liability protection
- **Partnership:** Easy to form but partners have unlimited liability
- **Limited Liability Partnership (LLP):** Good for professional services
- **Private Limited Company:** Most suitable for startups seeking funding

**Recommendation:** Most startups should incorporate as a Private Limited Company for liability protection and ease of fundraising.

## 2. Founder Agreements

Founder disputes are a leading cause of startup failure. A comprehensive founder agreement should cover:

- Equity distribution and vesting schedules
- Roles and responsibilities
- Decision-making processes
- Exit provisions and buyout terms
- Intellectual property ownership

## 3. Intellectual Property Protection

Your startup's IP is often its most valuable asset. Protect it through:

- **Trademarks:** Register your brand name and logo
- **Copyrights:** Protect original content and software
- **Patents:** If you have innovative technology
- **Trade Secrets:** Implement confidentiality measures

## 4. Employee and Contractor Agreements

Every person working with your startup should sign appropriate agreements:

- Employment contracts with clear terms
- Non-disclosure agreements (NDAs)
- Intellectual property assignment agreements
- Non-compete clauses (where enforceable)

## 5. Terms of Service and Privacy Policy

If you have an app or website, you need:

- Clear Terms of Service
- Comprehensive Privacy Policy
- Cookie policies (if applicable)
- Data protection compliance

## 6. Regulatory Compliance

Ensure compliance with:

- GST registration and filing
- Income tax registrations
- Industry-specific regulations
- Data protection laws
- Labor laws

## 7. Investment Documentation

When raising funds, ensure proper documentation:

- Term sheets
- Shareholders' agreements
- Share subscription agreements
- Board resolutions

## Conclusion

Legal protection is not a luxury for startups—it's a necessity. Implementing these safeguards early can prevent costly problems and enable sustainable growth.`,
    author: 'Advocate Rajesh Kumar',
    publishedAt: '2025-12-20',
    category: 'Startup Law',
    tags: ['startups', 'legal protection', 'business incorporation'],
    readTime: '8 min read',
  },
  {
    id: '4',
    slug: 'understanding-corporate-compliance-2026',
    title: 'Understanding Corporate Compliance in 2026',
    excerpt: 'Navigate the evolving corporate compliance landscape with this comprehensive guide.',
    content: `# Understanding Corporate Compliance in 2026

Corporate compliance has become increasingly complex with new regulations and heightened enforcement. Here's what businesses need to know to stay compliant in 2026.

## Why Compliance Matters

Non-compliance can result in:
- Heavy financial penalties
- Legal proceedings against directors
- Damage to reputation
- Loss of business licenses
- Criminal liability in severe cases

## Key Compliance Areas

### 1. Corporate Governance

- Regular board meetings and proper documentation
- Annual general meetings (AGMs)
- Maintenance of statutory registers
- Filing of annual returns
- Director compliance requirements

### 2. Financial Compliance

- Regular audits
- Timely filing of financial statements
- GST compliance and returns
- TDS compliance
- Income tax returns

### 3. Labor and Employment

- Provident Fund (PF) compliance
- Employee State Insurance (ESI)
- Minimum wages compliance
- Employment contracts
- Workplace policies

### 4. Data Protection

- Compliance with Digital Personal Data Protection Act
- Data security measures
- Privacy policies
- Consent management
- Data breach response procedures

### 5. Industry-Specific Regulations

Different industries have specific compliance requirements:
- FSSAI for food businesses
- RBI regulations for fintech
- SEBI for securities market
- Sector-specific licenses and permissions

## Building a Compliance Framework

### Step 1: Compliance Audit

Conduct a comprehensive audit to identify all applicable laws and regulations.

### Step 2: Compliance Calendar

Create a calendar with all compliance deadlines to ensure timely filings.

### Step 3: Documentation System

Implement proper systems for maintaining required records and documents.

### Step 4: Training

Regular training for employees on compliance requirements relevant to their roles.

### Step 5: Monitoring

Establish internal checks and periodic reviews to ensure ongoing compliance.

## Recent Regulatory Changes

Stay updated with recent changes:
- Digital Personal Data Protection Act implementation
- GST amendments
- Companies Act updates
- Labor code implementation

## Getting Professional Help

Given the complexity of compliance requirements, businesses should:
- Engage experienced legal advisors
- Work with qualified company secretaries
- Use compliance management software
- Conduct periodic compliance audits

## Conclusion

Compliance is not just about avoiding penalties—it's about building a sustainable business with strong foundations. Invest in compliance to protect your business and enable growth.`,
    author: 'Advocate Rajesh Kumar',
    publishedAt: '2025-12-15',
    category: 'Corporate Compliance',
    tags: ['compliance', 'corporate governance', 'regulations'],
    readTime: '9 min read',
  },
  {
    id: '5',
    slug: 'how-to-choose-right-legal-consultant',
    title: 'How to Choose the Right Legal Consultant',
    excerpt: 'A practical guide to selecting a legal advisor who can truly serve your business needs.',
    content: `# How to Choose the Right Legal Consultant

Selecting the right legal consultant is crucial for your business's success. Here's how to make an informed choice.

## What to Look For

### 1. Relevant Experience

- Industry-specific knowledge
- Track record with similar businesses
- Types of matters handled
- Years of practice

### 2. Expertise Areas

Ensure the lawyer specializes in areas you need:
- Corporate law
- Contract law
- Intellectual property
- Compliance
- Litigation (if needed)

### 3. Business Understanding

A good legal consultant should:
- Understand business realities
- Provide practical solutions
- Think beyond just legal aspects
- Consider cost-benefit in advice

### 4. Communication Skills

Your legal advisor should:
- Explain complex legal matters simply
- Be responsive and accessible
- Provide timely updates
- Be transparent about costs

### 5. Approach and Philosophy

Look for someone who:
- Takes a preventive rather than reactive approach
- Values long-term relationships
- Is ethical and professional
- Aligns with your business values

## Red Flags to Avoid

### Overpromising

Be wary of lawyers who guarantee outcomes or make unrealistic promises.

### Poor Communication

If a lawyer is difficult to reach or doesn't respond promptly, it's a concern.

### Lack of Specialization

General practitioners may not have the depth needed for complex business matters.

### No Clear Fee Structure

Avoid lawyers who aren't transparent about their fees and billing practices.

## Questions to Ask

When meeting potential legal consultants, ask:

1. What is your experience with businesses like mine?
2. What areas of law do you specialize in?
3. How do you charge for your services?
4. What is your typical response time?
5. Can you provide references from similar clients?
6. How do you stay updated with legal changes?
7. What's your approach to preventive legal care?

## Fee Structures

Understand different billing models:

- **Hourly Rates:** Pay for time spent
- **Fixed Fees:** Set price for specific services
- **Retainer:** Monthly fee for ongoing access
- **Contingency:** Payment based on outcome (for certain matters)

Choose a structure that works for your needs and budget.

## Building the Relationship

Once you choose a legal consultant:

### Be Transparent

Share complete information about your business, even if potentially unfavorable.

### Ask Questions

Don't hesitate to seek clarification on legal matters or advice.

### Provide Context

Help your lawyer understand your business goals and constraints.

### Maintain Regular Contact

Don't wait for problems—engage proactively for preventive advice.

## When to Change Lawyers

Consider changing if:
- You're consistently dissatisfied with service
- Communication has broken down
- Conflicts of interest arise
- Your needs have evolved beyond their expertise

## Conclusion

The right legal consultant becomes a valuable partner in your business journey. Take time to choose wisely, and invest in building a strong, collaborative relationship.`,
    author: 'Advocate Rajesh Kumar',
    publishedAt: '2025-12-10',
    category: 'Legal Advice',
    tags: ['legal consultant', 'choosing lawyer', 'business advice'],
    readTime: '7 min read',
  },
]

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/practice-areas/', label: 'Practice Areas' },
  { href: '/case-experience/', label: 'Case Experience' },
  { href: '/blog/', label: 'Legal Insights' },
  { href: '/contact/', label: 'Contact' },
]
