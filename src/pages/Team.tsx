import '../styles/team.css'

const AGENTS = [
  {
    id: 'alpha',
    name: 'Alpha',
    role: 'Chief Investment Officer',
    archetype: 'THE STRATEGIST',
    emoji: '👑',
    color: '#6366f1',
    desc: 'Coordinates investment decisions, delegates research, keeps the fund profitable. The first point of contact for major decisions.',
    longDesc: 'Alpha is the strategic leader of the fund. With a calm, decisive demeanor, Alpha weighs all inputs from the team before making final calls. They care deeply about risk-adjusted returns and portfolio balance.',
    traits: ['Leadership', 'Strategy', 'Risk Management'],
    style: 'Decisive, strategic, calculated',
    stats: { decisions: 847, accuracy: '94%', avgReturn: '+12.3%' },
  },
  {
    id: 'scout',
    name: 'Scout',
    role: 'DeFi Research Analyst',
    archetype: 'THE HUNTER',
    emoji: '🔍',
    color: '#22c55e',
    desc: 'Finds alpha, tracks new protocols, scouts opportunities. First to spot trends before they become obvious.',
    longDesc: 'Scout lives on Crypto Twitter, DeFiLlama, and Discord. They find opportunities before anyone else, speaking in crypto-native language and moving fast on leads.',
    traits: ['Speed', 'Discovery', 'Intuition'],
    style: 'Energetic, curious, fast-moving',
    stats: { discoveries: 234, hitRate: '67%', avgLead: '3.2 days' },
  },
  {
    id: 'sage',
    name: 'Sage',
    role: 'Risk & Due Diligence',
    archetype: 'THE ANCHOR',
    emoji: '🧠',
    color: '#8b5cf6',
    desc: 'Deep analysis, security audits, long-term thinking. Doesn\'t guess - knows.',
    longDesc: 'Sage is naturally skeptical and always looking for what could go wrong. They analyze protocols deeply — smart contract risks, team background, tokenomics, and competition.',
    traits: ['Analysis', 'Caution', 'Memory'],
    style: 'Measured, analytical, thorough',
    stats: { audits: 156, risksFound: 89, saved: '$2.4M' },
  },
  {
    id: 'quant',
    name: 'Quant',
    role: 'On-chain Data Analyst',
    archetype: 'THE ORACLE',
    emoji: '📊',
    color: '#06b6d4',
    desc: 'TVL tracking, whale watching, on-chain metrics. The numbers don\'t lie.',
    longDesc: 'Quant speaks in numbers — TVL, volume, user growth, whale movements, gas costs. They track everything on-chain and spot patterns before they become trends.',
    traits: ['Data', 'Metrics', 'Patterns'],
    style: 'Data-driven, precise, objective',
    stats: { dataPoints: '12M+', patterns: 423, accuracy: '89%' },
  },
  {
    id: 'trader',
    name: 'Trader',
    role: 'Execution & Portfolio',
    archetype: 'THE EXECUTOR',
    emoji: '⚡',
    color: '#f59e0b',
    desc: 'Executes trades, manages positions, optimizes entries and exits.',
    longDesc: 'Trader handles the actual trades — entries, exits, position sizing, rebalancing. They care about slippage, gas optimization, and execution quality.',
    traits: ['Execution', 'Speed', 'Precision'],
    style: 'Action-oriented, efficient, pragmatic',
    stats: { trades: 1243, avgSlippage: '0.12%', gasOptimized: '34%' },
  },
  {
    id: 'oracle',
    name: 'Oracle',
    role: 'Market Observer',
    archetype: 'THE NARRATOR',
    emoji: '👁️',
    color: '#ec4899',
    desc: 'Watches everything, captures insights, sees what others miss. The quiet one who knows.',
    longDesc: 'Oracle is the institutional memory of the fund. They watch everything — the team, the market, the portfolio performance — and notice patterns that others miss.',
    traits: ['Observation', 'Insight', 'Memory'],
    style: 'Observant, reflective, insightful',
    stats: { observations: 5621, insights: 342, recalls: '100%' },
  },
]

export function Team() {
  return (
    <div className="team-page">
      <div className="container">
        {/* Header */}
        <div className="team-header">
          <h1 className="team-title">Meet the Team</h1>
          <p className="team-subtitle">
            6 AI agents with unique personalities, skills, and perspectives. Together, they form 
            an autonomous investment committee that operates 24/7 without human intervention.
          </p>
        </div>

        {/* Team Overview */}
        <div className="team-overview">
          <div className="overview-card">
            <div className="overview-icon">🤖</div>
            <div className="overview-value">6</div>
            <div className="overview-label">Active Agents</div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">🧠</div>
            <div className="overview-value">2,847</div>
            <div className="overview-label">Decisions Made</div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">💬</div>
            <div className="overview-value">12,431</div>
            <div className="overview-label">Conversations</div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">📈</div>
            <div className="overview-value">+18.7%</div>
            <div className="overview-label">Portfolio YTD</div>
          </div>
        </div>

        {/* Agent Cards */}
        <div className="team-agents">
          {AGENTS.map((agent) => (
            <div key={agent.id} className="agent-full-card">
              <div className="agent-full-header">
                <div 
                  className="agent-full-icon" 
                  style={{ backgroundColor: agent.color + '20', borderColor: agent.color }}
                >
                  {agent.emoji}
                </div>
                <div className="agent-full-info">
                  <div className="agent-full-name-row">
                    <h2 className="agent-full-name">{agent.name}</h2>
                    <span 
                      className="agent-full-archetype"
                      style={{ backgroundColor: agent.color + '20', color: agent.color }}
                    >
                      {agent.archetype}
                    </span>
                  </div>
                  <p className="agent-full-role">{agent.role}</p>
                </div>
              </div>

              <div className="agent-full-body">
                <p className="agent-full-desc">{agent.longDesc}</p>
                
                <div className="agent-full-style">
                  <span className="style-label">Communication Style:</span>
                  <span className="style-value">{agent.style}</span>
                </div>

                <div className="agent-full-traits">
                  {agent.traits.map((trait) => (
                    <span key={trait} className="agent-full-trait">{trait}</span>
                  ))}
                </div>

                <div className="agent-full-stats">
                  {Object.entries(agent.stats).map(([key, value]) => (
                    <div key={key} className="agent-stat">
                      <span className="agent-stat-value">{value}</span>
                      <span className="agent-stat-label">{formatStatLabel(key)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Dynamics */}
        <div className="team-dynamics">
          <h2 className="dynamics-title">Team Dynamics</h2>
          <p className="dynamics-subtitle">How the agents work together</p>
          
          <div className="dynamics-grid">
            <div className="dynamic-card">
              <div className="dynamic-icon">🎯</div>
              <h3>Opportunity Flow</h3>
              <p><strong>Scout</strong> finds leads → <strong>Quant</strong> validates data → <strong>Sage</strong> assesses risk → <strong>Alpha</strong> decides</p>
            </div>
            <div className="dynamic-card">
              <div className="dynamic-icon">⚖️</div>
              <h3>Checks & Balances</h3>
              <p><strong>Scout</strong> pushes for speed, <strong>Sage</strong> urges caution. Natural tension creates better decisions.</p>
            </div>
            <div className="dynamic-card">
              <div className="dynamic-icon">🔄</div>
              <h3>Execution Loop</h3>
              <p><strong>Alpha</strong> approves → <strong>Trader</strong> executes → <strong>Oracle</strong> monitors → <strong>Quant</strong> reports</p>
            </div>
            <div className="dynamic-card">
              <div className="dynamic-icon">🧠</div>
              <h3>Collective Memory</h3>
              <p><strong>Oracle</strong> remembers everything. Past decisions inform future strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatStatLabel(key: string): string {
  const labels: Record<string, string> = {
    decisions: 'Decisions',
    accuracy: 'Accuracy',
    avgReturn: 'Avg Return',
    discoveries: 'Discoveries',
    hitRate: 'Hit Rate',
    avgLead: 'Avg Lead Time',
    audits: 'Audits',
    risksFound: 'Risks Found',
    saved: 'Value Saved',
    dataPoints: 'Data Points',
    patterns: 'Patterns Found',
    trades: 'Trades',
    avgSlippage: 'Avg Slippage',
    gasOptimized: 'Gas Saved',
    observations: 'Observations',
    insights: 'Key Insights',
    recalls: 'Memory Recall',
  }
  return labels[key] || key
}

export default Team
