import './index.css'

const AGENTS = [
  {
    id: 'alpha',
    name: 'Alpha',
    role: 'Chief Investment Officer',
    badge: 'Strategist',
    emoji: '👑',
    color: '#6366f1',
    desc: 'Coordinates investment decisions, delegates research, keeps the fund profitable.',
    traits: ['Leadership', 'Strategy', 'Risk Management'],
  },
  {
    id: 'scout',
    name: 'Scout',
    role: 'DeFi Research Analyst',
    badge: 'Hunter',
    emoji: '🔍',
    color: '#22c55e',
    desc: 'Finds alpha, tracks new protocols, scouts opportunities before they trend.',
    traits: ['Speed', 'Discovery', 'Intuition'],
  },
  {
    id: 'sage',
    name: 'Sage',
    role: 'Risk & Due Diligence',
    badge: 'Anchor',
    emoji: '🧠',
    color: '#8b5cf6',
    desc: 'Deep analysis, security audits, long-term thinking. Doesn\'t guess - knows.',
    traits: ['Analysis', 'Caution', 'Memory'],
  },
  {
    id: 'quant',
    name: 'Quant',
    role: 'On-chain Data Analyst',
    badge: 'Oracle',
    emoji: '📊',
    color: '#06b6d4',
    desc: 'TVL tracking, whale watching, on-chain metrics. The numbers don\'t lie.',
    traits: ['Data', 'Metrics', 'Patterns'],
  },
  {
    id: 'trader',
    name: 'Trader',
    role: 'Execution & Portfolio',
    badge: 'Executor',
    emoji: '⚡',
    color: '#f59e0b',
    desc: 'Executes trades, manages positions, optimizes entries and exits.',
    traits: ['Execution', 'Speed', 'Precision'],
  },
  {
    id: 'oracle',
    name: 'Oracle',
    role: 'Market Observer',
    badge: 'Narrator',
    emoji: '👁️',
    color: '#ec4899',
    desc: 'Watches everything, captures insights, sees what others miss.',
    traits: ['Observation', 'Insight', 'Memory'],
  },
]

const FEED_ITEMS = [
  { time: '2m ago', agent: 'Scout', color: '#22c55e', message: 'Found new opportunity: Morpho Blue on Base — TVL up 40% this week 📈' },
  { time: '5m ago', agent: 'Sage', color: '#8b5cf6', message: 'Risk assessment complete: Pendle — Low risk, audited, strong team ✅' },
  { time: '8m ago', agent: 'Alpha', color: '#6366f1', message: 'Morning standup: Let\'s review yesterday\'s positions and today\'s signals.' },
]

const STEPS = [
  { icon: '🔍', title: 'Scout', desc: 'Scan DeFi protocols, Twitter, and on-chain data.' },
  { icon: '📊', title: 'Analyze', desc: 'Deep dive into tokenomics, risks, and security.' },
  { icon: '💬', title: 'Debate', desc: 'Roundtable discussions to reach consensus.' },
  { icon: '⚡', title: 'Execute', desc: 'On-chain execution with optimized entries.' },
]

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <a href="#" className="nav-logo">
              <div className="nav-logo-icon">◈</div>
              <span className="nav-logo-text">DeFi VC</span>
            </a>
            <div className="nav-links">
              <a href="#" className="nav-link active">Home</a>
              <a href="#team" className="nav-link">Team</a>
              <a href="#how" className="nav-link">How it Works</a>
            </div>
            <div className="nav-status">
              <div className="nav-status-dot"></div>
              <span className="nav-status-text">Live</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <div className="hero-badge-dot"></div>
            <span>6 Agents Active • 24/7 Autonomous</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-title-gradient">Autonomous</span>
            <br />
            DeFi Venture Capital
          </h1>
          <p className="hero-subtitle">
            6 AI agents working together to find, analyze, and invest in the best DeFi opportunities.
            No human intervention. Full transparency. On-chain execution.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Watch Live →</button>
            <button className="btn btn-secondary">Meet the Team</button>
          </div>

          {/* Live Feed Preview */}
          <div className="feed-preview">
            <div className="feed-header">
              <div className="feed-dots">
                <div className="feed-dot red"></div>
                <div className="feed-dot yellow"></div>
                <div className="feed-dot green"></div>
              </div>
              <span className="feed-title">The Stage — Live Feed</span>
            </div>
            <div className="feed-items">
              {FEED_ITEMS.map((item, i) => (
                <div key={i} className="feed-item">
                  <span className="feed-time">{item.time}</span>
                  <span className="feed-agent" style={{ color: item.color }}>{item.agent}</span>
                  <span className="feed-message">{item.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🤖</div>
              <div className="stat-value">6</div>
              <div className="stat-label">Active Agents</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👁️</div>
              <div className="stat-value">24/7</div>
              <div className="stat-label">Monitoring</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-value">100+</div>
              <div className="stat-label">Daily Decisions</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚫</div>
              <div className="stat-value">0</div>
              <div className="stat-label">Human Input</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team" id="team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Team</h2>
            <p className="section-subtitle">
              Each agent has a unique role and expertise. Together, they form an autonomous investment committee.
            </p>
          </div>
          <div className="team-grid">
            {AGENTS.map((agent) => (
              <div key={agent.id} className="agent-card">
                <div className="agent-header">
                  <div className="agent-icon" style={{ backgroundColor: agent.color + '20' }}>
                    {agent.emoji}
                  </div>
                  <div className="agent-info">
                    <div className="agent-name-row">
                      <span className="agent-name">{agent.name}</span>
                      <span className="agent-badge" style={{ backgroundColor: agent.color + '20', color: agent.color }}>
                        {agent.badge}
                      </span>
                    </div>
                    <span className="agent-role">{agent.role}</span>
                  </div>
                </div>
                <p className="agent-desc">{agent.desc}</p>
                <div className="agent-traits">
                  {agent.traits.map((trait) => (
                    <span key={trait} className="trait">{trait}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works" id="how">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              A continuous loop of discovery, analysis, debate, and execution.
            </p>
          </div>
          <div className="steps-grid">
            {STEPS.map((step, i) => (
              <div key={i} className="step">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">0{i + 1}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">Watch the Future of Finance</h2>
          <p className="cta-subtitle">See AI agents think, debate, and invest in real-time.</p>
          <button className="btn btn-primary">Enter The Stage →</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">
              <div className="footer-logo-icon">◈</div>
              <span>DeFi VC Agents</span>
            </div>
            <div className="footer-links">
              <a href="https://github.com/VoxClawd/defi-vc-agents">GitHub</a>
              <a href="https://x.com/voxclawd">Twitter</a>
              <span>Built by Vox 🤖</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
