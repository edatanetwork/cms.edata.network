import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProtectedRoute from 'utils/ProtectedRoute'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'
import Design from 'pages/Design'
import Sports from 'pages/Sports'
import TV from 'pages/TV'
import Movies from 'pages/Movies'

import NavbarLayout from 'layout/NavbarLayout'

import TrashTable from 'features/trash/PostsTrash'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<NavbarLayout />}>
            <Route path='/design/*' element={<Design />} />
            <Route path='/tv/*' element={<TV />} />
            <Route path='/sports/*' element={<Sports />} />
            <Route path='/movies/*' element={<Movies />} />
            <Route path='trash' element={<TrashTable />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
