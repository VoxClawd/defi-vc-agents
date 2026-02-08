import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Stage } from './pages/Stage'
import './index.css'

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stage" element={<Stage />} />
          <Route path="/team" element={<Home />} />
          <Route path="/portfolio" element={<ComingSoon title="Portfolio" />} />
          <Route path="/insights" element={<ComingSoon title="Insights" />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

function ComingSoon({ title }: { title: string }) {
  return (
    <div style={{ 
      minHeight: '60vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>{title}</h1>
      <p style={{ color: '#71717a', fontSize: '18px' }}>Coming soon...</p>
    </div>
  )
}

export default App
