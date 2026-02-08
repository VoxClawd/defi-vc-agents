import { Link, useLocation } from 'react-router-dom'

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <Link to="/" className="nav-logo">
              <div className="nav-logo-icon">◈</div>
              <div>
                <span className="nav-logo-text">DeFi VC</span>
                <span className="nav-logo-sub">Autonomous Fund</span>
              </div>
            </Link>
            <div className="nav-links">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
              <Link to="/stage" className={`nav-link ${isActive('/stage') ? 'active' : ''}`}>Stage</Link>
              <Link to="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`}>Team</Link>
              <Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}>Portfolio</Link>
              <Link to="/insights" className={`nav-link ${isActive('/insights') ? 'active' : ''}`}>Insights</Link>
            </div>
            <div className="nav-status">
              <div className="nav-status-dot"></div>
              <span className="nav-status-text">Live</span>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}

export default Layout
