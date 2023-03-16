import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProtectedRoute from 'utils/ProtectedRoute'
import Prefetch from 'features/Prefetch'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'
import Design from 'pages/Design'
import Sports from 'pages/Sports'
import TV from 'pages/TV'
import Movies from 'pages/Movies'

import UsersPage from 'features/users/UsersPage'

import NavbarLayout from 'layout/NavbarLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Prefetch />}>
            <Route element={<NavbarLayout />}>
              <Route path='/design/*' element={<Design />} />
              <Route path='/tv/*' element={<TV />} />
              <Route path='/sports/*' element={<Sports />} />
              <Route path='/movies/*' element={<Movies />} />
              <Route path='/users/*' element={<UsersPage />} />
            </Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
