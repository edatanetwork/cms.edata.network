import { NavLink } from 'react-router-dom'

const Link = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? 'active' : undefined)}
  >
    {label}
  </NavLink>
)

export default Link
