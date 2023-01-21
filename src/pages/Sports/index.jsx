import { Routes, Route } from 'react-router-dom'

import Layout from 'layout/WithNavbar'
import Home from 'pages/Sports/Home'
import Trash from 'pages/Sports/Trash'
import Votes from 'pages/Sports/Votes'
import Reports from 'pages/Sports/Votes'
import Submitted from 'pages/Sports/Submitted'
import Settings from 'pages/Sports/Settings'
import NotFound from 'pages/NotFound'

const Sports = () => {
  return (
    <Layout path='/sports'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trash' element={<Trash />} />
        <Route path='/votes' element={<Votes />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/submitted' element={<Submitted />} />
        <Route path='/settings/*' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default Sports
