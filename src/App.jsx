import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProtectedRoute from 'utils/ProtectedRoute'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'
import Design from 'pages/Design'
import Sports from 'pages/Sports'
import TV from 'pages/TV'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/design/*' element={<Design />} />
          <Route path='/sports/*' element={<Sports />} />
          <Route path='/tv/*' element={<TV />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
