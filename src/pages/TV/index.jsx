import { Routes, Route } from 'react-router-dom'

import Layout from 'layout/WithNavbar'
import Settings from 'pages/TV/Settings'
import NotFound from 'pages/NotFound'

const TV = () => {
  return (
    <Layout path='/tv'>
      <Routes>
        <Route index element={'<Home />'} />
        <Route path='/settings/*' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default TV
