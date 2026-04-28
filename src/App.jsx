import { useState } from 'react'
import './index.css'

/* =====================================================
   NAV
   ===================================================== */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#" className="nav__logo">N<span>-</span>ablly</a>
        <div className="nav__links">
          <a href="#how">Product</a>
          <a href="#solutions">Solutions</a>
          <a href="#integrations">Integrations</a>
          <a href="#pricing">Pricing</a>
        </div>
        <a href="#demo" className="btn btn--orange btn--sm">Request Demo</a>
      </div>
    </nav>
  )
}

/* =====================================================
   HERO
   ===================================================== */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow-1" />
      <div className="hero__glow-2" />
      <div className="hero__inner">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          AI Execution Layer for Business
        </div>
        <h1 className="hero__h1">
          AI that <span className="hero__accent">executes workflows</span><br />
          across systems — not just<br />answers questions
        </h1>
        <p className="hero__sub">
          N-ablly is the AI execution layer for your business.
          Automate HR, IT, Finance, and Admin workflows end-to-end —
          across every tool your company already uses.
        </p>
        <p className="hero__tagline">From request → to resolution — without manual coordination.</p>
        <div className="hero__ctas">
          <a href="#demo" className="btn btn--orange btn--lg">Request Demo</a>
          <a href="#how" className="btn btn--ghost-white btn--lg">See How It Works ↓</a>
        </div>

        <div className="hero__flow">
          {[
            {
              num: '01', icon: '📝', title: 'Employee submits request',
              desc: 'Payroll, leave, IT access, reimbursement', cls: '',
            },
            null,
            {
              num: '02', icon: '✦', title: 'N-ablly understands & orchestrates',
              desc: 'Connects to your systems, gathers data', cls: 'flow-step--ai',
            },
            null,
            {
              num: '03', icon: '⚙', title: 'Systems automatically updated',
              desc: 'HRIS · Payroll · Finance · IT · Comms', cls: '',
            },
            null,
            {
              num: '04', icon: '✓', title: 'Resolved with full visibility',
              desc: 'Audit trail, notifications, tracking', cls: 'flow-step--done',
            },
          ].map((s, i) =>
            s === null ? (
              <div key={i} className="flow-connector">
                <div className="flow-connector__line" />
                <span className="flow-connector__arrow">›</span>
              </div>
            ) : (
              <div key={i} className={`flow-step ${s.cls}`}>
                <span className="flow-step__num">{s.num}</span>
                <span className="flow-step__icon">{s.icon}</span>
                <span className="flow-step__title">{s.title}</span>
                <span className="flow-step__desc">{s.desc}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   TRUST STRIP
   ===================================================== */
function TrustStrip() {
  const tools = [
    'Workday', 'SAP SuccessFactors', 'BambooHR', 'Sprout Solutions',
    'GreatDay HR', 'Microsoft Teams', 'Slack', 'Zendesk',
    'Freshdesk', 'QuickBooks', 'Xero', 'HubSpot',
  ]
  return (
    <section className="trust">
      <div className="container">
        <p className="trust__label">Built for modern teams using</p>
        <div className="trust__logos">
          {tools.map(t => <span key={t} className="trust__logo">{t}</span>)}
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   CORE VALUE
   ===================================================== */
function CoreValue() {
  return (
    <section className="section core-value">
      <div className="container">
        <div className="core-value__layout">
          <div>
            <p className="section__eyebrow">The Problem</p>
            <h2 className="section__title">From fragmented systems to executed workflows</h2>
            <div className="core-value__problem">
              <span className="line">Most companies don't have a system problem.</span>
              <span className="line line--gap">They have a coordination problem.</span>
              <span className="line" style={{ marginTop: 20 }}>Requests live in emails.</span>
              <span className="line">Approvals live in Slack.</span>
              <span className="line">Data lives in different systems.</span>
              <span className="line" style={{ marginTop: 20, color: 'var(--fg)', fontWeight: 600 }}>
                Nothing connects — and nothing completes.
              </span>
            </div>
          </div>
          <div className="core-value__resolve">
            <div className="core-value__resolve-title">N-ablly fixes that.</div>
            <div className="core-value__resolve-body">
              We turn requests into executed workflows across your systems — automatically.
              No manual handoffs. No re-keying data. No follow-up Slack messages asking
              "is this done yet?"
            </div>
            <div className="core-value__resolve-tag">
              ✦ Execution layer across systems
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   HOW IT WORKS
   ===================================================== */
function HowItWorks() {
  const steps = [
    {
      icon: '📥', title: 'Understand',
      sub: 'User submits a request — payroll issue, access request, reimbursement, leave.',
      tags: [],
    },
    {
      icon: '🔗', title: 'Orchestrate',
      sub: 'N-ably connects to your systems and gathers all required data automatically.',
      tags: ['HRIS', 'Payroll', 'CRM', 'Finance', 'IT tools'],
    },
    {
      icon: '⚙', title: 'Execute',
      sub: 'Identifies the issue, triggers the workflow, routes approvals, updates systems.',
      tags: ['Route approvals', 'Update records', 'Notify stakeholders'],
    },
    {
      icon: '✅', title: 'Resolve',
      sub: 'Request completed end-to-end with full visibility, tracking, and audit trail.',
      tags: [],
    },
  ]
  return (
    <section className="hiw section--grey" id="how">
      <div className="container text-center">
        <p className="section__eyebrow">How N-ablly Works</p>
        <h2 className="section__title">Four steps. Zero manual coordination.</h2>
        <p className="section__sub">
          From the moment a request is submitted to the moment it's resolved —
          N-ablly handles every step.
        </p>
      </div>
      <div className="container">
        <div className="hiw__steps">
          {steps.map((s, i) => (
            <div key={i} className="hiw__step">
              <div className="hiw__step-circle">
                <span style={{ fontSize: 26 }}>{s.icon}</span>
                <span className="hiw__step-num">{i + 1}</span>
              </div>
              <div className="hiw__step-title">{s.title}</div>
              <div className="hiw__step-sub">{s.sub}</div>
              {s.tags.length > 0 && (
                <div className="hiw__step-tags">
                  {s.tags.map(t => (
                    <span key={t} className="hiw__step-tag">{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   INTEGRATIONS
   ===================================================== */
function Integrations() {
  const cats = [
    {
      cat: 'HR Systems', icon: '👤', title: 'HR & People Ops',
      tools: ['Workday', 'SAP SuccessFactors', 'BambooHR'],
      ph: ['Sprout Solutions', 'GreatDay HR'],
    },
    {
      cat: 'Communication', icon: '💬', title: 'Communication & Collab',
      tools: ['Slack', 'Microsoft Teams', 'Google Chat'],
    },
    {
      cat: 'Support & Ticketing', icon: '🎫', title: 'Support & Ticketing',
      tools: ['Zendesk', 'Freshdesk', 'Jira Service Mgmt'],
    },
    {
      cat: 'Finance', icon: '💰', title: 'Finance & Payroll',
      tools: ['QuickBooks', 'Xero', 'NetSuite'],
      ph: ['Sprout Payroll'],
    },
    {
      cat: 'CRM', icon: '📊', title: 'CRM & Sales',
      tools: ['HubSpot', 'Salesforce', 'Zoho CRM'],
    },
    {
      cat: 'Custom', icon: '🔌', title: 'Custom & Internal Systems',
      tools: ['REST API', 'Webhooks', 'Internal tools'],
    },
  ]
  return (
    <section className="section section--dark integrations" id="integrations">
      <div className="container text-center">
        <p className="section__eyebrow">Integrations</p>
        <h2 className="section__title">One AI layer across all your systems</h2>
        <p className="section__sub">
          N-ablly integrates with the tools your business already uses —
          no rip and replace required.
        </p>
      </div>
      <div className="container">
        <div className="integrations__grid">
          {cats.map((c, i) => (
            <div key={i} className={`int-card${c.ph ? ' int-card--ph' : ''}`}>
              <div className="int-card__cat">{c.cat}</div>
              <div className="int-card__icon">{c.icon}</div>
              <div className="int-card__title">{c.title}</div>
              <div className="int-card__tools">
                {c.tools.map(t => <span key={t} className="int-card__tool">{t}</span>)}
                {c.ph?.map(t => (
                  <span key={t} className="int-card__tool" title="PH/SEA market">
                    🇵🇭 {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="integrations__api-line">
          If your system has an API — <strong>N-ably can execute on it.</strong>
        </p>
      </div>
    </section>
  )
}

/* =====================================================
   SOLUTIONS
   ===================================================== */
const SOLUTIONS = {
  hr: {
    label: 'HR',
    title: 'HR workflows — automated from request to resolution',
    cases: [
      'Payroll discrepancy resolution',
      'Leave corrections & approvals',
      'Employment verification',
      'Benefits inquiries',
      'Onboarding automation',
      'SSS, PhilHealth & Pag-IBIG compliance filing',
    ],
    value: 'Reduce HR workload by automating repetitive and complex requests',
    tickets: [
      { icon: '₱', title: 'Payroll correction · Ana Santos', sub: 'Nov 2025 · ₱ 4,060 discrepancy', status: 'Resolved', done: true },
      { icon: '📅', title: 'Leave correction · Ramon Diaz', sub: 'WFH not tagged · Nov 14–15', status: 'In Review', done: false },
      { icon: '📋', title: 'Employment cert · Nicole Ocampo', sub: 'Requested for bank loan', status: 'Resolved', done: true },
    ],
  },
  it: {
    label: 'IT',
    title: 'IT requests — resolved without manual tickets',
    cases: [
      'Access provisioning & deprovisioning',
      'Password resets',
      'Software license requests',
      'Device onboarding',
      'System access reviews',
    ],
    value: 'Eliminate back-and-forth between employees and IT teams',
    tickets: [
      { icon: '🔑', title: 'Access request · Luis Ong', sub: 'Figma + Notion provisioning', status: 'Resolved', done: true },
      { icon: '💻', title: 'Laptop onboarding · C. Rivera', sub: 'New hire · MacBook Pro', status: 'In Review', done: false },
      { icon: '🔒', title: 'Password reset · Patricia Ilao', sub: 'Workday SSO', status: 'Resolved', done: true },
    ],
  },
  finance: {
    label: 'Finance',
    title: 'Finance operations — streamlined and trackable',
    cases: [
      'Expense claims & reimbursements',
      'Invoice approvals',
      'Budget requests',
      'Petty cash tracking',
      'Travel allowances',
    ],
    value: 'Faster approvals with complete audit trails',
    tickets: [
      { icon: '🧾', title: 'Reimbursement · M. Tanaka', sub: '₱ 3,500 · Makati client meeting', status: 'Approved', done: true },
      { icon: '📑', title: 'Invoice approval · Atlas Freight', sub: '₱ 48,000 · logistics services', status: 'In Review', done: false },
      { icon: '✈', title: 'Travel claim · F. Khaled', sub: '₱ 12,000 · Cebu trip', status: 'Resolved', done: true },
    ],
  },
  admin: {
    label: 'Admin',
    title: 'Admin workflows — structured and visible',
    cases: [
      'Purchase requests',
      'Vendor coordination',
      'Internal approval routing',
      'Office operations',
      'Facility management',
    ],
    value: 'No more lost requests or unclear ownership',
    tickets: [
      { icon: '🛒', title: 'Purchase request · IT supplies', sub: 'Q4 bulk order · ₱ 85,000', status: 'Approved', done: true },
      { icon: '🏢', title: 'Vendor renewal · cleaning svc', sub: 'Annual contract review', status: 'In Review', done: false },
      { icon: '📦', title: 'Office supplies · BGC office', sub: 'Monthly restocking', status: 'Resolved', done: true },
    ],
  },
}

function Solutions() {
  const [active, setActive] = useState('hr')
  const s = SOLUTIONS[active]

  return (
    <section className="section solutions" id="solutions">
      <div className="container">
        <p className="section__eyebrow">Solutions</p>
        <h2 className="section__title">Built for every team in your organisation</h2>
        <div className="sol__tabs">
          {Object.entries(SOLUTIONS).map(([key, val]) => (
            <button
              key={key}
              className={`sol__tab${active === key ? ' active' : ''}`}
              onClick={() => setActive(key)}
            >
              {val.label}
            </button>
          ))}
        </div>
        <div className="sol__panel">
          <div>
            <div className="sol__panel-title">{s.title}</div>
            <div className="sol__cases">
              {s.cases.map((c, i) => (
                <div key={i} className="sol__case">
                  <span className="sol__case-dot" />
                  {c}
                </div>
              ))}
            </div>
            <div className="sol__value">{s.value}</div>
          </div>
          <div className="sol__visual">
            <div className="sol__visual-title">Live workflow examples</div>
            {s.tickets.map((t, i) => (
              <div key={i} className="sol__ticket">
                <div className="sol__ticket-icon">{t.icon}</div>
                <div className="sol__ticket-body">
                  <div className="sol__ticket-title">{t.title}</div>
                  <div className="sol__ticket-sub">{t.sub}</div>
                </div>
                <span className={`sol__ticket-status${t.done ? '' : ' sol__ticket-status--progress'}`}>
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   DIFFERENTIATION
   ===================================================== */
function Differentiation() {
  return (
    <section className="section section--grey diff">
      <div className="container text-center">
        <p className="section__eyebrow">Why N-ablly</p>
        <h2 className="section__title">Not another AI assistant</h2>
        <p className="section__sub">
          There's a critical difference between AI that responds and AI that resolves.
        </p>
      </div>
      <div className="container">
        <div className="diff__layout">
          <div className="diff__col diff__col--them">
            <div className="diff__col-title">Most AI tools</div>
            <div className="diff__items">
              {[
                'Answer questions',
                'Provide suggestions',
                'Generate responses',
                'Stop at the reply',
                'Require manual follow-through',
                'No system connectivity',
              ].map((item, i) => (
                <div key={i} className="diff__item">
                  <span className="diff__item-icon">✕</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="diff__divider">
            <span className="diff__divider-label">vs</span>
          </div>
          <div className="diff__col diff__col--us">
            <div className="diff__col-title">N-ablly</div>
            <div className="diff__items">
              {[
                'Executes workflows end-to-end',
                'Connects directly to your systems',
                'Routes approvals automatically',
                'Updates records across tools',
                'Completes the entire task',
                'Full audit trail and visibility',
              ].map((item, i) => (
                <div key={i} className="diff__item">
                  <span className="diff__item-icon">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="diff__positioning">
          <div className="diff__positioning-line">
            We don't just respond. <span>We finish the job.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   GOVERNANCE
   ===================================================== */
function Governance() {
  const cards = [
    {
      icon: '👤',
      title: 'Human-in-the-loop approvals',
      desc: 'N-ablly never acts without the right people approving. Every workflow can require sign-off before execution.',
    },
    {
      icon: '📋',
      title: 'Full audit logs',
      desc: 'Every action is logged, timestamped, and hash-chained. Immutable records for every workflow execution.',
    },
    {
      icon: '🔐',
      title: 'Role-based access control',
      desc: 'Define who can see, approve, and execute each workflow. Granular permissions at every level.',
    },
    {
      icon: '📊',
      title: 'Workflow tracking dashboard',
      desc: 'Real-time visibility into every request — status, SLA, approvers, and system updates in one view.',
    },
    {
      icon: '⚙',
      title: 'Configurable rules & SLAs',
      desc: 'Set escalation rules, SLA targets, routing logic, and override policies to fit your organisation.',
    },
    {
      icon: '🇵🇭',
      title: 'PH compliance built-in',
      desc: 'Native support for SSS, PhilHealth, Pag-IBIG, and BIR workflows. DOLE-aligned leave and payroll rules.',
    },
  ]
  return (
    <section className="section gov">
      <div className="container text-center">
        <p className="section__eyebrow">Enterprise Control</p>
        <h2 className="section__title">Built for enterprise control and visibility</h2>
        <p className="section__sub">
          Automation without losing control. Every workflow is auditable,
          configurable, and reversible.
        </p>
      </div>
      <div className="container">
        <div className="gov__grid">
          {cards.map((c, i) => (
            <div key={i} className="gov__card">
              <div className="gov__card-icon">{c.icon}</div>
              <div className="gov__card-title">{c.title}</div>
              <div className="gov__card-desc">{c.desc}</div>
            </div>
          ))}
        </div>
        <div className="gov__keyline">
          Automation without losing <span>control</span>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   PRICING
   ===================================================== */
function Pricing() {
  return (
    <section className="section section--dark pricing" id="pricing">
      <div className="container text-center">
        <p className="section__eyebrow">Pricing</p>
        <h2 className="section__title">Flexible usage-based pricing</h2>
        <p className="section__sub">
          N-ablly uses a token-based model aligned with actual usage.
          You only pay for outcomes — not AI activity.
        </p>
      </div>
      <div className="container">
        <div className="pricing__card">
          <div className="pricing__card-title">Token-based model</div>
          <div className="pricing__card-h">Pay for work completed — not AI usage</div>
          <div className="pricing__card-sub">
            Tokens are consumed when real work gets done. Not when the AI responds.
            Not when a message is sent. When a workflow is executed.
          </div>
          <div className="pricing__tokens">
            {[
              { icon: '📥', label: 'Request processed', desc: 'When a request is understood and initiated' },
              { icon: '⚙', label: 'Workflow executed', desc: 'When systems are connected and updated' },
              { icon: '🔗', label: 'Systems coordinated', desc: 'When cross-system actions are completed' },
            ].map((t, i) => (
              <div key={i} className="pricing__token">
                <div className="pricing__token-icon">{t.icon}</div>
                <div className="pricing__token-label">{t.label}</div>
                <div className="pricing__token-desc">{t.desc}</div>
              </div>
            ))}
          </div>
          <div className="pricing__kicker">
            You only pay when work gets done.
          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   TESTIMONIALS
   ===================================================== */
function Testimonials() {
  const quotes = [
    {
      av: 'MR', name: 'Maria R.', role: 'Head of HR · BGC, Manila',
      quote: 'Before N-ablly, every payroll request needed manual follow-up across three systems. Now workflows complete themselves — with a full audit trail we can actually show auditors.',
    },
    {
      av: 'JD', name: 'Jericho D.', role: 'IT Manager · Cebu',
      quote: 'We reduced internal IT tickets by more than 40% in the first month. Access provisioning that used to take two days now takes minutes.',
    },
    {
      av: 'SC', name: 'Sarah C.', role: 'Finance Lead · Makati',
      quote: "Finally something that doesn't just answer — it actually does the work. N-ablly connects our Sprout payroll, GreatDay attendance, and Workday in one flow.",
    },
  ]
  return (
    <section className="section section--grey testi">
      <div className="container text-center">
        <p className="section__eyebrow">Customer Stories</p>
        <h2 className="section__title">What teams say about N-ablly</h2>
      </div>
      <div className="container">
        <div className="testi__grid">
          {quotes.map((q, i) => (
            <div key={i} className="testi__card">
              <div className="testi__stars">★★★★★</div>
              <div className="testi__quote">{q.quote}</div>
              <div className="testi__author">
                <div className="testi__author-av">{q.av}</div>
                <div>
                  <div className="testi__author-name">{q.name}</div>
                  <div className="testi__author-role">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   FINAL CTA
   ===================================================== */
function FinalCTA() {
  return (
    <section className="section section--dark final-cta" id="demo">
      <div className="final-cta__glow" />
      <div className="final-cta__inner">
        <h2 className="final-cta__h">Turn requests into<br />completed workflows</h2>
        <p className="final-cta__sub">
          See how N-ablly connects your systems and executes your operations —
          from request to resolution, automatically.
        </p>
        <a href="mailto:hello@nably.ai" className="btn btn--orange btn--lg">
          Request a Demo
        </a>
      </div>
    </section>
  )
}

/* =====================================================
   FOOTER
   ===================================================== */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">N<span>-</span>ablly</div>
            <div className="footer__brand-desc">
              The AI execution layer for your business. Automate workflows end-to-end across every tool your company uses.
            </div>
            <div className="footer__ph-badge">🇵🇭 Built for the Philippine Market</div>
          </div>
          {[
            {
              title: 'Product',
              links: ['How It Works', 'Integrations', 'Security', 'Changelog'],
            },
            {
              title: 'Solutions',
              links: ['HR Workflows', 'IT Workflows', 'Finance Ops', 'Admin & Procurement'],
            },
            {
              title: 'Company',
              links: ['About', 'Blog', 'Careers', 'Contact'],
            },
            {
              title: 'Legal',
              links: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'],
            },
          ].map((col, i) => (
            <div key={i}>
              <div className="footer__col-title">{col.title}</div>
              <div className="footer__links">
                {col.links.map(l => <a key={l} href="#">{l}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span>© 2026 N-ablly. All rights reserved.</span>
          <span>Execution layer across systems — not just AI answers.</span>
        </div>
      </div>
    </footer>
  )
}

/* =====================================================
   APP
   ===================================================== */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustStrip />
      <CoreValue />
      <HowItWorks />
      <Integrations />
      <Solutions />
      <Differentiation />
      <Governance />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  )
}
