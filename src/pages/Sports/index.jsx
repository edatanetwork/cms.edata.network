import { Routes, Route } from 'react-router-dom'

import Layout from 'layout/WithNavbar'
import Home from 'pages/Sports/Home'
import Settings from 'pages/Sports/Settings'
import NotFound from 'pages/NotFound'

const Sports = () => {
  return (
    <Layout path='/sports'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/settings/*' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default Sports
