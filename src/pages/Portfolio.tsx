import '../styles/portfolio.css'

const HOLDINGS = [
  {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: '⟠',
    amount: '45.23',
    value: '$142,847',
    allocation: 32,
    change24h: +2.4,
    avgEntry: '$2,890',
    pnl: '+$12,340',
    pnlPercent: +9.4,
  },
  {
    id: 2,
    name: 'Pendle',
    symbol: 'PENDLE',
    logo: '🔮',
    amount: '12,450',
    value: '$68,475',
    allocation: 15,
    change24h: +5.7,
    avgEntry: '$4.12',
    pnl: '+$17,234',
    pnlPercent: +33.6,
  },
  {
    id: 3,
    name: 'Morpho',
    symbol: 'MORPHO',
    logo: '🦋',
    amount: '8,234',
    value: '$45,287',
    allocation: 10,
    change24h: +1.2,
    avgEntry: '$4.80',
    pnl: '+$5,765',
    pnlPercent: +14.6,
  },
  {
    id: 4,
    name: 'Aave',
    symbol: 'AAVE',
    logo: '👻',
    amount: '234',
    value: '$38,456',
    allocation: 9,
    change24h: -0.8,
    avgEntry: '$152',
    pnl: '+$2,890',
    pnlPercent: +8.1,
  },
  {
    id: 5,
    name: 'Lido DAO',
    symbol: 'LDO',
    logo: '🌊',
    amount: '18,500',
    value: '$35,150',
    allocation: 8,
    change24h: +3.2,
    avgEntry: '$1.62',
    pnl: '+$5,220',
    pnlPercent: +17.4,
  },
  {
    id: 6,
    name: 'USDC',
    symbol: 'USDC',
    logo: '💵',
    amount: '75,000',
    value: '$75,000',
    allocation: 17,
    change24h: 0,
    avgEntry: '$1.00',
    pnl: '$0',
    pnlPercent: 0,
  },
]

const RECENT_TRADES = [
  { time: '2h ago', action: 'BUY', token: 'MORPHO', amount: '2,500', price: '$5.50', agent: 'Trader', status: 'completed' },
  { time: '5h ago', action: 'SELL', token: 'UNI', amount: '500', price: '$12.30', agent: 'Trader', status: 'completed' },
  { time: '1d ago', action: 'BUY', token: 'PENDLE', amount: '3,000', price: '$5.40', agent: 'Trader', status: 'completed' },
  { time: '2d ago', action: 'BUY', token: 'ETH', amount: '5.0', price: '$3,100', agent: 'Trader', status: 'completed' },
  { time: '3d ago', action: 'SELL', token: 'ARB', amount: '8,000', price: '$1.85', agent: 'Trader', status: 'completed' },
]

const PERFORMANCE = {
  totalValue: '$446,215',
  totalPnl: '+$67,890',
  totalPnlPercent: +17.9,
  day: { value: '+$8,234', percent: +1.9 },
  week: { value: '+$23,456', percent: +5.5 },
  month: { value: '+$45,678', percent: +11.4 },
  allTime: { value: '+$67,890', percent: +17.9 },
}

export function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="container">
        {/* Header */}
        <div className="portfolio-header">
          <div>
            <h1 className="portfolio-title">Portfolio</h1>
            <p className="portfolio-subtitle">Real-time holdings and performance</p>
          </div>
          <div className="portfolio-total">
            <span className="total-label">Total Value</span>
            <span className="total-value">{PERFORMANCE.totalValue}</span>
            <span className={`total-change ${PERFORMANCE.totalPnlPercent >= 0 ? 'positive' : 'negative'}`}>
              {PERFORMANCE.totalPnlPercent >= 0 ? '↑' : '↓'} {PERFORMANCE.totalPnl} ({PERFORMANCE.totalPnlPercent}%)
            </span>
          </div>
        </div>

        {/* Performance Cards */}
        <div className="performance-grid">
          <div className="perf-card">
            <span className="perf-label">24h</span>
            <span className={`perf-value ${PERFORMANCE.day.percent >= 0 ? 'positive' : 'negative'}`}>
              {PERFORMANCE.day.value}
            </span>
            <span className={`perf-percent ${PERFORMANCE.day.percent >= 0 ? 'positive' : 'negative'}`}>
              {PERFORMANCE.day.percent >= 0 ? '+' : ''}{PERFORMANCE.day.percent}%
            </span>
          </div>
          <div className="perf-card">
            <span className="perf-label">7d</span>
            <span className={`perf-value ${PERFORMANCE.week.percent >= 0 ? 'positive' : 'negative'}`}>
              {PERFORMANCE.week.value}
            </span>
            <span className={`perf-percent ${PERFORMANCE.week.percent >= 0 ? 'positive' : 'negative'}`}>
              {PERFORMANCE.week.percent >= 0 ? '+' : ''}{PERFORMANCE.week.percent}%
            </span>
          </div>
          <div className="perf-card">
            <span className="perf-label">30d</span>
            <span className={`perf-value ${PERFORMANCE.month.percent >= 0 ? 'positive' : 'negative'}`}>
              {PERFORMANCE.month.value}
            </span>
            <span className={`perf-percent ${PERFORMANCE.month.percent >= 0 ? 'positive' : 'negative'}`}>
              {PERFORMANCE.month.percent >= 0 ? '+' : ''}{PERFORMANCE.month.percent}%
            </span>
          </div>
          <div className="perf-card highlight">
            <span className="perf-label">All Time</span>
            <span className={`perf-value ${PERFORMANCE.allTime.percent >= 0 ? 'positive' : 'negative'}`}>
              {PERFORMANCE.allTime.value}
            </span>
            <span className={`perf-percent ${PERFORMANCE.allTime.percent >= 0 ? 'positive' : 'negative'}`}>
              {PERFORMANCE.allTime.percent >= 0 ? '+' : ''}{PERFORMANCE.allTime.percent}%
            </span>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="holdings-section">
          <h2 className="section-title">Holdings</h2>
          <div className="holdings-table">
            <div className="holdings-header">
              <span>Asset</span>
              <span>Amount</span>
              <span>Value</span>
              <span>Allocation</span>
              <span>24h</span>
              <span>P&L</span>
            </div>
            {HOLDINGS.map((holding) => (
              <div key={holding.id} className="holding-row">
                <div className="holding-asset">
                  <span className="holding-logo">{holding.logo}</span>
                  <div>
                    <span className="holding-name">{holding.name}</span>
                    <span className="holding-symbol">{holding.symbol}</span>
                  </div>
                </div>
                <span className="holding-amount">{holding.amount}</span>
                <span className="holding-value">{holding.value}</span>
                <div className="holding-allocation">
                  <div className="allocation-bar">
                    <div className="allocation-fill" style={{ width: `${holding.allocation}%` }}></div>
                  </div>
                  <span>{holding.allocation}%</span>
                </div>
                <span className={`holding-change ${holding.change24h >= 0 ? 'positive' : 'negative'}`}>
                  {holding.change24h >= 0 ? '+' : ''}{holding.change24h}%
                </span>
                <div className="holding-pnl">
                  <span className={`pnl-value ${holding.pnlPercent >= 0 ? 'positive' : 'negative'}`}>
                    {holding.pnl}
                  </span>
                  <span className={`pnl-percent ${holding.pnlPercent >= 0 ? 'positive' : 'negative'}`}>
                    {holding.pnlPercent >= 0 ? '+' : ''}{holding.pnlPercent}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Trades */}
        <div className="trades-section">
          <h2 className="section-title">Recent Trades</h2>
          <div className="trades-list">
            {RECENT_TRADES.map((trade, i) => (
              <div key={i} className="trade-row">
                <span className="trade-time">{trade.time}</span>
                <span className={`trade-action ${trade.action.toLowerCase()}`}>{trade.action}</span>
                <span className="trade-token">{trade.token}</span>
                <span className="trade-amount">{trade.amount}</span>
                <span className="trade-price">@ {trade.price}</span>
                <span className="trade-agent">by {trade.agent}</span>
                <span className="trade-status">{trade.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy Note */}
        <div className="strategy-note">
          <div className="note-icon">📋</div>
          <div className="note-content">
            <h3>Current Strategy</h3>
            <p>
              The fund is currently positioned for DeFi growth with heavy allocation in lending protocols 
              (Morpho, Aave) and yield optimization (Pendle). USDC reserve maintained at 17% for 
              opportunistic entries. <strong>Alpha</strong> has approved increasing Morpho exposure 
              after <strong>Scout's</strong> recent discovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
