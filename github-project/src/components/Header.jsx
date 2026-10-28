import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
    { to: '/books', label: 'Books' },
]

function Header() {
  return (
    <header className="site-header">
      <nav className="site-navigation" aria-label="Main navigation">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => (isActive ? 'navigation-link active' : 'navigation-link')}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
