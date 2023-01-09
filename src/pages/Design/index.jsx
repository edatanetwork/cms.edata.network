import { Routes, Route } from 'react-router-dom'

import WithNavbar from 'layout/WithNavbar'
import Home from 'pages/Design/Home'
import Settings from 'pages/Design/Settings'
import TrashPage from 'pages/Design/Trash'
import VotesPage from 'pages/Design/Votes'
import SubmittedPage from 'pages/Design/Submitted'
import ReportsPage from 'pages/Design/Reports'
import StatisticsPage from 'pages/Design/Statistics'
import NotFound from 'pages/NotFound'

const Design = () => {
  return (
    <WithNavbar path='/design'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/settings/*' element={<Settings />} />
        <Route path='/trash' element={<TrashPage />} />
        <Route path='/votes' element={<VotesPage />} />
        <Route path='/submitted' element={<SubmittedPage />} />
        <Route path='/reports' element={<ReportsPage />} />
        <Route path='/statistics' element={<StatisticsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </WithNavbar>
  )
}

export default Design
