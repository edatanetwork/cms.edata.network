import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'

const ProtectedRoute = () => {
  const { user } = useAuth()
  const location = useLocation()

  return user ? <Outlet /> : <Navigate to='/' state={{ from: location }} />
}

export default ProtectedRoute
